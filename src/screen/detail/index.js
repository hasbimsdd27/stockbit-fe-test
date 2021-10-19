import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../../components/container";
import Movies from "../../services/movies";

export default function Index() {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

  const getDetailFilm = useCallback(async () => {
    setLoading(true);
    const { data } = await Movies.details({ i: imdbID });
    setDetail(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getDetailFilm();
  }, []);

  if (loading) {
    return <>Loading</>;
  }
  return (
    <Container>
      <div className="flex flex-row">
        <div className="w-1/3 m-4 p-4 bg-white rounded-md flex justify-center flex-col">
          <img src={detail.Poster} alt={detail.Title} className="mb-2" />

          <div className="mb-1">Duration : {detail.Runtime}</div>
          <div className="mb-1">Rating : {detail.imdbRating}/10</div>
          <div className="mb-1">Vote : {detail.imdbVotes}</div>
          <div className="mb-1">Metascore : {detail.Metascore}</div>
        </div>
        <div className="w-2/3 m-4 p-4 bg-white rounded-md">
          <h2 className="text-2xl font-bold mb-2">
            {detail.Title} ({detail.Year})
          </h2>
          <div className="flex flex-row mb-2">
            {(detail?.Genre || "").split(", ").map((item2, index2) => (
              <div
                key={index2}
                className="border-solid rounded-full py-0.5 px-2 border-blue-500 border-2 mr-2"
              >
                {item2}
              </div>
            ))}
          </div>
          <div className="mb-2">{detail?.Plot}</div>

          <div className="mb-1">Language : {detail.Language}</div>
          <div className="mb-1">Country : {detail.Country}</div>
          <div className="mb-1">Actors : {detail.Actors}</div>
          <div className="mb-1">Awards : {detail.Awards}</div>
          <div className="mb-1">Box Office : {detail.BoxOffice}</div>
          <div className="mb-1">Writer : {detail.Writer}</div>
        </div>
      </div>
    </Container>
  );
}
