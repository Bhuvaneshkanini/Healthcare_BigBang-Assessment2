import { Route,Link } from "react-router-dom";
import { useState } from "react";

export const Adminnav=()=>{

  
    return(<div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/Home">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Doctorview">Doctor view</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/addspecialization">Add Specialization</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/viewspecialization">View Specialization</Link>
        </li>
      </ul>
      <form class="d-flex" role="search" >
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Logout</Link>
        </li>
      </ul>
      </form>
      
    </div>
  </div>
</nav>
    </div>)
}