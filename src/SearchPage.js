import React, { useEffect, useState } from 'react'
import "./Searchpage.css"
import { TuneOutlined } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SearchResult from './SearchResult'
import { CircularProgress } from '@mui/material'

const SearchPage = () => {
  const searchTerm = useParams();
  const [results, setResults] = useState([])

  const options = {
    method: 'GET',
    url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
    params: {
      query: searchTerm.searchTerm,
      geo: 'US',
      lang: 'en'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'a6be8ba23amsh845df94b9003176p173879jsnb3fcbe6ba58d',
      'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    }
  };
  
  useEffect(()=>{
    axios.request(options).then(function (response) {
      setResults(response.data.data)
  }).catch(function (error) {
      console.error(error);
  });
  },[searchTerm])

  
  if(results.length === 0){
    return <div className="search__loading">
      <CircularProgress className='search__loadingBar'/>
    </div>
  }
  return (
    <div className='searchpage'>
      <div className="searchPage__filter">
        <TuneOutlined/>
        <h2>Filter</h2>
      </div>
      <hr />
      <div>
        {
          results.map((item, idx)=>{
            return <SearchResult key={idx} item={item} url={item.channelThumbnail}/>
          })
        }
      </div>
    </div>
  )
}

export default SearchPage
