import http from "../../interceptor";

export const getCourseList = async (pageNumber) => {
  try {
    const response = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=9&StartDate=&EndDate=`);
    return response.data;
  } catch (error) {
    return [];
  }
};
