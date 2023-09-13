import React, { useEffect, useState } from "react";
import LoginNavbar from "./component/Navbar/LoginNavbar";
import Footer from "./component/Footer/Footer";
import lpimage1 from "../styles/assets/img/Group 1195.png";
import lpimage2 from "../styles/assets/img/Group 1194.png";
import lpimage3 from "../styles/assets/img/Group 1196.png";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Navbar from "./component/Navbar/Navbar";
import Carousel from "./component/Carousel/Carousel";

const LandingPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const [login, setLogin] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("token");

    setLogin(!!authToken);
  }, []);

  return (
    <div>
      {login ? (
        <div>
          {
            <div>
              <Navbar />
              <main>
                <section>
                  <div className="container mt-5">
                    {/* First content */}
                    <div className="row pb-5 pt-5">
                      <div
                        ref={ref}
                        className={`col-md-5 d-flex flex-column align-items-center ${
                          styles.firstContent
                        } ${inView ? styles["slide-in"] : ""}`}
                      >
                        <div className="">
                          <h1
                            style={{ fontWeight: 700, lineHeight: "70px" }}
                            className="tagline"
                          >
                            Talenta terbaik negeri untuk perubahan revolusi 4.0
                          </h1>
                        </div>
                        <div className="mb-2 p-2">
                          <p style={{ color: "#46505C" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In euismod ipsum et dui rhoncus auctor.
                          </p>
                        </div>
                        <div className="mb-auto p-2">
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#5e50a1",
                              padding: "10px 20px",
                              color: "white",
                              fontWeight: 600,
                            }}
                          >
                            Mulai Dari Sekarang
                          </button>
                        </div>
                      </div>
                      <div className="col-md-7 col-12">
                        <Image
                          src={lpimage1}
                          alt="/"
                          id="first-content"
                          className={`w-100 h-100 ${
                            inView ? styles["slide-in-right"] : ""
                          }`}
                        />
                      </div>
                    </div>
                    {/* End first content */}
                    {/* Second content */}
                    <div className="row mt-5 pb-5">
                      <div className="col-md-6 col-12">
                        <Image
                          src={lpimage2}
                          alt="/"
                          id="second-content"
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="col-md-6 mt-4 d-flex flex-column">
                        <div className="">
                          <h1
                            style={{ fontWeight: "600", lineHeight: "65px" }}
                            className="tagline"
                          >
                            Kenapa harus mencari talent di peworld
                          </h1>
                        </div>
                        <div className="row col mt-4">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                        <div className="row col">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                        <div className="row col">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                        <div className="row col mb-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End second content */}
                    {/* third content */}
                    <div className="row mt-5 pb-5">
                      <div className="col-md-6 mt-4 d-flex flex-column">
                        <div className="text-center">
                          <h1
                            style={{ fontWeight: 600, lineHeight: "65px" }}
                            className="tagline"
                          >
                            Skill Talent
                          </h1>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In euismod ipsum et dui rhoncus auctor.
                          </p>
                        </div>
                        <div className="d-flex">
                          <div className="col-md-6 mt-2 mb-2">
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Java
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Kotlin
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                PHP
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                JavaScript
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 mt-2 mb-2">
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Golang
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                C++
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Ruby
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                10+ Bahasa Lainnya
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <Image
                          src={lpimage3}
                          alt="/"
                          id="second-content"
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                    {/* End third content */}
                  </div>
                </section>
                <Carousel />
                <section>
                  <div className="container mt-5 mb-5">
                    <div
                      className="row justify-content-between align-items-center py-5"
                      id={styles.promotion}
                    >
                      <div className="col-md-6">
                        <h2
                          style={{ fontWeight: 600, color: "#FFFFFF" }}
                          className={`${styles.abstract}`}
                        >
                          Lorem ipsum dolor sit amet.
                        </h2>
                      </div>
                      <div className="col-md-4 text-center">
                        <button
                          className="btn p-3"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#5e50a1",
                            fontWeight: 600,
                            marginLeft: "px",
                            width: "70%",
                          }}
                        >
                          Mulai Dari Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              <Footer />
            </div>
          }
        </div>
      ) : (
        <div>
          {
            <div>
              {/* <LoginNavbar /> */}
              <main>
                <section>
                  <div className="container mt-5">
                    {/* First content */}
                    <div className="row pb-5 pt-5">
                      <div
                        ref={ref}
                        className={`col-md-5 d-flex flex-column align-items-center ${
                          styles.firstContent
                        } ${inView ? styles["slide-in"] : ""}`}
                      >
                        <div className="">
                          <h1
                            style={{ fontWeight: 700, lineHeight: "70px" }}
                            className="tagline"
                          >
                            Talenta terbaik negeri untuk perubahan revolusi 4.0
                          </h1>
                        </div>
                        <div className="mb-2 p-2">
                          <p style={{ color: "#46505C" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In euismod ipsum et dui rhoncus auctor.
                          </p>
                        </div>
                        <div className="mb-auto p-2">
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#5e50a1",
                              padding: "10px 20px",
                              color: "white",
                              fontWeight: 600,
                            }}
                          >
                            Mulai Dari Sekarang
                          </button>
                        </div>
                      </div>
                      <div className="col-md-7 col-12">
                        <Image
                          src={lpimage1}
                          alt=""
                          id="first-content"
                          className={`w-100 h-100 ${
                            inView ? styles["slide-in-right"] : ""
                          }`}
                        />
                      </div>
                    </div>
                    {/* End first content */}
                    {/* Second content */}
                    <div className="row mt-5 pb-5">
                      <div className="col-md-6 col-12">
                        <Image
                          src={lpimage2}
                          alt="/"
                          id="second-content"
                          className="w-100 h-100"
                        />
                      </div>
                      <div className="col-md-6 mt-4 d-flex flex-column">
                        <div className="">
                          <h1
                            style={{ fontWeight: "600", lineHeight: "65px" }}
                            className="tagline"
                          >
                            Kenapa harus mencari talent di peworld
                          </h1>
                        </div>
                        <div className="row col mt-4">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                        <div className="row col">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                        <div className="row col">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                        <div className="row col mb-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_67_202)">
                              <path
                                d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                fill="#5E50A1"
                              />
                              <g opacity="0.2">
                                <path
                                  opacity="0.2"
                                  d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                  fill="white"
                                />
                              </g>
                              <path
                                d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_67_202">
                                <rect
                                  width={24}
                                  height={24}
                                  rx={12}
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <p style={{ paddingLeft: 10 }}>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End second content */}
                    {/* third content */}
                    <div className="row mt-5 pb-5">
                      <div className="col-md-6 mt-4 d-flex flex-column">
                        <div className="text-center">
                          <h1
                            style={{ fontWeight: 600, lineHeight: "65px" }}
                            className="tagline"
                          >
                            Skill Talent
                          </h1>
                        </div>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In euismod ipsum et dui rhoncus auctor.
                          </p>
                        </div>
                        <div className="d-flex">
                          <div className="col-md-6 mt-2 mb-2">
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Java
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Kotlin
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                PHP
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                JavaScript
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6 mt-2 mb-2">
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Golang
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                C++
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                Ruby
                              </p>
                            </div>
                            <div className="row mb-3">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_67_202)">
                                  <path
                                    d="M21.3682 21.7516C17.6957 24.7495 6.2288 24.7495 2.63131 21.7516C-1.04112 18.7537 -0.666388 5.93775 2.63131 2.56512C5.929 -0.807513 18.0705 -0.807513 21.3682 2.56512C24.6659 5.93775 25.0406 18.7538 21.3682 21.7516Z"
                                    fill="#FBB017"
                                  />
                                  <g opacity="0.2">
                                    <path
                                      opacity="0.2"
                                      d="M12.0755 16.5053C8.77777 19.1284 5.10535 20.4775 1.65778 20.5524C-0.890451 16.2055 -0.365797 5.63791 2.6321 2.56508C5.3302 -0.207961 13.7992 -0.732616 18.6709 0.991167C19.87 5.93771 17.3967 12.2332 12.0755 16.5053Z"
                                      fill="white"
                                    />
                                  </g>
                                  <path
                                    d="M10.9142 18C10.4784 18 10.0427 17.8145 9.79364 17.4436L6.30732 12.9926C5.80926 12.3744 5.9338 11.5089 6.55635 11.0143C7.1789 10.5198 8.05048 10.6434 8.54854 11.2616L10.9142 14.2908L16.1438 7.55245C16.6418 6.93426 17.5134 6.8106 18.136 7.30516C18.7585 7.79973 18.883 8.66521 18.385 9.2834L12.0349 17.4436C11.7236 17.7527 11.3501 18 10.9142 18Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_67_202">
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                              <p style={{ paddingLeft: 10, color: "#46505C" }}>
                                10+ Bahasa Lainnya
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <Image
                          src={lpimage3}
                          alt="/"
                          id="second-content"
                          className="w-100 h-100"
                        />
                      </div>
                    </div>
                    {/* End third content */}
                  </div>
                </section>
                <Carousel />
                <section>
                  <div className="container mt-5 mb-5">
                    <div
                      className="row justify-content-between align-items-center py-5"
                      id={styles.promotion}
                    >
                      <div className="col-md-6">
                        <h2
                          style={{ fontWeight: 600, color: "#FFFFFF" }}
                          className={`${styles.abstract}`}
                        >
                          Lorem ipsum dolor sit amet.
                        </h2>
                      </div>
                      <div className="col-md-4 text-center">
                        <button
                          className="btn p-3"
                          style={{
                            backgroundColor: "#FFFFFF",
                            color: "#5e50a1",
                            fontWeight: 600,
                            marginLeft: "px",
                            width: "70%",
                          }}
                        >
                          Mulai Dari Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
              <Footer />
            </div>
          }
        </div>
      )}
    </div>
  );
};

export default LandingPage;
