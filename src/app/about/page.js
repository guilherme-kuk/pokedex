import Image from "next/image";
export default function About() {
	return (
		<div className="container text-center">
			<h1 className="mb-4">Sobre o projeto</h1>
			<p className="mb-3">PokeDex utilizando api PokeApi</p>
			<Image
				src="/images/charizard.png"
				width={300}
				height={300}
				alt="Charizard"
			/>
		</div>
	);
}
