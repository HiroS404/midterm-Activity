import Image from 'next/image'
// import back from 'public/back.jpg'
import styles from "./home.css";
import { FaFacebook, FaGithub, FaYoutube, FaLinkedin, FaRulerHorizontal } from "react-icons/fa"; 



export default function Home() {
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
          <h1>
            Welcome!! 
            
          </h1>
          <h1>   This is a Midterm Activity 1</h1>

          <div style={{ display: 'grid', placeItems: 'center' }}>
            <Image 
              src="/rizz.jpg" 
              alt="test" 
              width={300} 
              height={300} 
              style={{ borderRadius: 50 }}
            />
          </div>

          

          <button className="button">Click me!</button>
            </div>

            
        
      </section>

      <footer className="footer">
        <ul className="footerInside">
          <li> <strong>Contact info:</strong> </li>
          <p className="email">Rizalbalase@gmail.com</p>
          <p className="num">09123456789</p>

          <li><strong>social Links:</strong></li>

          <ul className="soc" >
            <li><a href="#"><FaFacebook /> </a> </li>
            <li><a href="#"><FaGithub /></a> </li>
            <li><a href="#"><FaYoutube /> </a> </li>
            <li><a href="#"><FaLinkedin /> </a> </li>
            
          </ul> 

          
          


          

          
        </ul>
        <hr/>
        <p className='copy'> &copy; Rizz, Its mine bruhh. </p>
      </footer>
      
    </main>
    

    
    
  );
}
