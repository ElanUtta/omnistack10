import React, { useEffect, useState } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './main.css'

import api from './services/api'
import DevItem from './Components/DevItem/'
import DevForm from './Components/DevForm/'

// Componente: Bloco isolado que retorna um HTML, CSS ou JS, o qual nao interfere no restante  da aplicação
// Propriedade: É passar atributos ao componente, como title, e a função (componente) ira usala como um parametro
// Estado: 


function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      console.log(response.data)

      setDevs(response.data)
    }
    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    // Forma correta de inserir no React
    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>



      </main>
    </div >

  );
}

export default App;
