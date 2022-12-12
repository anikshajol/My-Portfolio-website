import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className=" lg:ml-96">
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
      <section className="grid grid-cols-1 place-items-center lg:place-items-start lg:grid-cols-3 gap-4">
        <div className="card w-64 bg-base-100 shadow-xl mt-8 py-2">
          <figure>
            <img
              src="https://i.ibb.co/2cD7hVf/sbswap.png"
              className="h-56"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>This is my recent projects. I ami working on this</p>
            <div className="card-actions justify-end">
              <Link to="/swap-projects">
                <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-base-100 shadow-xl mt-8 py-2">
          <figure>
            <img
              src="https://i.ibb.co/X2KVVC7/ahtravels.png"
              className="h-60"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>Traveling website</p>
            <div className="card-actions justify-end">
              <Link to="/travel-projects">
                <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-base-100 shadow-xl mt-8 py-2">
          <figure>
            <img
              src="https://i.ibb.co/n0kQDh0/car.png"
              className="h-60"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <p>A car servicing center website. </p>
            <div className="card-actions justify-end">
              <Link to="/car-service-projects">
                <button className="btn bg-green-900 text-white font-bold cursor-pointer px-6 py-2 rounded-md mt-4">
                  See More
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
