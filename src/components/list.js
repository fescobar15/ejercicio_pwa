import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const List = () => {
  const [data, setData] = useState([]);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("data") === null) {
        setData("Error while connecting to the server. Please try again...");
      } else {
        setData(JSON.parse(localStorage.getItem("data")));
        setCargado(true);
      }
    } else {
      const URL =
        "https://gateway.marvel.com/v1/public/characters?ts=fepeking&hash=da13d335a213682e9facd898846a48a6&apikey=56e77522f8cf6321850393b051b2b236";
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setData(res.data);
          localStorage.setItem("data", JSON.stringify(res.data));
          setCargado(true);
        });
    }
  }, []);

  let datos;
  let lista;
  if (cargado) {
    console.log("cargado");
    datos = data.results;

    lista = () => {
      return datos.map((character, index) => {
        return (
          <CharacterCard
            image={
              character.thumbnail.path + "." + character.thumbnail.extension
            }
            name={character.name}
            description={character.description}
            url={character.urls[0].url}
          ></CharacterCard>
        );
      });
    };
    return (
      <div className="container">
        <h1>Marvel Character List</h1>
        <div className="row">{lista()}</div>
      </div>
    );
  } else {
    console.log("no cargado");
    return (
      <div className="container">
        <h1>Marvel Character List</h1>

        <p>Loading...</p>
      </div>
    );
  }
};

export default List;
