export default function AboutMe({
  content,
  primaryColor,
}: {
  content: string;
  primaryColor: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <h2
        style={{
          color: primaryColor,
        }}
        className="text-2xl font-medium text-center mb-4"
      >
        About Me
      </h2>
      <p className="text-left text-gray-700">{content}</p>
    </div>
  );
}
