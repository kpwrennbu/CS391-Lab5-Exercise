'use client';

import { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import Image from 'next/image';
const { Title } = Typography;

// TODO(3): read API base from env (ONE LINE, fallback to PokeAPI)

export default function HomePage() {
  // TODO(4): add search state (useState)

  // TODO(5): add image state (useState)

  const handleClick = async () => {
    // TODO(6): set image state - DONE FOR YOU
   
  };

  return (
    <div style={{ padding: 24 }}>
      {/* TODO(7): Add Title element */}

      {/* TODO(8): Add Input bound to state */}

      {/* TODO(9): Add Button that calls handleClick */}

      {/* Don't touch this below */}
      {imageSrc && (
        <div style={{ marginTop: 16 }}>
          <Image
            src={imageSrc}
            alt={search}
            width={96}
            height={96}
          />
        </div>
      )}
    </div>
  );
}
