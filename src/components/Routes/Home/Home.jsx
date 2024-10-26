import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active"></div>
          <div className="carousel-item"></div>
          <div className="carousel-item"></div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="services">
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/hb20.png"></img>
          <div className="texts">
            <h2>HB20</h2>
            <p>HB20 2024 4P AUTOMÁTICO</p>
            <button>ALUGAR</button>
          </div>
        </div>

        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/JETTA-removebg-preview.png"></img>
          <div className="texts">
            <h2>JETTA</h2>
            <p>JETTA 2.O 4P 4AUTOMÁTICO</p>
            <button>ALUGAR</button>
          </div>
        </div>

        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/golf-removebg-preview.png"></img>
          <div className="texts">
            <h2>GOLF</h2>
            <p>GOLF GLI 2.0 4P AUTOMATICO</p>
            <button>ALUGAR</button>
          </div>
        </div>

        <div className="card">
          <div className="ionicon">
            <img src="src/assets/images-removebg-preview.png"></img>
          </div>
          <div className="texts">
            <h2>JEEP RENEGADE</h2>
            <p>Renegade 4x4 4p Mecanico</p>
            <button>ALUGAR</button>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van verde.png"></img>
          <div className="texts">
            <h2>VAN BEN10</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
            <button>ALUGAR</button>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van preta.png"></img>
          <div className="texts">
            <h2>VAN RENAULT</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
            <button>ALUGAR</button>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van branca.png"></img>
          <div className="texts">
            <h2>VAN HYUNDAI</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
            <button>ALUGAR</button>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/van azul.png"></img>
          <div className="texts">
            <h2>VAN BIGBLUE</h2>
            <p>1.3 FIREFLY FLEX RANCH CD CVT</p>
            <button>ALUGAR</button>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>
          <img src="src/assets/Nova-YAMAHA-XT-660-20151-removebg-preview.png"></img>

          <div className="texts">
            <h2>XT 660</h2>
            <p>660 CC</p>
            <button>ALUGAR</button>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>

          <img src="src/assets/download-85-removebg-preview.png"></img>
          <div className="texts">
            <h2>XTZ LANDER</h2>
            <p>250cc</p>
            <button>ALUGAR</button>
          </div>
        </div>
        <div className="card">
          <div className="ionicon"></div>

          <img src="src/assets/ac83fa20-bmw-s-1000rr-modelo-2024-branca-com-detalhes-em-azul-preto-vermelho-de-frente-estatica-no-estudio-removebg-preview.png"></img>
          <div className="texts">
            <h2>S-1000RR</h2>
            <p>1000cc</p>
            <button>ALUGAR</button>
          </div>
        </div>

        <div className="card">
          <div className="ionicon">
            <img src="src/assets/png-clipart-honda-elite-scooter-motorcycle-car-honda-scooter-car-removebg-preview.png"></img>
            <img src=""></img>
            <div className="texts">
              <h2>ELITE</h2>
              <p>125cc</p>
              <button>ALUGAR</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-12 col-md-2 d-flex flex-column flex-md-row align-items-center justify-content-center"> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
