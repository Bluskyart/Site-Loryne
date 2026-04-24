import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <div>
                <img className="logo" alt='logo Animae' src={logo}/>
            </div>
            <div class="nav">
                <ul>
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="presentation.html">Présentation</a></li>
                    <li>Activité</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
        <main>
            <section className="section1">
                <img class="illu" alt='image1' src="https://cdn.pixabay.com/photo/2015/05/24/22/33/german-longhaired-pointer-782498_1280.jpg"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laudantium magnam, error sunt deleniti tempora corrupti porro, vitae rerum reiciendis fugit, quia voluptatum quod possimus commodi quisquam? Id, inventore autem.
                Eveniet cupiditate quas optio ex mollitia praesentium corporis velit consequatur ea provident, explicabo reiciendis quasi possimus temporibus in quibusdam voluptatibus iure nisi magni assumenda ratione asperiores amet! In, fugit minus!</p>
            </section>
            <section className="section2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laudantium magnam, error sunt deleniti tempora corrupti porro, vitae rerum reiciendis fugit, quia voluptatum quod possimus commodi quisquam? Id, inventore autem.
                Eveniet cupiditate quas optio ex mollitia praesentium corporis velit consequatur ea provident, explicabo reiciendis quasi possimus temporibus in quibusdam voluptatibus iure nisi magni assumenda ratione asperiores amet! In, fugit minus!</p>
                <img class="illu" alt='image2' src="https://cdn.pixabay.com/photo/2021/07/07/20/05/rabbit-6395213_1280.jpg"/>
            </section>
            <section className="section3">
                <img class="illu" alt='image3' src="https://cdn.pixabay.com/photo/2018/12/16/16/48/hamster-3878853_1280.jpg"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum laudantium magnam, error sunt deleniti tempora corrupti porro, vitae rerum reiciendis fugit, quia voluptatum quod possimus commodi quisquam? Id, inventore autem.
                Eveniet cupiditate quas optio ex mollitia praesentium corporis velit consequatur ea provident, explicabo reiciendis quasi possimus temporibus in quibusdam voluptatibus iure nisi magni assumenda ratione asperiores amet! In, fugit minus!</p>
            </section>
        </main>
        <footer>
            <img className="logo" alt='logo' src={logo}/>
        </footer>
    </div>
  );
}

export default App;
