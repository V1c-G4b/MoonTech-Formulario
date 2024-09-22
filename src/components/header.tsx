// src/components/Header.tsx
import { RabbitIcon } from "lucide-react";
import { ThemeToogle } from "./mode-toggle";
import { Separator } from "./ui/separator";

export function Header() {
  return (
    <header className=" shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-6">
          <RabbitIcon className="h-8 w-8 text-blue-500" />

          <div className="hidden md:flex items-center gap-2">
            <Separator orientation="vertical" className="h-6 bg-gray-300" />
            <span className="font-mono font-bold text-lg text-gray-200">
              MoonTech
            </span>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <ThemeToogle />
          </div>
        </div>
      </div>
    </header>
  );
}
