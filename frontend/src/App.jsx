import { useState, useEffect } from 'react';
import UserForm from './UserForm.jsx';
import UserList from './UserList.jsx';
import { fetchUsers } from './api.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const loadUsers = async () => {
    try {
      const res = await fetchUsers();
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load users',err);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>MERN App with Full Testing</h1>
      
      <UserForm onUserAdded={loadUsers} />

      <h2 style={{ marginTop: '3rem' }}>Users List</h2>
      
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <UserList users={users} />
    </div>
  );
}

export default App;