// import React from "react";
// import bg from "./../../../assets/images/coursedetail/herosectionbg.svg";
// import courseimg from "./../../../assets/images/coursedetail/courseimg.svg";
// import { Button } from "@material-tailwind/react";

// const CourseDetailHeader = ({ cost, title, miniDescribe, imageAddress }) => {
//   return (
//     <div
//       className="grid grid-rows-3 grid-flow-col rounded-xl w-full h-72 bg-cover bg-center relative bg-black bg-opacity-70 shadow-lg"
//       style={{
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl backdrop-blur-sm shadow-lg bg-gradient-to-bl from-black/70 to-transparent"></div>
//       <div class="row-span-3 w-96 h-52 justify-center z-50 absolute top-10 -left-12">
//         <img
//           src={
//             imageAddress ||
//             imageAddress !== "null" ||
//             imageAddress.trim() !== ""
//               ? imageAddress
//               : courseimg
//           }
//           alt="not found"
//           className="w-96 h-52 rounded-xl"
//         />
//       </div>
//       <div dir="rtl" class="col-span-2 w-full h-44 p-14 z-50">
//         <h1 className="text-white font-bold text-3xl whitespace-nowrap">
//           {title}
//         </h1>
//         <p className="text-[#acacac] w-[460px] text-right mt-3">
//           {miniDescribe}
//         </p>
//       </div>
//       <div dir="rtl" class="row-span-2 col-span-2 w-full h-20 mt-32 pr-14 z-50">
//         <div className="flex flex-row gap-60">
//           <div>
//             <Button className="relative top-0 right-6 text-sm font-iranSans rounded-lg bg-ocean_blue text-white font-bold">
//               خرید دوره
//             </Button>
//           </div>
//           <div className="text-white">
//             <h1 className="font-bold font-kalamehNum">{cost} تومان</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { CourseDetailHeader };
import React from "react";
import bg from "./../../../assets/images/coursedetail/herosectionbg.svg";
import courseimg from "./../../../assets/images/coursedetail/courseimg.svg";
import { Button } from "@material-tailwind/react";

const CourseDetailHeader = ({ cost, title, miniDescribe, imageAddress }) => {
  // Use default image if imageAddress is null or empty
  const imageSrc = imageAddress && imageAddress.trim() !== "" ? imageAddress : courseimg;

  return (
    <div
      className="grid grid-rows-3 grid-flow-col rounded-xl w-full h-72 bg-cover bg-center relative bg-black bg-opacity-70 shadow-lg"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl backdrop-blur-sm shadow-lg bg-gradient-to-bl from-black/70 to-transparent"></div>
      <div className="row-span-3 w-96 h-52 justify-center z-50 absolute top-10 -left-12">
        <img
          src={imageSrc}
          alt="Course Image"
          className="w-96 h-52 rounded-xl"
        />
      </div>
      <div dir="rtl" className="col-span-2 w-full h-44 p-14 z-50">
        <h1 className="text-white font-bold text-3xl whitespace-nowrap">
          {title}
        </h1>
        <p className="text-[#acacac] w-[460px] text-right mt-3">
          {miniDescribe}
        </p>
      </div>
      <div dir="rtl" className="row-span-2 col-span-2 w-full h-20 mt-32 pr-14 z-50">
        <div className="flex flex-row gap-60">
          <div>
            <Button className="relative top-0 right-6 text-sm font-iranSans rounded-lg bg-ocean_blue text-white font-bold">
              خرید دوره
            </Button>
          </div>
          <div className="text-white">
            <h1 className="font-bold font-kalamehNum">{cost} تومان</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CourseDetailHeader };
