import React, { useEffect, useState } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './componentes/DevItem';
import DevForm from './componentes/DevForm';


//componente função que retorna algum conteudo html, bloco isolado de html,css,js

//app é um componente
function App() {

  const [devs, setDevs] = useState([]);
  
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();

  }, []);

  async function handleAddDev(data) {
   
    const response = await api.post('/devs', data)   
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onsubmit= {handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>

  );
}
export default App;
