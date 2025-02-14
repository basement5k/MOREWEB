import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function uploadToBlob(formData: FormData) {
  const file = formData.get('file') as File;
  const blob = await put(file.name, file, {
    access: 'public',
  });

  return NextResponse.json(blob);
} 