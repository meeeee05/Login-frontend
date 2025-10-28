// pages/api/auth/[...auth0].ts
import { handleAuth } from '@auth0/nextjs-auth0/edge';

// デバッグ用（開発環境のみ表示）
if (process.env.NODE_ENV === 'development') {
  console.log('Auth0 環境変数確認:');
  console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID);
  console.log('AUTH0_CLIENT_SECRET:', process.env.AUTH0_CLIENT_SECRET ? '(設定済み)' : '(未設定)');
  console.log('AUTH0_BASE_URL:', process.env.AUTH0_BASE_URL);
  console.log('AUTH0_ISSUER_BASE_URL:', process.env.AUTH0_ISSUER_BASE_URL);
}

// Auth0ルート定義（v4系では default export ではなく GET / POST を明示）
export const GET = handleAuth();
export const POST = handleAuth();