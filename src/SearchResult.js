import { Avatar } from '@mui/material'
import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./SearchResult.css"

const SearchResult = ({item}) => {
    if(item.type === "video" && item.viewCount)
  return (
    <div >
         <NavLink to={`/video/${item.videoId}`} className='searchResults'>
            <div className="thumbnail">
                <img src={item.thumbnail[0].url} alt="" />
            </div>
            <div className="info">
                <p className='title' >{item.title}</p>
                <p className='views-Time'>{`${item.viewCount} views • ${item.publishedText}`}</p> 
                { 
                    item.channelThumbnail &&
                      <div className='channel'>
                        <Avatar className='channelImg' alt="Channel" src={ item.channelThumbnail[0].url} /> 
                        <p>{item.channelTitle}</p>
                      </div>
                }
                <p className='desc'>{item.description}</p>
            </div>
          </NavLink>
    </div>
  )
}

export default SearchResult
