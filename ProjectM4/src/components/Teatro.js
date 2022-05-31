
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Fotos from './Fotos'


const Teatro = () => {
  const handleOnClick = () => {alert('Hola')}

  return (
    <Container>
      <div>
        <Grid container spacing={3}>
        <Grid class = 'Botones'>
          <button onClick={handleOnClick}>
          <img src={Fotos.img8}/>
        </button>
        <button>
        <img src={Fotos.img9}/>
        </button>
        <button>
        <img src={Fotos.img10}/>
        </button>
        <button>
        <img src={Fotos.img11}/>
        </button>
        <button>
        <img src={Fotos.img12}/>
        </button>
        <button>
        <img src={Fotos.img13}/>
        </button>
         
          </Grid>
        </Grid>
        <div>
        
        </div>
      </div>
    </Container>
  );
  }
export default Teatro;
