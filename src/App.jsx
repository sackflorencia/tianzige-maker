import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SearchBar from './components/SearchBar'
import CharactersList from './components/CharactersList'


function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    setCharacters([...characters, character]);
  }
  const onDelete = (index) => {
    const newCharacters = [...characters];
    newCharacters.splice(index, 1);
    setCharacters(newCharacters);
  }
  return (
    <>
      <SearchBar onSearch={onSearch} />
      <CharactersList characters={characters} onDelete={onDelete} />
    </>
  )
}

export default App
