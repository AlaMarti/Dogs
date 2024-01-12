import React, {useEffect} from 'react'
import styles from './create.module.css'
import { getDog } from '../../components/Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'




const Create = () => {

  

const response = axios.get("http://localhost:3001/dog")


  return (
    <div className={styles.Body}>
      <div className={styles.BodyForm}>
        <form action="" className={styles.form}>
          <label> Nombre:<input type="text" name='nombre' placeholder='nombre'/></label>


          <label> Altura: <input type="text" name='altura' placeholder='altura minima'/><input type="text" name='altura' placeholder='altura maxima'/></label>
          <label> Peso:   <input type="text" name='peso' placeholder='Peso minimo'/><input type="text" name='peso' placeholder='peso maximo'/></label>
          <label> Años de vida:   <input type="text" name='vida' placeholder='años de vida'/></label>
          <select name='raza'>

            <option> raza 1</option>
            <option> raza 2</option>
            <option> raza 3</option>
            <option> raza 4</option>

          </select>

          <button type='button' className={styles.button}> Agregar </button>
          

        </form>
      </div>
    </div>
  )
}

export default Create