import "./gora.css"

export default function Gora() {
    return (
        <div className="gora">
            <div className="goraLewo">
            <i className="ikonyGora fa-brands fa-facebook"></i>
            <i class="ikonyGora fa-brands fa-instagram"></i>
            <i class="ikonyGora fa-brands fa-strava"></i>
            </div>
            <div className="goraSrodek">
                <ul className="menu">
                    <li className="pozycjaMenu">Start</li>
                    <li className="pozycjaMenu">O mnie</li>
                    <li className="pozycjaMenu">Kontakt</li>
                    <li className="pozycjaMenu">Wpis</li>
                    <li className="pozycjaMenu">Wyloguj się</li>
                </ul>
            </div>
            <div className="goraPrawo">
                <img className="goraObraz"
                     src="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/176170474_10227315856542089_1592331316775221680_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LCCGuMPW7VIAX8yaYiT&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_4IegTucI_8oqODkxw1LpTaEW6o6ngqOC7nODECJZ_3A&oe=62B08EC5" 
                     alt="" />
                <i className="ikonaSzukania fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}