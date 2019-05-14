import React, { useState } from 'react';
import { css } from '@emotion/core';

const Poke = () => {
  const [poke, setPokes] = useState(0);
  const label = `👉 ${poke} ${poke < 1 ? 'pokes' : 'poky'} `;
  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setPokes(poke + 1)}
    >
      {label}
    </button>
  );
};

export default Poke;
