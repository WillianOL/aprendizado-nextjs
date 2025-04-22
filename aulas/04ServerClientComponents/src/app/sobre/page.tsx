'use client'
import dynamic from 'next/dynamic';

export default function SobrePage() {
  const Width = dynamic(() => import('@/components/width'), { ssr: false });

  return (
    <div>
      <h2>Sobre</h2>
      <Width />
    </div>
  );
}
