import Image from "next/image";
import React from "react";
import carousel1 from "../../../styles/assets/img/Ellipse 326.png";
import carousel2 from "../../../styles/assets/img/Ellipse 327.png";
import carousel3 from "../../../styles/assets/img/Ellipse 328.png";
import carousel4 from "../../../styles/assets/img/Ellipse 329.png";

const Carousel = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#e3e3eb" }}>
        <div className="container">
          <div className="container text-center my-3">
            <h2
              className="pt-5 pb-3"
              style={{ fontWeight: 700, letterSpacing: 1 }}
            >
              Their opinion about peworld
            </h2>
            <div className="row mx-auto my-auto pb-5  col-md-10">
              <div
                id="recipeCarousel"
                className="carousel slide w-100"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card card-body">
                          <Image
                            className="m-auto"
                            src={carousel1}
                            style={{
                              display: "block",
                              border: "7px solid #FBB017",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="main-text">
                            <h4 className="py-2" style={{ fontWeight: 600 }}>
                              Harry Styles
                            </h4>
                            <p style={{ color: "#9EA0A5" }}>Web Developer</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. In euismod ipsum et dui rhoncus auctor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-body">
                          <Image
                            className="m-auto"
                            src={carousel2}
                            style={{
                              display: "block",
                              border: "7px solid #FBB017",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="main-text">
                            <h4 className="py-2" style={{ fontWeight: 600 }}>
                              Niall Horan
                            </h4>
                            <p style={{ color: "#9EA0A5" }}>Web Developer</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. In euismod ipsum et dui rhoncus auctor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-body">
                          <Image
                            className="m-auto"
                            src={carousel3}
                            style={{
                              display: "block",
                              border: "7px solid #FBB017",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="main-text">
                            <h4 className="py-2" style={{ fontWeight: 600 }}>
                              Louis Tomlinson
                            </h4>
                            <p style={{ color: "#9EA0A5" }}>Web Developer</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. In euismod ipsum et dui rhoncus auctor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card card-body">
                          <Image
                            className="m-auto"
                            src={carousel4}
                            style={{
                              display: "block",
                              border: "7px solid #FBB017",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="main-text">
                            <h4 className="py-2" style={{ fontWeight: 600 }}>
                              Liam Payne
                            </h4>
                            <p style={{ color: "#9EA0A5" }}>Web Developer</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. In euismod ipsum et dui rhoncus auctor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card card-body">
                          <Image
                            className="m-auto"
                            src={carousel1}
                            style={{
                              display: "block",
                              border: "7px solid #FBB017",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="main-text">
                            <h4 className="py-2" style={{ fontWeight: 600 }}>
                              Matthieu Lengyel
                            </h4>
                            <p style={{ color: "#9EA0A5" }}>Web Developer</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. In euismod ipsum et dui rhoncus auctor.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          className="card card-body"
                          style={{ borderRadius: 10 }}
                        >
                          <Image
                            className="m-auto"
                            src={carousel2}
                            style={{
                              display: "block",
                              border: "7px solid #FBB017",
                              borderRadius: "50%",
                            }}
                          />
                          <div className="main-text">
                            <h4 className="py-2" style={{ fontWeight: 600 }}>
                              John Doe
                            </h4>
                            <p style={{ color: "#9EA0A5" }}>Web Developer</p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. In euismod ipsum et dui rhoncus auctor.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev w-auto"
                    href="#recipeCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next w-auto"
                    href="#recipeCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon bg-dark border border-dark rounded-circle"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
