import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex w-full justify-center items-center gap-2">
      <Image src="/A3B-new-logo.png" alt="Logo" width={150} height={150} />
    </div>
  );
}
