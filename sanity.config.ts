/* eslint-disable no-process-env */
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { codeInput } from '@sanity/code-input'

import { schemaTypes } from './src/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default createConfig({
  name: 'next-sanity',
  title: 'next-sanity',

  projectId,
  dataset,

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
