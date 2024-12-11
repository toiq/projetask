import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <h1 className="px-2 py-1 text-xl font-semibold uppercase md:text-2xl">
              Proje<span className="text-emerald-700">task</span>
            </h1>
          </Link>
        </nav>
        <div className="md:pt- flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
