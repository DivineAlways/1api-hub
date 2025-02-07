import { FC } from 'react';
import Markdown from 'react-markdown';

const DocumentationPage: FC = async () => {
  console.log('Attempting to fetch docs...');
  
  try {
    const fetchDoc = async (filename: string) => {
      const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';
      const url = new URL('/api/docs', baseUrl || 'http://localhost:3000');
      url.searchParams.set('file', filename);
      
      const res = await fetch(url, {
        cache: 'no-store',
        headers: {
          'Accept': 'text/markdown'
        }
      });
      
      if (!res.ok) {
        const error = await res.text();
        throw new Error(`Failed to fetch ${filename}: ${res.status} - ${error}`);
      }
      
      const text = await res.text();
      return text.replace(/<[^>]*>/g, '');
    };

    // Fetch all documentation content
    const [platformContent, authContent, aiContent] = await Promise.all([
      fetchDoc('platform_how-2'),
      fetchDoc('auth_how-2'), 
      fetchDoc('ai-how-2')
    ]);

    if (!platformContent || !authContent || !aiContent) {
      throw new Error('Failed to load one or more documentation sections');
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
