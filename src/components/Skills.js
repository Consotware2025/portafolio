import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>Estas son algunas de mis principales habilidades y tecnologías que domino en el ámbito del desarrollo backend y frontend.<br></br> Desde la gestión de servidores hasta el desarrollo de interfaces modernas y escalables.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Laravel" />
                  <h5>Laravel-PHP</h5>
                </div>                
                <div className="item">
                  <img src={meter3} alt="Node.js" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Vue.js" />
                  <h5>Vue.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="MongoDB" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Redis" />
                  <h5>Redis</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="PostgreSQL" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="GitLab" />
                  <h5>GitLab</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="GitHub" />
                  <h5>GitHub</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Docker" />
                  <h5>Docker</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Kubernetes" />
                  <h5>Kubernetes</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
