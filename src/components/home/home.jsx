import React from "react";
import "./home.css";
import { bussinessName } from "../../constants";
import { numberOfBussiness } from "../../constants";
import photo from "./photo.jpg"
import dots from "./dots.png"
function Home() {
  return (
    <div className="home">
        <div className="text-container">
            <span className="title">
            Encuentra las piezas de autos que necesitas en {bussinessName}
            </span>
            <span className="description">
            Amplio catálogo de productos para tu motocicleta y vehículo
            </span>
        <button className="contact-button" onClick={whatsappClick}>
          WhatsApp
        </button>
        <div className="rating-container">
          <span className="rating">
            {stars.map((star, i) => (
              <span key={`start id-${i}`}>{star}</span>
            ))}
          </span>
          <span className="about">Resortes</span>
          <span className="about">Lujos y emblemas</span>
        </div>
      </div>
      <img src={dots} class="dots-background" alt="dots background"></img>
      <div className="image-container">
            <img
            src={photo}
            alt="Imagen de la landing page"
            class="photo-home"
            />
        </div>
    </div>
  );
}

export default Home;

const svgStar = (
  <svg
    class="star-filled"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 85 84"
    fill="none"
  >
    <g clip-path="url(#clip0_1_127)">
      <path
        d="M29.3505 25.69L7.02054 28.9275L6.62504 29.008C6.02632 29.1669 5.48052 29.4819 5.04336 29.9208C4.6062 30.3597 4.29335 30.9067 4.13675 31.506C3.98016 32.1054 3.98543 32.7355 4.15203 33.3322C4.31863 33.9288 4.64059 34.4705 5.08503 34.902L21.262 50.6485L17.447 72.891L17.4015 73.276C17.3649 73.8952 17.4935 74.5131 17.7741 75.0663C18.0548 75.6195 18.4774 76.0881 18.9987 76.4243C19.52 76.7605 20.1213 76.952 20.7411 76.9794C21.3608 77.0067 21.9766 76.8689 22.5255 76.58L42.4965 66.08L62.422 76.58L62.772 76.741C63.3497 76.9686 63.9776 77.0383 64.5912 76.9432C65.2048 76.848 65.782 76.5913 66.2636 76.1994C66.7452 75.8076 67.114 75.2946 67.332 74.7132C67.5499 74.1318 67.6093 73.5029 67.504 72.891L63.6855 50.6485L79.8695 34.8985L80.1425 34.601C80.5325 34.1207 80.7882 33.5456 80.8836 32.9343C80.9789 32.323 80.9105 31.6973 80.6853 31.1211C80.4602 30.5448 80.0863 30.0385 79.6017 29.6538C79.1172 29.2691 78.5393 29.0197 77.927 28.931L55.597 25.69L45.615 5.46C45.3262 4.87387 44.879 4.3803 44.3242 4.03517C43.7694 3.69003 43.129 3.50711 42.4755 3.50711C41.8221 3.50711 41.1817 3.69003 40.6269 4.03517C40.072 4.3803 39.6249 4.87387 39.336 5.46L29.3505 25.69Z"
        fill="#FACC15"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_127">
        <rect width="84" height="84" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);
const stars = Array(5).fill(svgStar);

const whatsappClick = () => {
  const message = encodeURIComponent(
    `Hola ${bussinessName}, estoy interesad@ en los productos`
  );
  window.open(`https://wa.me/${numberOfBussiness}?text=${message}`, "_blank");
};
