const blogReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE':
      const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
      return { ...state, posts: storedPosts };
    case 'ADD_POST':
      const newPost = {
        id: Date.now(),
        title: action.post.title,
        subtitle: action.post.subtitle,
        content: action.post.content,
      };
      const updatedPosts = [...state.posts, newPost];
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      return {
        ...state,
        posts: updatedPosts,
      };
      case 'DELETE_POST':
        const updatedPostsAfterDelete = state.posts.filter((post) => post && post.id !== action.id);
        localStorage.setItem('posts', JSON.stringify(updatedPostsAfterDelete));
        return {
          ...state,
          posts: updatedPostsAfterDelete,
        };
      
    case 'TOGGLE_FORM':
      return {
        ...state,
        showForm: !state.showForm,
      };
    default:
      return state;
  }
};
export default blogReducer;