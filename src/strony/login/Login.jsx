import "./login.css"


export default function Login() {
    return (
        <div className="login">
            <span className="loginTytul">Logowanie</span>
            <form className="loginFormularz">
                <label>Email:</label>
                <input type="text" className="loginInput" placeholder="Wprowadź e-mail..." />
                <label>Hasło:</label>
                <input type="password" className="loginInput"  placeholder="Wprowadź hasło..." />
                <button className="przyciskLogin">Zaloguj się</button>
            </form>
            <button className="przyciskLoginZarejestruj">Zarejestruj się</button>
        </div>
    )
}