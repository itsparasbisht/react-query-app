import React from 'react'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

export const RQSuperHeroes = () => {
    const onSuccess = (data) => {
        console.log("success", data)
    }
    
    const onError = (error) => {
        console.log("error", error)
    }

    const {isLoading, data, isError, error, isFetching, refetch} = useSuperHeroesData(onSuccess, onError)

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

        {/* {data?.data.map(hero => {
            return <div key={hero.name}>{hero.name}</div>
        })} */}
        
        {
            data.map(heroName => {
                return <div key={heroName}>{heroName}</div>
            })
        }
    </>
  )
}
