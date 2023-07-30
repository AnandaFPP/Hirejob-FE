import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "./component/Navbar/Navbar";
import profilePic from '../styles/assets/img/Large-photo-profile.png'
import Image from "next/image";
import Footer from "./component/Footer/Footer";
import ModalEdit from "./component/Modal/ModalEdit";
import ModalDelete from "./component/Modal/ModalDelete";

const Edit = () => {
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
                  {/* Profile details content goes here */}
                  <div className="m-auto pt-3">
                    <Image
                      src={profilePic}
                      alt=""
                      className="rounded-circle border"
                    />
                  </div>
                  <div className="container pt-4">
                    <h5 style={{ fontWeight: 700 }}>John Doe</h5>
                    <p>Web Developer</p>
                    <i
                      className="bi bi-geo-alt"
                      style={{ color: "#9EA0A5", fontStyle: "normal" }}
                    >
                      {" "}
                      Purwokerto, Central Java.
                    </i>
                    <p style={{ color: "#9EA0A5" }} className="pt-3">
                      Freelancer
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
                            placeholder="Masukkan nama lengkap"
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
                            placeholder="Masukkan job desk"
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
                            placeholder="Masukkan domisili"
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
                            placeholder="Masukkan tempat kerja"
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
                          <input
                            type="name"
                            className="form-control"
                            id="inputName"
                            placeholder="Tuliskan deskripsi singkat"
                            style={{ height: 144, fontSize: 14 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card information p-3 mt-4"
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
                      Skill
                    </h3>
                  </div>
                  <div className="profile-data pt-4">
                    <div className="">
                      <div className="row col-md-12 w-auto p-0">
                        <div className="col-sm-10 col-8">
                          <input
                            type="name"
                            className="form-control"
                            id="inputName"
                            placeholder="Masukkan nama lengkap"
                            style={{ padding: "20px 10px", fontSize: 14 }}
                          />
                        </div>
                        <div className="col-sm-2 col-4">
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "#FBB017",
                              color: "white",
                              fontWeight: 600,
                              width: "100%",
                              padding: 10,
                              fontSize: 14,
                              border: "none",
                            }}
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card information p-3 mt-4"
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
                      Pengalaman kerja
                    </h3>
                  </div>
                  <div
                    style={{
                      borderBottom: "2px solid #C4C4C4",
                      width: "100%",
                      borderRadius: 2,
                    }}
                    className="py-3 d-flex"
                  >
                    <div className="col-md-9">
                      <h5 style={{ fontWeight: 600 }}>Web Developer</h5>
                      <h6>Tokopedia</h6>
                      <div className="d-flex">
                        <p className="mr-2" style={{ color: "#9EA0A5" }}>
                          July 2019 - January 2020
                        </p>
                        <p className="ml-2" style={{ color: "#9EA0A5" }}>
                          6 months
                        </p>
                      </div>
                      <p style={{ fontSize: 14 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum erat orci, mollis nec gravida sed, ornare
                        quis urna. Curabitur eu lacus fringilla, vestibulum
                        risus at.
                      </p>
                    </div>
                    <div className="col-md-3">
                      <button
                        className="btn mx-1"
                        style={{
                          backgroundColor: "#FBB017",
                          color: "white",
                          fontWeight: 600,
                          padding: "10px 25px",
                          fontSize: 14,
                          border: "none",
                        }}
                        data-toggle="modal"
                        data-target="#editModal"
                      >
                        Edit
                      </button>
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "#DB3022",
                          color: "white",
                          fontWeight: 600,
                          padding: "10px 25px",
                          fontSize: 14,
                          border: "none",
                        }}
                        data-toggle="modal"
                        data-target="#deleteModal"
                      >
                        X
                      </button>
                    </div>
                    <ModalEdit />
                    <ModalDelete />
                  </div>
                  <div className="profile-data pt-4">
                    <div className="">
                      <div className="col-md-12 col-12 p-0">
                        <label
                          htmlFor="inputPosition"
                          className="col-sm-3 col-form-label text-secondary"
                        >
                          Posisi
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="name"
                            className="form-control"
                            id="inputName"
                            placeholder="Web developer"
                            style={{ padding: "20px 10px", fontSize: 14 }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mt-3 row justify-content-between">
                        <div className="col-md-6 col-6">
                          <label
                            htmlFor="inputCompany"
                            className=" col-form-label text-secondary"
                          >
                            Nama perusahaan
                          </label>
                          <div className="">
                            <input
                              type="name"
                              className="form-control"
                              id="inputCompany"
                              placeholder="PT Harus bisa"
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-3">
                          <label
                            htmlFor="inputDate"
                            className=" col-form-label text-secondary"
                          >
                            Dari
                          </label>
                          <div className="">
                            <input
                              type="name"
                              className="form-control"
                              id="inputDate"
                              placeholder="Januari 2018"
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 col-3">
                          <label
                            htmlFor="inputDate"
                            className=" col-form-label text-secondary"
                          >
                            Sampai
                          </label>
                          <div className="">
                            <input
                              type="name"
                              className="form-control"
                              id="inputDate"
                              placeholder="Januari 2019"
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-12 p-0 mt-3">
                        <label
                          htmlFor="inputDescription"
                          className="col-sm-3 col-form-label text-secondary"
                        >
                          Deskripsi singkat
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="name"
                            className="form-control"
                            id="inputDescription"
                            placeholder="Deskripsi pekerjaan anda"
                            style={{ height: 144, fontSize: 14 }}
                          />
                        </div>
                      </div>
                      <div
                        className="mt-5 py-4"
                        style={{ borderTop: "2px solid #E2E5ED" }}
                      >
                        <button className={`add btn-sm my-2 button-style ${styles.buttonStyle}`}>
                          Tambah pengalaman kerja
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card information p-3 mt-4"
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
                      Portofolio
                    </h3>
                  </div>
                  <div className="profile-data pt-4">
                    <div className="">
                      <div className="col-md-12 col-12 p-0">
                        <label
                          htmlFor="inputPosition"
                          className="col-sm-3 col-form-label text-secondary"
                        >
                          Nama aplikasi
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="name"
                            className="form-control"
                            id="inputName"
                            placeholder="Masukkan nama aplikasi"
                            style={{ padding: "20px 10px", fontSize: 14 }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-12 p-0 mt-3">
                        <label
                          htmlFor="inputPosition"
                          className="col-sm-3 col-form-label text-secondary"
                        >
                          Link repository
                        </label>
                        <div className="col-sm-12">
                          <input
                            type="name"
                            className="form-control"
                            id="inputName"
                            placeholder="Masukkan link repository"
                            style={{ padding: "20px 10px", fontSize: 14 }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-12 p-0 mt-3">
                        <label
                          htmlFor="inputPosition"
                          className="col-sm-3 col-form-label text-secondary"
                        >
                          Type repository
                        </label>
                        <div className="col-sm-12">
                          <div className="row pl-3">
                            <div className="form-check col-sm-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                defaultValue="option1"
                                defaultChecked=""
                              />
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="gridRadios1"
                              >
                                {" "}
                                Aplikasi mobile{" "}
                              </label>
                            </div>
                            <div className="form-check col-sm-3">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                defaultValue="option2"
                              />
                              <label
                                className="form-check-label text-secondary"
                                htmlFor="gridRadios2"
                              >
                                {" "}
                                Aplikasi web{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 col-12 p-0 mt-3">
                        <label
                          htmlFor="inputDescription"
                          className="col-sm-3 col-form-label text-secondary"
                        >
                          Upload gambar
                        </label>
                        <div className="col-sm-12">
                          <div
                            className="form-control text-center"
                            style={{
                              height: 250,
                              fontSize: 14,
                              border: "1px dashed #9EA0A5",
                              borderRadius: 8,
                            }}
                          >
                            <div
                              className="row justify-content-center align-items-center"
                              style={{ height: "100%" }}
                            >
                              <div className="col-sm-12">
                                <i
                                  className="bi bi-cloud-arrow-up-fill"
                                  style={{ fontSize: 40 }}
                                />
                                <h6>
                                  Drag &amp; Drop untuk Upload Gambar Aplikasi
                                  Mobile
                                </h6>
                                <p style={{ fontSize: 12 }}>
                                  Atau cari untuk mengupload file dari
                                  direktorimu.
                                </p>
                                <input
                                type="file"
                                className="form-control m-auto w-50 p-1"
                                id="photo"
                                placeholder=""
                                // onChange={handleUpload}
                                name="photo"
                              />
                              </div>
                              <div className="col-sm-5">
                                <div className="">
                                  <i
                                    className="bi bi-image"
                                    style={{
                                      fontSize: 14,
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {" "}
                                    High-Res Image PNG, JPG, or GIF
                                  </i>
                                </div>
                              </div>
                              <div className="col-sm-5">
                                <div className="">
                                  <i
                                    className="bi bi-arrows-angle-expand"
                                    style={{
                                      fontSize: 14,
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {" "}
                                    Size 1080x1920 or 600x800
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="mt-5 py-4"
                        style={{ borderTop: "2px solid #E2E5ED" }}
                      >
                        <button className={`add btn-sm my-2 button-style ${styles.buttonStyle}`}>
                          Tambah portofolio
                        </button>
                      </div>
                    </div>
                  </div>
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

export default Edit;
