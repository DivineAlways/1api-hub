import { FC } from 'react';
import { readFile } from 'fs/promises';
import path from 'path';
import Markdown from 'react-markdown';

const PlatformDocumentationPage: FC = async () => {
  const platformDocsPath = path.join(process.cwd(), 'app/docs/api/docs/platform_how-2.yaml');
  const authDocsPath = path.join(process.cwd(), 'app/docs/api/docs/auth_how-2.yaml');
  const aiDocsPath = path.join(process.cwd(), 'app/docs/api/docs/ai-how-2.yaml');

  const platformContent = await readFile(platformDocsPath, 'utf8');
  const authContent = await readFile(authDocsPath, 'utf8');
  const aiContent = await readFile(aiDocsPath, 'utf8');

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Platform Documentation</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Platform Overview</h2>
        <Markdown>{platformContent}</Markdown>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Authentication System</h2>
        <Markdown>{authContent}</Markdown>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">AI Integration</h2>
        <Markdown>{aiContent}</Markdown>
      </section>
    </div>
  );
};

export default PlatformDocumentationPage;
