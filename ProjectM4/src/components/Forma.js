import { TextField, Grid, Button, CircularProgress } from '@mui/material'
import React from 'react'
import Resultado from './Resultado'

const Forma = () => {
  const [nombre, setNombre] = React.useState('')
  const [edad, setEdad] = React.useState('')
  const [email, setEmpresa] = React.useState('')
  //const [ocupacion, setOcupacion] = React.useState('')
  const [msg, setMsg] = React.useState('')
  const [cargando, setCargando] = React.useState(false)
  const [dialogAbierto, setDialogAbierto] = React.useState(false)

  const inputsNotFilled = !nombre || !edad || !email

  const handleBuscar = () => {
    if (inputsNotFilled) return

    setCargando(true)
  
    setTimeout(() => {
      setMsg('Registro Exitoso')
      setDialogAbierto(true)
      setCargando(false)
    }, 1000)
  }

  const cerrarDialog = () => {
    setNombre('')
    setEdad('')
    setEmpresa('')
    setDialogAbierto(false)
  }

  return(
    <Grid container spacing={3} marginLeft={2}>
      <Grid item xs={12} sm={6} md={4}>
        <TextField 
          label="Nombre" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          required
          error={!nombre}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField 
          label="Edad" 
          type='number' 
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          fullWidth
          required
          error={!edad}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField 
          label="E-mail" 
          type='email'
          value={email}
          onChange={(e) => setEmpresa(e.target.value)}
          fullWidth
          required
          error={!email}
        />
      </Grid>
      

      <Grid item xs={12} align='center'>
        {
          cargando ? (
            <CircularProgress/>
          ) : (
            <Button 
              variant='contained' 
              onClick={handleBuscar}
              disabled={inputsNotFilled}
            >
              Registrar
            </Button>
          )
        }

        <Resultado 
          dialogAbierto={dialogAbierto} 
          cerrarDialog={cerrarDialog}
          msg={msg}
        />
      </Grid>
    </Grid>
  )
}

export default Forma