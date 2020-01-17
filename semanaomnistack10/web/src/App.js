import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  navegator.geolocation.getCurrentPosition();
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
        <main>
          <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/17932237?s=460&v=4" alt="Priscila Rebouças" ></img>
            <div className="user-info">
              <strong>Priscila Rebouças</strong>
              <span>React, React Native</span>
              </div>
            </header>
            <p>Analista de Sistemas .net</p>
            <a href="https://github.com/PriscilaReboucas/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/17932237?s=460&v=4" alt="Priscila Rebouças" ></img>
            <div className="user-info">
              <strong>Priscila Rebouças</strong>
              <span>React, React Native</span>
              </div>
            </header>
            <p>Analista de Sistemas .net</p>
            <a href="https://github.com/PriscilaReboucas/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/17932237?s=460&v=4" alt="Priscila Rebouças" ></img>
            <div className="user-info">
              <strong>Priscila Rebouças</strong>
              <span>React, React Native</span>
              </div>
            </header>
            <p>Analista de Sistemas .net</p>
            <a href="https://github.com/PriscilaReboucas/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/17932237?s=460&v=4" alt="Priscila Rebouças" ></img>
            <div className="user-info">
              <strong>Priscila Rebouças</strong>
              <span>React, React Native</span>
              </div>
            </header>
            <p>Analista de Sistemas .net</p>
            <a href="https://github.com/PriscilaReboucas/">Acessar perfil no Github</a>
          </li>
          </ul>
        </main>
    </div>

  );
}
export default App;
