import { useState } from "react";
import "./styles.css";

export function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState(""); // estado para armazenar o termo de pesquisa chamamos de hooks do react
  console.log(termoPesquisa);
  return (
    <>
      <input
        type="search"
        placeholder="Digite o que você procura"
        className="barra-presuisa"
        value={termoPesquisa}
        onChange={(event) => setTermoPesquisa(event.target.value)}
      />
    </>
  );
}
