import { Card, Image, Text, Group, RingProgress } from "@mantine/core";
import classes from "./ArtPiecePreview.module.css";
import Link from "next/link";
import FavoriteButton from "../Button/FavoriteButton";

export function ProPiecesPreview({
  image,
  name = "",
  id,
  isFavorite,
  onToggleFavorite
}) {
  console.log('isfavorite==',isFavorite);
  return (
    <>
    <Link href={`/art-pieces/${id}`}>
      <Card withBorder padding="lg" className={classes.card}>
        <Card.Section>
          <Image src={image} alt={title} height={400} />
        </Card.Section>

        <Group justify="space-between" mt="xl">
          <Text fz="sm" fw={700} className={classes.title}>
            {title}

          </Text>
          <Group gap={5}>
            <Text fz="sm" fw={700}>
              {name}
            </Text>
          </Group>

        </Group>
      </Card>
    </Link>
    <FavoriteButton isFavorite={isFavorite} onToggleFavorite={() => onToggleFavorite(id)} />
    </>
  );
}
