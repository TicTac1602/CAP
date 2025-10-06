import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Cap Adulte - Guide pratique pour jeunes adultes",
		template: "%s | Cap Adulte"
	},
	description: "Votre guide pratique pour bien démarrer votre vie d'adulte indépendant. Checklists interactives, guides détaillés et simulateurs pour réussir vos démarches administratives en France.",
	keywords: [
		"jeunes adultes", 
		"démarches administratives", 
		"première fois", 
		"guide pratique", 
		"checklists", 
		"simulateurs", 
		"impôts", 
		"logement", 
		"assurance", 
		"budget",
		"France",
		"administration"
	],
	authors: [{ name: "Équipe Cap Adulte" }],
	creator: "Cap Adulte",
	publisher: "Cap Adulte",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" }
		],
		apple: [
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
		],
		other: [
			{
				rel: "mask-icon",
				url: "/safari-pinned-tab.svg",
				color: "#2563eb"
			}
		]
	},
	manifest: "/site.webmanifest",
	referrer: "origin-when-cross-origin",

	other: {
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
		"apple-mobile-web-app-title": "Cap Adulte",
		"mobile-web-app-capable": "yes",
		"msapplication-TileColor": "#2563eb",
		"msapplication-config": "/browserconfig.xml",
	}
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	userScalable: true,

};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" data-scroll-behavior="smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
