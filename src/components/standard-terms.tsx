import React from "react";

const StandardTerms = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <div className="bg-white p-5 rounded-lg w-full max-w-2xl h-auto overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4 text-neutral-800">
        Standard Terms
      </h2>

      <div className="text-mini text-gray-700 space-y-4">
        <p>
          By using the website and services of{" "}
          <strong>PrimeVista Global</strong>, you agree to the following terms
          and conditions:
        </p>

        <p>
          <strong>Service Scope:</strong> Our services include offshore
          bookkeeping, taxation, and data analytics. All engagements are subject
          to mutual agreement and compliance with applicable laws.
        </p>

        <p>
          <strong>Confidentiality:</strong> We maintain strict confidentiality
          of all client data and ensure that no information is disclosed to
          third parties, except as required by law or with client consent.
        </p>

        <p>
          <strong>Limitation of Liability:</strong> While we strive for
          accuracy, PrimeVista Global is not liable for any indirect,
          incidental, or consequential damages arising from the use of our
          services.
        </p>

        <p>
          <strong>Intellectual Property:</strong> All content, trademarks, and
          materials on this website are the property of PrimeVista Global and
          may not be copied or used without prior written permission.
        </p>

        <p>
          <strong>Payment & Billing:</strong> Payments for services must be made
          as per agreed terms. Late payments may incur penalties or service
          suspension.
        </p>

        <p>
          <strong>Governing Law:</strong> These terms are governed by the
          applicable laws of India, and any disputes shall be resolved through
          arbitration or legal proceedings in the relevant courts.
        </p>

        <p>
          By using our website and services, you acknowledge and accept these
          terms. PrimeVista Global reserves the right to update these terms at
          any time.
        </p>
      </div>

      <button
        onClick={handleCloseModal}
        className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition"
      >
        Close
      </button>
    </div>
  );
};

export default StandardTerms;
