import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Phone } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom'; // Add this import

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#pricing",
    label: "Offer",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#guide",
    label: "Guide",
  },
  {
    href: "#compare",
    label: "Comparison",
  },

  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "/case-studies",
    label: "Case Studies",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate(); // Add this line

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          {/* Left side: Mobile menu, mode toggle, and phone number */}
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="lg:hidden px-2">
                <Menu className="h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>
              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Juta Teknologi
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => handleNavigation(href)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
           
                </nav>
              </SheetContent>
            </Sheet>
            <ModeToggle />
            <a href="https://wa.link/5gmtr9" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center ml-4 text-sm transition-colors hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              +60 11-2167 7672
            </a>
          </div>

          {/* Center: Logo */}
          <NavigationMenuItem className="absolute left-1/2 transform -translate-x-1/2">
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex items-center"
            >
              <img src={logo} alt="Logo" className="w-12 h-12" />
            </a>
          </NavigationMenuItem>

          {/* Right side: Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {routeList.map(({ href, label }: RouteProps) => (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(href);
                }}
                className="text-sm transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
            <button
              onClick={scrollToPricing}
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              Start Free Trial
            </button>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};