import http from "../../../interceptor";


export const newsLike = async (newsId) => {
    try {
      const response = await http.post(`/News/NewsLike/NewsId=${newsId}`);
      return response;
    } catch (error) {
      throw error;
    }
  };
