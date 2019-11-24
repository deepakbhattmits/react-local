import React from 'react';
// import ScrollApp from './ScrollApp';
import Header from '../header';
// import GoTop from './GoTop';
// import { ReactComponent as SVGLogo } from '../assets/images/logo.svg';
import FormComponent from './FormComponent'
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <Container>
      <Header />
      {/* <SVGLogo className='App-logo' /> */}
      <FormComponent />
    </Container>
  );
}

export default App;
