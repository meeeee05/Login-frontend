'use client';

import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">ログイン</h1>
      <a
        href="/api/auth/login"
        className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
      >
        Auth0でログイン
      </a>
    </div>
  );
}