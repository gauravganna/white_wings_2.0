import React from 'react';

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; depth?: 2 | 3 | 4; text: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'list'; ordered?: boolean; items: string[] }

export interface BlogContentProps {
  blocks: Block[]
}

export const BlogContent: React.FC<BlogContentProps> = ({ blocks }) => {
  return (
    <div className="prose prose-ww max-w-none">
      {blocks.map((b, idx) => {
        switch (b.type) {
          case 'paragraph':
            return <p key={idx}>{b.text}</p>
          case 'heading': {
            const D = (`h${b.depth ?? 2}` as unknown) as keyof JSX.IntrinsicElements
            return <D key={idx}>{b.text}</D>
          }
          case 'image':
            return (
              <figure key={idx}>
                <img src={b.src} alt={b.alt ?? ''} loading="lazy" />
              </figure>
            )
          case 'list':
            return b.ordered ? (
              <ol key={idx}>
                {b.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ol>
            ) : (
              <ul key={idx}>
                {b.items.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default BlogContent


