import { FEATURES } from '@/app/constants/features';
import { FeatureCard } from '../../features/FeatureCard';

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">
        Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={`feature-${index}`} feature={feature} />
        ))}
      </div>
    </section>
  );
}