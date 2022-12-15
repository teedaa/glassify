import {
	createStyles,
	Container,
	Group,
	ActionIcon,
	Affix,
	Flex,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons";
import Logo from "../images/glassifylogo.png";

const useStyles = createStyles((theme) => ({
	footer: {
		width: `100vw`,
		marginTop: 120,
		borderTop: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	inner: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		paddingTop: theme.spacing.xl,
		// paddingBottom: theme.spacing.xl,

		// [theme.fn.smallerThan("xs")]: {
		// 	flexDirection: "column",
		// },
	},

	links: {
		[theme.fn.smallerThan("xs")]: {
			marginTop: theme.spacing.md,
		},
	},
}));

export function Footer() {
	const { classes } = useStyles();

	return (
		<footer id="footer" className={classes.footer}>
			<Container className={classes.inner}>
				<img src={Logo} alt="Glassfiy logo" className="footerlogo" />
				<Group spacing={0} className={classes.links} position="right">
					<ActionIcon size="lg">
						<a
							className="github"
							href="https://github.com/teedaa/glassify"
							target="_blank"
							rel="noreferrer"
						>
							<IconBrandGithub size={50} stroke={1.5} />
						</a>
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
}
