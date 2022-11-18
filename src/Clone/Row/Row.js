
import React, { useEffect, useState } from 'react'

import Card from '../card/Card'
import axios from 'axios'

import './Row.css'

function Row(props) {

    const [Movies, setMovies] = useState([])
    const getMovies = async () => {
        const response = await axios.get(props.url);
        setMovies(response.data.results)

    }


    useEffect(() => {

        getMovies();

    }, [])



    return (
        <div className='row_wrapper'>
            <h3 className='row_title'>{props.title}</h3>
            <div className="row_card">
                {
                    Movies.map((el) => {

                        return <Card title={el.title} poster={el.poster_path} />
                    })
                }


            </div>


        </div>
    )
}


export default Row