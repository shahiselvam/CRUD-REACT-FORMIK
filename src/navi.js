import React from 'react';
import './App.css'

export default function Navi() {

    return (
      <div>
       <nav class="navbar navbar-dark bg-dark">
       <div class="container-fluid">
       <a class="navbar-brand" href="#"> <img src="./logo192.png"  alt="logo" width="80" height="auto" class="d-inline-block align-text-top" />    </a>
      
       <div class="topnav">
    <a class="active" href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/Products">Products</a>
    <a href="/ViewProduct">ViewProduct</a>
  </div>
       
      </div>
  </nav>
</div>
);

}  