export default {
  name: 'paintings',
  title: 'Paintings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'categories' }] }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'circle',
      title: 'Circle',
      type: 'boolean',
      description: 'Is the piece a circle?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Project Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'size',
      media: 'image',
    },
  },
};
