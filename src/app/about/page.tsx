'use client'; // AntD components are safest as client components

import { Typography } from 'antd';
import Link from 'next/link';
const { Title } = Typography;

export default function AboutPage() {
  return (
    <div style={{ padding: 24 }}>
      {/* TODO(10): Add Title “About This Demo” */}
      <Title level={3}>About This Demo</Title>
      {/* TODO(11): Add text explaining this page */}
      <p>This page exists to practice Next.js routing using the App Router.</p>
      {/* TODO(12): Add Link back to Home */}
      <Link href="/">← Back to Home</Link>
    </div>
  );
}
