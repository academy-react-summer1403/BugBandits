import http from "../../interceptor";

export const AddCourseDissLike = async () => {
  try {
    const response = await http.post(`/Course/AddCourseDissLike?CourseId=`);
    return response.data;
  } catch (error) {
    return [];
  }
};
