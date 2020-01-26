import React, { useState } from "react";

import { Container } from "./styles";
import Graphic from "../../components/Graphic";

import api from "../../services/api";

export default function Main() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [cityTitle, setCityTitle] = useState("");
  const [localeNotFound, setLocaleNotFound] = useState(false);

  async function loadForecast() {
    const response = await api.get("/forecast", {
      params: { state, city }
    });

    if (response.data.error === "Locale not found") {
      setCityTitle("Lugar não encontrado");
      setLocaleNotFound(true);
      return;
    }
    setLocaleNotFound(false);

    setForecast(response.data.days);
    setCityTitle(response.data.resCity);
    return;
  }

  return (
    <Container>
      <div>
        <input
          type="text"
          placeholder="Estado (sigla)"
          maxLength="2"
          onChange={e => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cidade"
          maxLength="30"
          onChange={e => setCity(e.target.value)}
        />
        <button onClick={loadForecast}>Pesquisar</button>
      </div>
      <main>
        <h2>{cityTitle}</h2>
        <div>
          <Graphic
            state={state}
            city={city}
            forecast={forecast}
            localeNotFound={localeNotFound}
          />
        </div>
      </main>
    </Container>
  );
}
