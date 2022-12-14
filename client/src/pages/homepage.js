import React from "react";
import { Nav } from "../components/Nav";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";

export function Homepage() {

	return (
		<div id="page-container">
			<div id="content-wrap">
				<Nav />
				<SearchBar />
			</div>
			<Footer />
		</div>
	);
}
