import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full relative" style={{ 
      backgroundColor: `rgb(var(--background))`,
      color: `rgb(var(--text))`
    }}>
      {/* Gradient border line */}
      <div className="w-full h-1 gradient-background" />
      
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Main content row - Using gap to space elements */}
          <div className="flex flex-row justify-center items-center gap-12">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a 
                href="https://www.facebook.com/Systemvetardagen/" 
                className="transition-colors duration-300"
                style={{ 
                  color: `rgb(var(--text))`,
                  ':hover': { color: `rgb(var(--primary))` }
                }}
                aria-label="Facebook"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.206 11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/systemvetardagen/" 
                className="transition-colors duration-300"
                style={{ 
                  color: `rgb(var(--text))`,
                  ':hover': { color: `rgb(var(--secondary))` }
                }}
                aria-label="Instagram"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/systemvetardagen/?originalSubdomain=se" 
                className="transition-colors duration-300"
                style={{ 
                  color: `rgb(var(--text))`,
                  ':hover': { color: `rgb(var(--accent))` }
                }}
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Address */}
            <div className="text-center">
              <p className="font-medium font-poppins" style={{ color: `rgb(var(--text))` }}>
                Studentkåren DISK
              </p>
              <p className="font-worksans" style={{ color: `rgb(var(--text))` }}>
                Borgarfjordsgatan 6C 164 40 Kista
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;