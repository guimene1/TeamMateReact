import React from 'react';
import { Link } from "react-router-dom";

function Fortnite() {
    return (
        <>
            <div className='body'>
                <div className="col-md-12 center">
                    <div className="col-md-6 ">
                        <div id="caixa3">
                            <div className="container">
                                <h2>Fortnite</h2>
                                <div className="center" style={{ flexDirection: 'column' }}>
                                    <p>Rank: <input placeholder=" *Rank*" style={{ width: '150px' }} /></p>

                                    <div className="custom-select rows flex-wrap" style={{ width: '150px' }}>
                                        <p>Modo:</p>
                                        <select>
                                            <option value="0">Sem Rank</option>
                                            <option value="1">Ranqueado</option>
                                        </select>
                                    </div>
                                    <p></p>
                                    <div className="custom-select rows flex-wrap" style={{ width: '150px' }}>
                                        <p>Equipe:</p>
                                        <select>
                                            <option value="0">Duo</option>
                                            <option value="1">Trio</option>
                                            <option value="2">Squad</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <p></p>
                            <div className="center" style={{ justifyContent: 'space-around' }}>
                                <Link to='/'><button id="btn-busca">Cancelar</button></Link>
                                <Link to='/Busca'><button id="btn-busca">Anunciar Busca</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer' style={{ position: 'absolute' }}>
                <div className="row">
                    <div className="col-md-12 center">
                        <p className="">© Copyright - Direitos Reservados TeamMate</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Fortnite;
