// ChateeMain.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReplySection from './ReplySection';
import LogoutButton from './LogoutButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import the CSS module
import styles from './ChateeMain.module.css';
// Import icons
import { FiPlus } from 'react-icons/fi';

const API_BASE = 'https://chateesp-cqbbbaccgvhpdmf0.canadacentral-01.azurewebsites.net';

const ChateeMain = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username) {
      setUsername(user.username);
    } else {
      navigate('/login');
    }
    fetchPosts();
    // eslint-disable-next-line
  }, [navigate]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE}/api/posts`);
      // Sort posts by creation date, newest first
      const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setPosts(sortedPosts);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      setPosts([]);
      toast.error('Failed to load posts');
    }
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) {
      toast.warn('Title and content cannot be empty.');
      return;
    }
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      await axios.post(`${API_BASE}/api/addPost`, {
        title: postTitle,
        content: postContent,
        username: user?.username,
      });
      setShowModal(false);
      setPostTitle('');
      setPostContent('');
      toast.success('Post created successfully!');
      fetchPosts();
    } catch (err) {
      console.error('Post creation failed:', err);
      toast.error(err.response?.data?.message || 'Failed to create post');
    }
  };

  const toggleExpand = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.content?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className={styles.pageWrapper}>
        <header className={styles.header}>
          <h1 className={styles.branding}>Chatee</h1>
          <div>
            Welcome, {username}! <LogoutButton />
          </div>
        </header>

        <div className={styles.searchContainer}>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search discussions by title or content..."
            className={styles.searchInput}
          />
        </div>

        <main className={styles.mainContent}>
          <div className={styles.discussionsHeader}>
            <h2>All Discussions</h2>
            <button onClick={() => setShowModal(true)} className={styles.createPostBtn}>
              <FiPlus /> Create Post
            </button>
          </div>

          {posts.length > 0 && filteredPosts.length === 0 && (
             <p>No posts match your search.</p>
          )}

          {posts.length === 0 ? (
            <p>No posts yet. Be the first to start a discussion!</p>
          ) : (
            filteredPosts.map((post) => (
              <div key={post.id} className={styles.post}>
                <h4 className={styles.postTitle}>{post.title}</h4>
                <div className={styles.postMeta}>Posted by: {post.username}</div>
                <div
                  className={`${styles.postContent} ${
                    expandedPosts[post.id] ? styles.postContentExpanded : ''
                  }`}
                >
                  {post.content}
                </div>
                {post.content.length > 120 && (
                  <button onClick={() => toggleExpand(post.id)} className={styles.readMoreBtn}>
                    {expandedPosts[post.id] ? 'Show less' : 'Read more'}
                  </button>
                )}
                <ReplySection postId={post.id} />
              </div>
            ))
          )}
        </main>

        {showModal && (
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h3 className={styles.modalHeader}>Create a New Post</h3>
              <form onSubmit={handlePost}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    required
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    placeholder="Compose your post..."
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    required
                    className={styles.formTextarea}
                  />
                </div>
                <div className={styles.modalActions}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className={styles.cancelBtn}
                  >
                    Cancel
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChateeMain;