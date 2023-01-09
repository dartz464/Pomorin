import './App.css';
import Header from './header/Header.jsx';
import Pomodoro from './section/Pomodoro.jsx';
import Sobre from './section/Sobre.jsx';
import Novidades from './section/Novidades.jsx';
import Footer from './footer/Footer.jsx';

function App() {
  return (
    <div className="App">
        <Header/>
        <Pomodoro/>
        <Sobre/>
        <Novidades/>
        <Footer/>
    </div>
  );
}

export default App;
