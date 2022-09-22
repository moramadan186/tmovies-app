import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Modal, { ModalContent } from "../modal/Modal";
import { Button, OutlineButton } from "../shared/Button";
import apiConfig from "./../../api/apiConfig";
import tmdbApi, { movieType, category } from "./../../api/tmdbApi";
import {
  SlideCont,
  ItemCont,
  Content,
  ContentInfo,
  ContentPoster,
} from "./hero-style";
import "swiper/css";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <SlideCont>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {movieItems?.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems?.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </SlideCont>
  );
};

const HeroSlideItem = ({ item, className }) => {
  const navigate = useNavigate();
  const movie_background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <ItemCont
      className={`${className}`}
      style={{ backgroundImage: `url(${movie_background})` }}
    >
      <Content>
        <ContentInfo>
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate(`/movie/${item.id}`)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </ContentInfo>
        <ContentPoster>
          <img src={apiConfig.w500Image(item.poster_path)} alt={item.title} />
        </ContentPoster>
      </Content>
    </ItemCont>
  );
};

const TrailerModal = ({ item }) => {
  const iframeRef = useRef(null);
  const onClose = () => (iframeRef.current.src = "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};
export default HeroSlide;
