import React from 'react'
import style from './details.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"

const Details = () => {

  const { id } = useParams();

  const [dog, setDogs] = useState({})

  useEffect(() => {
    axios(`http://localhost:3001/dog/${id}`).then(({ data }) => {

    console.log(data.id)

      if (data[0].id || data.id) {
        setDogs(data[0]);

      } else {
        window.alert("Can't find the detail of that dog");
      }
    });
    return setDogs({});
  }, [id]);



  return (
    <div className={style.Contenedor}>
      <div className={style.Detalles}>
        <h3> Name: <span> {dog?.name}</span> </h3>
        <h3> Id: <span> {dog?.id}</span> </h3>
        <h3> Breed group: <span>{dog?.breed_group}</span>  </h3>
        <h3> Origin: <span>{dog?.origin}</span> </h3>
        <h3> Temperaments: <span>{dog?.temperament}</span> </h3>
        <h3> Life Span <span>{dog?.life_span}</span> </h3>

      </div>
      <div className={style.Imagen}>

        <img src={dog?.image?.url || ""} alt="dog" width="60%" />
      </div>

    </div>
  )
}

export default Details