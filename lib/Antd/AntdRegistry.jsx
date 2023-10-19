'use client';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

const AntdRegistry = ({ children }) => {
  const cache = createCache();
  useServerInsertedHTML(() => {
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />;
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default AntdRegistry;
