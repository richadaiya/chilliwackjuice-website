import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Header variant="solid" />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display italic text-4xl text-brand-forest sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-md text-lg text-brand-moss">
          This page is brewing. Keep prompting to fill it in with the content
          you'd like to see here.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-brand-forest px-8 py-3 text-lg text-white transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
