import React, { useEffect, useState } from 'react';
import { getMissing, registerCard } from '../api';

export default function CardsMissing(){
  const [data, setData] = useState(null);
  const [newTag, setNewTag] = useState('');
  const [label, setLabel] = useState('');
  const [msg, setMsg] = useState('');

  const fetch = async () => {
    const res = await getMissing();
    setData(res);
  };

  useEffect(() => { fetch(); }, []);

  const addCard = async (e) => {
    e.preventDefault();
    const res = await registerCard({ tagId: newTag, label });
    if (res._id) {
      setMsg('Registered');
      setNewTag(''); setLabel('');
      fetch();
    } else {
      setMsg(res.message || 'Error');
    }
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ color: 'orange' }}>Missing Cards</h2>

      {data.missingCount > 0 && (
        <div style={{ background: '#fff3e0', color: '#b44', padding: 12, borderRadius: 6, border: '1px solid #f5c27a' }}>
          ALERT: {data.missingCount} missing card(s)
        </div>
      )}

      <div style={{ marginTop: 12 }}>
        <h3>Missing List</h3>
        <div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>
          {data.missingCards.length === 0 ? <div>No missing cards</div> :
            data.missingCards.map(c => (
              <div key={c._id} style={{ padding: 8, borderBottom: '1px solid #eee' }}>
                <strong>{c.tagId}</strong> {c.label && <span>- {c.label}</span>}
                <div style={{ fontSize: 12, color: '#666' }}>Last seen: {c.lastSeen ? new Date(c.lastSeen).toLocaleString() : 'Never'}</div>
              </div>
            ))
          }
        </div>
      </div>

      <div style={{ marginTop: 18 }}>
        <h3>Register New Card</h3>
        {msg && <div>{msg}</div>}
        <form onSubmit={addCard} style={{ display: 'flex', gap: 8 }}>
          <input value={newTag} onChange={e => setNewTag(e.target.value)} placeholder="Tag ID" style={{ padding: 8 }} />
          <input value={label} onChange={e => setLabel(e.target.value)} placeholder="Label (optional)" style={{ padding: 8 }} />
          <button style={{ background: 'orange', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6 }}>Register</button>
        </form>
      </div>
    </div>
  );
}
