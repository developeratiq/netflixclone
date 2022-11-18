import React, { useEffect, useState } from 'react'
import './contData.css'
import axios from 'axios';
import RowData from '../Constraints/Url';
import Row from '../Row/Row';


function ContData() {
  const [Movies, setMovies] = useState([])
// const getMovies =async ()=>{
//  const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
//    params:{
//     api_key:"73669e30044b8e5c2b9314d88a6e1dc6"
//    }

//  } )
//  setMovies(response.data.results)

// }


//    useEffect(() => {
      
//    getMovies();
   
//    }, [])
   
// console.log(Movies)

  return (
    <div className='content-wrapper'>

      {
        RowData.map((el)=>{
          return   <Row title = {el.title} url = {el.url}/>
        })
      }

    </div>
  )
}

export default ContData



/// apikey = 73669e30044b8e5c2b9314d88a6e1dc6