import API from "../configs";
import store from "../redux/store";

const MovieServices = {
  search: (params) => API.get("/", { params }),
  loadMore: () => {
    const movies = store.getState().movies;
    return API.get("/", {
      params: {
        s: movies.keyword,
        page: movies.currentPage,
      },
    });
  },
  details: (params) => API.get("/", { params }),
};

export default MovieServices;
