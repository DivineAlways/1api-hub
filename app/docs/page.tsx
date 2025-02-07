import { FC } from 'react';
import Markdown from 'react-markdown';
import { handleUnexpectedValue } from './error-handler';

async function fetchDoc(filename: string) {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';
    
  const url = new URL('/api/docs', baseUrl);
  url.searchParams.set('file', filename);
  
  console.log(`Fetching documentation from: ${url.toString()}`); // Log the URL being fetched

  const res = await fetch(url, {
    cache: 'no-store',
    headers: {
      'Accept': 'text/markdown'
    }
  });
  
  if (!res.ok) {
    console.error(`Failed to fetch ${filename}: ${res.status}`); // Log the error status
    throw new Error(`Failed to fetch ${filename}: ${res.status}`);
  }
  
  const text = await res.text();
  console.log(`Fetched content: ${text}`); // Log the fetched content
  return text.replace(/<[^>]*>/g, ''); // Strip any HTML tags
}

const DocumentationPage: FC = async () => {
  console.log('Attempting to fetch docs...');
  
  let content: string = ''; // Initialize content as an empty string

  try {
    const fetchedContent = await fetchDoc('documentation.md');
    
    handleUnexpectedValue(fetchedContent, 'string'); // Check if content is a string
    content = fetchedContent; // Assign fetched content to content variable

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Platform Documentation</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <div className="markdown-content">
            <Markdown
              components={{
                code: ({node, inline, className, children, ...props}: {node?: any, inline?: boolean, className?: string, children?: any}) => {
                  if (inline) {
                    return <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded" {...props}>{children}</code>
                  }
                  return (
                    <div className="not-prose">
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
                        <code {...props}>{children}</code>
                      </pre>
                    </div>
                  );
                }
              }}
            >
              {content || 'No content available.'} {/* Provide a fallback message */}
            </Markdown>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading documentation:', error);
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Error Loading Documentation</h1>
        <p className="text-red-500">
          {error instanceof Error ? error.message : 'Failed to load documentation'}
        </p>
      </div>
    );
  }
};

export default DocumentationPage;
