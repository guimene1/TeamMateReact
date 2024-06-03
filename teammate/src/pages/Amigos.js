import React from "react";
import Luffy3 from "../assets/images/luffy3.jpg";
import Wally from "../assets/images/wallywalrus.jpg";
import Grag from "../assets/images/gragas.jpg";

function Amigos() {
    return (
        <>
            <div className="body">
                <section>
                    <div className="row">
                        <div className="col-md-12 center">
                            <div className="perfil flex-wrap">
                                <div className="container perfil ">
                                    <h2><b>Lista de Amigos</b></h2>
                                    <div style={{ alignItems: "center" }}>
                                        <div className="rows">
                                            <img src={Luffy3} width="120px" className="img-fluid" alt="Amigo1" />
                                            <div className="padding">
                                                <p>Amigo1</p>
                                                <p>Offline: 47 dias.</p>
                                                <button id="btn-chat">Chat</button>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="rows">
                                            <img src={Wally} width="120px" className="img-fluid" alt="Amigo2" />
                                            <div className="padding">
                                                <p>Amigo2</p>
                                                <p>Offline: 3 dias.</p>
                                                <button id="btn-chat">Chat</button>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="rows">
                                            <img src={Grag} width="120px" className="img-fluid" alt="Amigo3" />
                                            <div className="padding">
                                                <p>Amigo3</p>
                                                <p>Offline: 3 dias.</p>
                                                <button id="btn-chat">Chat</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="footer">
                    <div className="row">
                        <div className="col-md-12 center">
                            <p>© Direitos Reservados TeamMate</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Amigos;
