import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex w-full justify-center items-center gap-2">
      <Image className="w-36 h-36" src="/A3B-new-logo.png" alt="Logo" />
    </div>
  );
}
