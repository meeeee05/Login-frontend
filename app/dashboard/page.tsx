'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/auth/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">ようこそ、{user.name} さん！</h1>
      <p>Email: {user.email}</p>

      <a
        href="/api/auth/logout"
        className="inline-block mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        ログアウト
      </a>
    </div>
  );
}