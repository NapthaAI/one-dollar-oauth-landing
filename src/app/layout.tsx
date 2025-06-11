import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "OneDollarOAuth.com - OAuth For Just $1/Month",
	description:
		"The easiest and cheapest OAuth integration platform. Why pay $99/month when you can pay $1? Secure, embeddable, and meme-worthy.",
	authors: [{ name: "OneDollarOAuth" }],
	openGraph: {
		title: "OneDollarOAuth.com - OAuth For Just $1/Month",
		description:
			"The easiest and cheapest OAuth integration platform. Why pay $99/month when you can pay $1?",
		type: "website",
		url: "https://onedollaroauth.com",
	},
	twitter: {
		card: "summary_large_image",
		title: "OneDollarOAuth.com - OAuth For Just $1/Month",
		description:
			"The easiest and cheapest OAuth integration platform. Because not everything needs to cost $99/month.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
