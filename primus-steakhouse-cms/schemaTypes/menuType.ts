import {defineField, defineType} from 'sanity'

export const menuType = defineType({
  name: 'menu-item',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required().error('Either generate or create your own slug.'),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),

    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),

    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
