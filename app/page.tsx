"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Logo from "@/public/Logo.png";
import Profile from "@/public/profile.png";
import ll from "@/public/Design team.gif";
import web from "@/public/Website Creator-bro.svg";
import Link from "next/link";
export default function page() {
  return (
    <div className=" h-[100vh] w-[100vw] grid grid-flow-col grid-cols-6 max-md:grid-cols-3 overflow-hidden border-slate-900">
      <div className=" border-4 border-slate-900 bg-continer mt-2 h-[98vh] border-special  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm col-span-1 max-md:col-span-1 shadow-md shadow-black  flex flex-col items-center justify-between">
        <Image
          src={Profile}
          alt="Picture of the author"
          className=" rounded-full h-40 w-40 m-2 border-slate-900 border-2"
        />
        {/* background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23015f77' fill-opacity='1'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E"); */}
        <div className="w-full">
          <div className="w-full px-2  flex justify-center text-white items-center">
            <Link
              href={"/"}
              className=" font-bold font-sans bg-slate-900  italic  w-full mb-1 rounded-md text-center  flex-grow border-2 border-slate-900 "
            >
              #Home
            </Link>
          </div>
          <div className="w-full px-2 flex justify-center items-center">
            <Link
              href={"/Technologys"}
              className=" font-bold font-sans italic  w-full mb-1 rounded-md text-center  flex-grow border-2 border-slate-900 "
            >
              #Technologys
            </Link>
          </div>
          <div className="w-full px-2 flex justify-center items-center">
            <Link
              href={"/Projects"}
              className=" font-bold font-sans italic  w-full mb-1  rounded-md text-center  flex-grow border-2 border-slate-900 "
            >
              #Projects
            </Link>
          </div>
          <div className="w-full px-2 flex justify-center items-center">
            <Link
              href={"/Contact"}
              className=" font-bold font-sans italic  w-full mb-1 rounded-md text-center  flex-grow border-2 border-slate-900 "
            >
              #Home
            </Link>
          </div>
        </div>
      </div>

      <div className="  border-4 border-slate-900 text-slate-950 rounded  shadow-lg shadow-black  col-span-5 max-md:col-span-2 overflow-scroll flex  lg:flex-col md:flex-row  overflow-y-scroll no-scrollbar scroll-smooth  m-2  border-l-cyan-950 flex-wrap ">
        <div className="  w-full justify-center items-center align-middle  flex md:flex-row  flex-col flex-wrap flex-grow">
          <div className="flex items-center  justify-center flex-col flex-grow mt-2 mx-2 lg:w-4/12">
            <div className=" lg:text-6xl text-4xl font-bold text-cyan-900  my-4">
              Hey There 👋,
            </div>
            <div className=" text-start">
               Lorem ipsum, dolor sit
              <div className="inline-block bg-slate-200 rounded-lg px-2 text-s mx-2">
                {" "}
                perfero,quaerat
              </div>{" "}
              rerum quibusdam! Delectus, omnis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde porro, facilis repudiandae qui,
              delectus non explicabo aperiam quod, in totam ullam. Vero eos
              quibusdam error harum nemo atque a natus. Quaerat at
              exercitationem maiores, provident officiis quibusdam dolores illum
              dolorum tempora et illo sed odit. Officiis, et placeat quasi
              recusandae expedita magni voluptas tempore doloribus accusamus
              voluptatu
            </div>
            <div className="flex flex-row justify-around  items-center">
              
              <Link
              target="_blank"
              className="mr-2"
              href={"https://github.com/DhanushPrabakaran"}
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.354545 2 2 12.354545 2 25 C 2 37.645455 12.354545 48 25 48 C 37.645455 48 48 37.645455 48 25 C 48 12.354545 37.645455 2 25 2 z M 25 4 C 36.554545 4 46 13.445455 46 25 C 46 25.093716 45.993426 25.185862 45.992188 25.279297 C 45.355643 25.213574 44.619449 25.151947 43.683594 25.113281 C 42.349262 25.058153 40.667887 25.070474 38.767578 25.169922 C 38.842322 24.665304 38.893164 24.152982 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.101066 10.946801 24.590099 11.013672 25.072266 C 7.8894658 24.970983 5.518755 25.05331 4.0039062 25.191406 C 4.0033241 25.127325 4 25.064213 4 25 C 4 13.445455 13.445455 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8867188 26.019531 C 9.5909207 26.024035 10.397743 26.051943 11.203125 26.080078 C 11.281506 26.399647 11.374577 26.712873 11.484375 27.019531 C 8.1709433 27.091537 5.704398 27.434455 4.1835938 27.728516 C 4.1171404 27.221899 4.0664333 26.710385 4.0371094 26.193359 C 5.1545506 26.089867 6.7502168 26.005867 8.8867188 26.019531 z M 41.113281 26.076172 C 43.242845 26.051402 44.834805 26.164134 45.957031 26.283203 C 45.927668 26.764345 45.879919 27.240812 45.818359 27.712891 C 44.245568 27.413519 41.71721 27.071329 38.314453 27.015625 C 38.411856 26.742348 38.491935 26.461309 38.564453 26.177734 C 39.462674 26.126533 40.338362 26.085185 41.113281 26.076172 z M 37.892578 28.007812 C 41.465652 28.03978 44.085317 28.396925 45.666016 28.699219 C 44.325335 36.167288 39.008358 42.292747 32 44.789062 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.44296 30.280162 37.297012 29.208854 37.892578 28.007812 z M 11.908203 28.013672 C 12.505054 29.212023 13.359546 30.281496 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.789062 C 10.997174 42.294717 5.68379 36.176856 4.3378906 28.716797 C 5.863528 28.419405 8.4148311 28.06385 11.908203 28.013672 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.390625 C 28.396051 45.785878 26.721908 46 25 46 C 23.278092 46 21.603949 45.785878 20 45.390625 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
              </svg>
              </Link>
              <Link
               target="_blank"
               className="mr-2"
              href={"https://www.linkedin.com/in/dhanushprabakar/"}
              >
                <svg
                 target="_blank"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
              </svg>
              </Link>
              
              <Link
               target="_blank"
               className="mr-2"
              href={"https://medium.com/@dhanushprabakaran18"}
              >
                <svg
                 target="_blank"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 50 50"
              >
                <circle cx="14" cy="24" r="12" fill="#424242"></circle>
                <ellipse
                  cx="34"
                  cy="24"
                  fill="#424242"
                  rx="6"
                  ry="11"
                ></ellipse>
                <ellipse
                  cx="44"
                  cy="24"
                  fill="#424242"
                  rx="2"
                  ry="10"
                ></ellipse>
              </svg>
              </Link>
              
            </div>
          </div>
          <div className="flex items-center  justify-center flex-col ">
            <Image src={web} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
}
