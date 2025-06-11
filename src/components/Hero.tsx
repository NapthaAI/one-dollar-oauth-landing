"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ArrowDown = dynamic(() =>
	import("lucide-react").then((mod) => mod.ArrowDown),
);
const Github = dynamic(() => import("lucide-react").then((mod) => mod.Github));
const Slack = dynamic(() => import("lucide-react").then((mod) => mod.Slack));

const Hero = () => {
	const handleButtonClick = () => {
		window.open("https://labs.naptha.ai", "_blank");
	};

	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white px-4">
			<div className="text-center max-w-4xl mx-auto">
				<div className="mb-8">
					<span className="text-6xl md:text-8xl font-bold animate-bounce">
						💰
					</span>
				</div>

				<h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
					OAuth For Just
					<span className="block text-yellow-300 text-6xl md:text-9xl font-black animate-pulse">
						$1
					</span>
				</h1>

				<p className="text-xl md:text-2xl mb-8 opacity-90">
					Because why pay $99/month when you can pay $1? 🤷‍♂️
				</p>

				{/* Integrated Services Section */}
				<div className="mb-8">
					<p className="text-sm opacity-75 mb-4">
						Works with your favorite platforms:
					</p>
					<div className="flex items-center justify-center gap-8">
						<div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
							<span className="text-2xl">💬</span>
							<span className="font-semibold">Discord</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
							<Slack className="w-6 h-6" />
							<span className="font-semibold">Slack</span>
						</div>
						<div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
							<Github className="w-6 h-6" />
							<span className="font-semibold">GitHub</span>
						</div>
					</div>
				</div>

				<div className="space-y-4 mb-12">
					<Button
						size="lg"
						className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
						onClick={handleButtonClick}
					>
						Start Your $1 Experiment 🚀
					</Button>

					<p className="text-sm opacity-75">
						No, seriously. It's actually just $1. We're not even kidding.
					</p>
				</div>

				<div className="animate-bounce">
					<ArrowDown className="mx-auto" size={32} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
