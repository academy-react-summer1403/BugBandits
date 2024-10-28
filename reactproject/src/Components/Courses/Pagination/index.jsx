import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";

const DefaultPagination = ({ courseList, getData }) => {
  const numberOfPage = courseList && Math.ceil(courseList.totalCount / 9);
  console.log(numberOfPage && numberOfPage);

  const numberOfPageArr = [];
  for (let i = 1; i < numberOfPage + 1; i++) {
    numberOfPageArr.push(i);
  }
  const [active, setActive] = useState(1);

  const getItemProps = (index) => {
    return {
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    };
  };

  const next = () => {
    if (active < 5) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      ></Button>
      <div className="flex items-center gap-2">
        {numberOfPageArr?.map((number) => (
          <IconButton
            key={number}
            {...getItemProps(number)}
            onClick={() => getData(number)}
          >
            {number}
          </IconButton>
        ))}
      </div>
      {/* <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Next
      </Button> */}
    </div>
  );
};

export { DefaultPagination };
