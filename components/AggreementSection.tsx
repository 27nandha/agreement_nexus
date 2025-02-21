interface Policy {
  name: string;
}

interface AgreementSectionProps {
  policies: Policy[];
}

const AgreementSection: React.FC<AgreementSectionProps> = ({ policies }) => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      {/* Acknowledgment and Agreement */}
      <div>
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <span className="text-blue-600 mr-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </span>
          Acknowledgment and Agreement
        </h2>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700">
            I acknowledge that I have read, understood, and agree to comply with
            all terms and conditions outlined in:
          </p>

          <ul className="mt-4 space-y-2">
            {policies.map((policy, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  />
                </svg>
                {policy.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Commission Structure */}
      <div>
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <span className="text-blue-600 mr-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 2v2.07C7.38 4.53 4.53 7.38 4.07 11H2v2h2.07c.46 3.62 3.31 6.47 6.93 6.93V22h2v-2.07c3.62-.46 6.47-3.31 6.93-6.93H22v-2h-2.07c-.46-3.62-3.31-6.47-6.93-6.93V2h-2zm2 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </svg>
          </span>
          Commission Structure
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg space-y-2">
          <p className="text-gray-700">
            Employment is commission-based after training completion.
          </p>
          <p className="text-gray-700">
            10% commission on each successful course sale.
          </p>
        </div>
      </div>

      {/* Career Growth */}
      <div>
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <span className="text-blue-600 mr-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
            </svg>
          </span>
          Career Growth
        </h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700">
            Consistent high performance may lead to a permanent position with
            fixed salary benefits.
          </p>
        </div>
      </div>

      {/* Confidentiality Agreement */}
      <div>
        <h2 className="flex items-center text-xl font-semibold mb-4">
          <span className="text-blue-600 mr-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
            </svg>
          </span>
          Confidentiality Agreement
        </h2>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <h3 className="text-red-600 font-medium mb-2">Important Notice</h3>
          <div className="space-y-2 text-gray-700">
            <p>All company information must be kept strictly confidential.</p>
            <p>
              Unauthorized disclosure of company information is prohibited and
              may result in legal action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementSection;
