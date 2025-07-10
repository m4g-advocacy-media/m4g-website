import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          M4G Advocacy Media
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Encouraging, educating and empowering people with all abilities
        </p>
        <div className="prose max-w-none">
          <p>
           Encouraging, educating and empowering people with all abilities by building healthier relationships and collaborating to help build inclusive cultures. Together we can all make a difference!
          </p>
        </div>
      </main>
    </div>
  );
}