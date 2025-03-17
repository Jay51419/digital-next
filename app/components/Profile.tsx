import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaComment } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Profile() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-[180px] bg-[#2e3192] flex">
        <div className="h-[180px] w-[130px] relative flex-shrink-0">
          <Image
            src="/400x400.svg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 text-white">
          <h2 className="text-2xl font-medium mb-1 drop-shadow-md">
            Bipen Tiwari
          </h2>
          <p className="text-lg mb-1">Founder and Director</p>
          <p className="text-sm opacity-90">A3B Design Studio</p>
        </div>
      </div>

      <div className="p-4 mt-0">
        <ul className="flex justify-center gap-6">
          <li>
            <a
              href="tel:+919320012999"
              className="w-[42px] h-[42px] flex items-center justify-center  text-[#2e3192] border border-[#2e3192] rounded-full hover:bg-opacity-90"
            >
              <FaPhoneAlt className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="mailto:enquiry@a3b.in"
              className="w-[42px] h-[42px] flex items-center justify-center  text-[#2e3192] border border-[#2e3192] rounded-full hover:bg-opacity-90"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+919320012999"
              className="w-[42px] h-[42px] flex items-center justify-center bg-white text-[#2e3192] border border-[#2e3192] rounded-full hover:bg-opacity-90"
            >
              <IoLogoWhatsapp className="text-xl text-" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
