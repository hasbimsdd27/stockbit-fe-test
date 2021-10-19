import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../../components/navbar";
import { showModal } from "../../redux/action/modal";
import {
  addMoreMovies,
  addPage,
  loadingSearch,
} from "../../redux/action/movies";
import Movies from "../../services/movies";
import { Link } from "react-router-dom";

export default function MoviesList(props) {
  const dispatch = useDispatch();
  const loadMoreRef = useRef();
  const TimeoutRef = useRef(null);
  const isFetch = useRef(false);

  const loadMoreMovies = useCallback(async () => {
    dispatch(loadingSearch({ isLoading: true }));
    const { data } = await Movies.loadMore();
    dispatch(addMoreMovies(data.Search));
    dispatch(addPage());
    isFetch.current = false;
    dispatch(loadingSearch({ isLoading: false }));
  }, [dispatch]);

  const scrollListener = useCallback(() => {
    clearTimeout(TimeoutRef.current);

    if (
      window.scrollY > loadMoreRef.current.getBoundingClientRect().y &&
      !isFetch.current
    ) {
      TimeoutRef.current = setTimeout(() => {
        console.log("called");
        isFetch.current = true;
        loadMoreMovies();
      }, 500);
    }
  }, [isFetch, loadMoreMovies]);

  const onClickImage = (imageURL) => {
    dispatch(
      showModal({
        content: (
          <div>
            <img src={imageURL} className="mb-4 w-full" alt="modal" />
          </div>
        ),
      })
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [scrollListener]);

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Navbar />
      <div className="grid grid-cols-3 gap-2 m-4">
        {props.movies.map((item) => (
          <div key={item.imdbID} className="p-4 m-4 bg-white rounded-md ">
            <img
              src={item.Poster}
              alt={item.Title}
              className="mb-4 w-full cursor-pointer"
              onClick={() => onClickImage(item.Poster)}
            />
            <h4 className="text-center">
              {item.Title} ({item.Year})
            </h4>
            <div className="flex items-center justify-center mt-4">
              <Link to={`/detail/${item.imdbID}`}>
                <button className="bg-blue-400 text-white p-2 rounded-md">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div ref={loadMoreRef} />
    </div>
  );
}
