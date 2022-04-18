import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroes = () => {
    const {isLoading, data, isError, error, isFetching, refetch} = useQuery('super-heroes', fetchSuperHeroes, {
        enabled: false
    })

    console.log(isLoading, isFetching)

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }

  return (
    <>
        <h2>RQ Super Heroes Page</h2>
        <button onClick={refetch}>Fetch heroes</button>
        {data?.data.map(hero => {
            return <div key={hero.name}>{hero.name}</div>
        })}
    </>
  )
}
