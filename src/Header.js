import React, { useState } from 'react'
import "./Header.css"
import { Search, } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [inputSearch , setInputSearch] = useState('');

  const navigate = useNavigate();

  const handleEnterKey = (event) =>{
    if (event.key === "Enter") {
      event.preventDefault();
      navigate(`/search/${inputSearch }`);
    }
  }
  return (
    <div className='header'>
      <div className="header__left">

        <Link to="/">
          <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
        </Link>
      </div>

      <div className="header__input">
        <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' type="text"  onKeyDown={(e) => handleEnterKey(e)}/>
        <Link to={`/search/${inputSearch }`}>
          <div type="submit" className='header__inputButton' >
            <Search />
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header
