import React, {useEffect, useState} from 'react'
import styles from './create.module.css'
import { getDog } from '../../components/Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const Create = () => {


  const validate = (form, setError, error) => {
    if(!form.nombre) setError({...error, nombre: "Nombre vacio"})
    else{
      setError({...error,nombre: ""})
  }
  }

  const [form, setForm] = useState({nombre: ""})
  const [error, setError] = useState({nombre: ""})

 
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value

    setForm({...form,[property]: value})
    validate({...form,[property]: value}, setError,error)
  }

  console.log(form)
  console.log(error)
  
  const submitHandler = (event) => {

    event.preventDefault()
    alert("Login Exitoso")
  }


  return (
    <div className={styles.Body}>
      <div className={styles.BodyForm}>
        <form action="" className={styles.form} onSubmit={submitHandler}>
          <label> Nombre:<input type="text" name='nombre' placeholder='nombre' value={form.nombre} onChange={handleChange}/></label>
          <span>{error.nombre}</span>


          <label> Altura: <input type="text" name='altura' placeholder='altura minima'/><input type="text" name='altura' placeholder='altura maxima'/></label>
          <label> Peso:   <input type="text" name='peso' placeholder='Peso minimo'/><input type="text" name='peso' placeholder='peso maximo'/></label>
          <label> Años de vida:   <input type="text" name='vida' placeholder='años de vida'/></label>
          <select name='raza'>

            <option> raza 1</option>
            <option> raza 2</option>
            <option> raza 3</option>
            <option> raza 4</option>

          </select>

          <button type='submit' className={styles.button}> Agregar </button>
          

        </form>
      </div>
    </div>
  )
}

export default Create