import './Rockets.css';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from 'react';
import SpaceXService from '../../services/SpaceXService';
import RocketCard from '../../components/cards/rocket/RocketCard';

export default function Rockets() {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {

        getRockets();
        
    }, []);

    const getRockets = () => {

        SpaceXService.getRockets()
            .then(x => setRockets(x))
            .catch(err => console.log(err));
    };

    return (
        <Container className="content mb-5">
            <Card >
                <Card.Body>
                    <Container fluid>
                        <Row>
                            {
                                rockets.map(rocket => {

                                    return [
                                        <Col sm={12} md={6} lg={4} className="p-2" key={rocket.id}>
                                            <RocketCard
                                                rocketId={rocket.id}
                                                image={rocket.flickr_images[0]}
                                                title={rocket.name}
                                                description={rocket.description}
                                                className="h-100" />
                                        </Col>
                                    ]
                                })
                            }
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
}