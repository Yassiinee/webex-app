import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useStyles } from "./style";

const Section = styled.section`
  background: url(${({ image }) => image && image}) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
`;

const Container = styled.div`
  color: #fff;
  padding: 2rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }
`;

const Hero = ({ image, title, desc }) => {
  const classes = useStyles()
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
        {/* <button>Learn more</button> */}
        <Button className={classes.button}>Learn more</Button>
      </Container>
    </Section>
  );
};

export default Hero;
