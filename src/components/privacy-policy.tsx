import React from "react";

const PrivacyPolicy = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  return (
    <div className="bg-white p-5 rounded-lg w-full max-w-2xl h-auto overflow-y-auto">{/* Added responsive properties */}
      <h2 className="text-xl font-semibold mb-4 text-neutral-800">
        Privacy Policy
      </h2>
      <div className="text-mini text-gray-700"> {/* Added prose class and gray color */}
        <p>
          At PrimeVista Global, we are committed to protecting your privacy and
          ensuring the security of your personal information. We collect
          essential details such as your name, email, phone number, and
          business information when you interact with our website or services.
          This data helps us provide seamless financial solutions, respond to
          inquiries, and enhance our offerings. <br />
          We do not sell or share your personal information with third parties,
          except as required by law or with trusted partners assisting in
          service delivery. Our website employs industry-standard security
          measures to safeguard your data from unauthorized access. You have
          the right to request access, correction, or deletion of your
          information at any time. <br />
          By using our website, you consent to our privacy practices. We may
          update this policy periodically, and any changes will be reflected
          here.
        </p>
      </div>
      <button
        onClick={handleCloseModal}
        className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition w-full lg:w-auto" // Added responsive width
      >
        Close
      </button>
    </div>
  );
};

export default PrivacyPolicy;