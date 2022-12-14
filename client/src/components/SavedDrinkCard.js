import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { RemoveButton } from "./RemoveButton";
import { Center } from "@mantine/core";

export function SavedDrinkCard({ cocktail }) {
	return (
		<>
			<Card shadow="sm" p="lg" radius="md" withBorder>
				<Card.Section component="a" href="https://mantine.dev/">
					<Image src={cocktail.image} height={300} alt={cocktail.name} />
				</Card.Section>

				<Group position="apart" mt="md" mb="xs">
					<Text className="text" weight={500}>{cocktail.name}</Text>
					<Badge className="saved-drink" variant="light">
						{cocktail.alcoholic}
					</Badge>
				</Group>
				<Center>
					<RemoveButton cocktailId={cocktail._id} />
				</Center>
			</Card>
			<br></br>
		</>
	);
}
