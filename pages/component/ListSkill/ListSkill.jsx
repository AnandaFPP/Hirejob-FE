import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const ListSkill = () => {
  const [listSkill, setListSkill] = useState([]);

  useEffect(() => {
    const id = Cookies.get("worker_id")
    axios
      .get(`http://localhost:8000/skill/profile/${id}`)
      .then((response) => {
        setListSkill(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker profile:", error);
      });
  }, []);
  return (
    <div>
      <div className="row m-0 skill-list pb-2">
        {listSkill.map((list) => (
          <span
          key={list.skill_id}
            className="badge mr-1 mb-1"
            style={{
              backgroundColor: "#FBB017",
              color: "white",
              padding: "10px 20px",
              opacity: "0.8",
            }}
          >
            {list.skill_name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ListSkill;
