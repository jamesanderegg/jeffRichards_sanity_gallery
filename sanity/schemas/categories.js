export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'categoryImage',
      title: 'Category Image',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
  ],
};
