import { Button } from "./ui/button";
import { MailIcon, MapIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 py-6 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MoonTech. Todos os direitos
          reservados.
        </p>
        <div className="mt-4 sm:mt-0">
          <Button
            variant="link"
            className="mr-4 text-gray-300 hover:text-white"
          >
            <MailIcon className="mr-1 text-zinc-500" />
            emailEmpres@mail.com
          </Button>
          <Button variant="link" className="text-gray-300 hover:text-white">
            <MapIcon className="mr-1 text-zinc-500" />
            Rua Otilia do Espirito Santos Rezende, Centro, Itabaiana - SE,
            49015-110
          </Button>
        </div>
      </div>
    </footer>
  );
}
