import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Profile({
  name,
  title,
  company,
  phone,
  email,
  whatsapp,
  primaryColor,
  profileImage,
}: {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  whatsapp: string;
  primaryColor: string;
  profileImage: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div
        className="relative h-[180px] flex"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="h-[180px] w-[130px] relative flex-shrink-0">
          <Image
            src={profileImage || "/400x400.svg"}
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 text-white">
          <h2 className="text-lg md:text-2xl font-medium mb-1 drop-shadow-md">
            {name}
          </h2>
          <p className="text-sm mb-1 opacity-90">{title}</p>
          <p className="text-sm opacity-90">{company}</p>
        </div>
      </div>

      <div className="p-4 mt-0">
        <ul className="flex justify-center gap-6">
          <li>
            <a
              href={"tel:" + phone}
              className="w-[42px] h-[42px] flex items-center justify-center border rounded-full hover:bg-opacity-90"
              style={{
                color: primaryColor,
                borderColor: primaryColor,
              }}
            >
              <FaPhoneAlt className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href={"mailto:" + email}
              className="w-[42px] h-[42px] flex items-center justify-center border rounded-full hover:bg-opacity-90"
              style={{
                color: primaryColor,
                borderColor: primaryColor,
              }}
            >
              <FaEnvelope className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href={"https://wa.me/" + whatsapp}
              className="w-[42px] h-[42px] flex items-center justify-center border rounded-full hover:bg-opacity-90"
              style={{
                color: primaryColor,
                borderColor: primaryColor,
              }}
            >
              <IoLogoWhatsapp className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
