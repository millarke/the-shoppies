import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import SearchBar from './components/SearchBar';
import NominationList from './components/NominationList';
import SearchResultList from './components/SearchResultList';
import NavBar from './components/NavBar';

require('dotenv').config({ debug: process.env.DEBUG });

const max_noms = 5;

function App() {
  
  console.log('test', process.env.OMDB_API_KEY)

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [nominations, setNomination] = useState([]);

  const nominationHandler = function(newNom) {
    if (nominations.length < max_noms) {
      setNomination([...nominations, newNom])
    }
  }

  const nominationRemove = function(nomId) {
    const noms = nominations.filter(nom => nom.id !== nomId)
    setNomination(noms)
  }

  const isMovieNommed = function(nomId) {
    const nom = nominations.filter(nom => nom.id === nomId)
    return nom.length > 0
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
      <NominationList nominationRemove={nominationRemove} nominations={nominations} />
      <SearchBar onSearch={term => setTerm(term)} />
      {console.log(results)}
      <SearchResultList results={results} isMovieNommed={isMovieNommed} nominationHandler={nominationHandler} nominations={nominations} ></SearchResultList>
    </div>
  );
}

export default App;
