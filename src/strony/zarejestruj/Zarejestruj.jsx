import "./zarejestruj.css"


export default function Zarejestruj() {
    return (
        <div className="zarejestruj">
            <span className="zarejestrujTytul">Rejestracja</span>
            <form className="zarejestrujFormularz">
                <label>Nazwa użytkownika:</label>
                <input type="text" className="zarejestrujInput" placeholder="Wprowadź nazwę..." />
                <label>Email:</label>
                <input type="text" className="zarejestrujInput" placeholder="Wprowadź e-mail..." />
                <label>Hasło:</label>
                <input type="password" className="zarejestrujInput"  placeholder="Wprowadź hasło..." />
                <button className="przyciskZarejestruj">Zarejestruj</button>
            </form>
            <button className="przyciskZarejestrujLogin">Zaloguj się</button>
        </div>
    )
}