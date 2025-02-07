import { FC } from 'react';
import Markdown from 'react-markdown';

const PlatformDocumentationPage: FC = async () => {
  try {
    const platformContent = await fetch('/docs/platform_how-2.md').then(res => res.text());
    const authContent = await fetch('/docs/auth_how-2.md').then(res => res.text());
    const aiContent = await fetch('/docs/ai-how-2.md').then(res => res.text());

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
