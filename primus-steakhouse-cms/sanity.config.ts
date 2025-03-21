import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {Logo} from './Logo'

export default defineConfig({
  name: 'default',
  title: 'Primus Steakhouse',
  projectId: '163tdqap',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  icon: Logo,

  schema: {
    types: schemaTypes,
  },
})
