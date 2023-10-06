import logo from '../logo.png';

export default function Headers(){
    return(
        <header>
            <nav>
            <div className="navbar">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="titulo">
                    <li>En Camino Por Patitas</li>
                </div>
            </div>
        </nav>
        </header>
    )
}