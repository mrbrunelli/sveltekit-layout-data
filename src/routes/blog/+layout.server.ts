import type { LayoutServerLoad } from './$types';
import { posts, type Post } from './data';

type Output = {
	summaries: Omit<Post, 'content'>[];
};

export const load: LayoutServerLoad<Output> = () => {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
};
