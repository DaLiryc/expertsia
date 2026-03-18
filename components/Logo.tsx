export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <svg
        width="55"
        height="70"
        viewBox="0 0 70 70"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d5a3d" stopOpacity={1} />
            <stop offset="100%" stopColor="#e07b39" stopOpacity={1} />
          </linearGradient>
        </defs>
        <polygon
          points="35,5 60,20 60,50 35,65 10,50 10,20"
          fill="none"
          stroke="#e07b39"
          strokeWidth={1.5}
        />
        <circle cx="25" cy="20" r="5" fill="#e07b39" />
        <circle cx="55" cy="35" r="5" fill="#e07b39" />
        <circle cx="25" cy="50" r="5" fill="#e07b39" />
        <circle cx="40" cy="20" r="4" fill="#d4a574" />
        <circle cx="40" cy="50" r="4" fill="#d4a574" />
        <line x1="25" y1="20" x2="55" y2="35" stroke="#e07b39" strokeWidth={2} />
        <line x1="25" y1="50" x2="55" y2="35" stroke="#e07b39" strokeWidth={2} />
        <line x1="40" y1="20" x2="55" y2="35" stroke="#d4a574" strokeWidth={1.5} />
        <line x1="40" y1="50" x2="55" y2="35" stroke="#d4a574" strokeWidth={1.5} />
      </svg>
      <span className="text-xl font-bold">
        Experts
        <span className="text-[#e07b39]">IA</span>
      </span>
    </div>
  );
}
