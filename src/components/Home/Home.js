import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="margin">
      <section>
        <a href="Anik_Hasan.pdf" download="Anik_Hasan.pdf">
          <button className="btn bg-green-900 text-white font-bold px-4 py-2 rounded-md">
            Download Resume
          </button>
        </a>
      </section>

      <h2 className="text-4xl font-bold text-center md:text-left">
        My Projects
      </h2>
      <section className="grid  grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card w-64 bg-base-100 shadow-xl mt-8 py-2">
          <figure>
            <img src="https://i.ibb.co/2cD7hVf/sbswap.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>This is my recent projects. I ami working on this</p>
            <div className="card-actions justify-end">
              <Link to="https://sb-swap.web.app/">
                <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
                  Visit Website
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-base-100 shadow-xl mt-8 py-2">
          <figure>
            <img src="https://i.ibb.co/X2KVVC7/ahtravels.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>Traveling website</p>
            <div className="card-actions justify-end">
              <Link to="https://ah-travels4u.web.app/">
                <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
                  Visit Website
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-base-100 shadow-xl mt-8 py-2">
          <figure>
            <img src="https://i.ibb.co/n0kQDh0/car.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <p>A car servicing center website. </p>
            <div className="card-actions justify-end">
              <Link to="https://genius-car-4d851.web.app/">
                <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
                  Visit Website
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
