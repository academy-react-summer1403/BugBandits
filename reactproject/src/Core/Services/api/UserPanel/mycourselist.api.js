import http from "../../interceptor";

export const getMyCourses = async () => {
  try {
    const response = await http.get(
      `/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10`
    );
    return response;
  } catch (error) {
    return [];
  }
};


export const getMyCoursesReserve = async () => {
  try {
    const response = await http.get(
      `/SharePanel/GetMyCoursesReserve`
    );
    return response;
  } catch (error) {
    return [];
  }
};