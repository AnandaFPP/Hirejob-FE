import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ListPorto = () => {
  const router = useRouter();
  const [listPorto, setListPorto] = useState([]);

  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/portofolio/profile/${id}`)
      .then((response) => {
        setListPorto(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching worker portofolio:", error);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="portofolio-list pt-4">
        <div className="portofolio-card row justify-content-around">
          {listPorto.map((list, index) => (
            <div className="justify-content-center" key={index}>
              <Image
                src={list.porto_photo}
                width={150}
                height={150}
                alt="porto1"
                className="w-auto"
              />
              <p className="text-center mt-2" style={{ fontSize: 14 }}>
                {list.porto_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPorto;
