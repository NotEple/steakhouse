import {defineField, defineType} from 'sanity'

export const frontType = defineType({
  name: 'front',
  title: 'Front Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
    }),

    defineField({
      name: 'intro',
      title: 'Intro text',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare({image}) {
      return {
        title: 'Uploaded Hero Image',
        media: image,
      }
    },
  },
})
