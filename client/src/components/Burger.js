import { useState } from "react";
import { Burger } from "@mantine/core";

export function BurgerComponent({ setBurgerOpen, burgerOpened }) {
	// const [opened, setOpened] = useState(false);
	// const title = opened ? 'Close sidebar' : 'Open sidebar';

	return (
		<Burger
			opened={burgerOpened}
			onClick={() => setBurgerOpen(true)}
			// title={title}
		/>
	);
}
