import {useState} from 'react'
import './app.css'

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [msg, setMsg] = useState('');

  function calcIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 16) {
      setMsg("Classificação: Magreza grau III. Resultado IMC: " + imc.toFixed(2));
    } else if(imc >= 16 && imc < 16.9) {
        setMsg("Classificação: Magreza grau II. Resultado IMC: " + imc.toFixed(2));
    } else if(imc >= 17 && imc < 18.4) {
        setMsg("Classificação: Magreza grau I. Resultado IMC: " + imc.toFixed(2));
    } else if(imc >= 18.5 && imc < 24.9) {
        setMsg("Classificação: Adequado. Resultado IMC: " + imc.toFixed(2));
    } else if(imc >= 25 && imc < 29.9) {
        setMsg("Classificação: Pré-obeso. Resultado IMC: " + imc.toFixed(2));
    } else if(imc >= 30 && imc < 34.9) {
        setMsg("Classificação: Obesidade grau I. Resultado IMC: " + imc.toFixed(2));
    } else if(imc >= 35 && imc < 39.9) {
        setMsg("Classificação: Obesidade grau II. Resultado IMC: " + imc.toFixed(2));
    } else {
        setMsg("Classificação: Obesidade grau III. Resultado IMC: " + imc.toFixed(2))
    }
  }

  return(

    <div className="app">

      <h1>Calculadora IMC</h1>

      <span>Preencha os campos para calcular o seu IMC</span>

      <div className="area-input">

        <input type="text" 
        placeholder="Peso em (kg) Ex: 90" 
        value={peso}
        onChange={ (e) => setPeso(e.target.value)}
        >
        </input>

        <input type="text" 
        placeholder="Altura em (cm) Ex: 180" 
        value={altura}
        onChange={ (e) => setAltura(e.target.value)}
        >
        </input>

        <button onClick={calcIMC}>Calcular</button>

      </div>

      <h2>{msg}</h2>

    </div>
  )
}