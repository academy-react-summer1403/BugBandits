// import http from "../../interceptor";

// export const AddCourseFavorite = async () => {
//   try {
//     const response = await http.post(`/Course/AddCourseFavorite`);
//     return response;
//   } catch (error) {
//     return [];
//   }
// };

import http from "../../interceptor";

export const AddCourseFavorite = async (obj) => {
  try {
    const response = await http.post(`/Course/AddCourseFavorite`, obj);
    return response;
  } catch (error) {
    return [];
  }
};
export const DeletFavorite = async (data) => {
  try {
    const result = await http.delete(`/Course/DeleteCourseFavorite`, { data });
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
