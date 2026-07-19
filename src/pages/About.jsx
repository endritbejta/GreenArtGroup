import { useLanguage, useLocalized } from "../i18n/LanguageContext";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Icon from "../components/ui/Icon";
import PageHero from "../components/common/PageHero";
import AnimateIn from "../components/common/AnimateIn";
import FeatureCard from "../components/common/FeatureCard";
import TeamCard from "../components/common/TeamCard";
import StatCard from "../components/common/StatCard";
import CTASection from "../components/common/CTASection";
import { companyStory, mission, vision, values, timeline } from "../data/company";
import { team } from "../data/team";
import { stats } from "../data/stats";

const STORY_IMAGE =
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=80";

export default function About() {
  const { t } = useLanguage();
  const story = useLocalized(companyStory);
  const localizedMission = useLocalized(mission);
  const localizedVision = useLocalized(vision);
  const localizedValues = useLocalized(values);
  const localizedTimeline = useLocalized(timeline);
  const localizedTeam = useLocalized(team);
  const localizedStats = useLocalized(stats);

  return (
    <>
      <PageHero
        title={t("aboutPage.heroTitle")}
        subtitle={t("aboutPage.heroSubtitle")}
        breadcrumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.about") },
        ]}
      />

      {/* Story */}
      <section className="section">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t("aboutPage.storyEyebrow")}
            title={t("aboutPage.storyTitle")}
            subtitle={story}
          />
          <AnimateIn delay={150}>
            <img
              src={STORY_IMAGE}
              alt={t("aboutPage.storyImageAlt")}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </AnimateIn>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section pt-0">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            { icon: "leaf", title: t("aboutPage.mission"), text: localizedMission },
            { icon: "award", title: t("aboutPage.vision"), text: localizedVision },
          ].map((item, index) => (
            <AnimateIn key={item.title} delay={index * 100} className="h-full">
              <div className="h-full rounded-3xl bg-primary-900 p-8 text-white">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-300">
                  <Icon name={item.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-xl font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-primary-100">
                  {item.text}
                </p>
              </div>
            </AnimateIn>
          ))}
        </Container>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <Container>
          <SectionHeading
            eyebrow={t("aboutPage.valuesEyebrow")}
            title={t("aboutPage.valuesTitle")}
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {localizedValues.map((value, index) => (
              <AnimateIn key={value.id} delay={index * 100} className="h-full">
                <FeatureCard {...value} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow={t("aboutPage.journeyEyebrow")}
            title={t("aboutPage.journeyTitle")}
            align="center"
          />
          <ol className="relative mx-auto mt-12 max-w-2xl space-y-10 border-l-2 border-primary-100 pl-8">
            {localizedTimeline.map((milestone, index) => (
              <AnimateIn key={milestone.id} delay={index * 100}>
                <li className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-primary-100 bg-primary-500"
                  />
                  <p className="text-sm font-bold uppercase tracking-wide text-primary-600">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-gray-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">
                    {milestone.description}
                  </p>
                </li>
              </AnimateIn>
            ))}
          </ol>
        </Container>
      </section>

      {/* Team */}
      <section className="section bg-gray-50">
        <Container>
          <SectionHeading
            eyebrow={t("aboutPage.teamEyebrow")}
            title={t("aboutPage.teamTitle")}
            subtitle={t("aboutPage.teamSubtitle")}
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {localizedTeam.map((member, index) => (
              <AnimateIn key={member.id} delay={index * 100} className="h-full">
                <TeamCard member={member} />
              </AnimateIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="section">
        <Container>
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-soft md:grid-cols-4">
            {localizedStats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
