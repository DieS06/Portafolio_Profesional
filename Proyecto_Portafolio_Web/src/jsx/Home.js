import { useState } from "react";
import "../css/home.css";
import Navbar from "./Navbar";
import Services from "./Services";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Juan', id: 1},
    { title: 'Welcome party', body: 'lorem ipsum...', author: 'Diego', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Juan', id: 3}
  ]);

  return (
    <div className="home">
      <Navbar/>
      {/* SHOWREEL */}
      <div className="demo-reel">
        <h2>Demoreel</h2>
      </div>
      {/*----------*/}
      <div className="content">
      <div className="listing-blog">
        <BlogList blogs={blogs} />
      </div>
        <div className="services-sec">
          <Services/>
        </div>
      </div>
    </div>
  );
};

export default Home;
