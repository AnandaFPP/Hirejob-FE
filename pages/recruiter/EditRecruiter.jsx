import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "../component/Navbar/Navbar";
import defaultPic from '../../styles/assets/img/default.jpg'
import Image from "next/image";
import Footer from "../component/Footer/Footer";
import axios from "axios";
import swal from "sweetalert";
import ModalEditAvatarRecruiter from "../component/Modal/ModalEditAvatarRecruiter";


const EditRecruiter = () => {
  const [recruiterData, setRecruiterData] = useState({
    recruiter_email: "",
    recruiter_jobfield: "",
    recruiter_desc: "",
    recruiter_city: "",
    recruiter_province: ""
  });
  
  const handleUpdateRecruiter = (e) => {
    e.preventDefault();
    
    setRecruiterData({
      ...recruiterData,
      recruiter_email: recruiterData.recruiter_email,
      recruiter_jobfield: recruiterData.recruiter_jobfield,
      recruiter_desc: recruiterData.recruiter_desc,
      recruiter_city: recruiterData.recruiter_city,
      recruiter_province: recruiterData.recruiter_province
    });
    
    const id = localStorage.getItem("recruiter_id");
    
    axios
      .put(`${process.env.NEXT_PUBLIC_API}/recruiter/profile/${id}`, recruiterData)
      .then(response => {
        console.log(response.data);
        swal({
          title: "Profile updated",
          icon: "success",
          button: "Continue",
        });
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating recruiter profile:', error);
      });
  }
  
  const handleChange = (e) => {
    setRecruiterData({
      ...recruiterData,
      [e.target.name]: e.target.value,
    });
  }
  
  useEffect(() => {
    const id = localStorage.getItem("recruiter_id");
    
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/recruiter/profile/${id}`)
      .then(response => {
        setRecruiterData(response.data.data[0]);
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
                  {!recruiterData.recruiter_photo ? (
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
                        src={recruiterData.recruiter_photo}
                        className="m-auto my-3"
                        height={150}
                        width={150}
                        alt="avatar"
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    )}
                    <ModalEditAvatarRecruiter recruiter_id={recruiterData.recruiter_id}/>
                  </div>
                  <div className="container pt-4">
                    <h6 style={{ fontWeight: 700, fontSize: "18px" }}>{recruiterData.recruiter_compname}</h6>
                    <p>{recruiterData.recruiter_jobfield}</p>
                    <i
                      className="bi bi-geo-alt"
                      style={{ color: "#9EA0A5", fontStyle: "normal" }}
                    >
                      {" "}
                      {recruiterData.recruiter_city}, {recruiterData.recruiter_province}
                    </i>
                    <p style={{ color: "#9EA0A5" }} className="pt-3">
                      {recruiterData.description}
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
                  <form onSubmit={handleUpdateRecruiter}>
                    <div className="profile-data pt-4">
                      <div className="">
                        <div className="col-md-12 col-12 p-0">
                          <label
                            htmlFor="inputName"
                            className="col-sm-3 col-form-label text-secondary"
                          >
                            Bidang
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="recruiter_jobfield"
                              placeholder="Masukkan bidang"
                              value={recruiterData.recruiter_jobfield}
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
                            Kota
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="recruiter_city"
                              placeholder="Kota"
                              value={recruiterData.recruiter_city}
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
                            Provinsi
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="recruiter_province"
                              placeholder="Provinsi"
                              value={recruiterData.recruiter_province}
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
                              name="recruiter_desc"
                              placeholder="Tuliskan deskripsi singkat tentang perusahaan"
                              value={recruiterData.recruiter_desc}
                              onChange={handleChange}
                              style={{ height: 144, fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0 mt-3">
                          <label
                            htmlFor="inputName"
                            className="col-sm-3 col-form-label text-secondary"
                          >
                            Email Perusahaan
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="recruiter_emailcomp"
                              placeholder="Masukkan email perusahaan"
                              value={recruiterData.recruiter_emailcomp}
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
                            LinkedIn
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="recruiter_linkedin"
                              placeholder="Masukkan nama LinkedIn"
                              value={recruiterData.recruiter_linkedin}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
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

export default EditRecruiter;
