"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

export default function Navbar(){
     useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
    return(
        
  <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid bg-dark">
    <a className="navbar-brand text-white p-3" style={{fontSize: '25px', fontFamily: 'BBH Sans Bartle, sans-serif',  fontWeight: 400, fontStyle: 'normal'}} href="#">Random Image Gallery</a>
  </div>
</nav>
    
    );
}