import React from "react";
import {useState}from 'react'
import { Link } from "react-router-dom";


function Header() {
  const [Propsname, setName] = useState("Diego Alfiandro")
  return (
    <header>
      <h2>Hi, I am</h2>
      <h2>{Propsname}</h2> 
      <h4>Welcome to my Personal website</h4>
      <p>
        Halo saya Diego Alfiandro, Mahasiswa prodi Teknik Informatika dari Universitas Muhammadiyah Surakarta. Saat ini saya sedang mengikuti program Kampus merdeka
        yang diadakan oleh KEMENDIKBUD RISTEK Batch 3...
      </p>
      <br/>
      <Link to="/about">
        <button className="btn">More</button>
      </Link>
    </header>
  );
}

export default Header