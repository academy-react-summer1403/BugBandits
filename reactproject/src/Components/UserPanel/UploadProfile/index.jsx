// import { Button } from "@material-tailwind/react";
// import React, { useEffect, useState } from "react";
// import { HiOutlineUserCircle } from "react-icons/hi2";
// import { useSelector } from "react-redux";

// const UploadProfile = () => {
//   const darkMode = useSelector((state) => state.darkMode.value);
//   const [file, setFile] = useState(null);
//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(URL.createObjectURL(selectedFile));
//     }
//   };
//   const handleClear = () => {
//     setFile(null);
//     document.getElementById("fileInput").value = "";
//   };

//   const [profileImg, setProfileImg] = useState({});

//   const getData = async () => {
//     const img = await getUserInfo();
//     setProfileImg(img);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className={`${darkMode ? "dark" : ""} flex flex-col mb-8 mt-8`}>
//       <div className="flex items-center gap-3 sm:gap-5">
//         <div className="relative">
//           {file ? (
//             <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
//               <img
//                 className="w-full h-full object-cover"
//                 src={file}
//                 alt="Preview"
//               />
//             </div>
//           ) : (
//             <div className="w-32 h-32 rounded-full border-2 border-dotted border-gray-300 flex items-center justify-center text-gray-400">
//               {/* <HiOutlineUserCircle className="w-8 h-8" /> */}
//             </div>
//           )}
//         </div>

//         <div className="grow">
//           <div className="flex items-center gap-x-2">
//             <input
//               type="file"
//               id="fileInput"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="hidden"
//             />
//             <Button
//               type="button"
//               className="font-iranSans py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//               onClick={() => document.getElementById("fileInput").click()}
//             >
//               بارگزاری
//             </Button>
//             <Button
//               type="button"
//               className="font-iranSans py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white dark:bg-midnight_blue text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none"
//               onClick={handleClear}
//             >
//               حذف
//             </Button>
//             <Button
//               type="button"
//               className="font-iranSans py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white dark:bg-midnight_blue text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none"
//             >
//               ثبت تغییرات
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { UploadProfile };
import { Button, Spinner } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserInfo } from "../../../Core/Services/api/UserPanel/getuserinfo.api";

const UploadProfile = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const [file, setFile] = useState(null);
  const [profileImg, setProfileImg] = useState(null); // Start with null to handle loading state

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleClear = () => {
    setFile(null);
    document.getElementById("fileInput").value = "";
  };

  const getData = async () => {
    const response = await getUserInfo();
    setProfileImg(response.userImage[0].puctureAddress); // Set the profile image URL
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col mb-8 mt-8`}>
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="relative">
          {file ? (
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
              <img
                className="w-full h-full object-cover overflow-hidden"
                src={file}
                alt="Preview"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full  overflow-hidden border-2 border-dotted border-gray-300 flex items-center justify-center text-gray-400">
              {profileImg ? (
                <img
                  src={profileImg}
                  alt="Profile Pic"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <Spinner />
              )}
            </div>
          )}
        </div>

        <div className="grow">
          <div className="flex items-center gap-x-2">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              type="button"
              className="font-iranSans py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
              onClick={() => document.getElementById("fileInput").click()}
            >
              بارگزاری
            </Button>
            <Button
              type="button"
              className="font-iranSans py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white dark:bg-midnight_blue text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none"
              onClick={handleClear}
            >
              حذف
            </Button>
            <Button
              type="button"
              className="font-iranSans py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white dark:bg-midnight_blue text-gray-500 shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              ثبت تغییرات
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UploadProfile };
