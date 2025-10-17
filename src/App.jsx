import './css/index.css'
import User from './pages/User';
import Admin from './pages/Admin';
import { AuthProvider, useAuth } from './context/AuthContext';

// App Content Component
function AppContent() {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  console.log('Auth Status:', { isAuthenticated, user });

  // Jika authenticated dan user ada role admin, tampilkan Admin page
  if (isAuthenticated && user) {
    return <Admin />;
  }

  // Jika tidak authenticated, tampilkan User page
  return <User />;
}

// Main App Component
function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;