import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Menu, Church } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-r from-ocean-blue to-sunset-orange rounded-lg flex items-center justify-center">
              <Church className="text-white text-xl" size={24} />
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl lg:text-2xl text-gray-900">Taj India Tours</h1>
              <p className="text-xs text-warm-gray hidden lg:block">Discover India's Heritage</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-ocean-blue"
                    : "text-gray-700 hover:text-ocean-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-ocean-blue to-sunset-orange text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-ocean-blue to-sunset-orange rounded-lg flex items-center justify-center">
                    <Church className="text-white" size={20} />
                  </div>
                  <div>
                    <h2 className="font-playfair font-bold text-lg text-gray-900">Taj India Tours</h2>
                    <p className="text-xs text-warm-gray">Discover India's Heritage</p>
                  </div>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-ocean-blue"
                          : "text-gray-700 hover:text-ocean-blue"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-ocean-blue to-sunset-orange text-white">
                    Book Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
