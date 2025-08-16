export type GameStatus = "Wishlist" | "Playing" | "Completed";
export type CompletionType = "Story" | "Full" | "Endless";

export interface Game {
	id: string;
	title: string;
	platform: string;
	status: GameStatus;
	completion?: CompletionType;
	image: string;
	link: string;
}

const rawGames: Omit<Game, "id">[] = [
	{
		title: "Hogwarts Legacy",
		platform: "PC",
		status: "Completed",
		completion: "Story",
		image: "/hogwarts-legacy.jpg",
		link: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/",
	},
	{
		title: "Elder Scrolls V: Skyrim",
		platform: "PC",
		status: "Completed",
		completion: "Story",
		image: "/skyrim.png",
		link: "https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/",
	},
	{
		title: "Final Fantasy VII Remake",
		platform: "PS5",
		status: "Completed",
		completion: "Story",
		image: "/ffvii-remake.png",
		link: "https://www.playstation.com/en-sg/games/final-fantasy-vii-remake/",
	},
	{
		title: "Final Fantasy VII Rebirth",
		platform: "PS5",
		status: "Playing",
		image: "/ffvii-rebirth.png",
		link: "https://www.playstation.com/en-sg/games/final-fantasy-vii-rebirth/",
	},
	{
		title: "Need For Speed Heat",
		platform: "PC",
		status: "Playing",
		image: "/nfs-heat.png",
		link: "https://store.steampowered.com/app/1222680/Need_for_Speed_Heat/",
	},
	{
		title: "Brothers: A Tale of Two Sons",
		platform: "PS5",
		status: "Completed",
		completion: "Story",
		image: "/brothers.jpg",
		link: "https://www.playstation.com/en-sg/games/brothers-a-tale-of-two-sons-remake/",
	},
	{
		title: "A Way Out",
		platform: "PS4",
		status: "Playing",
		image: "/a-way-out.jpg",
		link: "https://www.playstation.com/en-sg/games/a-way-out/",
	},
	{
		title: "It Takes Two",
		platform: "PS4",
		status: "Completed",
		completion: "Story",
		image: "/it-takes-two.png",
		link: "https://www.playstation.com/en-sg/games/it-takes-two/",
	},
	{
		title: "Split Fiction",
		platform: "PS5",
		status: "Playing",
		image: "/split-fiction.jpg",
		link: "https://www.playstation.com/en-sg/games/split-fiction/",
	},
	{
		title: "Genshin Impact",
		platform: "PC",
		status: "Playing",
		completion: "Endless",
		image: "/genshin.jpg",
		link: "https://genshin.hoyoverse.com/en/",
	},
	{
		title: "Summoners War: Sky Arena",
		platform: "PC",
		status: "Playing",
		completion: "Endless",
		image: "/summoners-war.jpg",
		link: "https://store.steampowered.com/app/2426960/Summoners_War/",
	},
	{
		title: "Elden Ring",
		platform: "PC",
		status: "Wishlist",
		image: "/elden-ring.webp",
		link: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
	},
	{
		title: "Stellar Blade",
		platform: "PC",
		status: "Wishlist",
		image: "/stellar-blade.jpg",
		link: "https://store.steampowered.com/app/3489700/Stellar_Blade/",
	},
	{
		title: "Clair Obscur: Expedition 33",
		platform: "PC",
		status: "Wishlist",
		image: "/expedition-33.jpg",
		link: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/",
	},
	{
		title: "Hades",
		platform: "PC",
		status: "Wishlist",
		image: "/hades.jpg",
		link: "https://store.steampowered.com/app/1145360/Hades/",
	},
	{
		title: "Hades II",
		platform: "PC",
		status: "Wishlist",
		image: "/hades-2.webp",
		link: "https://store.steampowered.com/app/1145350/Hades_II/",
	},
];

// 👇 Auto-generate stable IDs from title
export const games: Game[] = rawGames.map((game) => ({
	id: game.title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-") // slugify safely
		.replace(/(^-|-$)/g, ""), // trim dashes
	...game,
}));
