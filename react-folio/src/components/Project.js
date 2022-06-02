// import react
import React, {Component} from "react";
// import card from bootstrap
import Card from "react-bootstrap/Card";
// import react route (???? maybe)
export default class Projects extends Component {
   render () {
       return (
           <React.Fragment>
               <section fluid className="projects">
                    <section>
                        <h1 className="proj-heading"> Projects I Have Done</h1>
                    </section>
                    <section Row style={{justifyContent: "center", paddingBottom:"15px"}}>
                        <div Col md= {4} className="Project-Card">
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                            </Card>
                        </div>
                    </section>
               </section>
           </React.Fragment>
       );
   }
}
// add functions for project cards... (3-4 project cards)
// export project