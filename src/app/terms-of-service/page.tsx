"use client";

import { useEffect } from "react";

export default function TermsOfServiceRedirect() {
	useEffect(() => {
		window.location.href = "/terms-of-service.pdf";
	}, []);

	return null;
}
