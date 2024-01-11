import React from 'react'
import styles from './create.module.css'


const create = () => {
  return (
    <div className={styles.Body}>
      <div className={styles.BodyForm}>
        <form action="" className={styles.form}>
          <label> Nombre: </label>

            <input type="text" name='nombre' placeholder='nombre'/>

          <label> Altura: <input type="text" name='altura' placeholder='altura minima'/><input type="text" name='altura' placeholder='altura maxima'/></label>
          <label> Peso:   <input type="text" name='peso' placeholder='Peso minimo'/><input type="text" name='peso' placeholder='peso maximo'/></label>
          <label> Años de vida:   <input type="text" name='vida' placeholder='años de vida'/></label>
          <select name='raza'>

            <option> raza 1</option>
            <option> raza 2</option>
            <option> raza 3</option>
            <option> raza 4</option>

          </select>

          <button type='button'> Agregar </button>
          



         
          


        </form>
      </div>
    </div>
  )
}

export default create