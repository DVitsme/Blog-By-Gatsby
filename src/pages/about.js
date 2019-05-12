import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default function() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Im a person and I code some stuff....sometimes</p>
      <Link to="/">Back to home &rarr;</Link>
    </Layout>
  );
}
