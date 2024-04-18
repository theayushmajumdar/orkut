import React, { createContext, useReducer, useEffect } from 'react';
import blogReducer from './blogReducer';
const initialState = {
  posts: [],
  showForm: false,
};
export const BlogContext = createContext(initialState);
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  useEffect(() => {
    dispatch({ type: 'INITIALIZE' });
  }, []);
  return (
    <BlogContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};