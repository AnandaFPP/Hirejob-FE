import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Navbar from "../component/Navbar/Navbar";
import defaultPic from "../../styles/assets/img/default.jpg";
import Image from "next/image";
import Footer from "../component/Footer/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import ListSkill from "../component/ListSkill/ListSkill";
import Swal from "sweetalert2";

const Hire = () => {
  const router = useRouter();
  const { id } = router.query;

  const [workerData, setWorkerData] = useState([]);
  const [recId, setRecId] = useState();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  useEffect(() => {
    const recruiterId = localStorage.getItem("recruiter_id")
    setRecId(recruiterId)
  }, []);

  const [hire, setHire] = useState({
    hire_title: "",
    hire_desc: "",
    worker_id: "",
    recruiter_id: "",
    worker_name: "",
    worker_email: "",
    recruiter_compname: "",
  });

  const handleChange = (e) => {
    setHire({
      ...hire,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/worker/profile/${id}`)
      .then((response) => {
        setWorkerData(response.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching worker profile:", error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmitHire = (e) => {
    e.preventDefault();
    try {
      axios.post(`${process.env.NEXT_PUBLIC_API}/hire`, hire)
      .then((res) => {
        if (res.data.statusCode === 201) {
          Toast.fire({
            title:
              "Hiring Request Submitted",
            icon: "success",
          }).then((result) => {
            window.location.reload();
          });
        }
      });
    } catch (err) {}
  };

  return (
    <div>
      <Navbar />
      <main>
        {/* First content */}
        <section
          style={{ paddingTop: 120, paddingBottom: 50 }}
          id={styles.secondHero}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3 mb-3" style={{ fontSize: 14 }}>
                <div className="card profile d-flex flex-column p-2">
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
                    <h5 style={{ fontWeight: 700 }}>
                      {workerData.worker_name}
                    </h5>
                    <p>{workerData.last_work}</p>
                    <i
                      className="bi bi-geo-alt"
                      style={{ color: "#9EA0A5", fontStyle: "normal" }}
                    >
                      {" "}
                      {workerData.domicile}
                    </i>
                    <p style={{ color: "#9EA0A5" }} className="pt-3">
                      {workerData.last_work}
                    </p>
                    <p style={{ color: "#9EA0A5" }}>{workerData.description}</p>
                  </div>
                  <div className="container pt-4">
                    <div className="skill-detail">
                      <h5 style={{ fontWeight: 700 }}>Skill</h5>
                    </div>
                    <ListSkill />
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div
                  className="information p-3"
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
                      Hubungi {workerData.worker_name}
                    </h3>
                  </div>
                  <form onSubmit={handleSubmitHire}>
                    <div className="profile-data pt-4">
                      <div className="">
                        <div className="col-md-12 col-12 p-0">
                          <label
                            htmlFor="inputName"
                            className="col-sm-4 col-form-label text-secondary"
                          >
                            Nama Perusahaan
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="recruiter_compname"
                              placeholder="Masukkan nama perusahaan"
                              value={hire.recruiter_compname}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0">
                          <label
                            htmlFor="inputName"
                            className="col-sm-4 col-form-label text-secondary"
                          >
                            Job desk
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="hire_title"
                              placeholder="Masukkan bidang"
                              value={hire.hire_title}
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
                            Nama Lengkap
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="worker_name"
                              placeholder="Nama jobseeker"
                              value={hire.worker_name}
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
                            Email
                          </label>
                          <div className="col-sm-12">
                            <input
                              type="name"
                              className="form-control"
                              id="inputName"
                              name="worker_email"
                              placeholder="Email jobseeker"
                              value={hire.worker_email}
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
                            Deskripsi
                          </label>
                          <div className="col-sm-12">
                            <textarea
                              type="text"
                              className="form-control"
                              id="inputName"
                              name="hire_desc"
                              placeholder="Tuliskan deskripsi"
                              value={hire.hire_desc}
                              onChange={handleChange}
                              style={{ height: 144, fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0 mt-3">
                          <div className="col-sm-12">
                            <input
                              type="hidden"
                              className="form-control"
                              id="inputName"
                              name="worker_id"
                              placeholder="Worker ID"
                              value={hire.worker_id = id}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12 p-0 mt-3">
                          <div className="col-sm-12">
                            <input
                              type="hidden"
                              className="form-control"
                              id="inputName"
                              name="recruiter_id"
                              placeholder="Recruiter ID"
                              value={hire.recruiter_id = recId}
                              onChange={handleChange}
                              style={{ padding: "20px 10px", fontSize: 14 }}
                            />
                          </div>
                        </div>
                        <div
                          className="mt-5 py-4"
                          style={{ borderTop: "2px solid #E2E5ED" }}
                        >
                          <button
                            className={`add btn-sm my-2 button-style ${styles.buttonStyle}`}
                            type="submit"
                          >
                            Send
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

export default Hire;
