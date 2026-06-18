export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            HueAssist: See Colors Accurately
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            A web app that simulates color vision deficiencies and suggests corrective edits for photographers.
          </p>
          <a href="/dashboard" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Try the Dashboard
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Color Blindness Simulation</h3>
              <p className="text-gray-600">
                Experience how your images appear under different types of color vision deficiency (protanopia, deuteranopia, tritanopia).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Edit Recommendations</h3>
              <p className="text-gray-600">
                Get AI‑driven suggestions to adjust hue, saturation, and contrast so your photos look natural to all viewers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">Supabase Powered</h3>
              <p className="text-gray-600">
                Securely store your projects and settings with real‑time sync across devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to edit with confidence?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Sign up for free and start simulating color vision deficiencies today.
          </p>
          <a href="/dashboard" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}