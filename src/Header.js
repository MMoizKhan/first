import {useState} from 'react';
import './Header.css';

function Header(){
    // var nam = [];
    const [nam, setNam] = useState('');

    // function chnge(){
    //     setNam(nam+1);
    // }

    // function handle(event){
    //     // console.log(event.target.value);
    //     setNam(event.target.value);
    // }
    return(
        // <nav class="navbar">
        // <div class="navbar-container container">
        //     <div class="hamburger-lines">
        //         <span class="line line1"></span>
        //         <span class="line line2"></span>
        //         <span class="line line3"></span>
        //     </div>
        //     <ul class="menu-items">
        //         <li><a href="#">Home</a></li>
        //         <li><a href="#">About</a></li>
        //         <li><a href="#">Category</a></li>
        //         <li><a href="#">Menu</a></li>
        //         <li><a href="#">Testimonial</a></li>
        //         <li><a href="#">Contact</a></li>
        //     </ul>
        //     <h1 class="logo">Navbar</h1>
        // </div>
        // </nav>
        <>
        {/* <h1>{abc.abce} {abc.email}</h1> */}
        {/* <p>JSX (Java script XML)</p> */}
        <input type='text' onChange={(e) => setNam(e.target.value)}/>
        <p>{nam}</p>
        <button>Click Me</button>
        </>
    )
}
export default Header;