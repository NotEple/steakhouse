import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'image',
      title: 'About Image',
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
        title: 'Uploaded About Image',
        media: image,
      }
    },
  },
})
