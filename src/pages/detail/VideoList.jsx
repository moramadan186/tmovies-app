import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import { VideoSc } from "./detail-style";

const { Container, Title, VideoIframe } = VideoSc;

const VideoList = ({ id }) => {
  const { category } = useParams();
  const [videos, setVidoes] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const res = await tmdbApi.getVideos(category, id);
      setVidoes(res.results.slice(0, 5));
    };
    getVideos();
  }, [category, id]);

  return (
    <>
      {videos.map((item, i) => (
        <Video key={i} item={item} />
      ))}
    </>
  );
};

const Video = ({ item }) => {
  const iframeRef = useRef(null);

  return (
    <Container>
      <Title>
        <h2>{item.name}</h2>
      </Title>
      <VideoIframe
        src={`https://www.youtube.com/embed/${item.key}`}
        ref={iframeRef}
        title="video"
      />
    </Container>
  );
};
export default VideoList;
