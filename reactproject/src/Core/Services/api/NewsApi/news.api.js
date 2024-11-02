import http from "../../interceptor";

export const getNews = async () => {
  try {
    const response = await http.get(`/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC`);
    return response.data;
  } catch (error) {
    return [];
  }
};
