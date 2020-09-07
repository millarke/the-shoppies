import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import NominationList from './components/NominationList';
import SearchResultList from './components/SearchResultList'
import NavBar from './components/NavBar'

const fakeResults = [
  {title: 'Harry Potter', year: 2001, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
  {title: 'Pingu', year: 2008, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
  {title: 'Lordo Rings', year: 2001, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
  {title: 'Frozen', year: 2012, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
  {title: 'Scoobs', year: 2020, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' }
]

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <NominationList />
      <SearchBar />
      <SearchResultList results={fakeResults}></SearchResultList>
    </div>
  );
}

export default App;
