import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPage, initialData, loadingSearch } from "../redux/action/movies";
import Movies from "../services/movies";

export default function Navbar() {
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
    <div className="w-full py-4 px-6 flex flex-row bg-blue-600 items-center">
      <div className="flex flex-1 text-white font-bold text-2xl">
        Disini Logo
      </div>
      <div className="flex">
        <input
          className="w-full p-2 focus:outline-none rounded-md"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
