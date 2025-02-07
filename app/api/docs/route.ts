import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get('file');

    if (!file) {
      return NextResponse.json({ error: 'File parameter is required' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public/docs', `${file}.md`);
    const content = await readFile(filePath, 'utf8');
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown',
      },
    });
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
  }
}
