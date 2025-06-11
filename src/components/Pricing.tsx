"use client";

import { Button } from "@/components/ui/button";

const Pricing = () => {
	return (
		<section
			className="py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600"
			id="pricing"
		>
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
					Our Pricing 💸
				</h2>

				<div className="bg-white rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto">
					<div className="mb-8">
						<div className="text-8xl font-black text-green-500 mb-4">$1</div>
						<p className="text-2xl text-gray-600 mb-2">per app, per month</p>
						<p className="text-lg text-gray-500">No, really. That's it.</p>
					</div>

					<div className="space-y-4 mb-8 text-left">
						<div className="flex items-center gap-3">
							<span className="text-green-500 text-xl">✓</span>
							<span>Unlimited users</span>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-green-500 text-xl">✓</span>
							<span>Unlimited API calls</span>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-green-500 text-xl">✓</span>
							<span>Field-level encryption</span>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-green-500 text-xl">✓</span>
							<span>White-label ready</span>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-green-500 text-xl">✓</span>
							<span>Support for all major platforms</span>
						</div>
					</div>

					<Button
						size="lg"
						className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold text-xl py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
						onClick={() => {
							window.open("https://app.onedollaroauth.com/register", "_blank");
						}}
					>
						Start Your $1 Experiment Now 🚀
					</Button>

					{/* <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
						<p className="text-sm text-yellow-800 font-semibold">
							🎉 Launch Special: First 100 customers get 3 months for the price
							of 1!
						</p>
						<p className="text-xs text-yellow-700 mt-1">
							Because we're not greedy and we want you to try this thing out.
						</p>
					</div> */}
				</div>

				<div className="mt-12 text-center">
					<p className="text-white text-lg opacity-90">
						Seriously, what do you have to lose? It's a dollar. 🤑
					</p>
					<p className="text-white text-sm opacity-75 mt-2">
						You probably spend more on coffee. Daily.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
