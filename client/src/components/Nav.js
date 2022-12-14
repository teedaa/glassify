import { Header, Group, Button } from "@mantine/core";
import Logo from "../images/notext.png";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { Sidebar } from "./Sidebar";

export function Nav() {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<Header id="header" height={60} px="md">
			<Group position="apart" sx={{ height: "100%" }}>
				<Sidebar />
				<Link to="/" className="logo">
					<img src={Logo} alt="Glassfiy logo" className="logo" />
				</Link>
				<Group>
					{Auth.loggedIn() ? (
						<Button
							className="submit-button"
							variant="default"
							onClick={logout}
						>
							Sign Out
						</Button>
					) : (
						<Link to="/login">
							<Button className="submit-button" variant="default">
								Log In
							</Button>
						</Link>
					)}
				</Group>
			</Group>
		</Header>
	);
}
