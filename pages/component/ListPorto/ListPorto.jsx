import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ListPorto = () => {
    const [listPorto, setListPorto] = useState([]);

  useEffect(() => {
    const id = Cookies.get("worker_id");
    axios
      .get(`http://localhost:8000/portofolio/profile/${id}`)
      .then((response) => {
        setListPorto(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker portofolio:", error);
      });
  }, []);
  return (
    <div>
      <div className="portofolio-list pt-4">
        <div className="portofolio-card row justify-content-around">
            {listPorto.map((list) => (
            <div className="justify-content-center">
                <Image src={list.porto_photo} width={150} height={150} alt="porto1" className="w-auto" />
                <p className="text-center mt-2" style={{ fontSize: 14 }}>
                {list.porto_name}
                </p>
            </div>
            ))}
          {/* <div className="justify-content-center">
            <Image src={porto2} alt="porto1" className="w-auto" />
            <p className="text-center mt-2" style={{ fontSize: 14 }}>
              Social media app
            </p>
          </div>
          <div className="justify-content-center">
            <Image src={porto3} alt="porto1" className="w-auto" />
            <p className="text-center mt-2" style={{ fontSize: 14 }}>
              Project management web
            </p>
          </div>
          <div className="justify-content-center">
            <Image src={porto4} alt="porto1" className="w-auto" />
            <p className="text-center mt-2" style={{ fontSize: 14 }}>
              Remainder app
            </p>
          </div>
          <div className="justify-content-center">
            <Image src={porto5} alt="porto1" className="w-auto" />
            <p className="text-center mt-2" style={{ fontSize: 14 }}>
              Social media app
            </p>
          </div>
          <div className="justify-content-center">
            <Image src={porto6} alt="porto1" className="w-auto" />
            <p className="text-center mt-2" style={{ fontSize: 14 }}>
              Project management web
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ListPorto;
