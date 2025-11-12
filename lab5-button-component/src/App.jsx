import './App.css'
import { Button } from './components/Button'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function App() {

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a3e 100%)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: '50px', textShadow: '0 0 10px rgba(230, 0, 35, 0.5)' }}>
          🚀 Cosmic Button Explorer 🌟
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* Button 1: Default */}
          <div>
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
          <div>
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
          <div>
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
          <div>
            <label style={{ color: '#888', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
              🎆 Fill / Large / Secondary / With Icon
            </label>
            <div style={{ marginTop: '12px' }}>
              <Button color="secondary" size="large" icon={<RocketLaunchIcon />} onClick={() => alert('✨ Wishes sent to the cosmos!')}>
                Make a Cosmic Wish
              </Button>
            </div>
          </div>

          {/* Button 5: Disabled */}
          <div>
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
