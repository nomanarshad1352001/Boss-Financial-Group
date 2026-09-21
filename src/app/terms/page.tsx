import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and Conditions for Boss Financial Group LLC — disclaimers, SMS campaign terms, and rules for using our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms &"
        accent="Conditions"
        image={IMAGES.taxFlatlay}
        crumb="Terms of Service"
      />

      <section className="noise-bg relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal className="legal">
            <p className="!text-emerald">
              Please read these terms carefully as they outline the rules and regulations for using
              our services and detail your rights and responsibilities.
            </p>

            <h2>Disclaimers for Boss Financial Group LLC</h2>
            <p>
              All the information on this website – http://bossfinancialgroup.com – is published in
              good faith and for general information purposes only. Boss Financial Group LLC does
              not make any warranties about the completeness, reliability and accuracy of this
              information. Any action you take upon the information you find on this website (Boss
              Financial Group LLC), is strictly at your own risk. Boss Financial Group LLC will not
              be liable for any losses and/or damages in connection with the use of our website. Our
              Disclaimer was generated with the help of the Disclaimer Generator and the Disclaimer
              Generator.
            </p>
            <p>
              From our website, you can visit other websites by following hyperlinks to such
              external sites. While we strive to provide only quality links to useful and ethical
              websites, we have no control over the content and nature of these sites. These links
              to other websites do not imply a recommendation for all the content found on these
              sites. Site owners and content may change without notice and may occur before we have
              the opportunity to remove a link which may have gone &apos;bad&apos;.
            </p>
            <p>
              Please be also aware that when you leave our website, other sites may have different
              privacy policies and terms which are beyond our control. Please be sure to check the
              Privacy Policies of these sites as well as their “Terms of Service” before engaging in
              any business or uploading any information.
            </p>

            <h2>The way Campaign will run!</h2>
            <p>
              This campaign sends appointment confirmations, message notifications, and offers to
              the leads who have opted in to receive SMS notifications.
            </p>
            <p>
              You can cancel the SMS service at any time. Simply text &quot;STOP&quot; to the
              shortcode. Upon sending &quot;STOP,&quot; we will confirm your unsubscribe status via
              SMS. Following this confirmation, you will no longer receive SMS messages from us. To
              rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
            </p>
            <p>
              If you experience issues with the messaging program, reply with the keyword HELP for
              more assistance, or reach out directly to our Email: Kevin@bossfinancialgroup.com or
              Call Us at: (917) 890-7534.
            </p>
            <p>Carriers are not liable for delayed or undelivered messages.</p>
            <p>
              As always, message and data rates may apply for messages sent to you from us and to us
              from you. You will receive messages at the frequency described at opt-in. For
              questions about your text plan or data plan, contact your wireless provider.
            </p>
            <p>For privacy-related inquiries, please refer to our privacy policy.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
