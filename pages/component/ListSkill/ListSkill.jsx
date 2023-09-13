import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ListSkill = () => {
  const [listSkill, setListSkill] = useState([]);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/skill/profile/${id}`)
      .then((response) => {
        setListSkill(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker profile:", error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
