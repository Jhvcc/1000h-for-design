import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center mt-16">
      <div className="grid">
        <div>
          <Link href="/1" className="px-6 py-4 rounded-md bg-rose-100 hover:bg-rose-200">Day 1</Link>
        </div>
      </div>
    </main>
  );
}
