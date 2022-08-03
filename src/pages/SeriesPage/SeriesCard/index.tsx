import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

import { Container, Card, SeriesImage } from "./styles";

const SeriesCard = () => {
  const [series, setSeries] = useState<any[]>();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR"
    )
      .then((response) => response.json())
      .then((json) => setSeries(json.results));
  }, []);

  return (
    <Container>
      {series &&
        series.map((series) => (
          <Card key={series.id}>
            {/* <Link to={`/series${series.id}`}> */}
            <SeriesImage
              src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
            />
            {/* </Link> */}
          </Card>
        ))}
    </Container>
  );
};

export default SeriesCard;
