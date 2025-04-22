'use client';
import React from 'react';

export default function Width() {
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth,
  );
  const [ativo, setAtivo] = React.useState(false);

  // Vai dar error pois na pre-renderização o document não existe no servidor.
  // console.log(document.documentElement.clientWidth);

  // O useEffect na pre-renderização só é executado depois, por isso o document não retorna erro
  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <h2 style={{ color: `${ativo ? '#3D7' : ''}` }}>
        Largura da tela: {width}
      </h2>
      <button onClick={() => setAtivo((a) => !a)}>Ativar</button>
    </div>
  );
}
