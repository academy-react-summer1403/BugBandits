import http from "../../interceptor";

export const AddCourseFavorite = async () => {
  try {
    const response = await http.post(`/Course/AddCourseFavorite`);
    return response.data;
  } catch (error) {
    return [];
  }
};
