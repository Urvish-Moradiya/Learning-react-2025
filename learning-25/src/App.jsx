import React from 'react'
import { Content } from "./components/Content";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import './App.css';
import { ArrayDemo } from './components/ArrayDemo';
import { ArrayDemo2 } from './components/ArrayDemo2';
import { ArrayDemo3 } from './components/ArrayDemo3';
import { ArrayDemo4 } from './components/ArrayDemo4';
import { UserStateDemo } from './components/UserStateDemo';
import { UserStateDemo2 } from './components/UserStateDemo2';
import { Inputdemo } from './components/Inputdemo';
import { Navbar } from './components/Navbar';
import { Inputtask } from './components/Inputtask';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/hotstar/Home';
import { Movies } from './components/hotstar/Movies';
import { Sports } from './components/hotstar/Sports';
import { Dashboard } from './components/hotstar/Dashboard';
import { Notfound } from './components/hotstar/Notfound';
import { Play } from './components/hotstar/Play';
import { Formdemo1 } from './components/forms/Formdemo1';
import { Formdemo2 } from './components/forms/Formdemo2';
import { Formdemo3 } from './components/forms/Formdemo3';
import { Formdemo4 } from './components/forms/Formdemo4';
import { Logindemo } from './components/forms/Logindemo';
import { Apidemo1 } from './components/apis/Apidemo1';
import { Searchmovie } from './components/omdb/Searchmovie';
import { Moviesdetails } from './components/omdb/Moviesdetails';
import Registerdemo from './components/forms/Registerdemo';
import { Postdemo1 } from './components/apis/Postdemo1';
import { Postdemo2 } from './components/apis/Postdemo2';

import { Signup } from './components/Signup';
import { Login } from './components/Login';
import axios from "axios";

function App() {
    axios.defaults.baseURL = "http://localhost:5000"

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/movies' element={<Movies></Movies>}></Route>
        <Route path='/play/:id' element={<Play></Play>}></Route>
        <Route path='/sports' element={<Sports></Sports>}></Route>
        <Route path='/*' element={<Notfound></Notfound>}></Route>
        <Route path='/form1' element={<Formdemo1></Formdemo1>}></Route>
        <Route path='/form2' element={<Formdemo2></Formdemo2>}></Route>
        <Route path='/form3' element={<Formdemo3></Formdemo3>}></Route>
        <Route path='/form4' element={<Formdemo4></Formdemo4>}></Route>
        <Route path='/apidemo1' element={<Apidemo1></Apidemo1>}></Route>
        <Route path='/search' element={<Searchmovie></Searchmovie>}></Route>
        <Route path='/moviedetail/:id' element={<Moviesdetails></Moviesdetails>}></Route>
        <Route path='/newform' element={<Registerdemo></Registerdemo>}></Route>
        <Route path='/loginform' element={<Logindemo></Logindemo>}></Route>
        <Route path='/postdata' element={<Postdemo1></Postdemo1>}></Route>
        <Route path='/postdata2' element={<Postdemo2></Postdemo2>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
      {/* use this declartion for show output */}
      
      {/* <Inputtask></Inputtask> */}
      {/* <Inputdemo></Inputdemo> */}
      {/* <UserStateDemo></UserStateDemo> */}
      {/* <UserStateDemo2></UserStateDemo2> */}
      {/* <Header></Header> */}
      {/* <ArrayDemo></ArrayDemo> */}
      {/* <ArrayDemo2> </ArrayDemo2> */}
      {/* <Content></Content> */}
      {/* <ArrayDemo3></ArrayDemo3> */}
      {/* <ArrayDemo4></ArrayDemo4> */}
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
