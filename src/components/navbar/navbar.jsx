import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './navbar.module.css'
import Searchbar from '../searchbar/searchbar'

const navbar = () => {
  return (
    <div className={styles.navbarCont}>
      <div className={styles.links}>
        <NavLink>
          <Link to={"/home"} className={styles.home}> Home </Link>
          <Link to={"/create"} className={styles.create}> Create </Link>
        </NavLink>
      </div>
      <div className={styles.barra}>
        <Searchbar/>
      </div>
        
    </div>
  )
}

export default navbar