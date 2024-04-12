import "../css/home.css";
import Navbar from "./Navbar";
import Services from "./Services";
import AboutMe from "./About";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      {/* SHOWREEL */}
      <div className="demo-reel">
        <h2>Demoreel</h2>
      </div>
      {/*----------*/}
      <div className="content">
      {/*ABOUT ME SECTION*/}
      <section className="about-sec">
      <AboutMe/>
      </section>
      {/*SERVICES SECTION - GALLERY*/}
      <section className="services-sec">
        <Services/>
      </section>
      {/*EXPERIENCE SECTION*/}
      <section className="experience-sec">

      </section>
      </div>
    </div>
  );
};

export default Home;
