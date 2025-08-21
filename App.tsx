import React from 'react';
import SocialLink from './components/SocialLink';
import { InstagramIcon, FacebookIcon, XIcon, TikTokIcon, YouTubeIcon } from './components/icons';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/agc_apapadistrict_teens?igsh=MTk4cGYycGxqYzJ2Zw%3D%3D&utm_source=qr',
    icon: <InstagramIcon className="w-6 h-6" />,
    styleClasses: {
      bg: 'bg-gradient-to-r from-pink-500 to-yellow-500',
      text: 'text-white'
    }
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/16VkYBtggq/?mibextid=wwXIfr',
    icon: <FacebookIcon className="w-6 h-6" />,
    styleClasses: {
      bg: 'bg-blue-600',
      text: 'text-white'
    }
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/ApapaTeens?t=kxp60ZOwg9j27yNbkqed7Q&s=08',
    icon: <XIcon className="w-6 h-6" />,
    styleClasses: {
      bg: 'bg-black',
      text: 'text-white'
    }
  },
  {
    name: 'TikTok',
    url: 'https://vm.tiktok.com/ZSHGUwbQW/',
    icon: <TikTokIcon className="w-6 h-6" />,
    styleClasses: {
      bg: 'bg-black',
      text: 'text-white'
    }
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@Apapa-districtTeens?sub_confirmation=1',
    icon: <YouTubeIcon className="w-6 h-6" />,
    styleClasses: {
      bg: 'bg-red-600',
      text: 'text-white'
    }
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white flex items-center justify-center p-4">
      <main className="w-full max-w-sm">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-black/20 p-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-slate-700 flex items-center justify-center border-4 border-slate-600 mb-4 shadow-lg overflow-hidden">
              <img
                src="https://i.postimg.cc/FstL1606/a2b9c6b4-98f5-42b6-8fd1-f14f8853c09f-removalai-preview.png"
                alt="Assemblies Of God Apapa District Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-slate-100">Assemblies Of God</h1>
            <p className="text-md text-slate-400 mt-1">Apapa District</p>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.name}
                href={link.url}
                icon={link.icon}
                text={link.name}
                styleClasses={link.styleClasses}
              />
            ))}
          </div>
        </div>
        <footer className="text-center mt-6 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Assemblies Of God Apapa District. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;