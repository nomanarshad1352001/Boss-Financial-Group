import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IMAGES, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Boss Financial Group LLC — how we collect, use, share, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        accent="Policy"
        image={IMAGES.marbleHall}
        crumb="Privacy Policy"
      />

      <section className="noise-bg relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal className="legal">
            <p className="!text-emerald">
              <strong>Last updated:</strong> January 1, 2026
            </p>
            <p>
              Boss FInancial Group LLC (“we,” “us,” or “our”) takes privacy seriously and is
              dedicated to protecting your personal information (also referred to as “personal
              data”, “personally identifiable information” or “PII”). As such, we are committed to
              the appropriate protection and use of personal information that you provide or have
              been collected via this website (http://bossfinancialgroup.com) or email. This policy
              does not apply to employee information or the information we may collect from you
              offline. We collect personal information that you provide so that we can offer
              information and/or services to you. Please review this Privacy Policy in full to learn
              more about the personal information we collect, process, use, and share, why and how
              we do so, and how we protect such personal information. By using this site, you agree
              to the terms of this Privacy Policy. As discussed further, below, you may consent
              (“opt-in”) to receive our email communications – such as newsletters, blogs, events,
              timely alerts, or other promotional emails. Without penalty, you may also withdraw
              that consent (“opt out”) and may request that your personal information be corrected
              or deleted.
            </p>

            <h2>1. Collection and Use of Personal Information</h2>
            <h3>1.1 The Personal Information We Collect and Process</h3>
            <p>
              Generally, we collect and use personal information for internal purposes in
              furtherance of our business, such as to enhance the services and information we
              provide to you. To do so, we largely collect personal information about you that you
              choose to provide, such as through subscribing to communications or services from us
              or by filling out a contact request form on our website. For example, we may collect
              your contact information, such as your name, address, fax number, telephone number,
              email address, your professional title, and your company name. Where additional,
              optional information is requested, you will be notified at that time.
            </p>
            <p>
              When you submit personal information to us, we will use this information in the manner
              outlined in this Privacy Policy. Your personal information is not used for other
              purposes, unless we obtain your permission, or unless otherwise required or permitted
              by law or professional standards. For example, if you register on our website or
              subscribe to certain services and provide information about your preferences, we will
              use the information you provide to personalize your user experience. In some cases,
              where you have registered for certain services, we will store your email address
              temporarily until we receive confirmation of the information you provided via an email
              (i.e. where we send an email to the email address provided as part of your
              registration to confirm a subscription request).
            </p>
            <p>
              We process personal information in accordance with applicable laws, directives, and
              professional standards. When we process your personal information, it will be for one
              or more of the following reasons:
            </p>
            <p>
              ● To further our legitimate interests in running our business, so long as it does not
              outweigh your privacy interests. For example, we may process your personal information
              to:
              <br />● Offer information and/or services when you visit our website;
              <br />● Guard against fraud or criminal activity and to safeguard our IT systems;
              <br />● Personalize your online experience and improve the performance of our website;
              <br />● Conduct and analyze our marketing activities;
              <br />● To meet our corporate and professional obligations;
              <br />● To exercise our fundamental rights under applicable laws and directives,
              including our freedom to conduct a business and right to property;
              <br />● To process certain of your personal information for a specific reason that we
              request and obtain your specific permission for. You may withdraw your consent at any
              time by contacting us at {SITE.email}; or
              <br />● To comply with a legal obligation, such as performing obligations under a
              contract, keeping records for tax purposes or when we are legally required to provide
              information to a government body or law enforcement agency.
            </p>

            <h3>1.2 Automatic Collection of Personal Information</h3>
            <p>
              We also collect personal information via “cookies,” and related technologies, as
              outlined in our Cookie Policy, which is incorporated into this Privacy Policy by
              reference. We also may collect your IP address, which is a unique number assigned to
              your Internet-connected computer or device that can be recognized by other computers,
              networks, and servers. We may collect your IP address for IT security and system
              diagnostic purposes. We may also use IP addresses in aggregate form to conduct
              analyses on website trends and performance.
            </p>
            <h3>1.2.1 Google Analytics</h3>
            <p>
              Our website uses Google Analytics, a web analytics service provided by Google, which
              uses cookies and similar technologies to collect information about use of this
              website. Google Analytics collects information from users such as age, gender,
              interests, demographics, how often they visit our website, what pages they visit, and
              what other websites they have used before coming to our website. We use the
              information we get from Google Analytics to analyze traffic, remarket our products and
              services to users, improve our marketing, advertising, and to improve our website. We
              may enable Google Analytics advertising features such as Remarketing with Google
              Analytics, Google Display Network Impression Reporting, and Google Analytics
              Demographics and Interest Reporting. You can learn about Google&apos;s practices by
              going to www.google.com/policies/privacy/partners/, and opt-out of them by downloading
              the Google Analytics opt-out browser add-on, available at
              https://tools.google.com/dlpage/gaoptout.
            </p>

            <h2>2. Sharing and Transfer of Personal Information</h2>
            <p>
              We do not share personal information with third parties, except as necessary for our
              legitimate professional and business needs, as provided in Section 3, below, or to
              fulfill a request or inquiry from your (in which case we will obtain your consent to
              share specific information at the time such a request is made), and/or as required or
              permitted by law or professional standards. We will not transfer the personal
              information you provide to any third parties for their own direct marketing use. We
              also do not rent or sell your personal information.
            </p>

            <h2>3. Others Who May Receive or Have Access to Your Data</h2>
            <p>
              We may disclose your personal information to our third party service providers,
              agents, subcontractors, and other organizations for legitimate professional and
              business needs, such as third parties that provide services to us or directly to you
              on our behalf. Such third parties may include:
              <br />● IT service providers (such data and cloud hosting providers);
              <br />● advertising agencies;
              <br />● administrative and document management services;
              <br />● finance/tax authorities;
              <br />● governmental bodies (as necessary to comply with applicable laws and
              regulations)
            </p>
            <p>
              When we use third party service providers, we only disclose to them any personal
              information that is necessary for them to provide their service and we have an
              agreement in place that requires them to keep your information secure, confidential,
              and not to use it other than in accordance with our specific instructions.
            </p>

            <h2>4. Where We Store Information</h2>
            <p>
              Our website is generally operated in the United States. If you are located outside of
              the United States, please be aware that any information you provide to us may be
              transferred to the United States. Please also be aware that by using our website and
              giving us your information, you consent to such transfer. You also understand that the
              U.S. may not provide the same level of protections as the laws of your country.
            </p>

            <h2>5. Controlling and Accessing Your Data</h2>
            <p>
              As indicated above, the personal information that you provide Boss FInancial Group LLC
              is generally voluntary; you are not required to submit any personal information to us.
              However, we may request that you provide certain personal information in order for you
              to receive communications from us, such as about our services and events. We will also
              ask for your permission for certain uses of your personal information, which you can
              agree to or decline. If you opt-in for particular services or communications, such as
              an e-newsletter or blog, you will be able to unsubscribe at any time by clicking the
              “unsubscribe” link in the footer of the email or following the instructions included
              in each communication. If you decide to unsubscribe from a service or communication,
              we will try to remove your information promptly, although we may require additional
              information before we can process your request.
            </p>
            <p>
              As further described in our cookie policy, you can consent to or decline certain
              cookies and related technologies by following the instructions in our Cookie Policy
              and the pop up related to cookies when you first access our site.
            </p>
            <p>
              If Boss FInancial Group LLC processes your personal information, you have the
              following rights:
              <br />● You have the right to access and correct that data. This is sometimes called a
              “Subject Access Request.” If we agree that we are required to provide personal
              information to you, we will provide it to you free of charge. Before providing
              personal information to you, we may ask for proof of identity and sufficient
              information about your interactions with us that we can locate your personal
              information. If the information we hold about you is incorrect, you are entitled to
              ask us to correct any inaccuracies in the personal information.
              <br />● You have the right to object to us processing your personal information if we
              are not entitled to use it anymore.
              <br />● You may have the right to have your information deleted, have its processing
              restricted in certain circumstances, and/or to obtain copies of information we hold
              about you in electronic form.
            </p>
            <p>
              You can make a request or exercise these rights by contacting Boss FInancial Group LLC
              at {SITE.email} and we will make all reasonable and practical efforts to comply with
              your request, so long as it is consistent with applicable law and professional
              standards. To do so, we may need additional information from you or for you to take
              appropriate steps to verify your identity.
            </p>

            <h2>6. Security and Data Retention</h2>
            <p>
              We value your privacy and security. We take appropriate measures to protect your
              personal data from unauthorized access, such as by using third party
              providers/services that encrypt data-at-rest and in-transit using industry-standard
              encryption protocols. However, the Internet is not 100% secure, and despite our best
              efforts, security cannot be guaranteed against all threats. We also make reasonable
              efforts to retain personal information only for so long as the information is needed
              for our legitimate business needs (e.g., professional, marketing, or analytic
              purposes) or to comply with legal, regulatory, and professional standards or until an
              individual requests that the information be deleted in accordance with this policy.
            </p>

            <h2>7. Website Links</h2>
            <p>
              Any link (including a hyperlink, button or referral device of any kind) used on this
              website is provided for your use and convenience. The appearance of a link on the
              website does not constitute an endorsement, recommendation or certification by Boss
              FInancial Group LLC nor should the presence of a link in any way be construed as a
              suggestion that any third-party website has any relationship with us. We do not
              endorse the content on any third-party websites. We are not responsible for the
              content of linked third party websites or third-party advertisements, and do not make
              any representations regarding their content or accuracy. We do not knowingly link to
              websites that may infringe on valid and existing trademarks, service marks, copyrights
              or patents. The use of third-party websites linked on this website is at your own risk
              and subject to the terms and conditions of use and any applicable privacy policies for
              such websites.
            </p>
            <p>
              Boss FInancial Group LLC does not endorse any product that may be advertised on the
              website. Links to Boss FInancial Group LLC&apos;s website must be by prior written
              approval of Boss FInancial Group LLC. No other links into the website are permitted.
              To obtain written permission, contact us at {SITE.email}. Unless prior written
              permission from Boss FInancial Group LLC has been obtained, third parties (i) are not
              permitted to advertise in any way that suggests that we have any relationship or
              affiliation with a third party website or that we endorse, sponsor or recommend the
              information, products or services on such website, (ii) cannot use any of our names,
              logos, designs, slogans, product trademarks or service marks in any advertising,
              publicity, promotion, or in any other commercial matter, and (iii) cannot use any of
              our names, logos, designs, slogans, product trademarks or service marks, or any other
              words or codes identifying the website, in any “metatag” or other information used by
              search engines or other information location tools to identify and select websites.
            </p>

            <h2>8. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time, at our discretion. When we make
              changes to this Privacy Policy, we will revise the “Last updated” date at the top of
              this Privacy Policy. We will communicate any changes to the processing of personal
              data as described in this Privacy Policy that affect you through an appropriate
              channel, in accordance with how we typically communicate with you.
            </p>

            <h2>9. Questions / Concerns</h2>
            <p>
              Boss FInancial Group LLC is committed to protecting the online privacy of your
              personal information. If you have questions or comments about how we handle your
              personal information, please contact us at {SITE.email}. You may also use this address
              to communicate any concerns you may have regarding compliance with our Privacy Policy
              Statement.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
