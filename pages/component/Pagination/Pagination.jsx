import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
    <div className="text-center">
      {pages.map((page, index) => {
        return <button type="button" className="btn btn-info ml-1" key={index} onClick={() => setCurrentPage(page)} currentPage={currentPage}>{page}</button>;
      })}

    </div>
    </>
  );
};

export default Pagination;