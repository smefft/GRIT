import Link from 'next/link';

interface DatasetCardProps {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
  dataPoints: number;
  tags: string[];
}

export default function DatasetCard({
  id,
  title,
  description,
  lastUpdated,
  dataPoints,
  tags,
}: DatasetCardProps) {
  return (
    <Link href={`/data/${id}`}>
      <div className="dataset-card group">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-primary bg-primary/5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Last updated: {lastUpdated}</span>
            <span>{dataPoints.toLocaleString()} data points</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 