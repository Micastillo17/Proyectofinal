import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Buscador() {

  const [articulos, setArticulos] = useState([])
  const [recuperado, setRecuperado] = useState(false)


  function mostrarTabla() {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Evento</th>
              <th>URL</th>
              <th>Fecha</th>
              <th>Hora Inicio</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map(event => {
              return (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.url}</td>
                  <td>{event.dates.start.localDate}</td>
                  <td>{event.dates.start.localTime}</td>
                  <td>{event.info}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  useEffect(() => {
    fetch('https://app.ticketmaster.com/discovery/v2/events?apikey=xgmZ0b78lU9jGRUHi8XnXJ37gmLTG1Ns&locale=*&startDateTime=2022-05-24T23:08:00Z&endDateTime=2022-09-30T23:08:00Z&city=monterrey')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setArticulos(json._embedded.events)
        setRecuperado(true)
      })
  }, [])

  if (recuperado)
    return mostrarTabla()
  else
    return (<div>recuperando datos...</div>)
}

export default Buscador