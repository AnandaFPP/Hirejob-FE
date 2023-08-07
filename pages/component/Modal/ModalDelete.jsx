import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const ModalDelete = ({experience, onDelete}) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/experience/${experience.experience_id}`)
      .then(() => {
        onDelete(experience.experience_id);
        swal({
          title: "Experience Deleted",
          icon: "success",
          button: "Continue",
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting experience:", error);
      });
  };

  return (
    <div>
      <div className="modal fade" id="deleteModal" tabIndex={-1} role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">
              Delete Experience
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">x</span>
            </button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this experience?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ModalDelete;
