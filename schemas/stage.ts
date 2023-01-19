import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stage',
  title: 'Stage',
  type: 'document',
  fields: [
    defineField({
      name: 'start',
      title: 'Start',
      type: 'string',
    }),
    defineField({
      name: 'end',
      title: 'End',
      type: 'string',
    }),
    defineField({
      name: 'dayNo',
      title: 'Day No',
      type: 'number',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
