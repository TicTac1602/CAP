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
			title: "Guide non trouvé | AdulPath",
			description: "Le guide que vous recherchez n'existe pas ou a été déplacé.",
		};
	}

	return {
		title: `${guide.title} - Guide complet pour jeunes adultes | AdulPath`,
		description: guide.description,
		keywords: guide.tags,
		authors: [{ name: guide.author }],
		openGraph: {
			type: "article",
			title: guide.title || '',
			description: guide.description,
			url: `https://adulpath.fr/guide/${guide.slug}`,
			publishedTime: guide.publishedAt || '',
			modifiedTime: guide.updatedAt || guide.publishedAt || '',
			authors: [guide.author || ''],
			tags: guide.tags,
		},
		alternates: {
			canonical: `https://adulpath.fr/guide/${guide.slug}`
		},
		other: {
			"article:published_time": guide.publishedAt || '',
			"article:modified_time": guide.updatedAt || guide.publishedAt || '',
			"article:author": guide.author || '',
			"article:section": guide.themeId || '',
		}
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
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
				{/* Retour arriere*/}
				<div className="mb-6">
					<Link
						href={`/theme/${guide.themeId}`}
						className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
					>
						← Retour au thème
					</Link>
				</div>

				{/* Guide Header */}
				<header className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6 sm:mb-8">
					<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{guide.title}</h1>
					<p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">{guide.description}</p>
					<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
						<span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
							⏱️ {guide.readingTime} min de lecture
						</span>
						<span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
							📅 Mis à jour le {guide.updatedAt || guide.publishedAt}
						</span>
					</div>
				</header>

				{/* Guide Content */}
				<article className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6 sm:mb-8">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							h1: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return (
									<h1 id={id} className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-6 pb-3 border-b-2 border-blue-100 first:mt-0">
										{children}
									</h1>
								);
							},
							h2: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return (
									<h2 id={id} className="text-2xl sm:text-2xl lg:text-2xl font-bold text-gray-800 mt-8 mb-4 first:mt-0">
										{children}
									</h2>
								);
							},
							h3: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return (
									<h3 id={id} className="text-xl sm:text-xl font-semibold text-gray-700 mt-6 mb-3">
										{children}
									</h3>
								);
							},
							h4: ({ children }) => {
								const text = typeof children === 'string' ? children : children?.toString() || '';
								const id = createAnchorId(text);
								return (
									<h4 id={id} className="text-lg sm:text-lg font-semibold text-gray-600 mt-4 mb-2">
										{children}
									</h4>
								);
							},
							p: ({ children }) => (
								<p className="text-base text-gray-700 mb-4 leading-relaxed">
									{children}
								</p>
							),
							ul: ({ children }) => (
								<ul className="mb-6 space-y-2">
									{children}
								</ul>
							),
							ol: ({ children }) => (
								<ol className="mb-6 space-y-2 counter-reset-[item]">
									{children}
								</ol>
							),
							li: ({ children }) => {
								// Vérifier si c'est une liste avec des emojis/icônes
								const childText = typeof children === 'string' ? children : 
									Array.isArray(children) ? children.join('') : children?.toString() || '';
								
								if (childText.includes('📋') || childText.includes('⭐') || childText.includes('⚠️')) {
									return (
										<li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700">
											{children}
										</li>
									);
								}
								
								return (
									<li className="flex items-start gap-3 text-gray-700 leading-relaxed">
										<span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
										<span>{children}</span>
									</li>
								);
							},
							strong: ({ children }) => (
								<strong className="font-semibold text-gray-900">
									{children}
								</strong>
							),
							em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
							a: ({ href, children }) => {
								// Si le lien commence par #, c'est une ancre interne
								if (href?.startsWith('#')) {
									return (
										<a href={href} className="text-blue-600 hover:text-blue-800 underline font-medium">
											{children}
										</a>
									);
								}
								// Sinon, c'est un lien externe
								return (
									<a 
										href={href} 
										className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline font-medium" 
										target="_blank" 
										rel="noopener noreferrer"
									>
										{children}
										<span className="text-xs">↗</span>
									</a>
								);
							},
							blockquote: ({ children }) => (
								<div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
									<div className="text-blue-800 italic">
										{children}
									</div>
								</div>
							),
							code: ({ children }) => (
								<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800 border">
									{children}
								</code>
							),
							pre: ({ children }) => (
								<pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm border">
									{children}
								</pre>
							),
							table: ({ children }) => (
								<div className="my-6 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
									<table className="min-w-full divide-y divide-gray-200">
										{children}
									</table>
								</div>
							),
							thead: ({ children }) => (
								<thead className="bg-blue-600 text-white">
									{children}
								</thead>
							),
							tbody: ({ children }) => (
								<tbody className="bg-white divide-y divide-gray-200">
									{children}
								</tbody>
							),
							tr: ({ children }) => (
								<tr>
									{children}
								</tr>
							),
							th: ({ children }) => (
								<th className="px-4 py-3 text-left text-sm font-semibold text-white">
									{children}
								</th>
							),
							td: ({ children }) => (
								<td className="px-4 py-3 text-sm text-gray-900">
									{children}
								</td>
							)
						}}
					>
						{markdownContent}
					</ReactMarkdown>
				</article>

				{/* Back to theme */}
				<div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
					<Link
						href={`/theme/${guide.themeId}`}
						className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
					>
						<span>←</span>
						<span>Retour au thème</span>
					</Link>
				</div>
			</div>
		</div>
	);
}