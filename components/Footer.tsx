export default function Footer() {
  return (
    <footer className="bg-black text-center py-10 border-t border-white/10">
      <p className="text-sm text-gray-400 italic max-w-3xl mx-auto px-4">
        We do not publicly display client residences. Every design we create is bespoke,
        confidential, and remains private and exclusive to its owner.
      </p>

      <p className="mt-4 text-xs text-gray-600">
        © {new Date().getFullYear()} Pearl Interiors. All Rights Reserved.
      </p>
    </footer>
  );
}

