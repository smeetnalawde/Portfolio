import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume-data.txt');
    const stats = fs.statSync(filePath);
    
    if (stats.size > 1024 * 1024) {
      return NextResponse.json(
        { error: 'Resume file too large (max 1MB)' },
        { status: 400 }
      );
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error reading resume file:', error);
    return NextResponse.json(
      { error: 'Failed to load resume data' },
      { status: 500 }
    );
  }
}
