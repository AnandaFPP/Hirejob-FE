import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import pen from "../../../styles/assets/img/pen.svg";
import Image from "next/image";
import axios from "axios";
import Swal from "sweetalert2";

const ModalEditAvatarRecruiter = ({ recruiter_id }) => {
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("recruiter_photo", photo);

    axios
      .put(`${process.env.NEXT_PUBLIC_API}/recruiter/profilephoto/${recruiter_id}`, formData)
      .then((response) => {
        console.log(response.data);
        Toast.fire({
          icon: "success",
          title: "Profile's photo successfully added!",
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating experience:", error);
      });
  };

  return (
    <>
      <div className="row m-auto" onClick={handleShow}>
        <div className="col-md-2">
          <Image src={pen} style={{ cursor: "pointer" }} alt="photo" />
        </div>
        <div className="ml-1 ps-2">
          {/* <p
            style={{ color: "#9EA0A5", fontSize: "20px", cursor: "pointer" }}
            className="fw-semibold"
          >
            Edit
          </p> */}
          <span className="" style={{ color: "#9EA0A5", fontSize: "16px", cursor: "pointer" }}>Edit Avatar</span>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="col-md-12 mt-3 border-bottom">
              <div className="col-md-12 mt-3 mb-4">
                <p className="mb-0" style={{ color: "#9EA0A5", fontSize: 14 }}>
                  Upload gambar
                </p>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="recruiter_photo"
                  onChange={handleUpload}
                />
              </div>
            </div>
            <div className="col-md-12 mt-3">
              <button
                type="submit"
                className="btn btn-outline-warning fw-semibold container-fluid"
                style={{ height: 50 }}
              >
                Edit Photo
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEditAvatarRecruiter;
