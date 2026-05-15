import ProductGrid from '@/components/ProductGrid';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">ShopSphere</h1>
            <p className="text-xl">Discover Premium Products</p>
          </div>
        </div>
        <ProductGrid />
      </main>
    </>
  );
}