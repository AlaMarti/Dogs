import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './pagination.module.css'
import { page } from '../../components/Redux/Action/Action'


const Pagination = () => {

    const array = []
    const dispatch = useDispatch()
    const numpage = useSelector(state => state.numpage)
    const currentPage = useSelector(state => state.currentPage)


    for (let i = 0; i < numpage; i++) {
        array.push(i)

    }

    const pagination = (event) => {
        dispatch(page(event.target.name))

    }


    return (

        <div>
            <div className={style.Paginado}>

                <button name='prev' onClick={pagination}> {"<<"} </button>
                {array.map((a) => (<button className={currentPage == a ? style.BotonCurrent : style.Botones} name={a} key={a} onClick={pagination}> {a + 1} </button>))}

                {console.log("soy current", currentPage)}
                {console.log(array)}
                <button name='next' onClick={pagination}> {">>"} </button>
            </div>


        </div>


    )
}

export default Pagination