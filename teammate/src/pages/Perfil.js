import React from 'react';
import Jake from '../assets/images/jake.jpg';

function Perfil() {
    return (
        <>
            <div className='body'>
                <section>
                    <div className="row">
                        <div className="col-md-12 center">
                            <div className="perfil start">
                                <div className="container">
                                    <h2><b>Perfil</b></h2>
                                    <img src={Jake} width="200px" alt="Jake" />
                                    <p></p>
                                    <p><b>Nome:</b><input type="text" placeholder="NicknameExemplo" /></p>
                                    <p><b>Email:</b><input type="email" placeholder="EmailExemplo" /></p>
                                    <p><b>Senha:</b><input type="password" placeholder="*****" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='footer'>
                <div className="row">
                    <div className="col-md-12 center">
                        <p>© Direitos Reservados TeamMate</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perfil;