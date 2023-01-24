import { error } from '@sveltejs/kit';
import { posts, type Post } from '../data';
import type { PageServerLoad } from './$types';

type Output = {
	post: Post;
};

export const load: PageServerLoad<Output> = ({ params }) => {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
};
