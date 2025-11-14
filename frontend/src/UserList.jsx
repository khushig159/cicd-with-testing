export default function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {users.map((user) => (
        <li
          key={user._id}
          style={{
            padding: '1rem',
            margin: '0.5rem 0',
            background: '#f0f0f0',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '500px',
          }}
        >
          <div>
            <strong>{user.name}</strong>
          </div>
          <div>{user.email}</div>
        </li>
      ))}
    </ul>
  );
}