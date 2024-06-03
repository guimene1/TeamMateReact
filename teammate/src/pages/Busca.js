import React, { useEffect, useState } from 'react';

function Salas() {
    const [numeroSalas, setNumeroSalas] = useState(1);
    const [numeroSalas1, setNumeroSalas1] = useState(3);
    const [numeroSalas2, setNumeroSalas2] = useState(3);


    useEffect(() => {
        const timer1 = setTimeout(() => {
            setNumeroSalas(prevState => prevState + 1);
        }, 3000);
        const timer2 = setTimeout(() => {
            setNumeroSalas1(prevState => prevState + 1);
        }, 5000);

        const timer3 = setTimeout(() => {
            setNumeroSalas2(prevState => prevState + 1);
        }, 7000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);
    return (
        <>
            <div className='body'>
                <section>
                    <div className="center">
                        <div id="caixa3">
                            <div className="container">
                                <div className="row">
                                    <h2>Salas Disponíveis</h2>
                                    <div className="col-md-8">
                                        <p>Fortnite Usuários {numeroSalas}/2 <button id="btn-busca" style={{ height: '30px', margin: '2px' }}>Entrar</button></p>
                                        <p>Valorant Usuários {numeroSalas1}/5 <button id="btn-busca" style={{ height: '30px', margin: '2px' }}>Entrar</button></p>
                                        <p>CS2 Usuários {numeroSalas2}/5 <button id="btn-busca" style={{ height: '30px', margin: '2px' }}>Entrar</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className='footer'>
                <div className="row">

                    <div className="col-md-12 center">
                        <p className="">© Direitos Reservados TeamMate</p>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Salas;