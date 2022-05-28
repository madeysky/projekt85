import Naglowek from "../../naglowek/Naglowek"
import PasekBoczny from "../../pasekboczny/PasekBoczny"
import Posty from "../../posty/Posty"
import "./domowa.css"


export default function Domowa() {
  return (
    <>
    <Naglowek/>
    <div className="domowa">
         <Posty/>
         <PasekBoczny/>
    </div>
    </>   
  );
}
