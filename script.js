console.log("JS file is connected to HTML!")

const starwarsCard = document.getElementById("starwars")
const rickandmortyCard = document.getElementById("rickandmorty")
const pokemonCard = document.getElementById("pokemon")

// Star Wars (codealong)
const getStarWars = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/1/")
    // const response = await fetch("https://swapi.info/api/people/1")
    
    if (!response.ok) {
      throw new Error(`Något gick fel: ${response.status}`)
    }
    
    const data = await response.json()
    
    starwarsCard.innerHTML = `
      <p>Character name: ${data.name}</p>
    `
  } catch (error) {
    starwarsCard.innerHTML = `
      <p>Något gick fel, försök igen senare</p>
    `
    console.error(error)
  }
}

// Practice: Använd getStarWars som mall för att hämta data från Rick and Morty API eller Pokémon API. Visa karaktärens namn och bild i respektive "card".

// Rick and Morty
const getRickAndMorty = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/1")
    
    if (!response.ok) {
      throw new Error(`Något gick fel: ${response.status}`)
    }
    
    const data = await response.json()
    
    rickandmortyCard.innerHTML = `
      <p>Character name: PLACEHOLDER</p>
      <img src="PLACEHOLDER">
    `
  } catch (error) {
    rickandmortyCard.innerHTML = `
      <p>Något gick fel, försök igen senare</p>
    `
    console.error(error)
  }
}

// Pokémon
const getPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    
    if (!response.ok) {
      throw new Error(`Något gick fel: ${response.status}`)
    }
    
    const data = await response.json()
    
    pokemonCard.innerHTML = `
      <p>Character name: PLACEHOLDER</p>
      <img src="PLACEHOLDER">
    `
  } catch (error) {
    pokemonCard.innerHTML = `
      <p>Något gick fel, försök igen senare</p>
    `
    console.error(error)
  }
}

getStarWars()
getRickAndMorty()
getPokemon()
