import { useLanguage, useLocalized } from "../i18n/LanguageContext";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import PageHero from "../components/common/PageHero";
import AnimateIn from "../components/common/AnimateIn";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import { contactFaqs } from "../data/company";
import { SITE } from "../constants/site";

export default function Contact() {
  const { t } = useLanguage();
  const faqs = useLocalized(contactFaqs);

  return (
    <>
      <PageHero
        title={t("contactPage.heroTitle")}
        subtitle={t("contactPage.heroSubtitle")}
        breadcrumbs={[
          { label: t("nav.home"), to: "/" },
          { label: t("nav.contact") },
        ]}
      />

      {/* Info + form */}
      <section className="section bg-gray-50">
        <Container className="grid items-start gap-10 lg:grid-cols-5">
          <AnimateIn className="lg:col-span-2">
            <ContactInfo />
          </AnimateIn>
          <AnimateIn delay={150} className="lg:col-span-3">
            <div className="rounded-3xl bg-white p-6 shadow-soft sm:p-10">
              <SectionHeading
                eyebrow={t("contactPage.formEyebrow")}
                title={t("contactPage.formTitle")}
                subtitle={t("contactPage.formSubtitle")}
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Map */}
      <section className="section pb-0">
        <Container>
          <AnimateIn>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title={t("contactPage.mapTitle", { name: SITE.name })}
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                className="h-96 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section">
        <Container className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow={t("contactPage.faqEyebrow")}
              title={t("contactPage.faqTitle")}
              subtitle={t("contactPage.faqSubtitle")}
            />
          </div>
          <AnimateIn delay={150} className="lg:col-span-3">
            <Accordion items={faqs} />
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
