import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchColors = () => {
    return axios.get('http://localhost:4000/colors')
}

function PaginatedQueries() {
    const {isLoading, isError, error, data} = useQuery('colors', fetchColors)

    if(isLoading){
        return <h2>Loading..</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

  return (
    <>
        <div>
            {data?.data.map(color => {
                return (
                    <div key={color.id}>
                        <h2>{color.id}. {color.label}</h2>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default PaginatedQueries