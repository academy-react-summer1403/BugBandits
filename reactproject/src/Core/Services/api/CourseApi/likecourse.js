import toast from "react-hot-toast";
import http from "../../interceptor";

export const AddCourseLike = async (id) => {
  try {
    const response = await http.post(`/Course/AddCourseLike?CourseId=${id}`);
    return response;
  } catch (error) {
    console.error("AddCourseLike Error:", error);
    return [];
  }
};
export const DeletCourseLike = async (data) => {
  try {
    const response = await http.delete(`/Course/DeleteCourseLike`, {
      data: data,
    });
    console.log("data:", data);
    return response;
  } catch (error) {
    console.error("DeleteCourseLike Error:", error);
    toast.error("دوباره امتحان کنید");
    return [];
  }
};
