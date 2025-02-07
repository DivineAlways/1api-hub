import { FC } from 'react';
import Markdown from 'react-markdown';

async function fetchDoc(filename: string) {
  const res = await fetch(`/api/docs?file=${filename}`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch ${filename}: ${res.status}`);
  }
  
  return res.text();
}

const DocumentationPage: FC = async () => {
  console.log('Attempting to fetch docs...');
  
  try {
    const content = await fetchDoc('documentation');
    
    if (!content) {
      throw new Error('Failed to load documentation');
    }


    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Platform Documentation</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <div className="markdown-content">
            <Markdown
              components={{
                code: ({node, inline, className, children, ...props}) => {
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
              {content}
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
