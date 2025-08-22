import { useState } from "react";
import { games } from "~/constants/games";
import SearchBar from "~/components/search-bar";
import HeaderShowcase from "~/components/header-showcase";
import type { GameStatus } from "~/constants/games";

export function Welcome() {
	const platforms = ["PC", "PlayStation"];
	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);

	const statusOrder: Record<GameStatus, number> = {
		Playing: 0,
		Wishlist: 1,
		Completed: 2,
	};

	return (
		<div className="container mx-auto p-8">
			<HeaderShowcase />

			{platforms.map((platform) => {
				const filteredGames = games
					.filter((game) => {
						// Platform filter
						const isPlatformMatch =
							(platform === "PlayStation" &&
								(game.platform.toLowerCase().includes("playstation") ||
									game.platform.toLowerCase().startsWith("ps"))) ||
							(platform === "PC" && game.platform.toLowerCase() === "pc");

						// Search filter
						const isSearchMatch =
							game.title.toLowerCase().includes(search.toLowerCase()) ||
							game.status.toLowerCase().includes(search.toLowerCase()) ||
							game.platform.toLowerCase().includes(search.toLowerCase());

						return isPlatformMatch && isSearchMatch;
					})
					.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

				if (filteredGames.length === 0) return null;

				return (
					<section key={platform} className="mb-12">
						<div className="flex items-center mb-6">
							<h2 className="text-2xl font-bold tracking-wide">{platform}</h2>
							<div className="flex-1 h-px bg-gray-300 ml-4"></div>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 justify-items-center">
							{filteredGames.map((game) => (
								<a
									key={game.id}
									href={game.link}
									target="_blank"
									rel="noopener noreferrer"
									className="relative group overflow-hidden shadow-lg bg-gray-200 aspect-[2/3] w-full max-w-xs hover:shadow-2xl transition-shadow duration-300"
								>
									<img
										src={game.image}
										alt={game.title}
										className="absolute inset-0 w-full h-full object-cover"
										loading="lazy"
									/>
									<div
										className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
        flex flex-col justify-end p-4 text-white"
									>
										<h3 className="text-lg font-bold mb-1">{game.title}</h3>
										<p className="text-xs uppercase tracking-wide opacity-80">{game.platform}</p>
										<p className="text-sm mt-2">🎯 {game.status}</p>
										{game.completion && <p className="text-sm">🏆 {game.completion}</p>}
									</div>
								</a>
							))}
						</div>
					</section>
				);
			})}

			<SearchBar
				search={search}
				setSearch={setSearch}
				showSearch={showSearch}
				setShowSearch={setShowSearch}
			/>
		</div>
	);
}
