import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Pagination from "./component/Pagination/Pagination";
import defaultPic from "../styles/assets/img/default.jpg";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Home = () => {
  const [worker, setWorker] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = worker.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/worker/profile`)
      .then((response) => {
        setWorker(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all workers:", error);
      });
  }, []);

  const handleSort = (option) => {
    setSortOption(option);
  };

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
                      onChange={(e) => setSearch(e.target.value)}
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
                        <a
                          className="dropdown-item p-3"
                          href="#"
                          onClick={() => handleSort("name_asc")}
                        >
                          Sortir berdasarkan nama
                        </a>
                        <a
                          className="dropdown-item p-3"
                          href="#"
                          onClick={() => handleSort("skill_asc")}
                        >
                          Sortir berdasarkan skill
                        </a>
                        <a
                          className="dropdown-item p-3"
                          href="#"
                          onClick={() => handleSort("location_asc")}
                        >
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
              className="col-lg-12 col-md-12 col-sm-10 py-2"
              style={{
                backgroundColor: "white",
                border: "1px solid #F2F3F4",
                borderRadius: 5,
              }}
            >
              {currentPosts
                .filter(
                  (list) =>
                    search === "" ||
                    list.worker_name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  switch (sortOption) {
                    case "name_asc":
                      return a.worker_name.localeCompare(b.worker_name);
                    case "name_desc":
                      return b.worker_name.localeCompare(a.worker_name);
                    case "skill_asc":
                      return 0;
                    case "skill_desc":
                      return 0;
                    case "location_asc":
                      if (a.domicile && b.domicile) {
                        return a.domicile.localeCompare(b.domicile);
                      }
                      return 0;
                    case "location_desc":
                      return 0;
                    default:
                      return 0;
                  }
                })
                .map((list, index) => (
                  <div className={`row py-4  ${styles.profileCard}`} key={index}>
                    <div className="col-sm-2 text-center">
                    {!list.worker_photo ? (
                      <Image
                        src={defaultPic}
                        className="m-auto my-3"
                        height={150}
                        width={150}
                        alt="avatar"
                        style={{ borderRadius: "50%" }}
                      />
                    ) : (
                      <Image
                        src={list.worker_photo}
                        className="m-auto my-3"
                        height={150}
                        width={150}
                        alt="avatar"
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    )}
                    </div>
                    <div className="col-sm-8">
                      <h5 style={{ fontWeight: "700" }}>{list.worker_name}</h5>
                      <p style={{ color: "#9EA0A5" }}>{list.last_work}</p>
                      <i
                        className={`bi bi-geo-alt ${styles.i}`}
                        style={{ fontStyle: "normal" }}
                      >
                        {" "}
                        {list.domicile}
                      </i>
                      <div className="skill-list pb-2">
                        <div className="row m-0 skill-list pb-2">
                          {list.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="badge mr-1 mb-1"
                              style={{
                                backgroundColor: "#FBB017",
                                color: "white",
                                padding: "10px 20px",
                                opacity: "0.8",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2 d-flex">
                      <Link
                        key={list.worker_id}
                        href={`/workerDetail/${list.worker_id}`}
                      >
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
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            {/* End list user */}
          </div>
        </section>
        <section style={{ backgroundColor: "#f3f4f8" }}>
          <div className="container col-sm-8 py-4 ">
            <Pagination
              totalPosts={worker.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </section>
        {/* End second content */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
