import React, { useState } from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import { Checkroom, Code,  FaceRetouchingNatural, FitnessCenter, Games, Home,  MusicNote,   School,   Sports,   TheaterComedy,  } from '@mui/icons-material';

const categories = [
  {Icon: Home, title:"Home"},
  {Icon : Code, title : "Coding"},
  {Icon : Games, title : "Gaming"},
  {Icon : School, title : "School" },
  {Icon : MusicNote, title : "Music"},
  {Icon : Sports , title : "Sports"},
  {Icon: Checkroom , title:"Fashion"},
  {Icon : FaceRetouchingNatural , title:"Beauty"},
  {Icon : FitnessCenter, title: "Gym"},
  {Icon : TheaterComedy , title: "Comedy"},
];
const Sidebar = () => {
const [selected , setSelected] = useState("Home")
  return (
    <div className='sidebar'>
        {
          categories.map((category) =>{
            return  <SidebarRow key={category.title}  Icon={category.Icon} title={category.title} selected={selected} setSelected={setSelected}/>
          })
        }
    </div>
  )
}

export default Sidebar
