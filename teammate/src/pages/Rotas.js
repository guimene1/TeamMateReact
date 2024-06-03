import { Outlet, Link } from "react-router-dom";
import '../assets/css/style.css';


const Rotas = () => {
  return (
    <>
      <div className="header d-flex flex-wrap transparente ">

      <ul className="nav col-12 ">
        <div class="container">
          <div class="col-md-12 rows  flex-wrap">
            <div class="col-md-4 rows">
              <li><Link to='/' className='nav-link'><b>Home</b></Link></li>
              <li><Link to='/Busca' className="nav-link"><b>Salas</b></Link></li>
              <li><Link to='/Amigos' class="nav-link "><b>Amigos</b></Link></li>
              <li><Link to='/Perfil' class="nav-link "><b>Perfil</b></Link></li>
            </div>
            <div class="col-md-5"></div>
            <div class="col-md-2">
              <Link to='/Loginn'> <button type="button" id="btn-roxo"><b>Login</b></button></Link>
              <Link to='/Registrar'> <button type="button" id="btn-roxo"><b>Cadastrar</b></button></Link>
            </div>
          </div>

        </div>
      </ul>
    </div >

      <Outlet />
    </>
  )
};

export default Rotas;