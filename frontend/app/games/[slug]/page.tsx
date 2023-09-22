// "use client";

// import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";
import { getGame } from "@/libs/apis";

const GameItem = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;
  const gameDetails = await getGame(slug);

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
