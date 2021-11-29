import React, { useSatate } from 'react';
import { render } from 'react-dom';

// const Saludo = () => {
//   const idioma = 'es';
//   return <div>{idioma === 'es' ? <p> Hola </p> : <p> Hello</p>}</div>;
// };

// const nombres = ['uriel', 'Eduardo', 'Marines', 'Cody'];

// function getNombres() {
//   const elementosLista = [];
//   for (var i = 0; i < nombres.length; i++) {
//     elementosLista.push(<li>{nombres[i]}</li>);
//   }
//   return elementosLista;
// }

// const Nombres = () => {;
// return <ul>{ getNombres() }</ul>
// }

// class App extends Component {
//   render() {
//     return <h1>Hola Mundo </h1>;
//   }
// }

const Button = () => {
  const [counter, setcounter] = useSatate(0);
  return (
    <div>
      <p> Presionado : { counter } </p>
      <button onClick={()=>console.log(":3")}> Click me!</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

render(<App />, document.getElementById('root'));
