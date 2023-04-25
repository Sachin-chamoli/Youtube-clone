import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import RelatedVideos from './RelatedVideos';
import "./VideoDetail.css"

const VideoDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState('')
    

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/videos',
  params: {part: 'contentDetails,snippet,statistics', id: id},
  headers: {
    'X-RapidAPI-Key': 'a6be8ba23amsh845df94b9003176p173879jsnb3fcbe6ba58d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

useEffect(()=>{

    axios.request(options).then(function (response) {
        
        setDetails(response.data.items)
    }).catch(function (error) {
        console.error(error);
    });
},[id])

{console.log("details=", details)}
  return (
    <div className='Details'>
      <div className='Video'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
        <p className='videoTitle'>{details[0]?.snippet.title}</p>
        <p>{details[0]?.snippet.channelTitle}</p>
        </div>
        <div className='RelatedVideos'>
    <RelatedVideos id={id}/>
    </div>
    </div>
  )
}

export default VideoDetail
