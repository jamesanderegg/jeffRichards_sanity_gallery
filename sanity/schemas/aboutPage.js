export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'centerPainting',
      title: 'Center Painting: Choose 1',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
    {
      name: 'portrait',
      title: 'Portrait Painting',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
    {
      name: 'bottomPainting',
      title: 'Bottom Painting',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
    {
      name: 'exhibitions',
      title: 'Exhibitions and Events',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'exhibitions' }] }],
    },
  ],
};
