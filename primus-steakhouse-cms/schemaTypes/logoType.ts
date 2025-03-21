import {defineField, defineType} from 'sanity'

export const logoType = defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
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
        title: 'Uploaded Logo',
        media: image,
      }
    },
  },
})
