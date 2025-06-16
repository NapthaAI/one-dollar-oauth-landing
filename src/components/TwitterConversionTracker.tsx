"use client";

import { useEffect } from "react";
import TwitterConvTrkr from "react-twitter-conversion-tracker";

export default function TwitterConversionTracker() {
	useEffect(() => {
		TwitterConvTrkr.init("tw-oq5a0-pzjge");
		TwitterConvTrkr.pageView();
	}, []);

	return <></>;
}
