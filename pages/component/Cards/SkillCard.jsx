import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const SkillCard = () => {
  const id = Cookies.get("worker_id");
  const [list, setList] = useState([]);
  const [skill, setSkill] = useState({
    worker_id: "",
    skill_name: "",
  });

  const handleSubmitSkill = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/skill/", skill)
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Skill added",
          icon: "success",
          button: "Continue",
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating worker profile:", error);
      });
  };

  const handleChange = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const id = Cookies.get("worker_id");
    axios
      .get(`http://localhost:8000/skill/profile/${id}`)
      .then((response) => {
        setList(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker profile:", error);
      });
  }, []);

  const handleDelete = (skillId) => {
    axios
      .delete(`http://localhost:8000/skill/${skillId}`)
      .then(() => {
        // If the deletion from the database is successful, update the list in the state
        const updatedList = list.filter((skill) => skill.skill_id !== skillId);
        setList(updatedList);
      })
      .catch((error) => {
        console.error("Error deleting skill:", error);
      });
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
          <h3 style={{ fontWeight: 600, letterSpacing: "0.5px" }}>Skill</h3>
        </div>
        <div className="row my-2 mx-1 skill-list pb-2">
          {list.map((skill) => (
            <span
              className="badge m-1"
              key={skill.skill_id}
              style={{
                backgroundColor: "#FBB017",
                color: "white",
                padding: "10px 15px",
                opacity: "0.8",
                position: "relative",
              }}
            >
              {skill.skill_name}
              <span
                className="delete-icon"
                onClick={() => handleDelete(skill.skill_id)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  cursor: "pointer",
                }}
              >
                X
              </span>
            </span>
          ))}
        </div>

        <div className="profile-data">
          <div className="">
            <form onSubmit={handleSubmitSkill}>
              <div className="row col-md-12 w-auto p-0">
                <div className="col-sm-10 col-8">
                  <input
                    type="name"
                    className="form-control"
                    id="inputName"
                    name="skill_name"
                    placeholder="Masukkan nama lengkap"
                    value={skill.skill_name}
                    onChange={handleChange}
                    style={{ padding: "20px 10px", fontSize: 14 }}
                  />
                  <input
                    type="hidden"
                    className="form-control"
                    id="inputWorkerId"
                    name="worker_id"
                    placeholder="Masukkan nama lengkap"
                    value={(skill.worker_id = id)}
                    onChange={handleChange}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
