import { Link } from "react-router-dom";
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { CREATE_CONTACT } from '../utils/mutations'
import { useState } from 'react'

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [addContact] = useMutation(CREATE_CONTACT);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevFormState) => ({
            ...prevFormState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addContact({
                variables: { ...formState },
            });

            console.log(data);

        } catch (error) {
            console.error(error);
        }

        setFormState({
            name: '',
            email: '',
            message: '',
        });
    };


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
                                <br />
                                <br />
                                My passions lie in problem solving, and in creating simple, elegant code. I am a fierce advocate for the romance genre, its writers, and its readers.

                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col xs={1}>
                        <div className="side-nav"><h2>Projects</h2></div>
                    </Col>
                    <Col md={11}>
                        <div className="project-list w-100">
                            <a href="https://bitstuck.github.io/brewery-experience/" target="_blank">Brewery Experience</a><br />
                            <a href="https://watchtogethr-aeeae66b60e6.herokuapp.com/Login" target="_blank">WatchTogethr</a><br />
                            <a href="https://github.com/BitsTuck/ecomm-back-end" target="_blank">Ecommerce Backend</a><br />
                            <a href="https://uta-note-taker-29970e8af26e.herokuapp.com/" target="_blank">Notetaker App</a><br />
                            <br />
                            <a href='https://drive.google.com/file/d/1BFBRvMwtQa3GNJ3GPiwmUU-nfHstgw2E/view?usp=share_link' target="_blank">Resume</a><a> • </a>
                            <a href="https://github.com/BitsTuck" target="_blank">GitHub</a>


                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-end">
                    <Col xs={1}>
                        <div className="side-nav"><h2>Contact</h2></div>
                    </Col>
                    <Col md={11}>
                        <div className="signup-form-container d-flex justify-content-center align-items-center">
                            <div className="card text-white w-100" id='signupCard'>
                                <h5 className="card-header">Contact Elizabeth</h5>
                                <form className="card-body" onSubmit={handleFormSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input name="name" type="name" className="form-control" placeholder="Name" value={formState.name} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input name="email" type="email" className="form-control" placeholder="name@example.com" value={formState.email} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea name="message" type="text" className="form-control" placeholder="Type your message here" value={formState.message} onChange={handleChange} />
                                    </div>
                                    <div className="col-auto d-flex justify-content-center">
                                        <button type="submit" className="btn btn-danger">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Contact;