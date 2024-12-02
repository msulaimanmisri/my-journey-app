import { Feature } from '@/app/types/features';

interface FeatureCardProps {
    feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <div
            className="group p-6 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            role="article"
        >

            <h3 className="text-lg text-teal-900 font-semibold mb-2">
                {feature.title}
            </h3>

            <p className="text-gray-600">{feature.description}</p>
        </div>
    );
}