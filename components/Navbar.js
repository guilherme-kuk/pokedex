import Image from "next/image";
import Link from "next/link";
import styles from "@/scss/styles.module.scss";
export default function Navbar() {
	return (
		<nav className={`${styles.navbar} navbar navbar-expand-lg bg-dark`}>
			<div className="container">
				<Link className="navbar-brand" href="#">
					<Image src="/images/pokeball.png" width={30} height={30} alt="Logo" />
					<span
						className={`${styles.logoTitle} ms-1 d-inline-block align-text-top`}
					>
						PokeDex
					</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" href="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href="/about">
								Sobre
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
