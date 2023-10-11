"use client";

// import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";
import { getGame } from "@/libs/apis";
import axios from "axios";
import { useEffect } from "react";

const GameItem = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;
  // const gameDetails = await getGame(slug);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const game = await axios.get(`/api/games/${slug}`);
        console.log(game);
        return game;
      } catch (error) {}
    };
    fetchGame();
  }, []);
  return (
    <GameDetailsClient slug={slug}>
      <GameDetailsServer slug={slug} />
    </GameDetailsClient>
    // {/* <CarouselSlider images={gameDetails.images} />
    // <GameDetailsClient slug={slug}>
    //   <GameDetailsServer slug={slug} />
    // </GameDetailsClient> */}
  );
};

export default GameItem;
