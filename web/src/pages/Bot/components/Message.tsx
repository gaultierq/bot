import React from 'react';

export function Message({ content }: { content: string }) {
  return (
    <div style={{ backgroundColor: 'red' }}>
      {content}
    </div>
  );
}
