import { TextInput, Button, Box, Container, Center } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { SEARCH } from "../utils/query";
import { useLazyQuery } from "@apollo/client";
import { SavedDrinkCard } from "./SavedDrinkCard";

export function SearchBar() {
	const [getCocktails, { loading, data }] = useLazyQuery(SEARCH);
	const [searched, setSearched] = useState(false);

	const form = useForm({
		initialValues: {
			search: "",
		},
	});

	const submitHandler = async (values) => {
		setSearched(true);
		console.log(values);
		await getCocktails({
			variables: {
				search: values.search.trim(),
			},
		});
	};

	// console.log(data);

	return (
		<Container>
			<Box sx={{ maxWidth: 300 }} mx="auto">
				<form
					onSubmit={form.onSubmit(
						async (values) => await submitHandler(values)
					)}
				>
					<h2 className="search text">Cocktail Search</h2>
					<TextInput
						className="text"
						placeholder="Cocktail name"
						{...form.getInputProps("search")}
					/>

					<Button className="submit-button text search-button" type="submit">
						Search
					</Button>
				</form>
			</Box>
			<br></br>
			{!searched || !data ? (
				<Center>
					<h2 className="text">Search to find cocktails!</h2>
				</Center>
			) : (
				<div className="searched-drinks-container">
					{data?.searchCocktails.length !== 0 ? (
						<>
							{data.searchCocktails.map((cocktail, index) => (
								<>
								<div className="searched-drink">
									<SavedDrinkCard className="" cocktail={cocktail} />
								</div>
								{
									((index === data.searchCocktails.length - 1) && (data.searchCocktails.length % 2 !== 0) ? (
										<div className="searched-drink hidden">
											<SavedDrinkCard className="" cocktail={cocktail} />
										</div>
									) : (
										<></>
									))
								}
								</>
							))}
						</>
					) : (
						<h2 className="text">No cocktails found, try something else</h2>
					)}
				</div>
			)}
		</Container>
	);
}
