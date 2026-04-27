import { NextResponse } from 'next/server';
import { resolveZipInfo } from '@/lib/zip';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const zip = (searchParams.get('zip') || '').replace(/[^0-9]/g, '').slice(0, 5);

  if (zip.length !== 5) {
    return NextResponse.json({ ok: false, message: 'Enter a valid 5-digit ZIP code.' }, { status: 400 });
  }

  const info = await resolveZipInfo(zip);

  if (!info) {
    return NextResponse.json({ ok: false, message: 'ZIP code could not be decoded.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true, ...info });
}
