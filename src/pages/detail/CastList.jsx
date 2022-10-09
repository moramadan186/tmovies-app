import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "./../../api/tmdbApi";
import apiConfig from "./../../api/apiConfig";
import { Casts } from "./detail-style";

const { Container, ItemImg, ItemName } = Casts;
const CastList = ({ itemId }) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCasts = async () => {
      const response = await tmdbApi.credits(category, itemId);
      setCasts(response.cast.slice(0, 5));
    };
    getCasts();
  }, [category, itemId]);

  return (
    <Container>
      {casts.map((item, index) => (
        <div key={index}>
          <ItemImg
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></ItemImg>
          <ItemName>{item.name}</ItemName>
        </div>
      ))}
    </Container>
  );
};

export default CastList;
