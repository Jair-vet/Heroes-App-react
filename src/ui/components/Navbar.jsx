import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true // Evita que regresemos a la pagina anterior
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand navbar-title" 
                to="/">
                HeroesApp
            </Link>

            <div className="navbar-collapse text-center">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/dc">
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/search">
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 logout-button">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary ">
                        Jair Aceves
                    </span>

                    <button
                        className="btn border border-primary nav-item nav-link"
                        onClick={ onLogout }>
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}