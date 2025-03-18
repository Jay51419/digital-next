import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo({
  primaryColor,
  phone,
  email,
  address,
  mapUrl,
}: {
  primaryColor: string;
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2
        className="text-2xl font-medium text-center mb-6"
        style={{ color: primaryColor }}
      >
        Contact Us
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: primaryColor }}
          >
            <FaPhoneAlt color="white" />
          </div>
          <div>
            <h3 className="font-medium mb-1" style={{ color: primaryColor }}>
              Call Us
            </h3>
            <p className="text-gray-700">{phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: primaryColor }}
          >
            <FaEnvelope color="white" />
          </div>
          <div>
            <h3 className="font-medium mb-1" style={{ color: primaryColor }}>
              Email
            </h3>
            <p className="text-gray-700">{email}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: primaryColor }}
          >
            <FaMapMarkerAlt color="white" />
          </div>
          <div>
            <h3 className="font-medium mb-1" style={{ color: primaryColor }}>
              Address
            </h3>
            <p className="text-gray-700">{address}</p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 text-white rounded-lg hover:bg-opacity-90 transition-colors"
              style={{ backgroundColor: primaryColor }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
