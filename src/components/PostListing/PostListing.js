import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const PostListing = ({post}) => <article>
  <h3><Link to={post.fields.slug}>
  {post.frontmatter.title}
  </Link></h3>
  <span>{post.frontmatter.date}</span>
  <p>{post.excerpt}</p>
  <hr />
  </article>;

export default PostListing
