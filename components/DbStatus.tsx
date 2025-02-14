'use client';

import { useEffect, useState } from 'react';

export default function DbStatus() {
  const [status, setStatus] = useState<string>('checking...');

  useEffect(() => {
    fetch('/api/test-db')
      .then(res => res.json())
      .then(data => {
        setStatus(data.message);
      })
      .catch(err => {
        setStatus('Error checking connection');
        console.error(err);
      });
  }, []);

  return (
    <div>
      <p>Database Status: {status}</p>
    </div>
  );
}