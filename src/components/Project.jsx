import React from "react";

// Contants
// import {ConstProjects} from "../constants/index"

// Icons
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

// import Atropos component
import Atropos from "atropos/react";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Project 1 description",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project 2 description",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Project 3 description",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Project 4 description",
    },
    {
      id: 5,
      title: "Project 5",
      description: "Project 5 description",
    },
    {
      id: 6,
      title: "Project 6",
      description: "Project 6 description",
    },
  ];

  const img1 =
    "https://images.pexels.com/photos/15174803/pexels-photo-15174803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div
      id="app"
      className="mx-2 my-2 p-1 items-center transition-all duration-200 delay-0 ease-in-out"
    >
      <h3 className="text-center mb-8 font-extrabold text-2xl font-fa">Projects ✔️</h3>
      <div className="grid grid-cols-3 gap-10 ">
        {projects.map((project, index) => (
          <Atropos
            key={project.id}
            id={project.id}
            className="w-60 drop-shadow-lg"
            activeOffset={20}
            rotateXMax={10}
            rotateYMax={10}
            shadow="false"
            shadowOffset={5}
            shadowScale={1}
          >
            {/* <img src={img1} alt="" className="billboard" data-atropos-offset="-5" /> */}
            <div className="card card-compact w-60 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.qmillwright.com/wp-content/uploads/2019/05/Project-Management-Post.jpg"
                  alt="Shoes"
                  data-atropos-offset="0"
                  className=""
                />
              </figure>
              <div className="card-body flex items-center justify-center">
                <h2 className="card-title text-skypy" data-atropos-offset="5">
                  {project.title}
                </h2>
                <p
                  className="text-xs text-center text-[#EEEEEE] font-light"
                  data-atropos-offset="5"
                >
                  {project.description}
                </p>
              </div>
              <div className="card-actions flex gap-2 justify-between mx-4 my-4 pt-2 border-t border-slate-600">
                <div className="flex flex-1 relative">
                  <a
                    href="www.github.com"
                    target="_blank"
                    data-atropos-offset="20"
                  >
                    <i className="fa-brands fa-github fa-shake fa-lg text-blue-600 hover:text-blue-400 absolute top-[14px]"></i>
                  </a>
                  <a href="www.github.com" target="_blank">
                    <button
                      className="absolute left-8 text-white bg-blue-700 p-2 rounded-md text-xs"
                      data-atropos-offset="20"
                    >
                      For More
                    </button>
                  </a>
                </div>
                <a href="www.github.com" target="_blank">
                  <ArrowTopRightOnSquareIcon
                    className="h-6 w-6 text-blue-600 hover:text-blue-400"
                    data-atropos-offset="20"
                  />
                </a>
              </div>
            </div>
          </Atropos>
        ))}
      </div>

      {/* Atropos */}
      {/* <Atropos
        className="w-60 drop-shadow-lg"
        activeOffset={20}
        rotateXMax={10}
        rotateYMax={10}
        shadow="false"
        shadowOffset={5}
        shadowScale={1}
      >
        <div className="card card-compact w-60 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.qmillwright.com/wp-content/uploads/2019/05/Project-Management-Post.jpg"
              alt="Shoes"
              data-atropos-offset="0"
              className=""
            />
          </figure>
          <div className="card-body flex items-center justify-center">
            <h2 className="card-title text-skypy" data-atropos-offset="5">
              Instagram Clone
            </h2>
            <p
              className="text-xs text-center text-[#EEEEEE] font-light"
              data-atropos-offset="5"
            >
              Veniam magna laborum occaecat pariatur eu sint non dolor.
            </p>
          </div>
          <div className="card-actions flex gap-2 justify-between mx-4 my-4 pt-2 border-t border-slate-600">
            <div className="flex flex-1 relative">
              <a href="www.github.com" target="_blank" data-atropos-offset="20">
                <i className="fa-brands fa-github fa-shake fa-lg text-blue-600 hover:text-blue-400 absolute top-[14px]"></i>
              </a>
              <a href="www.github.com" target="_blank">
                <button
                  className="absolute left-8 text-white bg-blue-700 p-2 rounded-md text-xs"
                  data-atropos-offset="20"
                >
                  For More
                </button>
              </a>
            </div>
            <a href="www.github.com" target="_blank">
              <ArrowTopRightOnSquareIcon
                className="h-6 w-6 text-blue-600 hover:text-blue-400"
                data-atropos-offset="20"
              />
            </a>
          </div>
        </div>
      </Atropos> */}
    </div>
  );
}

export default Project;
