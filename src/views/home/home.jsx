import React, { useEffect } from 'react'
import Cards from '../../components/cards/cards'
import style from './home.module.css'
import { useDispatch, useSelector } from "react-redux"
import { getDog } from '../../components/Redux/Action/Action'
import Pagination from '../pagination/pagination'



const Home = () => {
  const array = []
  const dispatch = useDispatch()
  const allDogs = useSelector(state => state.allDogs)

  
  useEffect(() => {
    dispatch(getDog())

  }, [])

  return (


    <div>

      <div className={style.Contenedor}>
        <Cards info={allDogs}></Cards>
       
      </div >
      <div className={style.ContPag}>
         <Pagination />
      </div>
      
    </div>






  )
}

export default Home