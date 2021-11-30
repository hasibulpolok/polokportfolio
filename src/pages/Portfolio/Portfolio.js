import React from 'react';
import { Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Portfolio = ({ portfolio }) => {
    const { _id, img1,img2,img3,title,desc,liveLink,serverSide,clientSide } = portfolio;
    const history = useHistory();

    const portdetails = (detailsid) => {
        const uri = `/details/${detailsid}`;
        history.push(uri)
    }

    return (
        <Col className="mt-4" md={4} sm={12}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush text-center">
                    <ListGroupItem> <Card.Link className="text-decoration-none text-danger fw-bold" href={liveLink} target="_blank" >Live Website</Card.Link></ListGroupItem>

                </ListGroup>
                <Card.Body className="text-center">
                    <Card.Link className="text-decoration-none text-primary fw-bold" href={serverSide} target="_blank" >Server Side</Card.Link>
                    <Card.Link className="text-decoration-none text-primary fw-bold" href={clientSide} target="_blank" >Client Side</Card.Link>
                </Card.Body>
                <ListGroup className="list-group-flush text-center">
                    <Button onClick={() =>
                            portdetails(_id)
                        } className="bg-danger"> Details</Button>

                </ListGroup>

            </Card>
        </Col>
    );
};

export default Portfolio;