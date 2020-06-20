import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
// import Calc from './Calc/Calc';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
          <Header/>
          <Rate/>
         
          <Footer/>

 
      </div>
    );
  }
}

export default App;
