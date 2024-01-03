import React, { useEffect } from 'react'
import Cards from '../../components/cards/cards'
import style from './home.module.css'
import{useDispatch, useSelector} from "react-redux"
import { getDog, page } from '../../components/Redux/Action/Action'


const Home = () => {
  const array = []
  const dispatch = useDispatch()
  const allDogs = useSelector(state => state. allDogs) 
  useEffect(()=>{
    dispatch(getDog())

  },[])

  const numpage = useSelector(state=> state.numpage )
  const currentPage = useSelector(state => state.currentPage) 


  for(let i = 0 ; i<numpage; i++){
    array.push(i)

  }



  const pagination = (event) => {
    dispatch(page(event.target.name))

  }


  return (
    <div className={style.Contenedor}>

      {console.log("soy alldogs", allDogs)}
      <Cards info ={allDogs}></Cards>

      <div>
        <label> Paginated </label>

        <button name='prev' onClick={pagination}> {"<<"} </button>
        {array.map((a) => (<button className={currentPage === a ? style.BotonCurrent : style.Botones} name={a} key={a} onClick={pagination}> {a + 1} </button>))}

        <button name='next' onClick={pagination}> {">>"} </button>

      
       
      </div>

    </div>
  )
}

export default Home