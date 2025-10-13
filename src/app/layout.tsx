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
		default: "AdulPath - Guide pratique pour jeunes adultes",
		template: "%s | AdulPath"
	},
	description: "Votre guide pratique pour bien démarrer votre vie d'adulte indépendant. Checklists interactives, guides détaillés et simulateurs pour réussir vos démarches administratives en France.",
	keywords: [
		"devenir autonome", "guide jeunes adultes", "première déclaration impôts", "premier appartement", "premier emploi",
		"démarches administratives", "18-30 ans", "vie étudiante", "transition adulte", "indépendance financière",
		"checklists interactives", "simulateur budget", "simulateur impôts", "guide logement", "premier bail",
		"carte identité", "sécurité sociale", "mutuelle santé", "compte bancaire", "assurance habitation",
		"recherche emploi", "CV", "entretien embauche", "contrat travail", "droits salariés",
		"budget étudiant", "épargne", "crédit", "aides CAF", "APL", "bourse étudiant",
		"déménagement", "changement adresse", "voyage étranger", "passeport", "permis conduire",
		"France", "administration française", "service public", "impots.gouv.fr", "ameli.fr"
	],
	authors: [{ name: "Équipe AdulPath" }],
	creator: "AdulPath",
	publisher: "AdulPath",
	category: "Education",
	classification: "Education, Finance, Administration",
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://adulpath.fr",
		siteName: "AdulPath",
		title: "AdulPath - Guide complet pour devenir autonome | 18-30 ans",
		description: "Accompagnement complet pour les jeunes adultes : guides détaillés, checklists interactives et simulateurs pour réussir toutes vos démarches administratives.",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "AdulPath - Guide pratique pour jeunes adultes",
			}
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@adulpath",
		creator: "@adulpath",
		title: "AdulPath - Guide complet pour devenir autonome",
		description: "Guides, checklists et simulateurs pour réussir vos démarches administratives de 18 à 30 ans.",
		images: ["/og-image.png"],
	},
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
		"geo.region": "FR",
		"geo.country": "France",
		"language": "French",
		"target": "all",
		"audience": "general",
		"rating": "general",
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
		"apple-mobile-web-app-title": "AdulPath",
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
