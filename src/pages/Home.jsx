import { useState } from "react";
import Greetings from "../components/Greetings";

//const user = window.prompt("Qual o seu nome?") || "Visitante";

function Home() {
    const [visitorName, setVisitorName] = useState('');

    return (
        <>
        <div className="name-form">
            <label htmlFor="visitor-name">Quem é o cantor?</label>
            <input type="text" 
            id="visitor-name"
            placeholder="Digite seu nome"
            onChange={(evento) => setVisitorName(evento.target.value)}>
            
            </input>

        </div>

        <Greetings nome={visitorName || "visitante"} />

        <section id="equipe">
            <div className="section-label">Capital Humano</div>
            <h2>Conheça nossa equipe</h2>

            <div></div>

            <div className="team-grid"></div>
        </section>
        </>
    );
}
export default Home;
