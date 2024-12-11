import { Hero } from '@/app/components/organisms/Hero/Hero';
import { FeaturesGrid } from '@/app/components/organisms/FeaturesGrid/FeaturesGrid';


export function HomeTemplate() {
  return (
    <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Hero />
      <FeaturesGrid />
    </main>
  );
}