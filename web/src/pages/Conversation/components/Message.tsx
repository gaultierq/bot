import React from 'react';

export function Message({ content }: { content: string | null | undefined }) {
  return <div style={{ backgroundColor: 'red' }}>{content}</div>;
}
