import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const DefaultPagination = ({ courseList, getData }) => {
  const numberOfPage = courseList && Math.ceil(courseList.totalCount / 9);
  // console.log(numberOfPage && numberOfPage);

  const numberOfPageArr = [];
  for (let i = 1; i < numberOfPage + 1; i++) {
    numberOfPageArr.push(i);
  }
  const [active, setActive] = useState(1);

  const handlePageChange = (index) => {
    setActive(index);
    getData(index);
  };

  const next = () => {
    if (active < numberOfPage) {
      handlePageChange(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      handlePageChange(active - 1);
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <BsArrowRight className="dark:text-white" />
      </Button>
      <div className="flex flex-wrap items-center gap-2">
        {numberOfPageArr?.map((number) => (
          <IconButton
            key={number}
            variant={active === number ? "filled" : "text"}
            onClick={() => handlePageChange(number)}
            className="font-kalamehNum dark:text-white"
          >
            {number}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === numberOfPage}
      >
        <BsArrowLeft className="dark:text-white" />
      </Button>
    </div>
  );
};

export { DefaultPagination };
