import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';

const RelatedVideos = ({id}) => {
const [videos, setVideos] = useState([])

const options = {
  method: 'GET',
  url: 'https://youtube-v3-alternative.p.rapidapi.com/related',
  params: {
    id: id,
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
    async  function getdata(){
        try {
            const response = await axios.request(options);
            console.log("related=",response.data);
            setVideos(response.data.data)

        } catch (error) {
            console.error(error);
        }

    }
getdata();
},[])

  return (
    <div>
      {
        videos?.map((item,idx)=>{
          return <VideoCard key={idx} 
                    title={item.title} 
                    image={item.thumbnail[1].url}
                    channel={item.channelTitle} 
                    timestamp={item.publishedText}
                    views={`${item.viewCount} views`}
                    channelImage={item.authorThumbnail && item.authorThumbnail[0].url}
                    videoId={item.videoId}
                  />                       
                })
        }
    </div>
  )
}

export default RelatedVideos
