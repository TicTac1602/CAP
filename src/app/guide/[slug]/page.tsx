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
			<div className="max-w-4xl mx-auto px-6 py-8">
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
				<header className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">{guide.title}</h1>
					<p className="text-lg text-gray-600 mb-4">{guide.description}</p>
					<div className="flex items-center text-sm text-gray-500">
						<span>Temps de lecture: {guide.readingTime} min</span>
						<span className="mx-2">•</span>
						<span>Dernière mise à jour: {guide.updatedAt || guide.publishedAt}</span>
					</div>
				</header>

				{/* Guide Content */}
				<article className="prose prose-lg max-w-none">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							h1: ({ children }) => <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
							h2: ({ children }) => <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h2>,
							h3: ({ children }) => <h3 className="text-lg font-medium text-gray-700 mt-4 mb-2">{children}</h3>,
							p: ({ children }) => <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>,
							ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
							ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
							li: ({ children }) => <li className="text-gray-700">{children}</li>,
							strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
							em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
							a: ({ href, children }) => (
								<a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">
									{children}
								</a>
							),
							blockquote: ({ children }) => (
								<blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 italic text-gray-700">
									{children}
								</blockquote>
							),
							code: ({ children }) => (
								<code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
									{children}
								</code>
							),
							pre: ({ children }) => (
								<pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
									{children}
								</pre>
							),
						}}
					>
						{markdownContent}
					</ReactMarkdown>
				</article>

				{/* Back to theme */}
				<div className="mt-12 pt-8 border-t border-gray-200">
					<Link
						href={`/theme/${guide.themeId}`}
						className="inline-flex items-center text-blue-600 hover:text-blue-800"
					>
						← Retour au thème
					</Link>
				</div>
			</div>
		</div>
	);
}