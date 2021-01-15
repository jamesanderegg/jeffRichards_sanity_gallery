export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'SubTitle',
      type: 'string',
    },
    {
      name: 'topRight',
      title: 'Top Right Painting: Choose 1',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
    {
      name: 'centerPainting',
      title: 'Center Painting: Choose 1',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
    {
      name: 'centerDescription',
      title: 'Center Painting Description',
      type: 'text',
    },
    {
      name: 'bottomPainting',
      title: 'Bottom Painting: Choose 1',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
  ],
};
