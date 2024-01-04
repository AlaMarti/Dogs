import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './navbar.module.css'
import Searchbar from '../searchbar/searchbar'

const Navbar = () => {

  const [searchVisible, setSearchVisible] = useState(false)

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };






  return (
    <div className={styles.navbarCont}>
      <div className={styles.links}>
        <NavLink>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

          <Link to={"/home"} className={styles.home}> <i class="fa-solid fa-house"></i></Link>
          <Link to={"/create"} className={styles.create}> <i class="fa-solid fa-dog"></i></Link>


        </NavLink>
      </div>

      <div className={styles.barra}>
        <div onClick={toggleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        {searchVisible && (
          <div className={styles.searchBar }>
            <Searchbar></Searchbar>
          </div>
        )}
      </div>


    </div>

  )
}

export default Navbar