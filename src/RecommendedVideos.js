import React, { useEffect, useState } from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard'
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const RecommendedVideos = () => {
const [videos, setVideos] = useState([])


const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/trending',
        params: {
                geo: 'IN',
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
                console.log(response.data.data);
                setVideos(response.data.data)
        }).catch(function (error) {
                console.error(error);
        });
},[])
if(videos.length === 0){
        return <div className="loding">
                        <CircularProgress className='lodingBar'/>
                </div>
}
  return (
    <div className='recommendedVideos'>
      <p>Recommended</p>
      <div className="recommendedVideos__videos">
        {  
                videos.map((item,idx)=>{
                        return <VideoCard key={idx} 
                                title={item.title} 
                                image={item.thumbnail[0].url}
                                channel={item.channelTitle} 
                                timestamp={item.publishedText}
                                views={`${item.viewCount} views`}
                                channelImage={item.channelThumbnail[0].url}
                                videoId={item.videoId}
                        />
                })
        }
      </div>
    </div>
  )
}

export default RecommendedVideos
