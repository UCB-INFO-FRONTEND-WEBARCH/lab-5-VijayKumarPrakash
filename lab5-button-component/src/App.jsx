import './App.css'
import { Button } from './components/Button'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useState } from 'react';

function App() {
  const [wish, setWish] = useState('');

  const handleSendWish = () => {
    if (wish.trim()) {
      alert(`✨ Wish sent to the cosmos: "${wish}"`);
      setWish('');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 60px 70px, #fff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 50px 50px, #ddd, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 90px 10px, #eee, rgba(0,0,0,0))
      `,
      backgroundSize: '200px 200px',
      backgroundColor: '#0a0e27',
      padding: '40px 20px',
      position: 'relative'
    }}>
      <div style={{ width: '100%', maxWidth: 'none', padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: '50px', textShadow: '0 0 10px rgba(230, 0, 35, 0.5)' }}>
          🚀 Cosmic Button Explorer 🌟
        </h1>

        <p style={{ textAlign: 'center', color: '#ffffffff', fontSize: '0.9rem', marginBottom: '40px', maxWidth: '500px' }}>
          ✨ Note to Professor Kay: I went rogue with this assignment and had a bit of fun! 🎉
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>

          {/* Button 1: Default */}
          <div style={{ textAlign: 'center' }}>
            <label style={{ color: '#888', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
              🌍 Fill / Medium / Primary
            </label>
            <div style={{ marginTop: '12px' }}>
              <Button onClick={() => alert('🚀 Houston, we have launch!')}>
                Launch Into Space
              </Button>
            </div>
          </div>

          {/* Button 2: Outline */}
          <div style={{ textAlign: 'center' }}>
            <label style={{ color: '#888', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
              ✨ Outline / Medium / Primary
            </label>
            <div style={{ marginTop: '12px' }}>
              <Button variant="outline">
                Navigate the Stars
              </Button>
            </div>
          </div>

          {/* Button 3: Text */}
          <div style={{ textAlign: 'center' }}>
            <label style={{ color: '#888', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
              🌌 Text / Medium / Primary
            </label>
            <div style={{ marginTop: '12px' }}>
              <Button variant="text">
                Whisper to the Universe
              </Button>
            </div>
          </div>

          {/* Button 4: Secondary with Icon */}
          <div style={{ textAlign: 'center' }}>
            <label style={{ color: '#888', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
              🎆 Fill / Large / Secondary / With Icon
            </label>
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <input
                type="text"
                placeholder="Enter your cosmic wish..."
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendWish()}
                style={{
                  padding: '10px 15px',
                  borderRadius: '8px',
                  border: '1px solid #E60023',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontSize: '0.875rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  minWidth: '250px'
                }}
                onFocus={(e) => e.target.style.backgroundColor = 'rgba(230, 0, 35, 0.1)'}
                onBlur={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              />
              <Button color="secondary" size="large" icon={<RocketLaunchIcon />} onClick={handleSendWish}>
                Make a Cosmic Wish
              </Button>
            </div>
          </div>

          {/* Button 5: Disabled */}
          <div style={{ textAlign: 'center' }}>
            <label style={{ color: '#888', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
              🛑 Fill / Small / Disabled
            </label>
            <div style={{ marginTop: '12px' }}>
              <Button disabled size="small">
                Portal Closed
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
