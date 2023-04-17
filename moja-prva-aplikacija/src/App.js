import logo from './logo.svg';
import './App.css';
import person from './utilities/person';
import {pi, broj1, broj2, imeAplikacije, sum, oduzmi} from './utilities/index'
//import {sum, pi, imeAplikacije, num1 as broj1, num2 as broj2 } from './utilities/utility'


function App() {
  var zbroj = sum(10,12) * pi + (broj1 * broj2);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {imeAplikacije}, {zbroj}, {person.name}, Godine: {person.godine}
        </a>
      </header>
    </div>
  );
}

export default App;
