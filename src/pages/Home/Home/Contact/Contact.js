import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import emailjs from 'emailjs-com';


const Contact = () => {
    const handlesubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f3dt7cc', 'template_xy1u6wu', e.target, 'user_8RUvmwpxJkGx4yDbZtEFj')
            .then((res) => {
                console.log(res);
            }).catch(err=>console.log(err));

            swal("Thanks For Messaging", "I will replay asap!", "success");
            e.target.reset();




    }
    
    return (
        <div className="my-5">
            <h2 className="text-center display-3 text-warning fw-bold"><span className="text-danger">Send Me </span> Message</h2>
            <Container>
                <Form onSubmit={handlesubmit} >
                    <Form.Group className="mb-3" controlId="ContactForm.ControlInput1">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control  type="text" placeholder="Your Name" name="name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContactForm.Controlemail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" placeholder="name@example.com" name="email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ContactForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control  as="textarea" rows={3} name="message" required />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Send Message
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;