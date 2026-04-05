export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 text-center text-gray-500">
      <div className="mb-4">
        <span className="text-xl font-bold text-white">My<span className="text-cyan-500">Portfolio</span></span>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} Alipta Ghosh. Built with React & Tailwind.</p>
    </footer>
  );
}