export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "date",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "categoryImage",
      title: "Category Image",
      type: "array",
      of: [{ type: "reference", to: [{ type: "paintings" }] }],
    },
    {
      name: "body",
      title: "Blog text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "date",
      subtitle: "title",
    },
  },
};
