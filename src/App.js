import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// Needed for react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  alternateCaps = (myString) => {

    let myStringArray = myString.split('');
    // let alteredStringArray = myStringArray;

    for (let i=1; i<myStringArray.length; i+=2) {
      // myStringArray[i].toUpperCase();
      // alteredStringArray[i] = myStringArray[i].toUpperCase();
      // console.log(myStringArray[i]);
      // console.log(alteredStringArray[i]);
      myStringArray[i] = myStringArray[i].toUpperCase();
    }

    let newString = myStringArray.join('');
    // console.log(myStringArray);
    console.log(newString);
  }

  render() {
    return (
      <div>
        <div className='jumbotron bg-info'>
          <h1>Alternating Caps App</h1>
        </div>
        <button type='button' className='btn btn-primary' onClick={() => this.alternateCaps('teststring')}>Press me!</button>
      </div>
      
    )
  }
}

export default App;
