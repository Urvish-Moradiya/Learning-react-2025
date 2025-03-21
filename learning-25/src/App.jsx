import React from 'react'
import './App.css';
import { AllLinks } from './components/AllLinks';
import { Route, Routes } from 'react-router-dom';

import { Content } from "./components/basicwebstyle/Content";
import { Footer } from "./components/basicwebstyle/Footer";
import { Header } from "./components/basicwebstyle/Header";

import { ArrayDemo } from './components/Arraydemo/ArrayDemo';
import { ArrayDemo2 } from './components/Arraydemo/ArrayDemo2';
import { ArrayDemo3 } from './components/Arraydemo/ArrayDemo3';
import { ArrayDemo4 } from './components/Arraydemo/ArrayDemo4';

import { UserStateDemo } from './components/usestate/UserStateDemo';
import { UserStateDemo2 } from './components/usestate/UserStateDemo2';

import { Inputdemo } from './components/inputtask/Inputdemo';
import { Inputtask } from './components/inputtask/Inputtask';

import { Home } from './components/hotstar/Home';
import { Movies } from './components/hotstar/Movies';
import { Sports } from './components/hotstar/Sports';
import { Dashboard } from './components/hotstar/Dashboard';
import { Notfound } from './components/hotstar/Notfound';
import { Play } from './components/hotstar/Play';

import { Formdemo1 } from './components/Forms/Formdemo1';
import { Formdemo2 } from './components/Forms/Formdemo2';
import { Formdemo3 } from './components/Forms/Formdemo3';
import { Formdemo4 } from './components/Forms/Formdemo4';

import { Searchmovie } from './components/omdb/Searchmovie';
import { Moviesdetails } from './components/omdb/Moviesdetails';

import { Apidemo1 } from './components/apis/Apidemo1';
import { Postdemo1 } from './components/apis/Postdemo1';
import { Postdemo2 } from './components/apis/Postdemo2';

import { Registerdemo } from './components/Signup/Registerdemo';
import { Signup } from './components/Signup/Signup';
import { Login } from './components/Login/Login';
import { Logindemo } from './components/Login/Logindemo';

import axios from "axios";

function App() {
    axios.defaults.baseURL = "http://localhost:5000"

  return (
    <div>
      <AllLinks></AllLinks>
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
        <Route path='/postdata' element={<Postdemo1></Postdemo1>}></Route>
        <Route path='/postdata2' element={<Postdemo2></Postdemo2>}></Route>

        <Route path='/search' element={<Searchmovie></Searchmovie>}></Route>
        <Route path='/moviedetail/:id' element={<Moviesdetails></Moviesdetails>}></Route>

        <Route path='/newform' element={<Registerdemo></Registerdemo>}></Route>
        <Route path='/loginform' element={<Logindemo></Logindemo>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        
        <Route path='/Inputtask' element={<Inputtask></Inputtask>}></Route>
        <Route path='/Inputdemo' element={<Inputdemo></Inputdemo>}></Route>
        
        <Route path='/UserStateDemo' element={<UserStateDemo></UserStateDemo>}></Route>
        <Route path='/UserStateDemo2' element={<UserStateDemo2></UserStateDemo2>}></Route>

        <Route path='/ArrayDemo' element={<ArrayDemo></ArrayDemo>}></Route>
        <Route path='/ArrayDemo2' element={<ArrayDemo2></ArrayDemo2>}></Route>
        <Route path='/ArrayDemo3' element={<ArrayDemo3></ArrayDemo3>}></Route>
        <Route path='/ArrayDemo4' element={<ArrayDemo4></ArrayDemo4>}></Route>


      </Routes>
      {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
