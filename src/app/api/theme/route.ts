import { revalidatePath } from 'next/cache';
import { cookies } from 'next/dist/client/components/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const themeToken = cookieStore.get('theme');

  return NextResponse.json({
    theme: themeToken?.value,
  });
}

export async function POST(request: Request) {
  const cookieStore = cookies();
  const themeToken = cookieStore.get('theme');

  let newTheme = 'light';
  if (themeToken?.value === 'light') {
    newTheme = 'dark';
  }

  revalidatePath('/');
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `theme=${newTheme}; path=/` },
  });
}
