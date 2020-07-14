import React from 'react';
import './App.css';
import Navigation from '../navigation/Navigation';
import NewArticleButton from '../new-article-button/NewArticleButton';
import Articles from '../articles/articles';

function App() {
  return (
    <div>
        <Navigation />
        <NewArticleButton />
        <Articles />
    </div> 
  );
}

export default App;
