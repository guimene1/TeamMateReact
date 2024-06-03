import './App.css';
import './assets/css/style.css';
import Lol from './assets/images/lol.jpg';
import Fortnite from './assets/images/fortnite.jpg';
import Valorant from './assets/images/EZNT-QKWkAAd0LM.jpg';
import CS2 from './assets/images/cs222.jpg';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className='body'>


        <section>
          <div className="row center">
            <div id="caixa" className="center flex-wrap">
              <div className="col-md-6  ">
                <Link to='/Fortnite' className="btn btn-jogo"><img src={Fortnite} width="100%"
                  className="img-fluid" /><b>Fortnite</b></Link>
                <br />
                <Link to='/Loll' className="btn btn-jogo" > <img src={Lol} width="100%" className="img-fluid" /><b>League Of
                  Legends</b></Link>
              </div>
              <div className="col-md-6 ">
                <Link to='/Valo' className="btn btn-jogo" ><img src={Valorant} width="100%"
                  className="img-fluid" /><b>Valorant</b></Link>
                <br />
                <Link to='/Count' className="btn btn-jogo"><img src={CS2} width="100%" className="img-fluid" /><b>Counter
                  Strike 2</b></Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row flex-wrap">

            <div className="col-md-12 center">

              <div className="caixa2">
                <h3>Novas Amizades</h3>
                <p>TeamMate, o lugar onde você encontra pessoas e cria boas amizades!
                  Se você está em busca de um grupo ou alguém para jogar, você está no lugar certo.
                </p>
                <h3>Conectando-se Através dos Jogos</h3>
                <p>Nosso objetivo é simples: conectar jogadores de todas as partes do mundo em uma comunidade acolhedora e
                  vibrante. Acreditamos que os jogos não são apenas uma forma de entretenimento, mas também uma plataforma
                  para criar conexões genuínas. Seja você um mestre em estratégia, um atirador habilidoso ou um explorador
                  curioso, há um lugar para você aqui.</p>
                <h3>Diversão Sem Fim</h3>
                <p>Quando se trata de encontrar novas amizades, não há nada como compartilhar experiências emocionantes nos
                  jogos. Aqui você encontrará pessoas que compartilham seus interesses e estão prontas para se
                  juntar a você. Não importa se vocês estarão enfrentando desafios juntos ou apenas se divertindo em uma
                  partida casual, as risadas e os momentos memoráveis são garantidos.</p>


              </div>
            </div>
          </div>





        </section>
        <div className='footer'>
          <div className="row">

            <div className="col-md-12 center">
              <p className="">© Copyright - Direitos Reservados TeamMate</p>
            </div>

          </div>

        </div>


      </div>









    </>
  );
}

export default App;
