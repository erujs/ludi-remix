import { Gamepad2 } from "lucide-react";

export default function HeaderShowcase() {
	return (
		<div className="relative w-full h-64 md:h-96 overflow-hidden">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src="/aerith.mp4" type="video/mp4" />
			</video>
			<div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-white text-center z-10">
				{/* Header */}
				<div className="flex flex-wrap items-center justify-center gap-2 text-center">
					<Gamepad2 className="h-12 w-12 text-white" />
					<h1 className="text-4xl font-bold text-white font-sans">
						Ludi
					</h1>
					<img
						src="/remix.svg"
						alt="Remix"
						className="h-[1.5rem] w-auto object-contain"
					/>
				</div>

				<p className="mt-2">
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
