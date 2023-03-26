// import { visionTool } from '@sanity/vision';
// import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// import Logo from './src/components/navigation/Logo';
// import StudioNavBar from './src/components/studio/StudioNavBar';
import { schemaTypes } from '../../schemas/index';
// import { myTheme } from './src/styles/theme';

const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET!;

export default {
	// BasePath = where we will render it on our website
	basePath: '/studio',
	name: 'tasmto',
	title: 'tasmto',

	projectId,
	dataset,

	plugins: [
		deskTool()
		//  visionTool()
	],
	// theme: myTheme,
	// studio: {
	// 	components: {
	// 		logo: Logo,
	// 		navbar: StudioNavBar
	// 	}
	// },

	schema: {
		types: schemaTypes
	}
};
