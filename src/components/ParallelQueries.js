import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeros = () => {
    return axios.get(`http://localhost:4000/superheroes`)
}

const fetchProfession = () => {
    return axios.get(`http://localhost:4000/profession`)
}

function ParallelQueries() {
    const {data: superHeroes} = useQuery('super-heroes', fetchSuperHeros)
    const {data: profession} = useQuery('profession', fetchProfession)

    console.log(superHeroes, profession)
  return (
    <div>ParallelQueries</div>
  )
}

export default ParallelQueries