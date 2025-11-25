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
        <li className="text-white">about us </li>
        <li className="hover:text-white transition">contact us</li>
        <li className="hover:text-white transition"> Privacy and Policy </li>
        <li className="hover:text-white transition"> Terms and conditions </li>
      </ul>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
      <div className="flex-col items-center gap-5">

        <p><a href="https://workspace.google.com/intl/en-US/gmail/" target="_blank" className="hover:text-white transition">
          Gmail
        </a></p>

        <p><a href="https://facebook.com/" target="_blank" className="hover:text-white transition">
          Facebook
        </a></p>

        <p><a href="https://www.linkedin.com/" target="_blank" className="hover:text-white transition">
          LinkedIn
        </a></p>

        <p><a href="https://workspace.google.com/intl/en-US/gmail/" target="_blank" className="hover:text-white transition">
          Instagram
        </a></p>
        
        
        
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