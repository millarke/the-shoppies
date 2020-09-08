import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import SearchBar from './components/SearchBar';
import NominationList from './components/NominationList';
import SearchResultList from './components/SearchResultList';
import NavBar from './components/NavBar';

require('dotenv').config({ debug: process.env.DEBUG });

// const fakeResults = [
//   {title: 'Harry Potter', year: 2001, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Pingu', year: 2008, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Lordo Rings', year: 2001, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Frozen', year: 2012, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Scoobs', year: 2020, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' }
// ]

// const fakeNominations = [
//   {title: 'Harry Potter', year: 2001, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Pingu', year: 2008, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Lordo Rings', year: 2001, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Frozen', year: 2012, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' },
//   {title: 'Scoobs', year: 2020, poster: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg' }
// ]

function App() {
  
  console.log('test', process.env.OMDB_API_KEY)

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNomination] = useState([]);

  const nominationHandler = function(newNom) {
    setNomination([...nominations, newNom])
  }

  useEffect(() => {
    // axios.get(`http://www.omdbapi.com/?s=${term}&apikey=${process.env.OMDB_API_KEY}&type=movie`)
    axios.get(`http://www.omdbapi.com/?s=${term}&apikey=${process.env.OMDB_API_KEY}&type=movie`)
      .then(function(response) {
        if (response.data.Response === 'True') {
          setResults(response.data.Search)
        }
      }
      // .catch(function (error) {
      //   console.log(error);
      // })
  )}, [term])

  return (
    <div className="App">
      <NavBar></NavBar>
      <NominationList nominations={nominations} />
      <SearchBar onSearch={term => setTerm(term)} />
      {console.log(results)}
      <SearchResultList results={results} nominationHandler={nominationHandler} nominations={nominations} ></SearchResultList>
    </div>
  );
}

export default App;
