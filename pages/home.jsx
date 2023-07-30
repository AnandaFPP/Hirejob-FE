import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Pagination from "./component/Pagination/Pagination";
import listprl1 from '../styles/assets/img/Ellipse 326.png'
import listprl2 from '../styles/assets/img/Ellipse 327.png'
import listprl3 from '../styles/assets/img/Ellipse 328.png'
import listprl4 from '../styles/assets/img/Ellipse 329.png'
import styles from '../styles/Home.module.css'
import Image from "next/image";

const home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section style={{ backgroundColor: "#5e50a1", paddingTop: 95 }}>
          <div className="container py-4">
            <div className="col-md-12">
              <h2 style={{ fontWeight: 700, color: "white" }}>Top Jobs</h2>
            </div>
          </div>
        </section>
        {/* Second content */}
        <section style={{ backgroundColor: "#f3f4f8" }}>
          <div className="container">
            {/* Search */}
            <div className="search-card row justify-content-center py-3">
              <div className="col-lg-12 col-md-12 col-sm-10 py-2">
                <div
                  className="p-2"
                  style={{
                    backgroundColor: "white",
                    borderRadius: 7,
                    boxShadow: "0px 1px 20px 0px #C5C5C540",
                  }}
                >
                  <div className="input-group">
                    {/* Search Input */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search any of skill"
                      aria-label="Search"
                      style={{ padding: "25px 20px", border: 0 }}
                    />
                    <div className="input-group-append">
                      {/* Sort Dropdown */}
                      <button
                        className="btn dropdown-toggle px-4"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{ border: 0, color: "gray" }}
                      >
                        Sort
                      </button>
                      <div className="dropdown-menu" style={{ fontSize: 14 }}>
                        <a className="dropdown-item p-3" href="#">
                          Sortir berdasarkan nama
                        </a>
                        <a className="dropdown-item p-3" href="#">
                          Sortir berdasarkan skill
                        </a>
                        <a className="dropdown-item p-3" href="#">
                          Sortir berdasarkan lokasi
                        </a>
                        <a className="dropdown-item p-3" href="#">
                          Sortir berdasarkan freelance
                        </a>
                        <a className="dropdown-item p-3" href="#">
                          Sortir berdasarkan fulltime
                        </a>
                      </div>
                    </div>
                    {/* Search Button */}
                    <button
                      className="btn px-4"
                      type="button"
                      style={{ backgroundColor: "#5e50a1", color: "white" }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End search */}
            {/* List user */}
            <div
              className='col-lg-12 col-md-12 col-sm-10 py-2'
              style={{
                backgroundColor: "white",
                border: "1px solid #F2F3F4",
                borderRadius: 5,
              }}
            >
              <div className={`row py-4  ${styles.profileCard}`}>
                <div className="col-sm-2 text-center">
                  <Image src={listprl1} alt="" />
                </div>
                <div className="col-sm-8">
                  <h5 style={{ fontWeight: "700" }}>Louis Tomlinson</h5>
                  <p style={{ color: "#9EA0A5" }}>Web developer</p>
                  <i className={`bi bi-geo-alt ${styles.i}`} style={{ fontStyle: "normal" }}>
                    {" "}
                    Lorem, ipsum.
                  </i>
                  <div className="skill-list pb-2">
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      PHP
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      JavaScript
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      HTML
                    </span>
                  </div>
                </div>
                <div className="col-sm-2 d-flex">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#5e50a1",
                      color: "white",
                      margin: "auto",
                    }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
              <div className={`row py-4  ${styles.profileCard}`}>
                <div className="col-sm-2 text-center">
                <Image src={listprl2} alt="" />
                </div>
                <div className="col-sm-8">
                  <h5 style={{ fontWeight: "700" }}>Harry Styles</h5>
                  <p style={{ color: "#9EA0A5" }}>Web developer</p>
                  <i className={`bi bi-geo-alt ${styles.i}`} style={{ fontStyle: "normal" }}>
                    {" "}
                    Lorem, ipsum.
                  </i>
                  <div className="skill-list pb-2">
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      PHP
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      JavaScript
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      HTML
                    </span>
                  </div>
                </div>
                <div className="col-sm-2 d-flex">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#5e50a1",
                      color: "white",
                      margin: "auto",
                    }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
              <div className={`row py-4  ${styles.profileCard}`}>
                <div className="col-sm-2 text-center">
                <Image src={listprl3} alt="" />
                </div>
                <div className="col-sm-8">
                  <h5 style={{ fontWeight: "700" }}>Niall Horan</h5>
                  <p style={{ color: "#9EA0A5" }}>Web developer</p>
                  <i className={`bi bi-geo-alt ${styles.i}`} style={{ fontStyle: "normal" }}>
                    {" "}
                    Lorem, ipsum.
                  </i>
                  <div className="skill-list pb-2">
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      PHP
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      JavaScript
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      HTML
                    </span>
                  </div>
                </div>
                <div className="col-sm-2 d-flex">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#5e50a1",
                      color: "white",
                      margin: "auto",
                    }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
              <div
                className={`row py-4  ${styles.profileCard}`}
                style={{ borderBottom: "none" }}
              >
                <div className="col-sm-2 text-center">
                <Image src={listprl4} alt="" />
                </div>
                <div className="col-sm-8">
                  <h5 style={{ fontWeight: "700" }}>Liam Payne</h5>
                  <p style={{ color: "#9EA0A5" }}>Web developer</p>
                  <i className={`bi bi-geo-alt ${styles.i}`} style={{ fontStyle: "normal" }}>
                    {" "}
                    Lorem, ipsum.
                  </i>
                  <div className="skill-list pb-2">
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      PHP
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      JavaScript
                    </span>
                    <span
                      className="badge mx-1"
                      style={{
                        backgroundColor: "#FBB017",
                        color: "white",
                        padding: "5px 15px",
                        opacity: "0.8",
                      }}
                    >
                      HTML
                    </span>
                  </div>
                </div>
                <div className="col-sm-2 d-flex">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#5e50a1",
                      color: "white",
                      margin: "auto",
                    }}
                  >
                    Lihat Profile
                  </button>
                </div>
              </div>
            </div>
            {/* End list user */}
          </div>
        </section>
        <section style={{ backgroundColor: "#f3f4f8" }}>
          <div className="container col-sm-8 py-4 ">
            <Pagination />
          </div>
        </section>
        {/* End second content */}
      </main>
      <Footer />
    </div>
  );
};

export default home;
