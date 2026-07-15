import Badge from "../ui/Badge";
import Icon from "../ui/Icon";

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge variant="white" className="absolute left-4 top-4">
          {project.category}
        </Badge>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-primary-600">
          <Icon name="map-pin" className="h-3.5 w-3.5" />
          {project.location}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {project.description}
        </p>
      </div>
    </article>
  );
}
