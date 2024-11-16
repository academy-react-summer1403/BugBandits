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
export const DeletCourseDisLike = async (data) => {
  try {
    const response = await http.delete(`/Course/DeleteCourseDisLike`, {
      data: data,
    });
    console.log("data:", data);
    return response;
  } catch (error) {
    console.error("DeleteCourseDisLike Error:", error);
    toast.error("دوباره امتحان کنید");
    return [];
  }
};
