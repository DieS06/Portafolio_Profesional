import LogoEquiX from '../img/LogoEquiX.png';

const Navbar = () => {

    return (  
        <nav className="navbar">
            <img src={LogoEquiX} alt="Equi-X Logo" />
            <div className="links">
                <ul>
                    <li>
                        <a href="/about/"> Sobre mí</a>
                    </li>
                    <li>
                        <a href="/experience/"> Experiencia</a>
                    </li>
                    <li>
                        <a href="/services/"> Servicios</a>
                    </li> 
                    <li>
                        <a href="/contact/"> Contacto</a>
                    </li>                                                                    
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
