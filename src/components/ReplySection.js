import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'https://blog-bcakend-az-1.onrender.com/';

const ReplySection = ({ postId }) => {
  const [replies, setReplies] = useState([]);
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    fetchReplies();
    // eslint-disable-next-line
  }, [postId]);

  const fetchReplies = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/posts/${postId}/replies`);
      setReplies(res.data);
    } catch (error) {
      console.error('Error fetching replies:', error);
    }
  };

  const handleReply = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    const newReply = {
      content: replyContent,
      username: user?.username,
    };

    try {
      await axios.post(`${API_BASE}/api/posts/${postId}/replies`, newReply);
      fetchReplies();
      setReplyContent('');
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  return (
    <div className="reply-section" style={{ fontFamily: 'Arial, sans-serif', marginTop: '1rem' }}>
      <form onSubmit={handleReply} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        <input
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Write a reply..."
          required
          style={{
            flex: 1,
            marginRight: '0.5rem',
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '0.9rem',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#4f8cff',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          Reply
        </button>
      </form>
      <div
        style={{
          maxHeight: '200px',
          overflowY: 'auto',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        {replies.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
            No replies yet. Be the first to reply!
          </p>
        ) : (
          replies.map((r) => (
            <div
              key={r.id}
              style={{
                marginBottom: '0.5rem',
                padding: '0.5rem',
                backgroundColor: '#ffffff',
                borderRadius: '4px',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span style={{ fontWeight: 'bold', color: '#4f8cff', marginBottom: '0.25rem' }}>
                {r.username}
              </span>
              <span style={{ fontSize: '0.9rem', color: '#333' }}>{r.content}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReplySection;