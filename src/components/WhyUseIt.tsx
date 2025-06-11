"use client";

import dynamic from "next/dynamic";

const Shield = dynamic(() => import("lucide-react").then((mod) => mod.Shield));
const Clock = dynamic(() => import("lucide-react").then((mod) => mod.Clock));
const DollarSign = dynamic(() =>
	import("lucide-react").then((mod) => mod.DollarSign),
);
const Palette = dynamic(() =>
	import("lucide-react").then((mod) => mod.Palette),
);

const WhyUseIt = () => {
	const benefits = [
		{
			icon: Clock,
			title: "Save Time",
			description:
				"No more building OAuth flows, API endpoints, token storage, scope management, or refresh logic. Just call our API.",
			color: "from-blue-500 to-cyan-500",
		},
		{
			icon: DollarSign,
			title: "Dirt Cheap",
			description:
				"Alternatives cost $99-$500/month and lock you into their APIs. We're $1 and give you raw access tokens.",
			color: "from-green-500 to-emerald-500",
		},
		{
			icon: Palette,
			title: "Your Branding",
			description:
				"White-label ready. Users see YOUR branding throughout. No external service signups or third-party branding.",
			color: "from-purple-500 to-pink-500",
		},
		{
			icon: Shield,
			title: "Secure AF",
			description:
				"Field-level encryption with keys we can't access. Even if we get breached, your tokens are useless to attackers.",
			color: "from-red-500 to-orange-500",
		},
	];

	return (
		<section className="py-20 bg-gray-900 text-white" id="why-use-it">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Why Use This Over Everything Else? 🤷‍♂️
					</h2>
					<p className="text-xl text-gray-300">
						Besides the obvious reason (it's literally $1), here's why we're
						better:
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-16">
					{benefits.map((benefit) => (
						<div key={benefit.title} className="group">
							<div className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 h-full">
								<div
									className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
								>
									<benefit.icon size={32} className="text-white" />
								</div>

								<h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
								<p className="text-gray-300 leading-relaxed">
									{benefit.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-2xl text-black">
					<h3 className="text-3xl font-bold mb-4">🔐 Security Deep Dive</h3>
					<div className="grid md:grid-cols-3 gap-6">
						<div>
							<h4 className="font-bold mb-2">Encryption on Entry</h4>
							<p className="text-sm">
								Tokens encrypted before hitting our system with keys we don't
								manage
							</p>
						</div>
						<div>
							<h4 className="font-bold mb-2">Encrypted Storage</h4>
							<p className="text-sm">
								Even if breached, encrypted tokens in our DB are useless
							</p>
						</div>
						<div>
							<h4 className="font-bold mb-2">Decryption on Exit</h4>
							<p className="text-sm">
								Tokens decrypted after leaving our system - we never see them
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUseIt;
