import { Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  let titulo = 'Tienda Virtual'
  // Obtener fecha
  const fecha = new Date().getFullYear()

  return (
    <Fragment>
      <Header
        titulo={titulo}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
