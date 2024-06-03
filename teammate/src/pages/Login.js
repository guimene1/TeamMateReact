import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="body">
                <div className="col-md-12 centro flex-wrap">
                    <div className="registro centro ">
                        <h2>Login</h2>

                        <p>E-mail: <input type="text" placeholder="Email" className="inputers" /></p>
                        <p>Senha: <input type="password" placeholder="Senha" className="inputers" /></p>
                        <div className="containerflex rows align-items-center justify-content-center col-md-auto ">
                            <Link to='/'>
                                <button className="margin" id="btn-roxo"><b>Voltar</b></button>
                            </Link>

                            <Link to='/Busca'>
                                <button className="margin" id="btn-roxo"><b>Login</b></button>                        </Link>
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

export default Login;