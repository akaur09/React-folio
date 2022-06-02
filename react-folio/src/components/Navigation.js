// import react
import React from 'react';
// import nav bar from bootstrap
import { Navbar } from 'react-bootstrap';
// import Nav section from bootstarp
import { Nav } from 'react-bootstrap';
// import react bootstrap for a Navbar
// add navbar function
    // add link for About me page
    // add link for project page
    // add link for contact me page
    // add link for resume
function Navbar(){
    // add a scroll effect
    function scrollHandler(){
        if (window.scrollY >= 20){
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);
    return (
        // add navbar css 
        <Nav>
            <li href ="#About"> About Me</li>
            <li href ="#Project">Projects</li>
            <li href ="#Contact">Contact </li>
        </Nav>
    )
}
// export navbar
export default Navbar;