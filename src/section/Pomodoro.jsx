import './section.css';
import './pomodoro.css';
// import Configuracao from './Configuracao.jsx';
import './configuracao.css';
import Btn from '../components/buttons/Btn.jsx';
import BtnPlay from '../components/buttons/BtnPlay.jsx';
import BtnPause from '../components/buttons/BtnPause.jsx';
import React, {useState} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Pomodoro () {
    const percentage = 66;

    // Mostrar menu de configurações
    const [configuracao, setConfiguracao] = useState(false);
    const ShowConfiguracao = ()=>{
        configuracao ? setConfiguracao(false) : setConfiguracao(true);
        console.log(configuracao);
    }

    return (
        <section id='section-pomodoro'>

            <div id='container-timer'>
                <CircularProgressbar value={60} text={`${percentage}%`} styles={buildStyles({
                    // pathColor: `rgba(224, 84, 84, ${percentage / 100})`,
                    pathColor: `#e05454`,
                    textColor: 'white',
                    trailColor: '#e1e4e8',
                })}/>
            </div>

            <div id="container-buttons">
                <BtnPlay/>
                <BtnPause/>
            </div>
            
            <Btn btn_click={ShowConfiguracao} btn_text='Configuração'/>   
            <section id='section-configuracao' className={configuracao? '' : 'hide-configuracao'}>
                <div id='container-configuracao'>
                    <h1>Configurações</h1>
                    <p>Configuração 1</p>
                    <p>Configuração 2</p>
                    <p>Configuração 3</p>
                    <p>Configuração 4</p>
                    <Btn btn_click={ShowConfiguracao} btn_text='Fechar'></Btn>
                </div>
            </section>       

        </section>
        
    )
}

export default Pomodoro