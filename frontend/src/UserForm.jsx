import { useState } from 'react';
import { createUser } from './api.jsx';

export default function UserForm({ onUserAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    try {
      await createUser({ name, email });
      setName('');
      setEmail('');
      onUserAdded(); // Refresh list
    } catch (err) {
      alert('Failed to create user');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>Add New User</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          name="name"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '0.5rem', marginRight: '0.5rem', width: '200px' }}
        />
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '0.5rem', marginRight: '0.5rem', width: '200px' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '0.5rem 1rem',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {loading ? 'Adding...' : 'Add User'}
        </button>
      </div>
    </form>
  );
}