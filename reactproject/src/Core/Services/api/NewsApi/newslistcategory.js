import http from "../../interceptor";

export const getNewsList = async () => {
  try {
    const response = await http.get(
      `/News/GetListNewsCategory`
    );
    return response;
  } catch (error) {
    return [];
  }
};
