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
  return (
    <>
      <PageHero
        title="Let's Talk About Your Garden"
        subtitle="Free site visits, honest advice and quotes with no obligation — get in touch however suits you."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
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
                eyebrow="Get In Touch"
                title="Send Us A Message"
                subtitle="Tell us a little about your space and we'll reply within one business day."
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
                title={`Map showing the location of ${SITE.name}`}
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
              eyebrow="FAQ"
              title="Before You Call"
              subtitle="Quick answers to the questions we hear most often."
            />
          </div>
          <AnimateIn delay={150} className="lg:col-span-3">
            <Accordion items={contactFaqs} />
          </AnimateIn>
        </Container>
      </section>
    </>
  );
}
