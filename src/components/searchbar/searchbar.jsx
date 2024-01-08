// import React from 'react'
// import styles from './searchbar.module.css'
// import axios from "axios"
// import { useState } from 'react'
// import { useNavigate } from "react-router-dom";
// import { useEffect, useRef } from 'react';



// const Searchbar = () => {

//   const [searchResults, setSearchResults] = useState([]);

//   const [name, setName] = useState("");
//   const [showResults, setShowResults] = useState(false);
//   const navigate = useNavigate();



//   const resultsRef = useRef(null);

//   useEffect(() => {
//     // Agregamos un event listener para detectar clics fuera del componente
//     const handleClickOutside = (event) => {
//       if (resultsRef.current && !resultsRef.current.contains(event.target)) {
//         setShowResults(false);
//       }
//     };

//     // Agregamos el event listener al montar el componente
//     document.addEventListener("click", handleClickOutside);

//     // Limpiamos el event listener al desmontar el componente
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);


//   const onSearch = async (letter) => {
//     try{
//       const response = await axios.get("http://localhost:3001/dog",{
//         params:{
//           letter: letter,
//         },

//       });

//       const dogs = response.data

//       console.log("Soy dog",  dogs)


//     setSearchResults(dogs);

//     } catch (error) {

//       alert("An error occurred while searching for the dog.");

//     }
//   };

//   const handleChangeSearch = (event) => {
//     const value = event.target.value;
//     setName(value);
//     onSearch(value);
//     setShowResults(true); // Mostrar la lista de resultados cuando se ingresa algo en la búsqueda
//   };

//   console.log(searchResults)

//   const handleItemClick = (id) => {
//     navigate(`/details/${id}`);
//     setName("")
//     setShowResults(false); // Ocultar la lista de resultados cuando se hace clic en un país
//   };

  
//   const handleKeyDown = (event) => {
//     if (event.key === "Escape") {
//       setShowResults(false); // Ocultar la lista de resultados al presionar "Escape"
//     }
//   };

//   return (


//     <div className={styles.searchBar}>
//       <input
//         className={styles.inputSearchBar}
//         placeholder="Search dogs"
//         type="search"
//         onChange={handleChangeSearch}
//         value={name}
//         onKeyDown={handleKeyDown} // Escuchar el evento "onKeyDown" para la tecla "Escape"
//       />

//       {showResults && searchResults && searchResults.length > 0 && (
//         <div className={styles.resultsContainer} ref={resultsRef}>
//           <ul className={styles.resultsList}>
//             {searchResults.map((dog) => (
//               <li
//                 key={dog.id}
//                 className={styles.resultItem}
//                 onClick={() => handleItemClick(dog.id)}
//               >
//                 <img
//                   src={dog.image} // Supongamos que la propiedad para la imagen es "flag"
//                   className={styles.flagImage}
//                 />
//                 <span className={styles.countryName}>{dog.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>

//   )
// }

// export default Searchbar



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import styles from './searchbar.module.css';

// const Searchbar = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [name, setName] = useState('');
//   const [showResults, setShowResults] = useState(false);
//   const navigate = useNavigate();
//   const resultsRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (resultsRef.current && !resultsRef.current.contains(event.target)) {
//         setShowResults(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const onSearch = async (searchTerm) => {
//     try {
//       const response = await axios.get('http://localhost:3001/dog', {
//         params: {
//           name: searchTerm,
//         },
//       });

//       const dogs = response.data;
//       setSearchResults(dogs);
//     } catch (error) {
//       console.error('An error occurred while searching for the dog:', error);
//       // Puedes manejar el error de manera más específica según tus necesidades
//     }
//   };

//   const handleChangeSearch = (event) => {
//     const value = event.target.value;
//     setName(value);

//     if (value.trim() === '') {
//       setShowResults(false);
//       setSearchResults([]);
//     } else {
//       onSearch(value);
//       setShowResults(true);
//     }
//   };

//   const handleItemClick = (id) => {
//     navigate(`/details/${id}`);
//     setName('');
//     setShowResults(false);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Escape') {
//       setShowResults(false);
//     }
//   };

//   return (
//     <div className={styles.searchBar}>
//       <input
//         className={styles.inputSearchBar}
//         placeholder="Search dogs"
//         type="search"
//         onChange={handleChangeSearch}
//         value={name}
//         onKeyDown={handleKeyDown}
//       />

//       {showResults && searchResults && searchResults.length > 0 && (
//         <div className={styles.resultsContainer} ref={resultsRef}>
//           <ul className={styles.resultsList}>
//             {searchResults.map((dog) => (
//               <li
//                 key={dog.id}
//                 className={styles.resultItem}
//                 onClick={() => handleItemClick(dog.id)}
//               >
//                 <img
//                   src={dog.image} // Supongamos que la propiedad para la imagen es "image"
//                   alt={dog.name}
//                   className={styles.flagImage}
//                 />
//                 <span className={styles.dogName}>{dog.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Searchbar;



import React, { useState } from 'react'
import axios from "axios"



const Searchbar = () => {

  const [searchItem, setSearchitem] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  



    const onSearch = async () => {
      const lowercaseSearchItem = searchItem.toLowerCase();


    try {
      const response = await axios.get('http://localhost:3001/dog', {});

      const dogs = response.data;
      setSearchResults(dogs)


      const filteredDogs = dogs.filter((dog) =>
      dog.name.toLowerCase().includes(lowercaseSearchItem)
    );


      console.log(dogs)
      console.log(searchItem)
      console.log(lowercaseSearchItem)
      console.log(filteredDogs)

   



    } catch (error) {
      console.error('An error occurred while searching for the dog:', error);
    }

  };
  
 

  return (
    <div>
      <input type='text' placeholder='Search Dog' value={searchItem} onChange={(e)=> setSearchitem(e.target.value)}/>
      <button onClick={onSearch}> Search </button>

      {searchResults.map((dog) => (
        <div key={dog.id}>
          <p>{dog.name}</p>
        </div>
      ))}
    </div>
  )
}
export default Searchbar
