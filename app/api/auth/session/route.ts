import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { api } from '../../api';
import { isAxiosError } from 'axios';

export async function GET() {
  try {
    const cookieStore = await cookies();

    const res = await api.get('auth/session', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(res.data, { status: 200 });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json({ success: false }, { status: 200 });
    }

    return NextResponse.json({ success: false }, { status: 200 });
  }
}
