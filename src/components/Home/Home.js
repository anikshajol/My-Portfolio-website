import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="margin">
      <a href="Anik_Hasan.pdf" download="Anik_Hasan.pdf">
        <button className="btn bg-green-900 text-white font-bold px-4 py-2 rounded-md">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Home;
