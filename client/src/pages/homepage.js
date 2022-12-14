import React from "react";
import { Nav } from "../components/Nav";
import Auth from "../utils/auth";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";

export function Homepage() {

	return (
		<>
			<Nav />
			<SearchBar />
			<Footer />
		</>
	);
}
