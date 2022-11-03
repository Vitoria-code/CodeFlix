import React, { useEffect, useState } from "react";
import "./home.css";
import api from "../../Services/api";
import { Link } from "react-router-dom";

// URL DA API: https://api.themoviedb.org/3//movie/now_playing?api_key=a244b54c7380bc04ee977446ef5d9382

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "a244b54c7380bc04ee977446ef5d9382",
          language: "pt-BR",
          page: 1,
        },
      });

      // console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
      setLoading(false);
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes..</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <h1>{filme.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              ></img>
              <Link to={`/filme/${filme.id}`}> Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
