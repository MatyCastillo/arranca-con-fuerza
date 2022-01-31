// import React from "react";
// import "./Footer.css";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="cont">
//         <img
//           className="footer-background d-block w-100"
//           src="./img/Fondo-footer.png"
//           alt="First slide"
//         />
//         <div className="icons">
//           <img
//             src="./img/icons/icono-whatsapp-01.png"
//             alt=""
//             className="icon-1 "
//           />
//           <img
//             src="./img/icons/icono-whatsapp-01.png"
//             alt=""
//             className="icon-1 "
//           />
//           <img
//             src="./img/icons/icono-whatsapp-01.png"
//             alt=""
//             className="icon-1 "
//           />
//         </div>
//       </div>
//       {/* <p className="copyright">
//         © Copyright 2022 Arranca con Fuerza - Todos los derechos reservados
//       </p> */}
//     </footer>
//   );
// }

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col cont">
            <a href="https://www.instagram.com/arrancaconfuerza_cf">
              <img
                src="./img/icons/icono-instagram-01.png"
                alt=""
                className="icon"
              />
            </a>
            <p>@arrancaconfuerza_cf</p>
          </div>
          {/* Column2 */}
          <div className="col cont">
            <a href="https://wa.me/5491144979179?text=Hola!%20Me%20interesa%20obtener%20más%20información%20sobre">
              <img
                src="./img/icons/icono-whatsapp-01.png"
                alt=""
                className="icon"
              />
            </a>
            <p>+541155665587</p>
          </div>
          {/* Column3 */}
          <div className="col cont">
            <a href="">
              <img
                src="./img/icons/icono-email-01.png"
                alt=""
                className="icon"
              />
            </a>
            <p>@arrancaconfuerza@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Arranca con Fuerza - Todos los
            derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
