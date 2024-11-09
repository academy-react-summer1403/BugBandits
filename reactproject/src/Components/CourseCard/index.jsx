// import React from "react";
// import course from "../../assets/images/landing/course.svg";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { BiLike } from "react-icons/bi";
// import { BiDislike } from "react-icons/bi";
// import { MdFavoriteBorder } from "react-icons/md";
// import { HiOutlineUser } from "react-icons/hi";
// import { HiOutlineStar } from "react-icons/hi2";
// import imgcourse from "./../../assets/images/landing/course.svg";

// const Card = ({
//   courseId,
//   tumbImageAddress,
//   title,
//   describe,
//   teacherName,
//   cost,
//   likeCount,
//   dissLikeCount,
//   postData
// }) => {
//   const darkMode = useSelector((state) => state.darkMode.value);
//   const navigate = useNavigate();
//   const handleNavigation = () => {
//     navigate(`/courses/detailpage/${courseId}`);
//   };
//   return (
//     <div
//       className={`${
//         darkMode && "dark"
//       }  w-72 h-[400px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-16 bg-white rounded-3xl dark:bg-midnight_blue`}
//     >
//       <div className="w-full h-44 flex justify-center relative bottom-10 ">
//         <img
//           onClick={handleNavigation}
//           src={
//             tumbImageAddress && tumbImageAddress.trim() !== ""
//               ? tumbImageAddress
//               : imgcourse
//           }
//           alt="not found"
//           className="rounded-xl w-64 h-full cursor-pointer"
//         />
//       </div>
//       <div dir="rtl" className="w-full h-auto px-5 relative bottom-10">
//         <div className="h-10">
//           <h1
//             onClick={handleNavigation}
//             className="text-cool_blue text-lg sm:text-xl font-bold dark:text-cloud_grey pt-2 cursor-pointer hover:text-ocean_blue"
//           >
//             {title}
//           </h1>
//         </div>
//         <div className="h-24 mb-5">
//           <p className="text-xs text-justify text-dusty_blue dark:text-cloud_grey ">
//             {describe}
//           </p>
//         </div>
//         <div className="w-full h-10">
//           <h4 className="text-xs sm:text-sm flex flex-row gap-1 text-cool_blue font-bold dark:text-cloud_grey">
//             <HiOutlineUser />
//             {teacherName}
//           </h4>
//         </div>
//         <div className=" flex flex-row border-t-2">
//           <div className="w-1/2 text-cool_blue dark:text-white flex flex-row mt-4 gap-2">
//             <MdFavoriteBorder onClick={postData} className="w-5 h-5 cursor-pointer " />
//             <span className="text-sm">{dissLikeCount}</span>
//             <BiDislike className="w-5 h-5 cursor-pointer " />
//             <span className="text-sm">{likeCount}</span>
//             <BiLike className="w-5 h-5 cursor-pointer " />
//           </div>
//           <div className="w-1/2">
//             <h1 className="whitespace-nowrap mt-4 text-left text-cool_blue dark:text-white font-kalamehNum">
//               {cost} تومان
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { Card };
import React, { useState } from "react";
import course from "../../assets/images/landing/course.svg";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi2";
import imgcourse from "./../../assets/images/landing/course.svg";
import {
  AddCourseLike,
  DeletCourseLike,
} from "../../Core/Services/api/CourseApi/likecourse";
const Card = ({
  id,
  tumbImageAddress,
  title,
  describe,
  teacherName,
  cost,
  likeCount,
  dissLikeCount,
  postData,
  userIsLiked,
  userLikedId,
  setRand,
}) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/courses/detailpage/${id}`);
  };

  const likee = async (id) => {
    const data = new FormData();
    try {
      if (userIsLiked === false) {
        const like = await AddCourseLike(id.id);
        setRand(Math.random());
        console.log("Like", like);
      } else if (userIsLiked === true) {
        data.append("CourseLikeId", id.userLikedId);
        setRand(Math.random());
        const deleteLike = await DeletCourseLike(data);
        console.log("DeleteLike", deleteLike);
      }
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };

  return (
    <div
      className={`${
        darkMode && "dark"
      }  w-72 h-[400px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-16 bg-white rounded-3xl dark:bg-midnight_blue`}
    >
      <div className="w-full h-44 flex justify-center relative bottom-10 ">
        <img
          onClick={handleNavigation}
          src={
            tumbImageAddress && tumbImageAddress.trim() !== ""
              ? tumbImageAddress
              : imgcourse
          }
          alt="not found"
          className="rounded-xl w-64 h-full cursor-pointer"
        />
      </div>
      <div dir="rtl" className="w-full h-auto px-5 relative bottom-10">
        <div className="h-10">
          <h1
            onClick={handleNavigation}
            className="text-cool_blue text-lg sm:text-xl font-bold dark:text-cloud_grey pt-2 cursor-pointer hover:text-ocean_blue"
          >
            {title}
          </h1>
        </div>
        <div className="h-24 mb-5">
          <p className="text-xs text-justify text-dusty_blue dark:text-cloud_grey ">
            {describe}
          </p>
        </div>
        <div className="w-full h-10">
          <h4 className="text-xs sm:text-sm flex flex-row gap-1 text-cool_blue font-bold dark:text-cloud_grey">
            <HiOutlineUser />
            {teacherName}
          </h4>
        </div>
        <div className=" flex flex-row border-t-2">
          <div className="w-1/2 text-cool_blue dark:text-white flex flex-row mt-4 gap-2">
            <MdFavoriteBorder
              onClick={postData}
              className="w-5 h-5 cursor-pointer "
            />
            <span className="text-sm">{dissLikeCount}</span>
            <BiDislike className="w-5 h-5 cursor-pointer " />
            <span
              onClick={() => {
                likee({ id, userLikedId });
              }}
              className="text-sm"
            >
              <BiLike className="w-5 h-5 cursor-pointer " />
            </span>{" "}
            {likeCount}
          </div>
          <div className="w-1/2">
            <h1 className="whitespace-nowrap mt-4 text-left text-cool_blue dark:text-white font-kalamehNum">
              {cost} تومان
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
