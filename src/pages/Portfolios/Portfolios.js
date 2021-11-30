import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Portfolio from '../Portfolio/Portfolio';

const Portfolios = () => {
    const [portfolios,setPortfolios] = useState([]);

    useEffect(()=>{
        fetch('./portfolios.json')
        .then(res=>res.json())
        .then(data=>setPortfolios(data))
    },[])

    return (
        <div className="my-5">
            <h2 className="display-3 text-center  text-warning">Port<span className="text-danger">folio</span></h2>
            <div>
                <Container>
                    <Row >
                        {portfolios.map(portfolio=><Portfolio key={portfolio.id} portfolio={portfolio} />).slice(0,6)}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Portfolios;