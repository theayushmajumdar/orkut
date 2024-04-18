import React from 'react';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';
import './styles.css';
function App() {
  return (
    <div className="app">
      <Header />
      <NewsFeed />
      <Footer />
    </div>
  );
}

export default App;