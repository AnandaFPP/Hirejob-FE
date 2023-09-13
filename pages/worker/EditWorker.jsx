import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "../component/Navbar/Navbar";
import defaultPic from '../../styles/assets/img/default.jpg'
import Image from "next/image";
import Footer from "../component/Footer/Footer";
import axios from "axios";
import swal from "sweetalert";
import SkillCard from "../component/Cards/SkillCard";
import ExpCard from "../component/Cards/ExpCard";
import PortoCard from "../component/Cards/PortoCard";


const Edit = () => {
  const [workerData, setWorkerData] = useState({
    worker_name: "",
    last_work: "",
    domicile: "",
    place_work: "",
    description: ""
  });
  
  const handleUpdateWorker = (e) => {
    e.preventDefault();
    
    setWorkerData({
      ...workerData,
      worker_name: workerData.worker_name,
      last_work: workerData.last_work,
      domicile: workerData.domicile,
      place_work: workerData.place_work,
      description: workerData.description
    });
    
    const id = localStorage.getItem("worker_id");
    
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/worker/profile/${id}`, workerData)
      .then(response => {
        console.log(response.data);
        swal({
          title: "Biodata updated",
          icon: "success",
          button: "Continue",
        });
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating worker profile:', error);
      });
  }
  
  const handleChange = (e) => {
    setWorkerData({
      ...workerData,
      [e.target.name]: e.target.value,
    });
  }
  
  useEffect(() => {
    const id = localStorage.getItem("worker_id");
    
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/worker/profile/${id}`)
      .then(response => {
        setWorkerData(response.data.data[0]);
      })
      .catch(error => {
        console.error('Error fetching worker profile:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        {/* First content */}
        <section style={{ paddingTop: 120, paddingBottom: 50 }} id={styles.hero}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3 mb-3" style={{ fontSize: 14 }}>
                <div className="card profile d-flex flex-column p-2">
                  {/* Profile updates content goes here */}
                  <div className="m-auto pt-3">
                  {!workerData.worker_photo ? (
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
                        src={workerData.worker_photo}
                        className="m-auto my-3"
                        height={150}
                        width={150}
                        alt="avatar"
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className="container pt-4">
                    <h5 style={{ fontWeight: 700 }}>{workerData.worker_name}</h5>
                    <p>{workerData.last_work}</p>
                    <i
                      className="bi bi-geo-alt"
                      style={{ color: "#9EA0A5", fontStyle: "normal" }}
                    >
                      {" "}
                      {workerData.domicile}
                    </i>
                    <p style={{ color: "#9EA0A5" }} className="pt-3">
                      {workerData.description}
                    </p>
                  </div>
                  <div className="">
                    <button
                      className="btn btn-sm my-2"
                      style={{
                        backgroundColor: "#5e50a1",
                        color: "white",
                        fontWeight: 600,
                        width: "100%",
                      }}
                      id={styles.btnLogin}
                    >
                      Simpan
                    </button>
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "white",
                        color: "#5e50a1",
                        fontWeight: 600,
                        width: "100%",
                      }}
                      id={styles.btnLogin}
                    >
                      Batal
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div
                  className="card information p-3"
                  style={{ boxShadow: "0px 1px 20px 0px #C5C5C540" }}
                >
                  <div
                    style={{
                      borderBottom: "2px solid #C4C4C4",
                      width: "100%",
                      borderRadius: 2,
                    }}
                    className="py-3"
                  >
                    <h3 style={{ fontWeight: 600, letterSpacing: "0.5px" }}>
                      Data diri
                    </h3>
                  </div>
                  <form onSubmit={handleUpdateWorker}>
                    <div className="profile-data pt-4">
                      <div className="">
                        <div className="col-md-12 col-12 p-0">
                          <label
                            htmlFor="inputName"
                            className="col-sm-3 col-form-label text-secondary"
                          >
                            Nama lengkap
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="worker_name"
                              placeholder="Masukkan nama lengkap"
                              value={workerData.worker_name}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0 mt-3">
                          <label
                            htmlFor="inputName"
                            className="col-sm-3 col-form-label text-secondary"
                          >
                            Job desk
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="last_work"
                              placeholder="Masukkan job desk"
                              value={workerData.last_work}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0 mt-3">
                          <label
                            htmlFor="inputName"
                            className="col-sm-3 col-form-label text-secondary"
                          >
                            Domisili
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="domicile"
                              placeholder="Masukkan domisili"
                              value={workerData.domicile}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0 mt-3">
                          <label
                            htmlFor="inputName"
                            className="col-sm-3 col-form-label text-secondary"
                          >
                            Tempat kerja
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="place_work"
                              placeholder="Masukkan tempat kerja"
                              value={workerData.place_work}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0 mt-3">
                          <label
                            htmlFor="inputName"
                            className="col-sm-3 col-form-label text-secondary"
                          >
                            Deskripsi singkat
                          </label>
                          <div className="col-sm-12">
                            <textarea
                              type="text"
                              className="form-control"
                              id="inputName"
                              name="description"
                              placeholder="Tuliskan deskripsi singkat"
                              value={workerData.description}
                              onChange={handleChange}
                              style={{ height: 144, fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div
                        className="mt-5 py-4"
                        style={{ borderTop: "2px solid #E2E5ED" }}
                      >
                        <button className={`add btn-sm my-2 button-style ${styles.buttonStyle}`} type="submit">
                          Simpan biodata
                        </button>
                      </div>
                      </div>
                    </div>
                  </form>
                </div>
                <SkillCard />
                <ExpCard />
                <PortoCard />
              </div>
            </div>
          </div>
        </section>
        {/* End content */}
      </main>
      <Footer />
    </div>
  );
};

export default Edit;
