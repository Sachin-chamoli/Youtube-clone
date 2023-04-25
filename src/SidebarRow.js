import React, { useState } from 'react'
import "./SidebarRow.css"
import { useNavigate } from 'react-router-dom'

  const SidebarRow = ({ Icon ,title,selected, setSelected }) => {
  const navigate = useNavigate();

    const handleClick = (title) =>{
      setSelected(title);
      if(title === "Home"){
        navigate("/")
      }
      else
      navigate(`/search/${title}`)
    }
  return (
    <div onClick={() => handleClick(title)} className={`${selected === title ? "sidebarRow selected" : "sidebarRow"}`}>
        <Icon className="sidebarRow__icon" />
      <h2 className='sidebarRow__title' >{title}</h2>
    </div>
  )
}

export default SidebarRow
