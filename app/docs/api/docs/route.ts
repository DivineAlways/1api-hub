import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const platformYaml = fs.readFileSync(path.join(process.cwd(), 'app/docs/api/docs/platform_how-2.md'), 'utf8');
  const authYaml = fs.readFileSync(path.join(process.cwd(), 'app/docs/api/docs/auth_how-2.md'), 'utf8');
  const aiYaml = fs.readFileSync(path.join(process.cwd(), 'app/docs/api/docs/ai-how-2.md'), 'utf8');

  const documentation = {
    platform: {
      overview: 'Comprehensive Platform Documentation',
      platformDetails: platformYaml,
      authenticationDetails: authYaml,
      aiSystemDetails: aiYaml
    }
  };

  return NextResponse.json(documentation);
}
