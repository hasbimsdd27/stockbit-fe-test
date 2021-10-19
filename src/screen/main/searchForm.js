import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addPage, initialData, loadingSearch } from "../../redux/action/movies";
import Movies from "../../services/movies";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchData = useCallback(
    async (params) => {
      dispatch(loadingSearch({ isLoading: true }));
      try {
        const { data } = await Movies.search(params);
        dispatch(
          initialData({
            keyword: params.s,
            data: data.Search,
            currentPage: 1,
            lastPage: Math.ceil(data.totalResults / data.Search.length),
          })
        );
        dispatch(addPage());
        dispatch(loadingSearch({ isLoading: false }));
      } catch (error) {
        dispatch(loadingSearch({ isLoading: false }));
      }
    },
    [dispatch]
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let timeout = null;
    timeout = setTimeout(() => {
      searchData({ s: search });
    }, 500);
    return () => clearTimeout(timeout);
  }, [search, searchData]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="p-4 rounded-md bg-white text-center">
        <h1 className="text-xl font-bold mb-4">Cari Film Disini</h1>
        <input
          className="focus:outline-none bg-none border-b-2 border-solid border-black text-center"
          placeholder="Ketik Disini"
          onChange={handleChange}
          value={search}
        />
      </div>
    </div>
  );
}
