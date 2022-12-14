import React from "react";
import { Nav } from "../components/Nav";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { Center } from '@mantine/core'

export function Homepage() {

	return (
		<div id="page-container">
			<div id="content-wrap">

				<Nav />
                    <br></br>
                    <br></br>
                    <br></br>
                <Center>
				<SearchBar />
                </Center>
			</div>
			<Footer />
		</div>
	);
}
