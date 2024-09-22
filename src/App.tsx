// src/App.tsx

import { Footer } from "./components/footer";
import { CardWithForm } from "./components/form-card";
import { Header } from "./components/header";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 sm:p-8 lg:p-12">
        <CardWithForm />
      </main>

      <Footer />
    </div>
  );
}
