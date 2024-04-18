import React, { useState, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const { dispatch } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_POST',
      post: { title, subtitle, content },
    });
    setTitle('');
    setSubtitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">POST</button>
    </form>
  );
}

export default CreatePost;