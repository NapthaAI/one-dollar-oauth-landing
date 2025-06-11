/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "one-dollar-oauth-landing",
			removal: input?.stage === "production" ? "retain" : "remove",
			protect: ["production"].includes(input?.stage),
			home: "aws",
		};
	},
	async run() {
		const domain =
			$app.stage === "production"
				? "onedollaroauth.com"
				: "dev.onedollaroauth.com";
		new sst.aws.StaticSite("OneDollarOAuthLanding", {
			path: "out",
			build: {
				command: "npm run build",
				output: "./",
			},
			domain: {
				name: domain,
				aliases: [`www.${domain}`],
			},
		});
	},
});
