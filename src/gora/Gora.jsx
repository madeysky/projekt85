import "./gora.css"

export default function Gora() {
    return (
        <div className="gora">
            <div className="goraLewo">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="goraSrodek">
                <ul className="menu">
                    <li className="pozycjaMenu">Start</li>
                    <li className="pozycjaMenu">O mnie</li>
                    <li className="pozycjaMenu">Kontakt</li>
                    <li className="pozycjaMenu">Napisz</li>
                </ul>
            </div>
            <div className="goraPrawo">P</div>
        </div>
    )
}