import { cn } from '@/libs/react';
import ReactMarkdown from 'react-markdown';

/**
 * @param {object} props
 * @param {string} props.textContent
 */
export function MarkdownArea({ textContent }) {
  /** @type {import('react-markdown').Components} */
  const components = {
    h1({ className, children, ...props }) {
      return <h2 className={cn(className, 'text-2xl mt-4')} {...props}>{children}</h2>
    },
    a({ className, children, ...props }) {
      return <a className={cn(className, 'text-blue-400 underline')} {...props}>{children}</a>
    }
  };
  return (
    <ReactMarkdown components={components}>
      {textContent}
    </ReactMarkdown>
  )
}
