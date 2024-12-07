import http from "../../interceptor";

export const search = async (pageNumber, searchQuery) => {
  try {
    const response = await http.get(
      `/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=9&Query=${searchQuery}`
    );
    return response.courseFilterDtos || []; 
  } catch (error) {
    console.error("Error fetching course list:", error);
    return [];
  }
};