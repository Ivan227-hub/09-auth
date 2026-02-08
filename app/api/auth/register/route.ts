import { NextRequest, NextResponse } from 'next/server';
import { api } from '../../api';
import { cookies } from 'next/headers';
import { isAxiosError } from 'axios';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const apiRes = await api.post('auth/register', body);

    const cookieStore = await cookies();
    const setCookie = apiRes.headers['set-cookie'];

    if (setCookie) {
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

      for (const cookieStr of cookieArray) {
        const parsed = Object.fromEntries(
          cookieStr.split('; ').map(v => {
            const [k, ...r] = v.split('=');
            return [k, r.join('=')];
          })
        );

        const options = {
          path: '/',
          maxAge: parsed['Max-Age'] ? Number(parsed['Max-Age']) : undefined,
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
        };

        if (parsed.accessToken)
          cookieStore.set('accessToken', parsed.accessToken, options);

        if (parsed.refreshToken)
          cookieStore.set('refreshToken', parsed.refreshToken, options);
      }

      return NextResponse.json(apiRes.data, { status: apiRes.status });
    }

    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.response?.status ?? 500 }
      );
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
