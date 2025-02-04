import './Blog.css';
import { useState, useEffect } from 'react';
import { createBucketClient } from "@cosmicjs/sdk";
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const cosmic = createBucketClient({
  bucketSlug: "traveler-tours-production",
  readKey: "0vZDCFtrCPGh5klDhXiGez9OQk80xkEPyH6KnCVgCXgEkbjDZT",
});

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await cosmic.objects.find({ "type": "posts" })
          .limit(10)
          .props("slug,title,metadata,type")
          .depth(1);
        setPosts(response.objects);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="blog">
      <div className="blog-overlay"></div> {/* Mueve el overlay aquí */}
      <h1>{t('Blog')}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <div className="card" onClick={() => handleOpenModal(post)}>
              <img src={post.metadata.hero.imgix_url} alt={post.metadata.hero.imgix_url} className="full-width-image" />
              <h2>{post.title}</h2>
              <p>{post.metadata.description}</p>
            </div>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div className="modal2 show" onClick={handleCloseModal}>
          <div className="modal-dialog2 modal-dialog-centered">
            <div className="modal-content2">
              <div className="modal-header2">
                <h1 className="modal-title">{selectedPost.title}</h1>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body2">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.metadata.content }} />
              </div>
              <div className="modal-footer2">
                <Button variant="contained" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Modal({ post, onClose }) {
  return (
    <div className="modal2">
      <div className="modal-content2">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.metadata.content }} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    metadata: PropTypes.shape({
      content: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Blog;