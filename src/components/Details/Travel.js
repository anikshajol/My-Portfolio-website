import React from "react";

import travel1 from "../../Assets/travelssc1.png";
import travel2 from "../../Assets/travelssc2.png";
import travel3 from "../../Assets/travelssc3.png";

const Travel = () => {
  return (
    <div className="lg:ml-96 mt-52 lg:mt-0">
      <section className="grid grid-cols-1 place-items-center lg:grid-cols-3">
        <img src={travel1} className="h-72 w-72 object-contain" alt="img" />
        <img src={travel2} className="h-72 w-72 object-contain" alt="img" />
        <img src={travel3} className="h-72 w-72 object-contain" alt="img" />
      </section>
      <h2 className="text-3xl text-center">Usage Technology</h2>
      <div className=" w-96 py-2 flex mx-auto ">
        <div className="card-body px-3 ">
          <ul className="list-disc">
            <li>React js</li>
            <li>React Router Dom</li>
            <li>React Toastify</li>
            <li>React Hero icon</li>
            <li>React Photo Viewer</li>
            <li>node.js</li>
            <li>express.js</li>
            <li>Mongo db</li>
          </ul>
        </div>

        <a href="https://ah-travels4u.web.app/">
          <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
            Visit Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default Travel;
