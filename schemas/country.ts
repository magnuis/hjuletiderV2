import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Flag',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'landscape',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'continent',
      title: 'Continent',
      type: 'reference',
      to: { type: 'continent' },
    }),
    defineField({
      name: 'capital',
      title: 'Capital',
      type: 'string',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'string',
    }),
    defineField({
      name: 'randomFact',
      title: 'Random fact',
      type: 'string',
    }),
    defineField({
      name: 'areal',
      title: 'Areal',
      type: 'number',
    }),
    defineField({
      name: 'englishName',
      title: 'English name',
      type: 'string',
    }),
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
