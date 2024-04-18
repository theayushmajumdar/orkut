import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

function Post({ post }) {
  const { dispatch } = useContext(BlogContext);

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_POST',
      id: post.id,
    });
  };
  if (!post) {
    return null;
  }

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <h3>{post.subtitle}</h3>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Post;