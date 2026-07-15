import Icon from "../ui/Icon";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group h-full rounded-3xl bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-base font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}
