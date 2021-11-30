import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const PortfolioDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const [singledetails, setSingledetails] = useState({});
    const { desc, img1, img2, img3, liveLink, serverSide, clientSide, title } = singledetails;

    useEffect(() => {
        fetch('/portfolios.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        if (details.length > 0) {
            const matched = details.find(detail => detail._id == id)
            setSingledetails(matched);
        }
    }, [details]);
    return (
        <div>
            <div className="my-5">
                <br />
                <h1 className="text-center display-2 fw-bold text-uppercase text-danger ">Portfolio Details</h1>

                <div className="my-5">
                    <h3 className="text-center text-danger" >Project: {title} </h3>
                </div>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className="d-flex">
                                <Card.Img style={{ width: "300px", height: "250px" }} variant="top" src={img1} />



                            </div>



                        </Col>
                        <Col sm={12} md={4}>
                            <Card.Img style={{ height: "250px" }} variant="top" src={img3} />


                        </Col>

                        <Col sm={12} md={4}>
                            <Card.Img style={{ height: "250px" }} variant="top" src={img2} />


                        </Col>
                    </Row>

                    <div className="text-dark fw-bold mt-3 border border-2 border-dark">
                        <details open>
                            {desc}
                        </details>
                    </div>
                    <div className="d-flex my-3 ">

                        <Button className="text-decoration-none  bg-danger text-White fw-bold ms-5" href={liveLink} target="_blank" >Demo WebSite</Button>
                        <Button className="text-decoration-none bg-danger  text-White fw-bold ms-5" href={serverSide} target="_blank" >Server Side</Button>
                        <Button className="text-decoration-none  bg-danger text-White fw-bold ms-5" href={clientSide} target="_blank" >Client Side</Button>

                    </div>
                    <div className="text-center border border-2 border-dark py-3">
                        <Button className=" mt-2 btn btn-danger rounded text-center"><Link className="text-white fw-bold text-decoration-none" to="/home">Back To Home</Link></Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default PortfolioDetails;