import { FC } from 'react';
import { readFile } from 'fs/promises';
import path from 'path';
import Markdown from 'react-markdown';

const PlatformDocumentationPage: FC = async () => {
  try {
    // Change file extensions from .yaml to .md
    const platformDocsPath = path.join(process.cwd(), 'public/docs/platform_how-2.md');
    const authDocsPath = path.join(process.cwd(), 'public/docs/auth_how-2.md');
    const aiDocsPath = path.join(process.cwd(), 'public/docs/ai-how-2.md');

    console.log('Reading files from paths:', {
      platformDocsPath,
      authDocsPath,
      aiDocsPath
    });

    const platformContent = await readFile(platformDocsPath, 'utf8');
    const authContent = await readFile(authDocsPath, 'utf8');
    const aiContent = await readFile(aiDocsPath, 'utf8');

    console.log('Content lengths:', {
      platformContent: platformContent.length,
      authContent: authContent.length,
      aiContent: aiContent.length
    });

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Platform Documentation</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Platform Overview</h2>
          <div className="prose dark:prose-invert max-w-none">
            <Markdown>{platformContent}</Markdown>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Authentication System</h2>
          <div className="prose dark:prose-invert max-w-none">
            <Markdown>{authContent}</Markdown>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">AI Integration</h2>
          <div className="prose dark:prose-invert max-w-none">
            <Markdown>{aiContent}</Markdown>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error in PlatformDocumentationPage:', error);
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

export default PlatformDocumentationPage;
