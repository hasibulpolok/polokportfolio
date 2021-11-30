import React from 'react';
import { Col } from 'react-bootstrap';
import html from '../../images/skills/icons8-html-5-50.png';
import css from '../../images/skills/icons8-css3-50.png';

const Skill = () => {
    return (
        <Col md={3} sm={2}>
            <img className="ms-4" src={html} alt="html"></img>
            <img className="mx-5"  src={css} alt="html"></img>
            <img className="mx-5"  src={css} alt="html"></img>
            <img className="mx-5"  src={css} alt="html"></img>
        </Col>


    );
};

export default Skill;