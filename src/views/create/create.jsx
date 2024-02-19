import React, { useEffect, useState } from 'react'
import styles from './create.module.css'
import { getRaza } from '../../components/Redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux'


const Create = () => {


  const allRaza = useSelector(state => state.allRaza)
  const dispatch = useDispatch()

  let arrayRaza = []
  let Narray2 = []

  for (let i = 0; i < allRaza.length; i++) {
    arrayRaza.push(allRaza[i].breed_group)
  }


  function repetidos(arrayRaza) {
    return arrayRaza.filter((e, i) => {
      return arrayRaza.indexOf(e) === i;
    })
  }

  let Narray = repetidos(arrayRaza)

  for (let a = 0; a < Narray.length; a++) {
    if (Narray[a] !== undefined && Narray[a] !== "") {
      Narray2.push(Narray[a])
    }
  }


  useEffect(() => {
    dispatch(getRaza())

  }, [])

  //----------------------------------------------------------------------


  const validate = (form, setError, error) => {

    // if (!form.nombre) setError({ ...error, nombre: "Nombre vacio" })
    // else {
    //   setError({ ...error, nombre: "" })
    // }

    // if (!form.alturaMin) setError({ ...error, alturaMin: "Altura vacia" })
    // else {
    //   setError({ ...error, alturaMin: "" })
    // }

    // if (!form.alturaMax) setError({ ...error, alturaMax: "Altura vacia" })
    // else {
    //   setError({ ...error, alturaMax: "" })
    // }

    let newErrors = {}; // Objeto temporal para acumular los errores

    if (!form.nombre) newErrors = { ...newErrors, nombre: "Nombre vacio" };
    else newErrors = { ...newErrors, nombre: "" };
  
    if (!form.alturaMin) newErrors = { ...newErrors, alturaMin: "Altura vacia" };
    else newErrors = { ...newErrors, alturaMin: "" };

    setError({ ...error, ...newErrors });
  


  }

  const [form, setForm] = useState({
    nombre: "",
    alturaMin: "",
    alturaMax: ""
  })
  const [error, setError] = useState({
    nombre: "",
    alturaMin: "",
    alturaMax: ""
  })


  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value

    setForm({ ...form, [property]: value })
    validate({ ...form, [property]: value }, setError, error)
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
          <label> Nombre:<input type="text" name='nombre' placeholder='nombre' value={form.nombre} onChange={handleChange} /></label>
          <span>{error.nombre}</span>


          <label> Altura: <input type="text" name='alturaMin' placeholder='altura minima' value={form.alturaMin} onChange={handleChange} /><input type="text" name='alturaMax' placeholder='altura maxima' value={form.alturaMax} onChange={handleChange} /></label>
          <label> Peso:   <input type="text" name='peso' placeholder='Peso minimo' /><input type="text" name='peso' placeholder='peso maximo' /></label>
          <label> Años de vida:   <input type="text" name='vida' placeholder='años de vida' /></label>
          <select name='raza'>

            <option> Selecione </option>
            {Narray2.map((raza, index) => (
              <option key={index}>{raza}</option>
            ))}


          </select>

          <button type='submit' className={styles.button}> Agregar </button>


        </form>
      </div>
    </div>
  )
}

export default Create