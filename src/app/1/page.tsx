import Link from "next/link";
import "./page.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1000 Hours Day 1(incomplete)",
  description: "1000 Hours Design Exercise refer: https://x.com/jh3yy/status/1843831102513000768",
};

export default function Day1() {
  return (
    <main className="m-16 relative">
      <Link href="/" className="fixed top-8 -left-4 bg-blue-300 pl-12 pr-6 py-2 rounded-r-2xl hover:bg-blue-400 transition ease-in-out delay-50 hover:translate-x-5 hover:scale-110 duration-200 font-medium">Back</Link>

      <div className="flex justify-center">
        <div className="max-w-fit px-4 py-6 flex justify-center items-center gap-6 h-10 rounded-full shadow-lg border-2 border-slate-200">

          <span className="tooltip-target w-8 h-8 icon-[material-symbols--person-2-outline]" role="img" aria-hidden="true" />
          
          <span className="tooltip-target w-7 h-7 icon-[icon-park-outline--handbag]" role="img" aria-hidden="true" />
          
          <span className="tooltip-target w-7 h-7 icon-[ion--business-sharp]" role="img" aria-hidden="true" />

          <span className="tooltip-target w-7 h-7 icon-[bi--chat]" role="img" aria-hidden="true" />

          <span className="tooltip-target w-7 h-7 icon-[ls--pc]" role="img" aria-hidden="true" />

          <span className="tooltip-target w-7 h-7 icon-[simple-icons--x]" role="img" aria-hidden="true" />
        </div>
      </div>
    </main>
  )
}