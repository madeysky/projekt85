import "./pasekBoczny.css";

export default function PasekBoczny() {
  return (
    <div className="pasekboczny">
      <div className="elementPaska">
        <span className="tytulWPasku">O MNIE</span>
        <img src="https://scontent.fktw4-1.fna.fbcdn.net/v/t39.30808-6/244441939_10228385981854553_8291135463279452908_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5XPFco-z9EYAX9IFDnK&_nc_ht=scontent.fktw4-1.fna&oh=00_AT_ygmi1qKpa7AfsP4QzvRdLloz5rFYMiTpLMN8Ff2x7mg&oe=62922C32" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="elementPaska">
        <span className="tytulWPasku">KATEGORIE</span>
        <ul className="listaWPasku">
          <li className="elementListyWPasku">Rower</li>
          <li className="elementListyWPasku">Bieganie</li>
          <li className="elementListyWPasku">Morsowanie</li>
          <li className="elementListyWPasku">Sprzęt</li>
          <li className="elementListyWPasku">Krwiodawstwo</li>
          <li className="elementListyWPasku">Dieta</li>
        </ul>
      </div>
 
      <div className="elementPaska">
      <span className="tytulWPasku">OBSERWUJ MNIE</span>
      <div className="spolecznoscioweWPasku">
            <i className="ikonyWPasku fa-brands fa-facebook"></i>
            <i class="ikonyWPasku fa-brands fa-instagram"></i>
            <i class="ikonyWPasku fa-brands fa-strava"></i>
      </div>

      </div>
    </div>
  )
}

