export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'topPainting',
      title: 'Top Painting: Choose 1',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
    {
      name: 'bottomPainting',
      title: 'Bottom Painting: Choose 1',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'paintings' }] }],
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    },
  ],
};
