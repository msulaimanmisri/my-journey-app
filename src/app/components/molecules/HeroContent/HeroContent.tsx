import { Heading } from '@/app/components/atoms/Typography/Heading';
import { Button } from '@/app/components/atoms/Button/Button';

export function HeroContent() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <Heading id="hero-heading">
        Share your yearly journey through informative poster
      </Heading>
      
      <div className="flex gap-4 justify-center my-6">
        <Button href="/docs" variant="primary">Get Started</Button>
      </div>
    </div>
  );
}