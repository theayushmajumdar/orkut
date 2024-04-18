import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import CreatePost from './CreatePost';

function Header() {
  const { showForm, dispatch } = useContext(BlogContext);

  const toggleForm = () => {
    dispatch({ type: 'TOGGLE_FORM' });
  };

  return (
    <header>
      <h1>Orkut - The Social Media</h1>
      {!showForm && <button onClick={toggleForm}>Create Post</button>}
      {showForm && (
        <>
          <button onClick={toggleForm}>Home</button>
          <CreatePost />
        </>
      )}
    </header>
  );
}

export default Header;