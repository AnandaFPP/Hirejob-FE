import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import Cookies from "js-cookie";
import axios from "axios";

const PortoCard = () => {
  const id = Cookies.get("worker_id");
  let [photo, setPhoto] = useState(null);
  const [porto, setPorto] = useState({
    worker_id: "",
    porto_name: "",
    link_repo: "",
    porto_photo: "",
  });

  const handleSubmitPorto = (e) => {
    e.preventDefault();

    const formData = new FormData();
        formData.append("worker_id", porto.worker_id);
        formData.append("porto_name", porto.porto_name);
        formData.append("link_repo", porto.link_repo);
        if (photo) {
            formData.append("porto_photo", photo);
        }

    axios
      .post("http://localhost:8000/portofolio/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Portofolio added",
          icon: "success",
          button: "Continue",
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating worker's experience", error);
      });
  };

  const handleChange = (e) => {
    setPorto({
      ...porto,
      [e.target.name]: e.target.value,
    });
  };

  let handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  return (
    <div>
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
          <form onSubmit={handleSubmitPorto}>
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
                    type="hidden"
                    className="form-control"
                    id="inputWorkerId"
                    name="worker_id"
                    placeholder="Masukkan nama lengkap"
                    value={(porto.worker_id = id)}
                    onChange={handleChange}
                    style={{ padding: "20px 10px", fontSize: 14 }}
                  />
                  <input
                    type="name"
                    className="form-control"
                    id="inputName"
                    placeholder="Masukkan nama aplikasi"
                    name="porto_name"
                    value={porto.porto_name}
                    onChange={handleChange}
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
                    name="link_repo"
                    value={porto.link_repo}
                    onChange={handleChange}
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
                          Drag &amp; Drop untuk Upload Gambar Aplikasi Mobile
                        </h6>
                        <p style={{ fontSize: 12 }}>
                          Atau cari untuk mengupload file dari direktorimu.
                        </p>
                        <input
                          type="file"
                          className="form-control m-auto w-50 p-1"
                          id="photo"
                          placeholder=""
                          name="porto_photo"
                          value={porto.setPhoto}
                          onChange={handleUpload}
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
                <button
                  className={`add btn-sm my-2 button-style ${styles.buttonStyle}`}
                >
                  Tambah portofolio
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PortoCard;
