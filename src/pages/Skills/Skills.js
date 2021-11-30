import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skill from '../Skill/Skill';
import html from '../../images/skills/icons8-html-5-50.png';
import css from '../../images/skills/icons8-css3-50.png';
import js from '../../images/skills/icons8-javascript-50.png';
import react from '../../images/skills/icons8-react-native-50.png';
import git from '../../images/skills/icons8-git-50.png';
import github from '../../images/skills/icons8-github-50.png';
import firebase from '../../images/skills/icons8-google-firebase-console-50.png';
import heroku from '../../images/skills/icons8-heroku-50.png';

const Skills = () => {
    return (
        <div className="my-5 mx-aut0 bg-dark pb-5 ">
            <Container className="mt-5">
            <h3 className="text-center  display-4 text-white"> My Skills 🔥</h3>
            <Row className="g-2 ms-5 mt-5">
                <Col md={3} sm={2}>
                    <img className="ms-4" src={html} alt="html"></img>
               

                </Col>
                <Col md={3} sm={2}>
                    
                    <img className="mx-5" src={css} alt="html"></img>
                    

                </Col>
                <Col md={3} sm={2}>
                    <img className="ms-4" src={js} alt="html"></img>
               

                </Col>
                <Col md={3} sm={2}>
                    <img className="ms-4 " src={react} alt="html"></img>
               

                </Col>
                <Col md={3} sm={2}>
                    <img className="ms-4 mt-5" src={react} alt="html"></img>

                </Col>
                <Col md={3} sm={2}>
                    <img className="ms-5 mt-5" src={git} alt="html"></img>

                </Col>
                <Col md={3} sm={2}>
                    <img className="ms-4 mt-5" src={github} alt="html"></img>

                </Col>
                <Col md={3} sm={2}>
                    <img className="ms-4 mt-5" src={firebase} alt="html"></img>

                </Col>
            </Row>
            </Container>

        </div>
    );
};

export default Skills;