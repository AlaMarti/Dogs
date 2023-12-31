import React, { useEffect, useState } from 'react'
import Cards from '../../components/cards/cards'
import style from './home.module.css'
import{useDispatch, useSelector} from "react-redux"
import { getDog, page } from '../../components/Redux/Action/Action'
import Pagination from '../pagination/pagination'
import { all } from 'axios'


const Home = () => {

  const dispatch = useDispatch()
  const  allDogs = useSelector(state => state. allDogs) 
  useEffect(()=>{
    dispatch(getDog())

  },[])

  const totalDogs = allDogs.length

  console.log("estoy afuera",  totalDogs)
  const [dogs, setDogs] = useState([]);
  const [dogsPerPage, setdogPerPage] = useState(8);
  const [currentPage, setcurrentPage] = useState(1); 

  const pagination = (event) => {
    dispatch(page(event.target.name))

  }


  return (
    <div className={style.Contenedor}>

      {console.log("soy alldogs", allDogs.length)}
      <Cards info ={allDogs}></Cards>

      <div>
        <Pagination dogsPerPage={dogsPerPage} currentPage={currentPage} setcurrentPage={setcurrentPage} />
      </div>

      {/* <div>
        <label> Paginated </label>

        <button name='prev' onClick={pagination}> {"<<"} </button>
        <button name='next' onClick={pagination}> {">>"} </button>

        <Pagination/>
      
       
      </div> */}

    </div>
  )
}

export default Home