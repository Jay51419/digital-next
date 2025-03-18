export default function Logo({ url }: { url: string }) {
  return (
    <div className="flex w-full justify-center items-center gap-2">
      <img className="w-36" src={url} alt="Logo" />
    </div>
  );
}
