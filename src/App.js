import './App.css';
import Header from './header/Header.jsx';
import Pomodoro from './section/Pomodoro.jsx';
import Sobre from './section/Sobre.jsx';

function App() {
  return (
    <div className="App">
        <Header/>
        <Pomodoro/>
        <Sobre/>
    </div>
  );
}

export default App;
