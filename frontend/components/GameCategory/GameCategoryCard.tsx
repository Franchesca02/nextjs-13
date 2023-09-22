import { FC } from "react";
import gameCardClassNames from "../GameCard/gameCardClassNames";
import gameCategoryCardClassNames from "./gameCategoryCardClassNames";
import Link from "next/link";
import Image from "next/image";

interface GameCategoryCardProps {
  categoryImage: string;
  categoryName: string;
  slug: string;
}
const GameCategoryCard: FC<GameCategoryCardProps> = (props) => {
  const { categoryImage, categoryName, slug } = props;
  const { image, container, arrow, name } = gameCategoryCardClassNames;

  return (
    <Link href={`/categories/${slug}`} className={container}>
      <Image
        src={categoryImage}
        alt={categoryName}
        width={200}
        height={200}
        className={image}
      />
      <h3 className={name}>{categoryName}</h3>
      <Image
        src="/images/arrow.svg"
        alt="View"
        width={20}
        height={20}
        className={arrow}
      />
    </Link>
  );
};

export default GameCategoryCard;
