import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CharacterCard = (props) => {
  const name = props.name;
  const description = props.description;
  const image = props.image;
  const url = props.url;
  return (
    <Card className="col-md-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={url}>
          More info
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
