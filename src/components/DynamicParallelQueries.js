import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

function DynamicParallelQueries({heroIDs}) {
    const queryResults = useQueries(
        heroIDs.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            }
        })
    )

    console.log(queryResults)
  return (
    <div>DynamicParallelQueries</div>
  )
}

export default DynamicParallelQueries