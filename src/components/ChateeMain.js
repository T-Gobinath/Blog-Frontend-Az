import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReplySection from './ReplySection';
import LogoutButton from './LogoutButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE = 'https://bloger-b7ayaeawb0cpf3e5.canadacentral-01.azurewebsites.net';

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
      setPosts(response.data);
    } catch (err) {
      console.error('Failed to fetch posts:', err);
      setPosts([]);
      toast.error('Failed to load posts');
    }
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      await axios.post(`${API_BASE}/api/addPost`, {
        title: postTitle,
        content: postContent,
        username: user?.username
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
    setExpandedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0eafc 100%)',
        padding: 0,
        margin: 0
      }}>
        <header style={{
          width: '100%',
          background: '#4f8cff',
          color: '#fff',
          padding: '1rem 2rem',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          Welcome, {username}! <LogoutButton />
        </header>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '2rem'
        }}>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search discussions..."
            style={{
              width: '60%',
              padding: '0.8rem 1rem',
              borderRadius: '30px',
              border: '1px solid #b5c9f7',
              fontSize: '1.1rem',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(79,140,255,0.07)'
            }}
          />
        </div>

        <div style={{
          maxWidth: 800,
          margin: '2rem auto',
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 2px 16px rgba(79,140,255,0.06)',
          padding: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
            <button
              onClick={() => setShowModal(true)}
              style={{
                backgroundColor: '#4f8cff',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              + Post
            </button>
          </div>

          <h2 style={{ color: '#4f8cff' }}>All Discussions</h2>
          {posts.length === 0 ? (
            <p style={{ color: '#888' }}>No posts yet. Be the first to post!</p>
          ) : (
            posts
              .filter(post =>
                post.title?.toLowerCase().includes(search.toLowerCase()) ||
                post.content?.toLowerCase().includes(search.toLowerCase())
              )
              .map(post => (
                <div key={post.id} style={{
                  border: '1px solid #e0eafc',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  background: '#f8fafc'
                }}>
                  <h4 style={{ margin: 0, color: '#4f8cff' }}>{post.title}</h4>
                  <div
                    style={
                      expandedPosts[post.id]
                        ? { color: '#333', margin: '0.5rem 0' }
                        : {
                          color: '#333',
                          margin: '0.5rem 0',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }
                    }
                  >
                    {post.content}
                  </div>
                  {post.content.length > 120 && (
                    <button
                      onClick={() => toggleExpand(post.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#4f8cff',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: '1rem'
                      }}
                    >
                      {expandedPosts[post.id] ? 'Show less' : 'Read more'}
                    </button>
                  )}
                  <div style={{ fontSize: '0.95rem', color: '#888', marginBottom: '1rem' }}>Posted by: {post.username}</div>
                  <ReplySection postId={post.id} />
                </div>
              ))
          )}
        </div>

        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2.5rem',
              minWidth: 600,
              minHeight: 400,
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              position: 'relative'
            }}>
              <h3 style={{ marginBottom: '1.5rem', color: '#4f8cff', fontSize: '1.5rem' }}>Create Post</h3>
              <form onSubmit={handlePost}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={postTitle}
                    onChange={e => setPostTitle(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #b5c9f7',
                      fontSize: '1.15rem'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <textarea
                    placeholder="Compose your post..."
                    value={postContent}
                    onChange={e => setPostContent(e.target.value)}
                    required
                    rows={10}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #b5c9f7',
                      fontSize: '1.1rem',
                      resize: 'vertical',
                      minHeight: 180
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #ccc',
                      background: 'white',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#4f8cff',
                      color: 'white',
                      cursor: 'pointer'
                    }}
                  >
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