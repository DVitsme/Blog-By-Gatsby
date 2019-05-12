import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1.1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin: 0;
  }
`;

export default function Header() {
  return (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 1080px -0.5rem) / 2);
      `}
    >
      {/* site name */}
      <NavLink to="/" fontWeight="bold">
        Bio-<span style={{ fontWeight: '300' }}>Blog</span>
      </NavLink>
      {/* navigation */}
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          Home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
      </nav>
    </header>
  );
}
