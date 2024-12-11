import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold text-blue-500">Kedai Manang</h1>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-blue-600">Lokasi</a>
          <a href="#" className="hover:text-blue-600">Menu</a>
          <a href="#" className="hover:text-blue-600">Testimoni</a>
          <a href="#" className="hover:text-blue-600">Kontak</a>
          <span className="text-gray-600">👤</span>
        </div>
      </nav>

      <div className="bg-blue-600 text-white p-4 flex items-center justify-between mx-4 my-6 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <img
              src="/images/store-icon.jpg"
              alt="Store icon"
              className="w-6 h-6"
            />
          </div>
          <div>
            <p className="font-medium">Kedai Sudah Buka</p>
            <p className="text-sm text-blue-100">17:00 - 22:00 WIB</p>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50">
          Lihat lokasi toko →
        </button>
      </div>

      <div className="max-w-3xl mx-auto text-center px-4 py-12">
        <p className="text-sm mb-4">Halo, Selamat Datang!</p>
        <h2 className="text-4xl font-bold mb-4">
          Kedai kami adalah <span className="text-blue-600">solusi</span> segala macam perut lapar
        </h2>
        <p className="text-gray-600">
          Lokasi strategis untuk Anda yang ingin pergi kemana-mana
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto px-4 mb-8">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/images/map.jpg"
            alt="Store location map"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/images/food-1.jpg"
            alt="Food display"
            className="w-full h-full rounded-lg object-cover"
          />
          <img
            src="/images/food-2.jpg"
            alt="Food display"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="px-4 pb-8">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Lihat lokasi toko →
        </button>
      </div>

      <ProductShowcase />
    </div>
  );
}

function ProductShowcase() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Menyediakan berbagai macam</h2>
        <p className="text-blue-600 text-lg">jajanan terjangkau</p>
        <p className="text-gray-600 mt-2 text-sm">
          Kami menyediakan berbagai macam jajanan kekinian dari churros hingga corndog
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="relative rounded-lg overflow-hidden shadow-md">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Churros"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/50 text-white">
              <span className="font-medium">Churros</span>
              <span className="float-right">5K</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-12">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Lihat lebih banyak →
        </button>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">
          Cerita mereka <span className="text-blue-600">bermula</span> ketika
        </h2>
        <h3 className="text-xl mb-4">mencoba jajanan kami</h3>
        <p className="text-gray-600">Ayo berikan testimoni Anda</p>
      </div>
    </div>
  )
}

export default App;