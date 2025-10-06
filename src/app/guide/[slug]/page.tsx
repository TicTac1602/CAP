import { Metadata } from "next";
import Link from 'next/link';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { guideArticles, getGuideBySlug } from "@/data/guides";
import { notFound } from "next/navigation";
import { readFileSync } from "fs";
import { join } from "path";

interface PageProps {
	params: Promise<{ slug: string }>;
}

// Generate static params for all guides
export async function generateStaticParams() {
	return guideArticles.map((guide) => ({
		slug: guide.slug,
	}));
}

// Generate metadata for each guide
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const guide = getGuideBySlug(slug);

	if (!guide) {
		return {
			title: "Guide non trouvé",
		};
	}

	return {
		title: `Cap Adulte`,
		description: guide.description,
	};
}

// Fonction pour créer un ID d'ancre à partir du texte
function createAnchorId(text: string): string {
	return text
		.toLowerCase()
		.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
		.replace(/'/g, '')
		.replace(/[^\w\s-:]/g, '')
		.replace(/\s*:\s*/g, '--')
		.replace(/\s+/g, '-')
		.replace(/^-+|-+$/g, '');
}

export default async function GuidePage({ params }: PageProps) {
	const { slug } = await params;
	const guide = getGuideBySlug(slug);

	if (!guide) {
		notFound();
	}

	// Lire le contenu du fichier Markdown
	const markdownContent = readFileSync(
		join(process.cwd(), 'src', guide.filePath),
		'utf-8'
	);

	return (
		<div className="min-h-screen bg-white">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
				{/* Retour arriere*/}
				<div className="mb-6">
					<Link
						href={`/theme/${guide.themeId}`}
						className="inline-flex items-center text-blue-600 hover:text-blue-800"
					>
						← Retour au thème
					</Link>
				</div>

				{/* Guide Header */}
				<header className="mb-6 sm:mb-8">
					<h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{guide.title}</h1>
					<p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4 leading-relaxed">{guide.description}</p>
					<div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
						<span>Temps de lecture: {guide.readingTime} min</span>
						<span className="hidden sm:inline mx-2">•</span>
						<span>Dernière mise à jour: {guide.updatedAt || guide.publishedAt}</span>
					</div>
				</header>

				{/* Guide Content */}
				<article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							h1: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return <h1 id={id} className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4 leading-tight">{children}</h1>;
							},
							h2: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return <h2 id={id} className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3 leading-tight">{children}</h2>;
							},
							h3: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return <h3 id={id} className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 mt-3 sm:mt-4 mb-2 leading-tight">{children}</h3>;
							},
							h4: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return <h4 id={id} className="text-sm sm:text-base lg:text-lg font-semibold text-gray-600 mt-2 sm:mt-3 mb-1 sm:mb-2 leading-tight">{children}</h4>;
							},
							p: ({ children }) => <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{children}</p>,
							ul: ({ children }) => <ul className="list-disc list-inside mb-3 sm:mb-4 space-y-1 pl-2">{children}</ul>,
							ol: ({ children }) => <ol className="list-decimal list-inside mb-3 sm:mb-4 space-y-1 pl-2">{children}</ol>,
							li: ({ children }) => <li className="text-sm sm:text-base text-gray-700 leading-relaxed">{children}</li>,
							strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
							em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
							a: ({ href, children }) => {
								// Si le lien commence par #, c'est une ancre interne
								if (href?.startsWith('#')) {
									return (
										<a href={href} className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base">
											{children}
										</a>
									);
								}
								// Sinon, c'est un lien externe
								return (
									<a href={href} className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
										{children}
									</a>
								);
							},
							blockquote: ({ children }) => (
								<blockquote className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2 mb-3 sm:mb-4 bg-blue-50 italic text-sm sm:text-base text-gray-700 mx-2 sm:mx-0">
									{children}
								</blockquote>
							),
							code: ({ children }) => (
								<code className="bg-gray-100 px-1 sm:px-2 py-1 rounded text-xs sm:text-sm font-mono text-gray-800 break-words">
									{children}
								</code>
							),
							pre: ({ children }) => (
								<pre className="bg-gray-100 p-2 sm:p-4 rounded-lg overflow-x-auto mb-3 sm:mb-4 text-xs sm:text-sm">
									{children}
								</pre>
							),
							table: ({ children }) => (
								<div className="overflow-x-auto mb-4 sm:mb-6 -mx-2 sm:mx-0">
									<table className="min-w-full border-collapse border border-gray-300 text-xs sm:text-sm">
										{children}
									</table>
								</div>
							),
							thead: ({ children }) => <thead className="bg-blue-300">{children}</thead>,
							tbody: ({ children }) => <tbody className="bg-blue-100">{children}</tbody>,
							tr: ({ children }) => <tr className="border-b border-black">{children}</tr>,
							th: ({ children }) => <th className="border border-black py-1 sm:py-2 px-1 sm:px-4 text-center font-semibold text-xs sm:text-sm">{children}</th>,
							td: ({ children }) => <td className="border border-black py-1 sm:py-2 px-1 sm:px-4 text-left text-xs sm:text-sm">{children}</td>
						}}
					>
						{markdownContent}
					</ReactMarkdown>
				</article>

				{/* Back to theme */}
				<div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
					<Link
						href={`/theme/${guide.themeId}`}
						className="inline-flex items-center text-sm sm:text-base text-blue-600 hover:text-blue-800"
					>
						← Retour au thème
					</Link>
				</div>
			</div>
		</div>
	);
}