'use client';

import { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import Image from 'next/image';
const { Title } = Typography;

// TODO(3): read API base from env (ONE LINE, fallback to PokeAPI)
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://pokeapi.co/api/v2';

export default function HomePage() {
  // TODO(4): add search state (useState)
  const [search, setSearch] = useState('');

  // TODO(5): add image state (useState)
  const [imageSrc, setImageSrc] = useState('');

  const handleClick = async () => {
    // TODO(6): set image state - DONE FOR YOU
    try {
      const res = await fetch(`${API_BASE}/pokemon/${search.toLowerCase()}`);
      const data = await res.json();
      setImageSrc(data.sprites.front_default);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setImageSrc('');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      {/* TODO(6): Add Title element */}
      <Title level={3}>Home Page</Title>

      {/* TODO(7): Add Input bound to state */}
      <Input
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 220, marginRight: 8 }}
      />

      {/* TODO(8): Add Button that calls handleClick */}
      <Button type="primary" onClick={handleClick}>Search</Button>

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
