import React from 'react';
import { Button } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <div className="mt-5 text-center">
                            <h2 className="text-center display-5 fw-bold"><span className="text-warning">Hasibul</span> Bashar Polok</h2>
                            <p className="fw-bold">Hi,I am a Mern-Stack developer</p>
                            <p> I'm an expert in Modern JavaScript, React.js,Node.js, Hooks, Context API, Firebase, NodeJS, Express, MongoDB, If you need any kind of work related to these technologies, I will be your best choice and my first priority is to deliver the best quality work and give proper time to my Client. If you need any help, ask me I will reply asap. Thanks ('-')</p>
                        </div>
                        <div className="text-center">
                            <Button className="text-white bg-danger border border-warning border-2 fw-bold px-3">Hire Me</Button>
                            <Button className="bg-danger border border-warning border-2 fw-bold px-3 ms-3"><a  className="text-white  text-decoration-none" href="https://drive.google.com/uc?id=1FKycIvqHiMdw0oftA0O147eVqS9KzOhm&export=download" target="_blank">Download Resume</a></Button>
                        </div>
        </div>
    );
};

export default About;