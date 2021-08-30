import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RocketCard(props) {

    const { className, image, title, description, rocketId } = props;

    return (
        <Card className={className}>
            <Card.Img variant="top" src={image} width="150" height="250" />
            <Card.Body>
                <Card.Title><strong>{title}</strong></Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/details/${rocketId}`} className="btn btn-primary">Detalhes</Link>
            </Card.Body>
        </Card>
    );
}