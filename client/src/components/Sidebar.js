import React, { useState } from "react";
import { Drawer, Group, Stack } from "@mantine/core";
import { BurgerComponent } from "./Burger";
import { SavedDrinkCard } from "./SavedDrinkCard";
import { USER } from "../utils/query";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

export function Sidebar() {
	const { loading: currentUserLoading, data: currentUserData } = useQuery(USER);
	const [opened, setOpened] = useState(false);
	const [title, setTitle] = useState("Saved Drinks");

	return (
		<>
			<Drawer
				opened={opened}
				onClose={() => setOpened(false)}
				title={title}
				position="left"
				padding="xl"
				size="25%"
				className="sidebar"
			>
				<Stack className="full-height" justify="flex-start">
					<div className="saved-drinks">
						{Auth.loggedIn() && !currentUserLoading ? (
							<>
								{currentUserData.user.savedCocktails.map((cocktail) => (
									<SavedDrinkCard cocktail={cocktail} />
								))}
							</>
						) : (
							<h2>Please log in to see saved drinks!"</h2>
						)}
					</div>
				</Stack>
			</Drawer>

			<Group position="center">
				<BurgerComponent
					setBurgerOpen={setOpened}
					burgerOpened={opened}
					onClick={() => setOpened(true)}
				>
					Open Drawer
				</BurgerComponent>
			</Group>
		</>
	);
}
