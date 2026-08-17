import { useState, type ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string;
};

export function SmartImage({ fallbackLabel = 'Image unavailable', className = '', alt = '', ...rest }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-ink-100 text-ink-400 ${className}`}
        role="img"
        aria-label={fallbackLabel}
      >
        <ImageOff className="h-6 w-6" />
        <span className="text-xs font-medium">{fallbackLabel}</span>
      </div>
    );
  }

  return <img {...rest} alt={alt} className={className} onError={() => setError(true)} loading={rest.loading ?? 'lazy'} />;
}
