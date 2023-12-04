import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import landing from './views/landing/landing';
import home from './views/home/home';
import create from './views/create/create';
import Navbar from './components/navbar/navbar';
import details from './views/details/details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
      
        <Routes>
          <Route path={"/"} Component={landing} />
          <Route path={"/home"} Component={home} />
          <Route path={"/create"} Component={create} />
          <Route path={"/details/:id"} Component={details} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
