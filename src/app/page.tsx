import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WhatIsIt from "@/components/WhatIsIt";
import WhyUseIt from "@/components/WhyUseIt";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
	return (
		<>
			<Head>
				<Script src="/x-pixel.js" />
			</Head>
			<div className="min-h-screen">
				<Hero />
				<WhatIsIt />
				<HowItWorks />
				<WhyUseIt />
				<Pricing />
				<Footer />
				<Script src="/x-event-code.js" />
			</div>
		</>
	);
}
