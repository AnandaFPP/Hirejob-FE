import axios from "axios";
import { format } from "date-fns";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ListExp = () => {
    const [listExp, setListExp] = useState([]);

  useEffect(() => {
    const id = Cookies.get("worker_id");
    axios
      .get(`http://localhost:8000/experience/profile/${id}`)
      .then((response) => {
        setListExp(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker portofolio:", error);
      });
  }, []);
  return (
    <div>
        {listExp.map((exp) => (
            <div className="experience-list border-bottom">
                <div className="experience-info pt-4">
                <div className="col-md-12 col-12">
                    <h5 style={{ fontWeight: 600 }}>{exp.position}</h5>
                    <h6>{exp.company_name}</h6>
                    <div className="d-flex">
                    <p className="mr-2" style={{ color: "#9EA0A5" }}>
                    {format(new Date(exp.working_start), "dd-MM-yyyy")} - {format(new Date(exp.working_end), "dd-MM-yyyy")}
                    </p>
                    <p className="ml-5" style={{ color: "#9EA0A5" }}>
                    {format(new Date(exp.created_at), "dd-MM-yyyy")}
                    </p>
                    </div>
                    <p style={{ fontSize: 14 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                    Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                </div>
                </div>
                {/* <div className="experience-info row">
                <div className="col-md-2 col-3 pt-3">
                    <Image src={exp1} alt="" className="w-auto" />
                </div>
                <div
                    className="col-md-9 col-8 pt-3"
                    style={{ borderTop: "1px solid" }}
                >
                    <h5 style={{ fontWeight: 600 }}>Web Developer</h5>
                    <h6>Tokopedia</h6>
                    <div className="d-flex">
                    <p className="mr-2" style={{ color: "#9EA0A5" }}>
                        July 2019 - January 2020
                    </p>
                    <p className="ml-2" style={{ color: "#9EA0A5" }}>
                        6 months
                    </p>
                    </div>
                    <p style={{ fontSize: 14 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
                    Curabitur eu lacus fringilla, vestibulum risus at.
                    </p>
                </div>
                </div> */}
            </div>
        ))}
    </div>
  );
};

export default ListExp;
