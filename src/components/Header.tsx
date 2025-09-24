'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigation = [
		{ name: 'Accueil', href: '/' },
		{ name: 'Thèmes', href: '/theme' },
		{ name: 'Calendrier', href: '/calendrier' },
		{ name: 'Simulateurs', href: '/simulateurs' },
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Contact', href: '/contact' },
	];

	return (
		<header className="bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<span className="text-2xl font-bold text-blue-600">
								📋 Cap Adulte
							</span>
						</Link>
					</div>

					{/* Navigation desktop */}
					<nav className="hidden md:flex space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Menu burger mobile */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-700 hover:text-blue-600 p-2"
						>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>

				{/* Menu mobile */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
}