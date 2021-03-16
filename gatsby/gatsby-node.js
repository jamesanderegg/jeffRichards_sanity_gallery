import path from "path";

async function turnBlogsIntoPages({ graphql, actions }) {
  // get template for this page
  const blogTemplate = path.resolve("./src/templates/Blogs.js");
  //query all blogs
  const { data } = await graphql(`
    query {
      allSanityBlog {
        nodes {
          title
          date
          slug {
            current
          }
        }
      }
    }
  `);
  // loop over each blog and create a page for it
  data.allSanityBlog.nodes.forEach((blog) => {
    actions.createPage({
      //what is URL for blog page??
      path: `blog/${blog.slug.current}`,
      component: blogTemplate,
      context: {
        slug: blog.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  //create pages dynamically
  // blogs
  await turnBlogsIntoPages(params);
}
