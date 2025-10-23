'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/auth/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('ログイン成功！');
        console.log('ログイン成功:', data);
        // ローカルストレージにトークンを保存（後で使う）
        localStorage.setItem('access-token', res.headers.get('access-token') || '');
        localStorage.setItem('client', res.headers.get('client') || '');
        localStorage.setItem('uid', res.headers.get('uid') || '');
      } else {
        setMessage('ログイン失敗: ' + (data.errors?.[0] || '不明なエラー'));
      }
    } catch (error) {
      console.error(error);
      setMessage('通信エラーが発生しました');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">ログイン</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          ログイン
        </button>
      </form>
      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
}