import React, { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
import ModalEdit from "../Modal/ModalEdit";
import ModalDelete from "../Modal/ModalDelete";
import axios from "axios";
import { format } from "date-fns";
import Swal from "sweetalert2";

const ExpCard = () => {
  const [id, setId] = useState()
  const [listExp, setListExp] = useState([]);
  const [exp, setExp] = useState({
    worker_id: "",
    position: "",
    company_name: "",
    working_start: "",
    working_end: "",
    description: "",
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleUpdate = (updatedExp) => {
    const updatedIndex = listExp.findIndex(
      (exp) => exp.experience_id === updatedExp.experience_id
    );

    if (updatedIndex !== -1) {
      const updatedExpCopy = { ...listExp[updatedIndex], ...updatedExp };

      const updatedListExp = [
        ...listExp.slice(0, updatedIndex),
        updatedExpCopy,
        ...listExp.slice(updatedIndex + 1),
      ];

      setListExp(updatedListExp);
      setSelectedExperience(null);
    }
  };

  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleSubmitExp = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.NEXT_PUBLIC_API}/experience/`, exp)
      .then((response) => {
        console.log(response.data);
        Toast.fire({
          icon: "success",
          title: "Experience successfully added!",
        })
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating worker's experience", error);
      });
  };

  const handleChange = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (experience_id) => {
    const updatedList = listExp.filter(
      (exp) => exp.experience_id !== experience_id
    );
    setListExp(updatedList);
  };

  useEffect(() => {
    const id = localStorage.getItem("worker_id");
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/experience/profile/${id}`)
      .then((response) => {
        setListExp(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching worker profile:", error);
      });
  }, []);

  useEffect(() => {
    const isId = localStorage.getItem("worker_id");
    setId(isId);
  }, []);

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
            Pengalaman kerja
          </h3>
        </div>
        {listExp.map((data) => (
          <div
            style={{
              borderBottom: "2px solid #C4C4C4",
              width: "100%",
              borderRadius: 2,
            }}
            className="py-3 d-flex"
            key={data.experience_id}
          >
            <div className="col-md-9">
              <h5 style={{ fontWeight: 600 }}>{data.position}</h5>
              <h6>{data.company_name}</h6>
              <div className="d-flex">
                <p className="mr-2" style={{ color: "#9EA0A5" }}>
                  {format(new Date(data.working_start), "dd-MM-yyyy")} -{" "}
                  {format(new Date(data.working_end), "dd-MM-yyyy")}
                </p>
                <p className="ml-2" style={{ color: "#9EA0A5" }}>
                  {format(new Date(data.created_at), "dd-MM-yyyy")}
                </p>
              </div>
              <p style={{ fontSize: 14 }}>{data.description}</p>
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
                data-target={`#editModal-${data.experience_id}`}
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
                onClick={() => setSelectedExperience(data)}
              >
                X
              </button>
            </div>
            <ModalEdit experience={data} onUpdate={handleUpdate} />
            {selectedExperience && (
              <ModalDelete
                experience={selectedExperience}
                onDelete={handleDelete}
              />
            )}
          </div>
        ))}
        <div className="profile-data pt-4">
          <form onSubmit={handleSubmitExp}>
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
                    type="hidden"
                    className="form-control"
                    id="inputWorkerId"
                    name="worker_id"
                    placeholder="Masukkan nama lengkap"
                    value={(exp.worker_id = id)}
                    onChange={handleChange}
                    style={{ padding: "20px 10px", fontSize: 14 }}
                  />
                  <input
                    type="name"
                    className="form-control"
                    id="inputName"
                    name="position"
                    placeholder="Your position"
                    value={exp.position}
                    onChange={handleChange}
                    style={{ padding: "20px 10px", fontSize: 14 }}
                  />
                </div>
              </div>
              <div className="col-md-12 mt-3 row justify-content-between">
                <div className="col-md-12 col-12">
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
                      name="company_name"
                      placeholder="Company name"
                      value={exp.company_name}
                      onChange={handleChange}
                      style={{ padding: "20px 10px", fontSize: 14 }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 mt-3 row justify-content-between">
                <div className="col-md-6 col-6">
                  <label
                    htmlFor="inputDate"
                    className=" col-form-label text-secondary"
                  >
                    Dari
                  </label>
                  <div className="">
                    <input
                      type="date"
                      className="form-control"
                      id="inputDate"
                      name="working_start"
                      value={exp.working_start}
                      onChange={handleChange}
                      style={{ padding: "20px 10px", fontSize: 14 }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <label
                    htmlFor="inputDate"
                    className=" col-form-label text-secondary"
                  >
                    Sampai
                  </label>
                  <div className="">
                    <input
                      type="date"
                      className="form-control"
                      id="inputDate"
                      name="working_end"
                      value={exp.working_end}
                      onChange={handleChange}
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
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputDescription"
                    name="description"
                    value={exp.description}
                    onChange={handleChange}
                    placeholder="Deskripsi pekerjaan anda"
                    style={{ height: 144, fontSize: 14 }}
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
                  Tambah pengalaman kerja
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
