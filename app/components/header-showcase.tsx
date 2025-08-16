export default function HeaderShowcase() {
	return (
		<div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-4">
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
				<h1 className="text-3xl md:text-5xl font-extrabold">Ludi Remix</h1>
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
