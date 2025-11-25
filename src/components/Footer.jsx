import React from 'react';

const Footer = () => {

    return (
        <div>

            <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Logo & Branding */}
    <div>
      <h2 className="text-2xl font-bold text-white">AppNexus</h2>
      <p className="mt-3 text-gray-400">
        Building productive & user-friendly apps to make life easier.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-white transition">Home</a></li>
        <li><a href="/apps" className="hover:text-white transition">Apps</a></li>
        <li><a href="/installation" className="hover:text-white transition">Installation</a></li>
        <li><a href="/my-installation" className="hover:text-white transition">My Installation</a></li>
      </ul>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
      <div className="flex items-center gap-5">
        <a href="https://github.com/" target="_blank" className="hover:text-white transition">
          GitHub
        </a>
        <a href="https://facebook.com/" target="_blank" className="hover:text-white transition">
          Facebook
        </a>
        <a href="https://www.linkedin.com/" target="_blank" className="hover:text-white transition">
          LinkedIn
        </a>
      </div>
    </div>

  </div>

  {/* Divider */}
  <div className="border-t border-gray-700 mt-10 pt-5 text-center">
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} AppNexus — All Rights Reserved.
    </p>
  </div>
</footer>

            
        </div>
    );
};

export default Footer;