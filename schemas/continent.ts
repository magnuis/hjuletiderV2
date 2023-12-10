import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'continent',
  title: 'Continent',
  type: 'document',
  fields: [
    defineField({
      name: 'continent',
      title: 'Continent',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'continent',
    },
  },
})
