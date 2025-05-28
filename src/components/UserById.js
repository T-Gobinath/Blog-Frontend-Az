// import React, { useState } from 'react';
// import axios from 'axios';

// const UserById = () => {
//   const [id, setId] = useState('');
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState('');
//   const [editName, setEditName] = useState('');
//   const [updating, setUpdating] = useState(false);

//   const fetchUser = () => {
//     axios.get(`http://localhost:8081/userById?id=${id}`)
//       .then(response => {
//         setUser(response.data);
//         setEditName(response.data.name); // Set editable name
//         setError('');
//       })
//       .catch(error => {
//         setUser(null);
//         setError('User not found or error fetching data.');
//         console.error(error);
//       });
//   };

//   const updateName = () => {
//     if (!user) return;
//     setUpdating(true);
//     axios.put(`http://localhost:8081/updateUserName`, {
//       id: user.id,
//       name: editName
//     })
//       .then(response => {
//         setUser({ ...user, name: editName });
//         setUpdating(false);
//         alert('Name updated successfully!');
//       })
//       .catch(error => {
//         setUpdating(false);
//         alert('Failed to update name.');
//         console.error(error);
//       });
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       paddingTop: '60px'
//     }}>
//       <h2 style={{ color: '#1e293b', marginBottom: '30px', fontWeight: 700, letterSpacing: '1px' }}>Find User by ID</h2>
//       <div style={{ marginBottom: '30px' }}>
//         <input
//           type="number"
//           placeholder="Enter user ID"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//           style={{
//             marginRight: '10px',
//             padding: '10px',
//             borderRadius: '6px',
//             border: '1px solid #cbd5e1',
//             fontSize: '16px',
//             outline: 'none'
//           }}
//         />
//         <button
//           onClick={fetchUser}
//           className="button type1"
         
//        >
//           Search
//         </button>
//       </div>

//       {error && <p style={{ color: '#ef4444', fontWeight: 500 }}>{error}</p>}

//       {user && (
//         <div style={{
//           marginTop: '10px',
//           border: 'none',
//           borderRadius: '16px',
//           padding: '32px 28px',
//           background: 'white',
//           maxWidth: '400px',
//           boxShadow: '0 8px 32px rgba(30,41,59,0.12)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center'
//         }}>
//           <div style={{
//             width: '70px',
//             height: '70px',
//             borderRadius: '50%',
//             background: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginBottom: '20px'
//           }}>
//             <span style={{ fontSize: '36px', color: 'white' }}>👤</span>
//           </div>
//           <h3 style={{ color: '#1e293b', marginBottom: '24px', fontWeight: 700, letterSpacing: '1px' }}>User Info</h3>
//           <div style={infoRow}><span style={label}>ID:</span> {user.id}</div>
//           <div style={infoRow}><span style={label}>Username:</span> {user.username}</div>
//           <div style={infoRow}><span style={label}>Password:</span> {user.password}</div>
//           <div style={infoRow}>
//             <span style={label}>Name:</span>
//             <input
//               type="text"
//               value={editName}
//               onChange={e => setEditName(e.target.value)}
//               style={{
//                 border: '1px solid #cbd5e1',
//                 borderRadius: '4px',
//                 padding: '4px 8px',
//                 fontSize: '15px',
//                 marginRight: '8px'
//               }}
//             />
//             <button
//               onClick={updateName}
//               disabled={updating}
//               style={{
//                 padding: '4px 12px',
//                 borderRadius: '4px',
//                 border: 'none',
//                 background: '#6366f1',
//                 color: 'white',
//                 fontWeight: 600,
//                 cursor: updating ? 'not-allowed' : 'pointer'
//               }}
//             >
//               {updating ? 'Saving...' : 'Update'}
//             </button>
//           </div>
//           <div style={infoRow}><span style={label}>Mobile:</span> {user.mobile}</div>
//           <div style={infoRow}><span style={label}>Role:</span> {user.role}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// const infoRow = {
//   width: '100%',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   marginBottom: '14px',
//   fontSize: '16px',
//   color: '#334155',
//   borderBottom: '1px solid #f1f5f9',
//   paddingBottom: '6px'
// };

// const label = {
//   fontWeight: 600,
//   color: '#6366f1',
//   marginRight: '10px'
// };

// export default UserById;