"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      // Pastikan endpoint ini sesuai dengan backend Anda
      const response = await axios.get('http://localhost:3001/api/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus user ini?")) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:3001/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert("User berhasil dihapus!");
        fetchUsers(); // Refresh data tabel
      } catch (error) {
        alert("Gagal menghapus user");
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Manajemen Pengguna (Users)</h2>
      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6' }}>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>ID</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Username</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Status</th>
              <th style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}>{user.id}</td>
                <td style={{ padding: '12px' }}>{user.username}</td>
                <td style={{ padding: '12px' }}>{user.email}</td>
                <td style={{ padding: '12px' }}>{user.is_active ? 'Aktif' : 'Non-Aktif'}</td>
                <td style={{ padding: '12px' }}>
                  <button 
                    onClick={() => handleDelete(user.id)} 
                    style={{ backgroundColor: '#ef4444', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}