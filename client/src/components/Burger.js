import { Burger } from "@mantine/core";

export function BurgerComponent({ setBurgerOpen, burgerOpened }) {
	return <Burger opened={burgerOpened} onClick={() => setBurgerOpen(true)} />;
}
