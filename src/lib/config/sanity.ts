import { deskTool } from 'sanity/desk';

export default {
	plugins: [deskTool()],
	name: 'tasmto',
	projectId: 'tcjswa4k', // Replace with your project ID
	dataset: 'development',
	schema: {
		types: [
			{
				type: 'document',
				name: 'post',
				title: 'Post',
				fields: [
					{
						type: 'string',
						name: 'title',
						title: 'Title'
					}
				]
			}
		]
	}
};
