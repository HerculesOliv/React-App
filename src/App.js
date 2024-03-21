import React, {useStats, useEffect, useState} from 'react'
import './App.css';

function App() {
  const [numero1, setnumero1] = useState(0);
  const [numero2, setnumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setoperacao] = useState('somar');

  return (
    <div>
      <h1>Calculadora React</h1>
      <label>Primeiro Numero</label>
      <input 
        type="number"
        value={numero1}
        onChange={(0) => setnumero1(e.target.value)} />
      
      <label>Segundo Numero</label>
      <input 
        type="number"
        value={numero2}
        onChange={(0) => setnumero2(e.target.value)} />

      <select>
        <option>Somar</option>
        <option>Subtrair</option>
        <option>MUltiplicar</option>
        <option>dividir</option>
      </select>

      <label>Resultado 0</label>
    </div>
  );
}

export default App;
