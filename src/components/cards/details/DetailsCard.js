import { Card, Col } from "react-bootstrap";
import './DetailsCard.css';

export default function DetailsCard(props) {

    const { title, value1, value2 } = props;

    return (
        <Col sm={12} md={6} lg={4} className="p-3">
            <Card className="details-card shadow h-100 pt-4 ps-5">
                <Card.Title><strong>{title}</strong></Card.Title>
                <Card.Body>
                    <p>{value1}</p>
                    { value2 && <p>{value2}</p> }
                </Card.Body>
            </Card>
        </Col>
    );
}