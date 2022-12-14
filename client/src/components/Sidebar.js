import React, { useState } from "react";
import { Drawer, Button, Group, ScrollArea, Stack } from "@mantine/core";
import { BurgerComponent } from "./Burger";
import { SavedDrinkCard } from "./SavedDrinkCard";
import { USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";

const drinkList = "This is the saved drinks list";
const ingredientsList = "This is the ingredients list";

export function Sidebar() {
	const { loading: currentUserLoading, data: currentUserData } = useQuery(USER);
	if (Auth.loggedIn()) {
		if (currentUserLoading) {
			console.log("currentUserData is loading");
		}

		if (!currentUserLoading) {
			console.log(currentUserData);
		}
	} else {
		console.log("to see user data, log in");
	}

	const [opened, setOpened] = useState(false);
	const [title, setTitle] = useState("Saved Drinks");
	const [content, setContent] = useState(drinkList);
	function toggleTitle() {
		if (title === "Saved Drinks") {
			setTitle("Ingredients List");
		} else {
			setTitle("Saved Drinks");
		}
	}

	function toggleContent() {
		if (content === drinkList) {
			setContent(ingredientsList);
		} else {
			setContent(drinkList);
		}
	}

	return (
		<>
			<Drawer
				opened={opened}
				onClose={() => setOpened(false)}
				// title will be where we switch the List Title
				title={title}
				position="left"
				padding="xl"
				size="25%"
			>
				<Stack className="sidebar" justify="flex-start">
					<ScrollArea.Autosize
						maxHeight={1000}
						// minWidth={25%}
						sx={{ maxWidth: 500 }}
						mx="auto"
						offsetScrollbars
					>
						{Auth.loggedIn() && !currentUserLoading ? (
							<>
								{currentUserData.user.savedCocktails.map((cocktail) => (
									<SavedDrinkCard cocktail={cocktail} />
								))}
							</>
						) : (
							<h2>"log in to see saved drinks"</h2>
						)}
						{/* <SavedDrinkCard /> */}
					</ScrollArea.Autosize>
					<Group align="flex-end" position="center">
						<Button
							onClick={() => {
								toggleTitle();
								toggleContent();
							}}
						>
							Toggle Sidebar Content
						</Button>
					</Group>
				</Stack>
			</Drawer>

			{/* <Group position="left">
				<Button onClick={() => setOpened(true)}>Open Drawer</Button>
			</Group> */}

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
