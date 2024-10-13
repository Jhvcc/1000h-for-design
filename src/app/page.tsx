import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center mt-16">
      <div className="grid gap-4">
          <Link href="/1" className="block px-6 py-4 rounded-md bg-rose-100 font-medium transition duration-300 ease-in-out hover:bg-rose-200 hover:scale-110">Day 1</Link>

          <Link href="/2" className="block px-6 py-4 rounded-md bg-rose-100 font-medium transition duration-300 ease-in-out hover:bg-rose-200 hover:scale-110">Day 2</Link>
      </div>
    </main>
  );
}
