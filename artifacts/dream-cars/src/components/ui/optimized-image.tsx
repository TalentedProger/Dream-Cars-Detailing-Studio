import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  return (
    <div className={cn("relative overflow-hidden bg-white/5", className)}>
      {/* Placeholder / Skeleton */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-white/10 animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  );
}
