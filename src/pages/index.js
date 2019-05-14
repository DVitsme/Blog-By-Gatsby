import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function index() {
  return (
    <Layout>
      <h1>Hi im alive</h1>
      <Link to="/about/">To About &rarr;</Link>
    </Layout>
  );
}
