export default function Connect() {
  const handleConnect = () => {
    window.location.href = "https://ai-marketing-backend-diws.onrender.com/auth/meta";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-6">🔗 Connect Your Meta Account</h1>
      <p className="mb-4">To run ads, we need to access your Meta Ad account.</p>
      <button
        onClick={handleConnect}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Connect Meta Account
      </button>
    </div>
  );
}
