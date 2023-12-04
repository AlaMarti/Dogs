import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Card = ({ id, name, image, breed_group, temperament }) => {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (

    <div className={`${style.Contenedor} ${flipped ? style.Flipped : ''}`} onClick={handleClick}>
      <div className={style.Front}>
        <h2>{name}</h2>

        <div className={style.imagen}>
          <img src={image} alt="dog" width='100%' />
        </div>
      </div>


      <div className={style.Back}>
    
        <Link to={`/details/${id}`}> <p>Details</p></Link>
        <div className={style.Detalles}>
          <h2>Breed Group</h2>
          <li>{breed_group}</li>
          <h2>Temperaments</h2>
          <li>{temperament}</li>
        </div>
        

      </div>
    </div>

  )
}

export default Card