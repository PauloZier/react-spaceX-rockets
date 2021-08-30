import { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DetailsCard from '../../components/cards/details/DetailsCard';
import SpaceXService from '../../services/SpaceXService';
import './Details.css';

export default function Details() {

    const [rocket, setRocket] = useState({});
    
    const { id } = useParams();

    useEffect(() => {

        getRocket();

    }, []);

    const getRocket = () => {

        SpaceXService.getRocket(id)
            .then(x => setRocket(x))
            .catch(err => console.log(err));
    };

    return (
        <Container className="content mb-5">
            <Card>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            {
                                rocket && rocket.flickr_images ? 
                                <>

                                    <Col sm={12} className="text-center pb-3">
                                        <Image src={rocket.flickr_images[0]} width="450" rounded />
                                    </Col>

                                    <Col sm={12} className="text-center pb-3">
                                        <h1>{rocket.name}</h1>
                                    </Col>

                                    <DetailsCard 
                                        title="Altura"
                                        value1={`${rocket.height.meters} metros`}
                                        value2={`${rocket.height.feet} pés`} />

                                    <DetailsCard 
                                        title="Diâmetro"
                                        value1={`${rocket.diameter.meters} metros`}
                                        value2={`${rocket.diameter.feet} pés`} />

                                    <DetailsCard 
                                        title="Massa"
                                        value1={`${rocket.mass.kg} kg`}
                                        value2={`${rocket.mass.lb} lb`} />

                                    <DetailsCard 
                                        title="Estágios"
                                        value1={rocket.stages} />

                                    <DetailsCard 
                                        title="Impulsionadores"
                                        value1={rocket.boosters} />

                                    <DetailsCard 
                                        title="Custo por lançamento"
                                        value1={rocket.cost_per_launch} />

                                    <DetailsCard 
                                        title="Primeiro lançamento"
                                        value1={rocket.first_flight} />

                                    <DetailsCard 
                                        title="País"
                                        value1={rocket.country} />

                                    <DetailsCard 
                                        title="Empresa"
                                        value1={rocket.company} />

                                    <DetailsCard 
                                        title="Wikipedia"
                                        value1={<a href={rocket.wikipedia} target="_blank" rel="noreferrer">Link</a>} />
                            </>
                                : null
                            }
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    );
}
