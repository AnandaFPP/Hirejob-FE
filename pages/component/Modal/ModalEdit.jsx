import Cookies from "js-cookie";
import React, { useState } from "react";
import axios from "axios";
import { format } from 'date-fns'

const ModalEdit = ({ experience, onUpdate }) => {
  
  const [editedExp, setEditedExp] = useState({ ...experience });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExp((prevExp) => ({
      ...prevExp,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/experience/${experience.experience_id}`, editedExp)
      .then((response) => {
        console.log(response.data);
        onUpdate(editedExp);
        swal({
          title: "Experience updated",
          icon: "success",
          button: "Continue",
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating experience:", error);
      });
  };
  
  return (
    <div>
      <div className="modal fade" id={`editModal-${experience.experience_id}`} tabIndex={-1} role="dialog" aria-labelledby={`editModalLabel-${experience.experience_id}`} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Edit Experience
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
              <form onSubmit={handleUpdate}>
            <div className="modal-body">
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
                        name="position"
                        placeholder="Your position"
                        value={editedExp.position}
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
                          value={editedExp.company_name}
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
                          value={editedExp.working_start}
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
                          value={editedExp.working_end}
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
                      <input
                        type="text"
                        className="form-control"
                        id="inputDescription"
                        name="description"
                        value={editedExp.description}
                        onChange={handleChange}
                        placeholder="Deskripsi pekerjaan anda"
                        style={{ height: 144, fontSize: 14 }}
                      />
                    </div>
                  </div>
                </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                >
                Close
              </button>
              <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
                Save changes
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
