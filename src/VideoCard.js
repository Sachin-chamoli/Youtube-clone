import { Avatar } from '@mui/material'
import React from 'react'
import "./videoCard.css"
import {  NavLink } from 'react-router-dom'

const VideoCard = ({ image, title, channel, views, timestamp, channelImage,videoId }) => {
  return (
    <div className='videoCard'>
      <NavLink to={`/video/${videoId}`} className="link">
      <img src={image} alt="thumbnail" className='videoCard__thumbnail' />
      
      <div className="videoCard_info">
        <Avatar className='videoCard_avatar' alt={channel} src={channelImage}/>
        <div >
            <p className='videoCard__title'>{title}</p>
            <p className="videoCard__text">{channel}</p>
            <p className="videoCard__text">
                {views} ● {timestamp}
            </p>
        </div>
      </div>
      </NavLink>
    </div>
  )
}

export default VideoCard
