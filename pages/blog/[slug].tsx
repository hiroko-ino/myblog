import Head from 'next/head'
import { NextPage } from 'next'

import { client } from '../../libs/contentful'
import BlogSlugPage from '../../pageContent/BlogSlugPage'

interface BlogProps {
	post: any;
	category: any;
	slug: string;
}

const Blog: NextPage<BlogProps> = ({ post, category, slug }) => {
	return (
		<>
			<Head>
				<title>{post.fields.title} | type:any</title>
				<link rel="canonical" href={`https://type-any.com/blog/${slug}`} />
				<meta name="description" content={post.fields.body.slice(0, 120).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')}></meta>
				<meta property="og:title" content={`${post.fields.title} | type:any`} />
				<meta property="og:type" content="article" />
				<meta property="og:url" content={`https://type-any.com/blog/${slug}`} />
				<meta property="og:image" content="https://type-any.com/ogp.png" />
				<meta property="og:site_name" content="type:any" />
				<meta property="og:description" content={post.fields.body.slice(0, 120).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')} />
			</Head>
      <BlogSlugPage post={post} category={category} slug={slug} />
		</>
	)
}

export const getStaticPaths = async () => {
	const posts = await client.getEntries({content_type: "blogPost"})

	const paths = posts.items.map((post: any) => ({
		params: {
			slug: post.fields.slug.toString(),
		},
	}))
	return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: {
	params: any;
}) => {
	const post = await client.getEntries({content_type: "blogPost", "fields.slug": params.slug})
	const category = await client.getEntries({content_type: "category"})

	return {
		props: {
			post: post.items[0],
			category: category.items,
			slug: params.slug
		},
	}
}

export default Blog;
