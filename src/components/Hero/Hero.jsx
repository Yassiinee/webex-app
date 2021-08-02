import { Button } from '@material-ui/core';
import React from "react";
import Typography from '@material-ui/core/Typography';
import { useStyles,Container,Section } from "./style";
import Popup from "../../components/PopUp/Popup";
import ReactCircleModal from 'react-circle-modal'

const Hero = ({ image, title, desc, more}) => {
  const classes = useStyles()
  
  
  return (
    <Section image={image}>
      <Container>
        <h1 className={classes.typographyStyle}>{title}</h1>
        <p className={classes.p}>{desc}</p>
        <ReactCircleModal
          backgroundColor="rgba(0, 0, 0, 0.6)"
          toogleComponent={onClick => (
            <Button className={classes.button} onClick={onClick}>Learn more</Button>
            )}
            // Optional fields and their default values
            offsetX={0}
            offsetY={0}
            >
      {(onClick) => (
        <div style={{ backgroundColor: '#ffff', padding: '1em' }}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          {title}
            </Typography>
            <Typography variant="h3" align="center" color="textSecondary" paragraph>
            {desc}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {more}
            </Typography>
            <div align="center"> 
            <Button position='center' variant="outlined" color="secondary" onClick={onClick}>
          Close    
          </Button>
            </div>
        </div>
      )}
    </ReactCircleModal>
      </Container>
      <Popup/> 
    </Section>
  );
};

export default Hero;
