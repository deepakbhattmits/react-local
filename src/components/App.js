import React from 'react';
import ScrollApp from './ScrollApp';
// import GoTop from './GoTop';
import { ReactComponent as SVGLogo } from '../assets/images/logo.svg';
import Form from './Form'
const App = () => {
  return (
    <div className="App-header">
      <header className="">
        <SVGLogo className='App-logo' />
        <div className='alert alert-primary'>Deepak</div>
        <div className='alert alert-danger'>Deepak</div>
        <Form />
        <p>Deepak</p>
        <p>Deepak</p>
        <p>Deepak</p>
        <p>Deepak</p>
        <p>Deepak</p>
        <p>Deepak</p>
        <p>Deepak</p>
        <p>Deepak</p>
        <ScrollApp />
        {/* <GoTop /> */}
      </header>
    </div>
  );
}

export default App;
