export default function TeamCard({ member }) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="aspect-[5/6] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-primary-600">
          {member.role}
        </p>
      </div>
    </article>
  );
}
