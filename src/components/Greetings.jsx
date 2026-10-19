export default function Greetings() {
    return (
        <>
            <style>{`
                .greeting {
                    max-width: 680px;
                    margin: 4rem 0 2.5rem;
                }

                .greeting__eyebrow {
                    color: #5eead4;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .greeting h1 {
                    color: #f8fafc;
                    font-size: clamp(2.56rem, 5vw, 4rem);
                    line-height: 1.05;
                    margin: 0.7rem 0 1rem;
                }

                .greeting p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin: 0;
                }
            `}</style>
            <section className="greeting">
                <p className="greeting__eyebrow">React - Primeiros passos</p>
                <h1>Visitante, Seja bem-Vindo(a)!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptatem, sunt voluptates corporis voluptatum consectetur animi minus minima quibusdam aut inventore tempora facere, cum quaerat delectus dolore porro. Esse, necessitatibus.</p>
            </section>
        </>
    );
}

