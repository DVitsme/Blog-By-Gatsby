import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../src/components/layout';
import ReadLink from '../src/components/read-link';

const PostTemplate = ({ pageContext }) => (
  <Layout>
    <h1>post title</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Post by
    </p>
    <p>Post body goes here</p>
    <ReadLink to="/">Back to all post &larr;</ReadLink>
  </Layout>
);

export default PostTemplate;
