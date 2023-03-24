import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<div className="home">
				<div className="content">
					<div className="routes-wrapper">
						<a className="route-link" href="/cube">
							<img src="src/assets/cube.png" alt="cube" />
							cube
						</a>
						<a className="route-link" href="/cylinder">
							<img src="src/assets/cylinder.png" alt="cylinder" />
							cylinder
						</a>
						<a className="route-link" href="/sphere">
							<img src="src/assets/sphere.png" alt="sphere" />
							sphere
						</a>
					</div>
					<div className="logo-wrapper">
						<img src="src/assets/logo.png" alt="goodai" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
