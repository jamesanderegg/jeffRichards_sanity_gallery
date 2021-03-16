import React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";

export default function SingleBlogPage({ data }) {
  return (
    <>
      <h1>{data.sanityBlog.title}</h1>
      <h1>{data.sanityBlog.date}</h1>
      <BlockContent blocks={data.sanityBlog._rawBody} />
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    sanityBlog(slug: { current: { eq: $slug } }) {
      title
      date
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;
