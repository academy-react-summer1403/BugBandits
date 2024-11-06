import http from "../../interceptor";

export const AddCourseLike = async (CourseId) => {
  try {
    const response = await http.post(`/Course/AddCourseLike?CourseId=${CourseId}`);
    return response.data;
  } catch (error) {
    return [];
  }
};