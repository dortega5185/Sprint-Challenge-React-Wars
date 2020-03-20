import React from 'react';
import styled from "styled-components";

//container
const Container = styled.div`
    border: 4px solid black;
    width: 40%;
    margin: 0 auto;
    margin-top: 2%;
    border-radius: 5px;
`;

const Title = styled.h2`
    color: green;
`;

const Gender = styled.p`
  color: red;
`;

const Mass = styled.p`
  color: purple;
`;
// Component
const StarWarsCard = props => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Gender>{props.gender}</Gender>
            <Mass>{props.mass}</Mass>
            <p>{props.birth}</p>
        </Container>
    )
}

export default StarWarsCard;