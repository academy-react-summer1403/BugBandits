import http from "../../../interceptor";

export const addFavoriteNews = async (newsId) => {
    try {
      const response = await http.post(`/News/AddFavoriteNews?NewsId=${newsId}`);
      return response;
    } catch (error) {
      throw error;
    }
  };