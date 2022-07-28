import React from 'react'
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <Container style={{margin:"auto auto"}} >
    <section>
      <div>
        <div>
          <h1 >404</h1>
          <h2 >
            OOPS, LA PAGINA QUE ESTAS BUSCANDO NO HA SIDO ENCONTRADA!
          </h2>
          <div>
            <Link to="/">
              Regresa al incio
            </Link>
          </div>
        </div>
      </div>
    </section>
    </Container>
  )
}
