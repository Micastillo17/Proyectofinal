
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Fotos from './Fotos'
import Buscador from './Buscador';


const Conciertos = () => {
  const handleOnClick = () => {alert('Haz seleccionado un evento')}
  

  return (
    <Container>
      <div>
        <Grid container spacing={3}>
        <Grid class = 'Botones'>
          <button onClick={handleOnClick}>
          <img src={Fotos.img1}/>
        </button>
        <button onClick={handleOnClick}>
        <img src={Fotos.img2}/>
        </button>
        <button onClick={handleOnClick}>
        <img src={Fotos.img3}/>
        </button>
        <button onClick={handleOnClick}>
        <img src={Fotos.img4}/>
        </button>
        <button onClick={handleOnClick}>
        <img src={Fotos.img6}/>
        </button>
        <button onClick={handleOnClick}>
        <img src={Fotos.img7}/>
        </button>
         
          </Grid>
        </Grid>
        <div>
        
        </div>
      </div>
    </Container>
  );
  }
export default Conciertos;
