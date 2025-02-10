import React from "react";

const Disclaimer = ({ handleCloseModal }: { handleCloseModal: () => void }) => {
  return (
    <div className="bg-white p-5 rounded-lg w-full max-w-2xl h-auto overflow-y-auto">
      {" "}
      {/* Added overflow-y-auto and adjusted height */}
      <h2 className="text-xl font-semibold mb-4 text-neutral-800">
        Disclaimer
      </h2>
      <div className="prose max-w-none">
        {" "}
        {/* Use prose class for better typography and responsiveness */}
        <p className="text-gray-700 text-mini">
          The information provided on the PrimeVista Global website is intended
          for general informational purposes only. While we make every effort to
          ensure the accuracy, completeness, and reliability of the content, we
          do not guarantee the timeliness or correctness of the information
          presented. The materials on this website are not intended to replace
          professional advice, whether legal, financial, or otherwise, and
          should not be relied upon as such.
          <br />
          PrimeVista Global shall not be held responsible for any direct,
          indirect, incidental, or consequential damages arising from the use of
          or reliance on the information provided on our website, including any
          errors, omissions, or inaccuracies. Additionally, the website may
          contain links to third-party websites. These links are provided solely
          for convenience, and we do not endorse, control, or assume
          responsibility for the content or practices of these external sites.
          <br />
          We reserve the right to update, modify, or remove any content on the
          website at any time without prior notice. By accessing or using our
          website, you acknowledge and agree to this disclaimer.
        </p>
      </div>
      <button
        onClick={handleCloseModal}
        className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition w-full lg:w-auto" // Added w-full for smaller screens
      >
        Close
      </button>
    </div>
  );
};

export default Disclaimer;
