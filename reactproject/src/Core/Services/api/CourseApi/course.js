import http from "../../interceptor";

export const getCourseList = async (pageNumber,query) => {
  try {
    const response = await http.get(`/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=9&StartDate=&EndDate=&Query=${query}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
