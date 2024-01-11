import { Link } from "react-router-dom";
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                <Col xs={1}>
                    <div className="side-nav"><h2>About</h2></div>
                </Col>
                <Col md={11}>
                <div className="about-card w-100">
                    <p>
                        Hello! Thank you for visiting my portfolio. I am Elizabeth Tucker, a Junior Web Developer and recent graduate of the University of Texas at Austin's Full-Stack MERN Coding Bootcamp.
             
                    </p>
                </div>
                </Col>
                </Row>
                <Row className="justify-content-end">
                <Col xs={1}>
                    <div className="side-nav"><h2>Projects</h2></div>
                </Col>
                <Col md={11}>
                <div className="about-card w-100">
  
                </div>
                </Col>
                </Row>
                <Row className="justify-content-end">
                <Col xs={1}>
                    <div className="side-nav"><h2>Contact</h2></div>
                </Col>
                <Col md={11}>
                <div className="about-card w-100">
                    <p>
                        Hello! Thank you for visiting my portfolio. I am Elizabeth Tucker, a Junior Web Developer and recent graduate of the University of Texas at Austin's Full-Stack MERN Coding Bootcamp.
                        <br />
                        <br />
                        Below, you will find a selection of projects I worked on for the course, as well as personal projects (coming soon!)
                        <br />
                        <br />
                        Prior to my time at UTA, I worked in Operations and IT for a small import company. I was also an Adult Programming Librarian at the Henry Carter Hull Library in Clinton, Connecticut. I do not have any formal IT training, but my time in both of those positions gave me a wealth of knowledge-- and a number of strategies to seek the answers that I don't have on hand.
                        <br />
                        <br />
                        Thanks for stopping by! I look forward to hearing from you.
                    </p>
                </div>
                </Col>
                </Row>

            </Container>
        </>
    )
}

export default Home;