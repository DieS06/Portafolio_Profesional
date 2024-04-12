import { useState } from "react";
import "../css/home.css";

const Services = () => {
  const [showWork3D, setshowWork3D] = useState(false);
  const [showWorkProg, setshowWorkProg] = useState(false);
  const [showWorkDesign, setshowWorkDesign] = useState(false);

  const GeneralistClick = () => {
    setshowWork3D(!showWork3D);
  };

  const ProgrammerClick = () => {
    setshowWorkProg(!showWorkProg);
  };

  const DesignClick = () => {
    setshowWorkDesign(!showWorkDesign);
  };

  return (
    <div className="services">
      <h2> Services </h2>
      <div className="btn-space">
        <div className="btn-Service">
          <button id="btn-Service" onClick={GeneralistClick}>
            {" "}
            3D Generalist{" "}
          </button>
          {showWork3D && <div className="showReel">{/* Work Showreel */}</div>}
          {/* Add url reference */}
          <a href="/">
            <button>More...</button>
          </a>
        </div>
        <div className="btn-Service">
          <button id="btn-Service" onClick={ProgrammerClick}>
            {" "}
            Software Engineering{" "}
          </button>
          {showWorkProg && <div className="showReel">{/* Work Showreel*/}</div>}
          {/* Add url reference */}
          <a href="/">
            <button>More...</button>
          </a>
        </div>
        <div className="btn-Service">
          <button id="btn-Service" onClick={DesignClick}>
            {" "}
            Design{" "}
          </button>
          {showWorkDesign && (
            <div className="showReel">{/* Work Showreel*/}</div>
          )}
          {/* Add url reference */}
          <a href="/">
            <button>More...</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
