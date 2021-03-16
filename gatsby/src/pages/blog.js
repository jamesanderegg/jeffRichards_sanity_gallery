import React, { useState } from "react";
import { graphql } from "gatsby";
import Nav from "../components/Nav";
import { Link } from "gatsby";

export default function Blog({ data }) {
  console.log(data.allSanityBlog.nodes);
  return (
    <>
      <Nav />
      {data.allSanityBlog.nodes.map((blog) => (
        <>
          <Link to={`/blog/${blog.slug.current}`}>
            <h2>{blog.title}</h2>
          </Link>
          <h4>{blog.date}</h4>
        </>
      ))}

      {/* {data.allSanityBlog.nodes[54].body[0].children.map((item) => {
        return item.marks.length > 0 ? (
          <strong>{item.text}</strong>
        ) : (
          <p>{item.text}</p>
        );
      })} */}
    </>
  );
}
export const query = graphql`
  query BloqQuery {
    allSanityBlog(sort: { fields: [date], order: ASC }) {
      nodes {
        title
        date
        _rawBody(resolveReferences: { maxDepth: 10 })
        slug {
          current
        }
      }
    }
  }
`;
