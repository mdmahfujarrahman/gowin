'use client';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';

const AntdRegistry = ({ children }) => {
  const [cache] = useState(() => createCache());
  const render = <>{children}</>;
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  if (typeof window !== 'undefined') {
    return render;
  }

  return <StyleProvider cache={cache}>{render}</StyleProvider>;
};

export default AntdRegistry;
