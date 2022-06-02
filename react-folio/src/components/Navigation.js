// import react
import React, {Component} from 'react';
// export navbar 
export default class Navbar extends Component {
    render () {
        return(
            <React.Fragment>
                {/* navbar code following react bootstrap */}
                <Navbar bg = "dark" variant = "dark">
                    <nav className='me-auto'>
                        <li href ="#About"> About Me</li>
                        <li href ="#Project">Projects</li>
                        <li href ="#Contact">Contact </li>
                    </nav>
                </Navbar>
            </React.Fragment>
        );
    }
}
// import react bootstrap for a Navbar (maybe)
// add navbar function
    // add link for About me page
    // add link for project page
    // add link for contact me page

