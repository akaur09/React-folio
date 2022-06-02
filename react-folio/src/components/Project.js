// import react
import React from "react";
// import card from bootstrap
import Card from "react-bootstrap/Card";
// import images
import anifan from "../assets/images/anifan.png";
import hangry from "../assets/images/hangry.png";
import password from "../assets/images/password.png";

// export default class Projects extends Component {
//    render () {
//        return (
//            <React.Fragment>
//                <section fluid className="projects">
//   <section>
//       <h1 className="proj-heading"> Projects I Have Done</h1>
//   </section>
//   <section Row style={{justifyContent: "center", paddingBottom:"15px"}}>
//       <div Col md= {4} className="Project-Card-1">
//           <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src= {anifan} />
//           <Card.Body>
//               <Card.Title>I'm Hangry</Card.Title>
//               <Card.Text>
//               A website where the user can get help to figure out what to eat
//               </Card.Text>
//           </Card.Body>
//           <Card.Body>
//               <Card.Link href="#https://github.com/akaur09/im-hangry">Webstie</Card.Link>
//               <Card.Link href="#https://miacarmen.github.io/im-hangry/">Github</Card.Link>
//           </Card.Body>
//           </Card>
//       </div>
//       <div Col md= {4} className="Project-Card-2">
//       <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={hangry} />
//           <Card.Body>
//               <Card.Title>AniFan</Card.Title>
//               <Card.Text>
//               A website created for anime fans who cannot decide what to watch next
//               </Card.Text>
//           </Card.Body>
//           <Card.Body>
//               <Card.Link href="#https://stark-forest-86865.herokuapp.com/">Webstie</Card.Link>
//               <Card.Link href="#https://github.com/akaur09/AniFan">Github</Card.Link>
//           </Card.Body>
//           </Card>
//       </div>
//       <div Col md= {4} className="Project-Card-3">
//       <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src={password} />
//           <Card.Body>
//               <Card.Title>Password Generator</Card.Title>
//               <Card.Text>
//               A web application which helps users create strong and secure passwords
//               </Card.Text>
//           </Card.Body>
//           <Card.Body>
//               <Card.Link href="#https://akaur09.github.io/Secret-password-maker/">Webstie</Card.Link>
//               <Card.Link href="#https://github.com/akaur09/Secret-password-maker">Github</Card.Link>
//           </Card.Body>
//           </Card>
//       </div>
//   </section>
//                </section>
//            </React.Fragment>
//        );
//    }
// }
// add functions for project cards... (3-4 project cards)
function Projects() {
    return (
        <section fluid className="projects">
            <section>
                <h1 className="proj-heading"> Projects I Have Done</h1>
            </section>
            <section Row style={{ justifyContent: "center", paddingBottom: "15px" }}>
                <div Col md={4} className="Project-Card-1">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={anifan} />
                        <Card.Body>
                            <Card.Title>I'm Hangry</Card.Title>
                            <Card.Text>
                                A website where the user can get help to figure out what to eat
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#https://github.com/akaur09/im-hangry">Webstie</Card.Link>
                            <Card.Link href="#https://miacarmen.github.io/im-hangry/">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div Col md={4} className="Project-Card-2">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={hangry} />
                        <Card.Body>
                            <Card.Title>AniFan</Card.Title>
                            <Card.Text>
                                A website created for anime fans who cannot decide what to watch next
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#https://stark-forest-86865.herokuapp.com/">Webstie</Card.Link>
                            <Card.Link href="#https://github.com/akaur09/AniFan">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div Col md={4} className="Project-Card-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={password} />
                        <Card.Body>
                            <Card.Title>Password Generator</Card.Title>
                            <Card.Text>
                                A web application which helps users create strong and secure passwords
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#https://akaur09.github.io/Secret-password-maker/">Webstie</Card.Link>
                            <Card.Link href="#https://github.com/akaur09/Secret-password-maker">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </section>
        </section>
    );
}
// export project
export default Projects;