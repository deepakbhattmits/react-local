import React from 'react';
// import ScrollApp from './ScrollApp';
import Header from '../header';
// import GoTop from './GoTop';
// import { ReactComponent as SVGLogo } from '../assets/images/logo.svg';
import { Container, Row } from 'react-bootstrap';
// import Form from './Form'
const App = () => {
  return (
    <Container>
      <Row>
        <header className="">
          <Header />
        </header>
      </Row>
      {/* <SVGLogo className='App-logo' /> */}
      {/* <Form /> */}
    </Container>
  );
}

export default App;
