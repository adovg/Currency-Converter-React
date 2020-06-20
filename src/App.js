import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
          <Header/>

          <div className="container">
            <main>
            <Router>
              <Switch>
                <Route exact path='/' component={Rate} />
                <Route exact path='/about' component={About} />
               <Rate/>
              </Switch> 
            </Router>    
            </main>
          </div>
          
          <div class="container" id="cookie_info">
	          <div class="site-content">
		          <div class="well">
			          На нашем сайте мы используем куки для информации технического характера.<br/>
                Для персанофицированной работы обрабатываем ip региона вашего местоположения 
                <button href="" class="btn"></button>
		          </div>
	          </div>
          </div>
         
          <Footer/>

 
      </div>
    );
  }
}

export default App;
