import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get('file');

    if (!file) {
      return NextResponse.json({ error: 'File parameter is required' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public/docs', `${file}.md`);
    console.log('Looking for file at:', filePath);
    
    if (!existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      // List available files
      const availableFiles = require('fs').readdirSync(path.join(process.cwd(), 'public/docs'));
      console.log('Available files:', availableFiles);
      return NextResponse.json({ 
        error: 'File not found',
        requestedPath: filePath,
        availableFiles 
      }, { status: 404 });
    }

    const content = await readFile(filePath, 'utf8');
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return NextResponse.json({ 
      error: 'Failed to read file',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
