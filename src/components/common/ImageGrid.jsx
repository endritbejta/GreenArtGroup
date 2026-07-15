import AnimateIn from "./AnimateIn";

/** Simple responsive gallery of images with hover zoom. */
export default function ImageGrid({ images, altPrefix = "Gallery image" }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((src, index) => (
        <AnimateIn key={src + index} delay={index * 100}>
          <div className="group overflow-hidden rounded-2xl">
            <img
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
