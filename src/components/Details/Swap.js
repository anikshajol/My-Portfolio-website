import React from "react";

import swapsc1 from "../../Assets/swapsc1.png";
import swapsc2 from "../../Assets/swapsc2.png";
import swapsc3 from "../../Assets/swapsc3.png";

const Swap = () => {
  return (
    <div className="lg:ml-96 mt-52 lg:mt-0">
      <section className="grid grid-cols-1 place-items-center lg:grid-cols-3">
        <img src={swapsc1} className="h-72 w-72 object-contain" alt="img" />
        <img src={swapsc2} className="h-72 w-72 object-contain" alt="img" />
        <img src={swapsc3} className="h-72 w-72 object-contain" alt="img" />
      </section>
      <h2 className="text-3xl text-center">Usage Technology</h2>
      <div className=" w-96 py-2 flex mx-auto ">
        <div className="card-body px-3 ">
          <ul className="list-disc">
            <li>React js</li>
            <li>React Router Dom</li>
            <li>React Toastify</li>
            <li>React Hero icon</li>
            <li>Lottie</li>
            <li>React-hot-toast</li>
            <li>Tanstack-React-Query</li>
            <li>stripe</li>
            <li>Moment date picker</li>
            <li>node.js</li>
            <li>express.js</li>
            <li>Mongo db</li>
          </ul>
        </div>
        <a href="https://sb-swap.web.app">
          <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
            Visit Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default Swap;
