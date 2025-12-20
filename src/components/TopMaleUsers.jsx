'use client';

import { useEffect, useState } from 'react';

export default function TopMaleUsers({
  apiUrl = 'https://dummyjson.com/users'
}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        const topFive = data.users
          .filter((u) => u.gender === 'male')
          .sort((a, b) => b.age - a.age)
          .slice(0, 5);

        setUsers(topFive);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [apiUrl]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 400 }}>
      {users.map((user, index) => (
        <div
          key={user.id}
          style={{
            display: 'flex',
            gap: 12,
            marginBottom: 16,
          }}
        >
          {/* Index */}
          <div style={{ fontWeight: 600 }}>{index + 1}</div>

          {/* Name + Age */}
          <div>
            <div style={{ fontWeight: 600 }}>
              {user.firstName} {user.lastName}
            </div>
            <div style={{ fontSize: 14, opacity: 0.7 }}>{user.age} years</div>
          </div>
        </div>
      ))}
    </div>
  );
}
