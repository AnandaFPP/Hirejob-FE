import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ListExp = () => {
  const router = useRouter();
  const [listExp, setListExp] = useState([]);

  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/experience/profile/${id}`)
      .then((response) => {
        setListExp(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker portofolio:", error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {listExp.map((exp, index) => (
        <div className="experience-list border-bottom" key={index}>
          <div className="experience-info pt-4">
            <div className="col-md-12 col-12">
              <h5 style={{ fontWeight: 600 }}>{exp.position}</h5>
              <h6>{exp.company_name}</h6>
              <div className="d-flex">
                <p className="mr-2" style={{ color: "#9EA0A5" }}>
                  {format(new Date(exp.working_start), "dd-MM-yyyy")} -{" "}
                  {format(new Date(exp.working_end), "dd-MM-yyyy")}
                </p>
                <p className="ml-5" style={{ color: "#9EA0A5" }}>
                  {format(new Date(exp.created_at), "dd-MM-yyyy")}
                </p>
              </div>
              <p style={{ fontSize: 14 }}>{exp.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListExp;
