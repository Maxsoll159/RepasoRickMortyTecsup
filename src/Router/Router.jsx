import { Route, Routes } from "react-router-dom";
import { Personaje } from "../Components/Personaje";
import { RickAndMorty } from "../RickandMorty";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RickAndMorty />} />
      <Route path="personaje/:id" element={<Personaje />} />
    </Routes>
  );
};
