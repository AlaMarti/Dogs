import React, { useEffect } from 'react'
import Cards from '../../components/cards/cards'
import style from './home.module.css'
import{useDispatch, useSelector} from "react-redux"
import { getDog, page } from '../../components/Redux/Action/Action'


const Home = () => {

  const dispatch = useDispatch()
  const  allDogs = useSelector(state => state. allDogs) 
  useEffect(()=>{
    dispatch(getDog())

  },[])

  const pagination = (event) => {
    dispatch(page(event.target.name))

  }


  return (
    <div className={style.Contenedor}>
      <Cards info ={allDogs}></Cards>

      <div>
        <label> Paginated </label>

        <button name='prev' onClick={pagination}> {"<<"} </button>
        <button name='next' onClick={pagination}> {">>"} </button>
       
      </div>

    </div>
  )
}

export default Home