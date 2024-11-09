import http from "../../interceptor";

export const AddCourseDissLike = async (id) => {
  try {
    const response = await http.post(
      `/Course/AddCourseDissLike?CourseId=${id}`
    );
    return response;
  } catch (error) {
    console.error("AddDisCourseLike Error:", error);
    return [];
  }
};

// export const DeletCourseDisLike = async (data) => {
//   try {
//     const response = await http.delete(`/Course/DeleteCourseLike`, {
//       data: data,
//     });
//     console.log("data:",data);
//     return response;
//   } catch (error) {
//     console.error("DeleteCourseLike Error:", error);
//     toast.error("Error while deleting like.");
//     return [];
//   }
// };
