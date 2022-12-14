import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export function SavedDrinkCard({ cocktail }) {
	// const drinkData = ({
	//     drinkId,
	//     imageLink,
	//     drinkName,
	//     alcoholic,
	// })
	console.log("This is the test cocktail", cocktail);
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Card.Section component="a" href="https://mantine.dev/">
				<Image src={cocktail.image} height={300} alt={cocktail.name} />
			</Card.Section>

			<Group position="apart" mt="md" mb="xs">
				<Text weight={500}>{cocktail.name}</Text>
				<Badge color="pink" variant="light">
					{cocktail.alcoholic}
				</Badge>
			</Group>

			<Button variant="light" color="blue" fullWidth mt="md" radius="md">
				Remove
			</Button>
		</Card>
	);
}
