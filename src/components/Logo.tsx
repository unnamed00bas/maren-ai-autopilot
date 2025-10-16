interface LogoProps {
  variant?: 'light' | 'dark' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo = ({ variant = 'dark', size = 'md', showTagline = false }: LogoProps) => {
  const heights = {
    sm: 32,
    md: 48,
    lg: 72
  };
  
  const height = heights[size];
  const width = showTagline ? height * 4.2 : height * 3.5;

  if (variant === 'neon') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={width} 
        height={height} 
        viewBox="0 0 720 180"
        className="logo-neon"
      >
        <defs>
          <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6FF00"/>
            <stop offset="100%" stopColor="#00E5FF"/>
          </linearGradient>
          <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <text 
          x="20" 
          y="120" 
          fontFamily="'Space Grotesk','Inter',system-ui,sans-serif" 
          fontSize="100" 
          fontWeight="900" 
          letterSpacing="1" 
          fill="url(#neonGrad)"
          stroke="#FF2EB8"
          strokeWidth="4"
          filter="url(#neonGlow)"
        >
          MAREN
        </text>
        <rect x="580" y="30" width="10" height="120" rx="3" fill="#FF2EB8" filter="url(#neonGlow)"/>
      </svg>
    );
  }

  const textColor = variant === 'light' ? '#FFFFFF' : '#111827';
  const barColor = '#A3E635';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox={showTagline ? "0 0 920 220" : "0 0 720 180"}
      className="logo"
    >
      <text 
        x="20" 
        y="120" 
        fontFamily="'Space Grotesk','Inter',system-ui,sans-serif" 
        fontSize="100" 
        fontWeight="800" 
        letterSpacing="2" 
        fill={textColor}
      >
        MAREN
      </text>
      <rect x="580" y="30" width="10" height="120" rx="3" fill={barColor}/>
      {showTagline && (
        <text 
          x="20" 
          y="180" 
          fontFamily="'Inter',system-ui,sans-serif" 
          fontSize="24" 
          fill={textColor}
          opacity="0.8"
        >
          Get your hours back
        </text>
      )}
    </svg>
  );
};

export const LogoMono = ({ variant = 'dark', size = 48 }: { variant?: 'light' | 'dark', size?: number }) => {
  const bgColor = variant === 'light' ? '#FFFFFF' : '#111827';
  const textColor = variant === 'light' ? '#111827' : '#FFFFFF';
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 256 256"
      className="logo-mono"
    >
      <rect width="256" height="256" rx="56" fill={bgColor}/>
      <path 
        d="M56 192V64h28l44 62 44-62h28v128h-28V116l-44 58-44-58v76H56z" 
        fill={textColor}
      />
      <rect x="196" y="64" width="14" height="128" rx="3" fill="#A3E635"/>
    </svg>
  );
};
