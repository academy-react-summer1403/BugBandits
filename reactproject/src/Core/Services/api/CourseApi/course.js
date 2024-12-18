import http from "../../interceptor";

export const getCourseList = async (pageNumber, SearchQuery) => {
  try {
    const response = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=9&StartDate=&EndDate=${SearchQuery}`
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch course list:", error);
    return [];
  }
};
