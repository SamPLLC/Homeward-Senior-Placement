export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          Homeward Senior Placement respects your privacy. We use your information only to
          respond to your request, provide placement guidance, and improve our services.
        </p>

        <div className="mt-10 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="mt-2">
              We may collect contact details (name, email, phone), care preferences, location,
              and related information you share with us through forms, calls, or email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">How We Use Information</h2>
            <p className="mt-2">
              We use your information to recommend senior care options, coordinate tours, answer
              questions, and follow up about your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Information Sharing</h2>
            <p className="mt-2">
              We share only the information needed with communities or care partners you are
              interested in. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p className="mt-2">
              Questions about privacy can be sent to{" "}
              <a className="underline underline-offset-4" href="mailto:homewardseniors@icloud.com">
                homewardseniors@icloud.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
