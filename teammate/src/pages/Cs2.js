import React from "react";
import { Link } from "react-router-dom";

function Counters() {
    return (
        <>
            <div className="body">
                <div className="col-md-12 center">
                    <div className="col-md-6 ">
                        <div id="caixa3">
                            <div className="container">
                                <h2>Counter-Strike 2</h2>
                                <div className="center" style={{ flexDirection: "column" }}>
                                    <p>Rank: <input placeholder=" *Rank*" style={{ width: "150px" }} /></p>

                                    <div className="custom-select rows flex-wrap" style={{ width: "150px" }}>
                                        <p>Modo:</p>
                                        <select>
                                            <option value="0">Casual</option>
                                            <option value="1">Competitivo</option>
                                        </select>
                                    </div>
                                    <p></p>
                                    <div className="custom-select rows flex-wrap" style={{ width: "150px" }}>
                                        <p>Tamanho da Equipe:</p>
                                        <select>
                                            <option value="0">Dois</option>
                                            <option value="1">Três</option>
                                            <option value="2">Quatro</option>
                                            <option value="3">Cinco</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <p></p>
                            <div className="center" style={{ justifyContent: "space-around" }}>
                                <Link to='/'>
                                    <button id="btn-busca">Cancelar</button>
                                </Link>
                                <Link to='/Busca'>
                                    <button id="btn-busca">Anunciar Busca</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer" style={{ position: "absolute" }}>
                <div className="row">
                    <div className="col-md-12 center">
                        <p>© Copyright - Direitos Reservados TeamMate</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Counters;