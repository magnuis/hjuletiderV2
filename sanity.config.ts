import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  basePath: '/studio',
  name: 'Hjuletider_V2_Studio',
  title: 'Hjuletider V2 Studio',

  projectId: projectId ? projectId : '',
  dataset: dataset ? dataset : '',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
