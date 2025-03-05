import React from 'react'
import { Link } from 'react-router-dom'


// use for this file for show all file function link in navbar 
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Hotstar</a>
 

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/home">Home</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to="/movies">Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/sports">Sports</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/form1">Form 1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/form2">Form 2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/form3">Form 3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/form4">Form 4</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/search">Search Movie</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/newform">Newform</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/postdata">Postdata</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/postdata2">Postdata2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/loginform">loginform</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/signup">Signup</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">login</Link>
      </li>
    </ul>
    
  </div>
</nav>
  )
}
