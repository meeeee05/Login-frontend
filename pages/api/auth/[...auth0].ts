// pages/api/auth/[...auth0].ts
import { handleAuth } from "@auth0/nextjs-auth0";

// 環境変数が正しく読めているか確認
console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID);
console.log('AUTH0_CLIENT_SECRET:', process.env.AUTH0_CLIENT_SECRET);
console.log('AUTH0_BASE_URL:', process.env.AUTH0_BASE_URL);
console.log('AUTH0_ISSUER_BASE_URL:', process.env.AUTH0_ISSUER_BASE_URL);

// Auth0ルートを作成
export default handleAuth();