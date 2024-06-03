import React from "react";
import { Link } from "react-router-dom";

function Cadastro() {
    return (
        <>
            <div className="body">
                <div className="col-md-12 centro">
                    <div className="registro centro">
                        <h2>Registro</h2>
                        <p>Nome de Usuário: <input type="text" placeholder="Usuário" className="inputers" /></p>
                        <p>E-mail: <input type="text" placeholder="Email" className="inputers" /></p>
                        <p>Senha: <input type="password" placeholder="Senha" className="inputers" /></p>
                        <p>Confirmar senha: <input type="password" placeholder="Senha" className="inputers" /></p>
                        <div className="containerflex rows align-items-center justify-content-center col-md-auto">
                            <Link to='/'>
                                <button className="margin" id="btn-roxo"><b>Voltar</b></button>
                            </Link>
                            <Link to='/'>
                                <button className="margin" id="btn-roxo"><b>Cadastrar</b></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="row">
                    <div className="col-md-12 center">
                        <p>© Copyright - Direitos Reservados TeamMate</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;