import { Gamepad2 } from "lucide-react";

export default function HeaderShowcase() {
	return (
		<div className="relative w-full h-64 md:h-96 overflow-hidden shadow-lg mb-4">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src="/aerith.mp4" type="video/mp4" />
			</video>
			<div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white px-4 text-center z-10">
				<div className="flex items-center justify-center gap-2 text-center">
					<Gamepad2 className="h-13 w-13 text-white transform scale-x-[-1]" />
					<h1 className="text-5xl font-bold text-white font-sans">
						Ludi
					</h1>
					<img
						src="/remix.svg"
						alt="Remix"
						className="h-[2.25rem] w-auto object-contain"
					/>
				</div>
				<p className="mt-2 text-sm md:text-lg">
					A simple game backlog for tracking progress and completion.<br />
					&apos;Ludi&apos; means "games" in Latin, and the app is built with Remix Conventions.
				</p>
			</div>
			<div className="absolute bottom-2 right-2 text-xs text-white/70 z-20">
				Video from DS Gaming
			</div>
		</div>
	);
}
