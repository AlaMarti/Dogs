import React from 'react'
import Card from '../card/card'
import style from './cards.module.css'




const cards = ({info}) => {
  return (
    <div className={style.Contenedor}>

        {
            info.map(p=> <Card name = {p.name} image={p.image} breed_group={p.breed_group} temperament={p.temperament} id={p.id}/>)
        }

    </div>
  )
}

export default cards