import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  styleClasses: {
    bg: string;
    text: string;
  }
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, text, styleClasses }) => {
  // Prepend 'hover:' to each class in the background style string.
  // This handles single classes like 'bg-blue-600' -> 'hover:bg-blue-600'
  // and multi-part classes for gradients.
  const hoverBgClasses = styleClasses.bg.split(' ').map(c => `hover:${c}`).join(' ');

  const baseClasses = `w-full flex items-center justify-center gap-3 p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg`;
  
  // Start with a default slate background and light text.
  const defaultStateClasses = "bg-slate-700 text-slate-200";
  
  // On hover, apply the trademark colors.
  const hoverStateClasses = `${hoverBgClasses} hover:${styleClasses.text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${defaultStateClasses} ${hoverStateClasses}`}
    >
      {icon}
      <span className="font-semibold">{text}</span>
    </a>
  );
};

export default SocialLink;