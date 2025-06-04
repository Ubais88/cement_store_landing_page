import React from 'react';
import { Hammer, Home } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <Home size={30} className="text-amber-500" />
      <Hammer size={20} className="absolute -bottom-1 -right-1 text-blue-700" />
    </div>
  );
};

export default Logo;