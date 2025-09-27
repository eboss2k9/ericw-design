import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-2.svg";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Portfolio" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/#media", label: "Media" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-border" style={{ backgroundColor: '#222222' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="font-bold text-xl text-white">
                EWCS
              </div>
              <img src={logo} alt="EWCS Logo" className="h-8 w-8" />
            </div>
            <div className="text-white/70 text-sm tracking-wider">
              Eric Warner's Creative Studio
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-white border-b-2 border-primary pb-1"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" className="ml-4" asChild>
              <a href="mailto:e.warner86@gmail.com?subject=Let's Chat!">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="outline" className="w-fit" asChild>
                <a href="mailto:e.warner86@gmail.com?subject=Let's Chat!">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;