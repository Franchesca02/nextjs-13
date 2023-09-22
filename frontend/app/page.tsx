import GameCard from "@/components/GameCard/GameCard";
import GameCategoryCard from "@/components/GameCategory/GameCategoryCard";
import Herosection from "@/components/HeroSection/Herosection";
import NewsLetter from "@/components/Newsletter/Newsletter";
import { getCategories, getGames, getRecentGames } from "@/libs/apis";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const categories = await getCategories();
  const games = await getGames();
  const isTrendingGames = games?.filter((game) => game.isTrending);
  const isFeaturedGame = games?.find((game) => game.isFeatured);
  const recentGames = await getRecentGames();
  return (
    <>
      <Herosection showLink />
      <section className={sectionClassNames.section}>
        <div className={sectionClassNames.trending}>
          <h2 className={sectionClassNames.trendingTitle}>
            Currently Trending Games
          </h2>
        </div>
        <div className="flex gap-8 flex-wrap">
          {isTrendingGames.map((game) => (
            <GameCard
              key={game._id}
              gameName={game.name}
              imageUrl={game.images[0].url}
              slug={game.slug.current}
              price={game.price}
            />
          ))}
        </div>
      </section>
      {isFeaturedGame && (
        <>
          <h3 className="font-semibold text-2xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
            Featured Game
          </h3>
          <section className={sectionClassNames.featured}>
            <div className={sectionClassNames.featuredContent}>
              <h2 className={featuredClassNames.gameName}>
                {isFeaturedGame.name}
              </h2>
              <p className={featuredClassNames.gameDetails}>
                {isFeaturedGame.description}
              </p>
              <Link href={`/games/${isFeaturedGame.slug.current}`}>
                <Image
                  src={isFeaturedGame.images[0].url}
                  alt={isFeaturedGame.name}
                  width={500}
                  height={500}
                  className={featuredClassNames.gameImage}
                />
              </Link>
            </div>
          </section>
        </>
      )}

      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1592155931584-901ac15763e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxheSUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        }}
        className={styles.categorySection}
      >
        <div className={styles.categoryContent}>
          <h2 className={styles.categoryHeading}>Categories</h2>
          <p className={styles.categorySubHeading}>
            Explore a wide range of games, offering thrilling adventures,
            challenging sports, and immersive action gameplay. Discover new
            worlds, compete with friends, and embark on epic quests that will
            keep you entertained for hours.
          </p>
          <div className="flex flex-wrap">
            {categories.map((category) => (
              <GameCategoryCard
                key={category._id}
                categoryImage={category.image}
                categoryName={category.name}
                slug={category.slug.current}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="recent-games" className={recentGamesClasses.section}>
        <h2 className={recentGamesClasses.heading}>Our Recent Games</h2>
        <p className={recentGamesClasses.subHeading}>
          Stay Ahead of the Gaming Curve with Our Latest Games.
        </p>

        <div className="flex rounded gap-8 flex-wrap py-10">
          {recentGames.map((game) => (
            <GameCard
              key={game._id}
              gameName={game.name}
              imageUrl={game.images[0].url}
              price={game.price}
              slug={game.slug.current}
            />
          ))}
        </div>

        <Link href="games" className={sectionClassNames.latestButton}>
          See All
        </Link>
      </section>
      <NewsLetter />
    </>
  );
}

const sectionClassNames = {
  section: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-white",
  trending: "flex flex-col sm:flex-row items-center justify-between mb-8",
  trendingTitle: "font-bold text-3xl sm:mr-4",
  trendingButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  latestButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary-gradient border-2 border-primary-dark",
  featured: "pb-24 px-6 sm:px-12 md:px-20 lg:px-36 text-white",
  featuredContent: "mx-auto max-w-screen-xl",
};

// const games = [
//   {
//     id: 1,
//     price: 12,
//     name: "Call of Duty: Modern Warfare",
//     slug: "call-of-duty",
//     image:
//       "https://images.unsplash.com/photo-1602673221577-0b56d7ce446b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FsbCUyMG9mJTIwRHV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 2,
//     price: 14,
//     name: "Assassin's Creed Valhalla",
//     slug: "assassin-creed",
//     image:
//       "https://images.unsplash.com/photo-1586325194227-7625ed95172b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QXNzYXNzaW4ncyUyMENyZWVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     price: 42,
//     name: "FIFA 23",
//     slug: "fifa-23",
//     image:
//       "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMHN0YXRpb24lMjBmaWZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     price: 27,
//     name: "The Legend of Zelda: Breath of the Wild",
//     slug: "the-legend-of-zelda",
//     image:
//       "data:image/jpeg;base64,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",
//   },
// ];

// const featuredGame = {
//   name: "Eternal Domination",
//   description:
//     "Immerse yourself in a vast fantasy realm where epic battles and strategic conquests await. In 'Eternal Domination,' you'll lead armies, forge alliances, and build your empire from scratch. Command powerful heroes, employ cunning tactics, and unleash your might on the battlefield. Will you rise as the supreme ruler or fall beneath the weight of your ambitions? Join the fray and claim your destiny in this thrilling strategy game.",
//   slug: "eternal-domination",
//   image: "/images/trending.jpeg",
// };

const featuredClassNames = {
  gameName: "font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8",
  gameDetails: "max-w-screen-md text-sm mb-8 md:mb-12",
  gameImage: "h-72 md:h-96 lg:h-112 w-full object-cover rounded-lg",
};

const styles = {
  categorySection:
    "bg-center bg-cover bg-no-repeat py-16 sm:py-20 md:py-28 lg:py-32",
  categoryContent: "container mx-auto px-4 sm:px-6 md:px-8",
  categoryHeading:
    "text-center max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-[130%,187%,130%,130%]",
  categorySubHeading:
    "text-center bg-primary-gradient px-8 rounded-3xl py-5 max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8",
};
const recentGamesClasses = {
  section: "py-16 lg:py-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-4xl font-bold mb-3",
  subHeading: "text-gray-400 max-w-xl mx-auto lg:text-lg",
};

// const categories = [
//   {
//     id: 1,
//     name: "Action",
//     slug: "action",
//     image:
//       "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 2,
//     name: "Adventure",
//     slug: "adventure",
//     image:
//       "https://images.unsplash.com/photo-1536751048178-14106afab4f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFjaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 3,
//     name: "Sports",
//     slug: "sports",
//     image:
//       "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
// ];
