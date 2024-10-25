"use client"
import Image from 'next/image';
import styles from "./home.css";
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"; 
import React, { useState } from 'react';

export default function Home() {
  const [spin, setSpin] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [tiyug, setTiyug] = useState(false);

  const handleSpin = () => {
    setSpin(true);  
  };

  
  const startRotate = () => {
    setRotate(true);
    setTimeout(()=> setRotate(false), 1000 );
  };

  const startTiyug = () => {
    setTiyug(true);  
    setTimeout(() => setTiyug(false), 1000); 
  };

  return (
    <main>  
      <nav className="nav"> 
        <h2>Midterm Act</h2>
        <ul className="ul">
          <li className="li"><a href="#">Home</a></li>
          <li className="li"><a href="#">About</a></li>
          <li className="li"><a href="#">Blog</a></li> 
          <li className="li"><a href="#">Download</a></li>
        </ul>
      </nav>

      <section className="section"> 
        <div className="box">
          <h1>Welcome!!</h1>
          <h1>This is a Midterm Activity 1</h1>

          <div style={{ display: 'flex', placeItems: 'center', gap: 50, marginLeft: 20, marginRight: 20 }}>
            <Image 
            src="/eyyy.jpg" 
            alt="test" 
            width={300} 
            height={300} 
            className={rotate ? "rotate" : ""}
            style={{ borderRadius: 50 }} />

            <Image 
              src="/rizz.jpg" 
              alt="test" 
              width={600} 
              height={300} 
              className={spin ? "spin" : ""} 
              style={{ borderRadius: 50, objectFit: 'fill' }} 
            />
            <Image 
            src="/test2.jpg" 
            alt="test" 
            width={300} 
            height={300} 
            className={tiyug ? "tiyug" : ""}

            style={{ borderRadius: 50 }} />
          </div>

          <button className="button" onClick={() => {
            handleSpin();
            startRotate();
            startTiyug();
          }}
          >Click me!</button>
        </div>
      </section>

      <footer className="footer">
        <ul className="footerInside">
          <li><strong>Contact info:</strong></li>
          <p className="email">Rizalbalase@gmail.com</p>
          <p className="num">09123456789</p>

          <li><strong>Social Links:</strong></li>
          <ul className="soc">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaGithub /></a></li>
            <li><a href="#"><FaYoutube /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul> 
        </ul>
        <hr/>
        <p className="copy"> &copy; Rizz, It's mine bruhh. </p>
      </footer>
    </main>
  );
}
