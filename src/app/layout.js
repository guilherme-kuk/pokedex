import styles from "@/scss/styles.module.scss";

export const metadata = {
	title: "PokeDex",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="shortcut icon" href="/images/pokedex.png" sizes="32x32" />
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
					crossOrigin="anonymous"
				/>
			</head>
			<body>
				<main className="container">{children}</main>
				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
					crossOrigin="anonymous"
					async
				></script>
			</body>
		</html>
	);
}
