import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/Hero.jpg');
  background-position: top 20% center;
  background-size: cover;
  height: 75vh;
  + * {
    margin-top: 0;
  }
`;
const Textbox = styled('div')`
  background-image: linear-gradient(to top, #00000077 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 calc((100vw - 1080px) / 2) 2rem;
  width: 100%l;

  h1 {
    color: #fff;
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #fff;
    margin-top: 8px;
    font-size: 1.32rem;
  }

  a {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export default function Hero() {
  return (
    <ImageBackground>
      <Textbox>
        <h1>Welcome to my Blog</h1>
        <p>
          Welcome to my blog this will just be a random collection of thoughts.{' '}
        </p>
        <Link to="/about/">To About &rarr;</Link>
      </Textbox>
    </ImageBackground>
  );
}
