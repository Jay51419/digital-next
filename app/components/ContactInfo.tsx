import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2 className="text-[#2e3192] text-2xl font-medium text-center mb-6">
        Contact Us
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#2e3192] flex items-center justify-center flex-shrink-0">
            <FaPhoneAlt color="white" />
          </div>
          <div>
            <h3 className="text-[#2e3192] font-medium mb-1">Call Us</h3>
            <p className="text-gray-700">+91 9320012999</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#2e3192] flex items-center justify-center flex-shrink-0">
            <FaEnvelope color="white" />
          </div>
          <div>
            <h3 className="text-[#2e3192] font-medium mb-1">Email</h3>
            <p className="text-gray-700">enquiry@a3b.in</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#2e3192] flex items-center justify-center flex-shrink-0">
            <FaMapMarkerAlt color="white" />
          </div>
          <div>
            <h3 className="text-[#2e3192] font-medium mb-1">Address</h3>
            <p className="text-gray-700">
              A 504, Universal Business Park, Chandivali Farm Road, Off Saki
              Vihar Road, Andheri (East), Mumbai – 400072.
            </p>
            <a
              href="https://maps.app.goo.gl/XCMgSDafcvEEJ56Z9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-[#2e3192] text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
