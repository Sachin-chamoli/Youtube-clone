import React, { useState } from 'react'
import "./Header.css"
import { Avatar } from '@mui/material';
import { Search, Menu, VideoCall, Apps, Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch , setInputSearch] = useState('');

  return (
    <div className='header'>
      <div className="header__left">
        <Menu/>
        <Link to="/">
          <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
        </Link>
      </div>

      <div className="header__input">
        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' type="text" />
        <Link to={`/search/${inputSearch }`}>
          <div className='header__inputButton'>
          <Search />
          </div>
        </Link>
      </div>

      {/* <div className="header__icons">
        <VideoCall className='header__icon'/>
        <Apps className='header__icon'/>
        <Notifications className='header__icon'/>
        <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
      </div> */}
    </div>
  )
}

export default Header
