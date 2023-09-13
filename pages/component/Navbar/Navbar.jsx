import React, { useState, useEffect } from "react";
import profile from "../../../styles/assets/img/default.jpg";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [worker, setWorker] = useState([]);
  const [recruiter, setRecruiter] = useState([]);
  const [workerProfile, setWorkerProfile] = useState([]);
  const [recruiterProfile, setRecruiterProfile] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("worker_id");
    localStorage.removeItem("worker_photo");
    localStorage.removeItem("recruiter_id");
    localStorage.removeItem("recruiter_photo");

    // window.location.reload();
    router.push("/");
  };

  useEffect(() => {
    const workerId = localStorage.getItem("worker_id");
    const recruiterId = localStorage.getItem("recruiter_id");
    const workerAvatar = localStorage.getItem("worker_photo");
    const recruiterAvatar = localStorage.getItem("recruiter_photo");
    setWorker(workerId);
    setRecruiter(recruiterId);
    setWorkerProfile(workerAvatar);
    setRecruiterProfile(recruiterAvatar);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top mb-5 bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" href="/home">
            <svg
              width={86}
              height={24}
              viewBox="0 0 86 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.9365 11.0273C37.9365 12.071 37.5947 12.8708 36.9111 13.4268C36.2275 13.9827 35.2546 14.2607 33.9922 14.2607H32.9531V18H31.3193V8.00586H34.1973C35.446 8.00586 36.3802 8.26107 37 8.77148C37.6243 9.2819 37.9365 10.0339 37.9365 11.0273ZM32.9531 12.8867H33.8213C34.6598 12.8867 35.2751 12.7409 35.667 12.4492C36.0589 12.1576 36.2549 11.7018 36.2549 11.082C36.2549 10.5078 36.0794 10.0794 35.7285 9.79688C35.3776 9.51432 34.8307 9.37305 34.0879 9.37305H32.9531V12.8867ZM43.0635 18.1367C41.8877 18.1367 40.9671 17.7949 40.3018 17.1113C39.641 16.4232 39.3105 15.4775 39.3105 14.2744C39.3105 13.0394 39.6182 12.0687 40.2334 11.3623C40.8486 10.6559 41.694 10.3027 42.7695 10.3027C43.7676 10.3027 44.556 10.6058 45.1348 11.2119C45.7135 11.818 46.0029 12.652 46.0029 13.7139V14.582H40.9648C40.9876 15.3158 41.1859 15.8809 41.5596 16.2773C41.9333 16.6693 42.4596 16.8652 43.1387 16.8652C43.5853 16.8652 44 16.8242 44.3828 16.7422C44.7702 16.6556 45.1849 16.5143 45.627 16.3184V17.624C45.235 17.8109 44.8385 17.943 44.4375 18.0205C44.0365 18.098 43.5785 18.1367 43.0635 18.1367ZM42.7695 11.5195C42.2591 11.5195 41.849 11.6813 41.5391 12.0049C41.2337 12.3285 41.0514 12.8001 40.9922 13.4199H44.4238C44.4147 12.7956 44.2643 12.3239 43.9727 12.0049C43.681 11.6813 43.2799 11.5195 42.7695 11.5195ZM54.0283 18L53.0508 14.4727C52.9323 14.099 52.7181 13.2308 52.4082 11.8682H52.3467C52.0824 13.0986 51.8727 13.9714 51.7178 14.4863L50.7129 18H48.9355L46.8164 10.4395H48.457L49.4209 14.165C49.6396 15.0856 49.7946 15.874 49.8857 16.5303H49.9268C49.9723 16.1976 50.0407 15.8171 50.1318 15.3887C50.2275 14.9557 50.3096 14.6322 50.3779 14.418L51.5264 10.4395H53.29L54.4043 14.418C54.4727 14.6413 54.557 14.9831 54.6572 15.4434C54.762 15.9036 54.8236 16.2614 54.8418 16.5166H54.8965C54.9648 15.9561 55.1243 15.1722 55.375 14.165L56.3525 10.4395H57.9658L55.833 18H54.0283ZM65.9775 14.2061C65.9775 15.4411 65.6608 16.4049 65.0273 17.0977C64.3939 17.7904 63.512 18.1367 62.3818 18.1367C61.6755 18.1367 61.0511 17.9772 60.5088 17.6582C59.9665 17.3392 59.5495 16.8812 59.2578 16.2842C58.9661 15.6872 58.8203 14.9945 58.8203 14.2061C58.8203 12.9801 59.1348 12.0231 59.7637 11.335C60.3926 10.6468 61.279 10.3027 62.4229 10.3027C63.5166 10.3027 64.3825 10.6559 65.0205 11.3623C65.6585 12.0641 65.9775 13.012 65.9775 14.2061ZM60.4746 14.2061C60.4746 15.9515 61.1195 16.8242 62.4092 16.8242C63.6852 16.8242 64.3232 15.9515 64.3232 14.2061C64.3232 12.4788 63.6807 11.6152 62.3955 11.6152C61.721 11.6152 61.2311 11.8385 60.9258 12.2852C60.625 12.7318 60.4746 13.3721 60.4746 14.2061ZM71.665 10.3027C71.9886 10.3027 72.2552 10.3255 72.4648 10.3711L72.3076 11.8682C72.0798 11.8135 71.8428 11.7861 71.5967 11.7861C70.9541 11.7861 70.4323 11.9958 70.0312 12.415C69.6348 12.8343 69.4365 13.3789 69.4365 14.0488V18H67.8301V10.4395H69.0879L69.2998 11.7725H69.3818C69.6325 11.3213 69.9583 10.9635 70.3594 10.6992C70.765 10.4349 71.2002 10.3027 71.665 10.3027ZM75.4795 18H73.873V7.36328H75.4795V18ZM80.333 18.1367C79.3896 18.1367 78.6536 17.7949 78.125 17.1113C77.5964 16.4277 77.332 15.4684 77.332 14.2334C77.332 12.9938 77.5986 12.0299 78.1318 11.3418C78.6696 10.6491 79.4124 10.3027 80.3604 10.3027C81.3538 10.3027 82.1104 10.6696 82.6299 11.4033H82.7119C82.6344 10.861 82.5957 10.4326 82.5957 10.1182V7.36328H84.209V18H82.9512L82.6709 17.0088H82.5957C82.0807 17.7607 81.3265 18.1367 80.333 18.1367ZM80.7637 16.8379C81.4245 16.8379 81.9053 16.6533 82.2061 16.2842C82.5068 15.9105 82.6618 15.3066 82.6709 14.4727V14.2471C82.6709 13.2946 82.516 12.6178 82.2061 12.2168C81.8962 11.8158 81.4108 11.6152 80.75 11.6152C80.1849 11.6152 79.7497 11.8454 79.4443 12.3057C79.139 12.7614 78.9863 13.4131 78.9863 14.2607C78.9863 15.0993 79.1344 15.7396 79.4307 16.1816C79.7269 16.6191 80.1712 16.8379 80.7637 16.8379Z"
                fill="#5E50A1"
              />
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="#5E50A1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="#5E50A1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="#5E50A1"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="/home"
            className="text-decoration-none font-weight-bold"
            style={{ color: "#5E50A1" }}
          >
            Home
          </Link>
          <div className="row mt-3 m-2 align-items-center">
            <div>
              <a href="#" style={{ color: "black" }}>
                <i className={`bi bi-bell m-3 ${styles.i}`} />
              </a>
            </div>
            <div>
              <a href="#" style={{ color: "black" }}>
                <i className={`bi bi-envelope m-3 ${styles.i}`} />
              </a>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle border-light"
                type="button"
                id="profileDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Image
                  alt="image"
                  src={
                    workerProfile !== null && workerProfile !== "null"
                      ? workerProfile
                      : recruiterProfile !== null && recruiterProfile !== "null"
                      ? recruiterProfile
                      : profile
                  }
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="profileDropdown"
              >
                {worker && (
                  <Link
                    href={`/workerProfile/${worker}`}
                    className="dropdown-item"
                  >
                    Profile
                  </Link>
                )}
                {recruiter && (
                  <Link
                    href={`/recruiterDetail/${recruiter}`}
                    className="dropdown-item"
                  >
                    Profile
                  </Link>
                )}
                {worker && (
                  <Link href={`/worker/EditWorker/`} className="dropdown-item">
                    Settings
                  </Link>
                )}
                {recruiter && (
                  <Link
                    href={`/recruiterDetail/${recruiter}`}
                    className="dropdown-item"
                  >
                    Settings
                  </Link>
                )}
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
