import LogoEquiX from '../img/LogoEquiX.png';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
    es: {nativeName: 'Español'},
    en: {nativeName: 'English'}
  }

const Navbar = () => {

    const {t, i18n} = useTranslation()

    return (  
        <nav className="navbar">
            <img src={LogoEquiX} alt="Equi-X Logo" />
            <div className="links">
                <ul>
                    <li>
                    <Trans className='translate' i18nKey= 'gallery_trans'>
                        <a href="/" > Galería</a>
                    </Trans>
                    </li>
                    <li>
                    <Trans className='translate' i18nKey= 'contact_trans'>
                        <a href="/Contact"> Contacto</a>
                    </Trans>
                    </li>
                    <li>
                        {Object.keys(lngs).map((lng) => (
                        <button type='submit' key={lng} onClick={() => i18n.changeLanguage(lng)} 
                        disabled={i18n.resolvedLanguage === lng}> {lngs[lng].nativeName}                
                        </button>
                        ))}  
                    </li>                                                                   
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
