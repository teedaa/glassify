import { Card, Image, Text, Badge, Group } from "@mantine/core";
import { Center } from "@mantine/core";
import { AddRemoveButton } from "./AddRemoveButton";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

export function SavedDrinkCard({ cocktail }) {
	return (
		<>
			<Card shadow="sm" p="lg" radius="md" withBorder>
				<Card.Section component="a" href="https://mantine.dev/">
					<Link to={`/cocktail/${cocktail._id}`}>
						<Image src={cocktail.image} height={300} alt={cocktail.name} />
					</Link>
				</Card.Section>

				<Group position="apart" mt="md" mb="xs">
					<Link className="link-restyle" to={`/cocktail/${cocktail._id}`}>
						<Text className="link-restyle text" weight={500}>{cocktail.name}</Text>
					</Link>
					<Badge className="saved-drink" variant="light">
						{cocktail.alcoholic}
					</Badge>
				</Group>
				<Center>
					{Auth.loggedIn() ? (
						<AddRemoveButton cocktailId={cocktail._id} />
					) : (
						<></>
					)}
				</Center>
			</Card>
			<br></br>
		</>
	);
}
