import styles from "@/scss/styles.module.scss";
export default function Footer() {
	return (
		<footer className={`${styles.footer}`}>
			<div className="container d-flex align-items-center justify-content-center h-100">
				<p className="fw-bold">PokeDex</p>
			</div>
		</footer>
	);
}
