import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import Post from './Post';

function NewsFeed() {
  const { posts } = useContext(BlogContext);

  return (
    <div className="news-feed">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default NewsFeed;