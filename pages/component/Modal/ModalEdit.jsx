import React from "react";

const ModalEdit = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="editModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
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
            <div className="modal-body">
              <div className="">
                <div className="col-md-12 col-12 p-0">
                  <label
                    htmlFor="inputName"
                    className="col-sm-6 col-form-label text-secondary"
                  >
                    Nama lengkap
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="name"
                      className="form-control"
                      id="inputName"
                      placeholder="Masukkan nama lengkap"
                      style={{
                        padding: "20px 10px",
                        fontSize: 14,
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12 p-0 mt-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-6 col-form-label text-secondary"
                  >
                    Job desk
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="name"
                      className="form-control"
                      id="inputName"
                      placeholder="Masukkan job desk"
                      style={{
                        padding: "20px 10px",
                        fontSize: 14,
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12 p-0 mt-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-6 col-form-label text-secondary"
                  >
                    Domisili
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="name"
                      className="form-control"
                      id="inputName"
                      placeholder="Masukkan domisili"
                      style={{
                        padding: "20px 10px",
                        fontSize: 14,
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12 p-0 mt-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-6 col-form-label text-secondary"
                  >
                    Tempat kerja
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="name"
                      className="form-control"
                      id="inputName"
                      placeholder="Masukkan tempat kerja"
                      style={{
                        padding: "20px 10px",
                        fontSize: 14,
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-12 p-0 mt-3">
                  <label
                    htmlFor="inputName"
                    className="col-sm-6 col-form-label text-secondary"
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
