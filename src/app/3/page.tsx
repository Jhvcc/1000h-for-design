import { Metadata } from "next";
import Day3Icon from "@/public/day3.png";

export const metadata: Metadata = {
  title: "1000 Hours Day 3(pending)",
  description: "1000 Hours Design Exercise refer: https://x.com/louisdainguyen/status/1844860801460404289",
};

export default function Home () {
  return (
    <div role="main">
      <div role="sidebar" className="w-1/6 border h-lvh flex min-w-60">
        <nav className="w-1/5 flex flex-col justify-start border-r">
          <div className="py-4">
            <img src={Day3Icon.src} alt="My Day3 Icon" width={64} height={64} />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <nav className="cursor-pointer px-1 pt-1 rounded-lg hover:bg-slate-200">
              <span className="w-6 h-6 icon-[tdesign--home]" role="img" aria-hidden="true" />
            </nav>
            <nav className="cursor-pointer px-1 pt-1 rounded-lg hover:bg-slate-200">
              <span className="w-6 h-6 icon-[gridicons--stats-up]" role="img" aria-hidden="true" />
            </nav>
            <nav className="cursor-pointer px-1 pt-1 rounded-lg hover:bg-slate-200">
              <span className="w-6 h-6 icon-[tdesign--member]" role="img" aria-hidden="true" />
            </nav>
            <nav className="cursor-pointer px-1 pt-1 rounded-lg hover:bg-slate-200">
              <span className="w-6 h-6 icon-[ph--folder]" role="img" aria-hidden="true" />
            </nav>
            <nav className="cursor-pointer px-1 pt-1 rounded-lg hover:bg-slate-200">
              <span className="w-6 h-6 icon-[bi--hdd-stack]" role="img" aria-hidden="true" />
            </nav>
            <nav className="cursor-pointer px-1 pt-1 rounded-lg hover:bg-slate-200">
              <span className="w-6 h-6 icon-[material-symbols--calendar-month-outline]" role="img" aria-hidden="true" />
            </nav>
            <nav className="cursor-pointer px-1 pt-1 rounded-lg hover:bg-slate-200">
              <span className="w-6 h-6 icon-[solar--turntable-line-duotone]" role="img" aria-hidden="true" />
            </nav>
            <nav className="cursor-pointer p-1 rounded-lg hover:bg-slate-200">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"/></svg>
            </nav>
          </div>
        </nav>
        <div className="w-4/5">
          <div className="relative p-2">

            <span className="absolute inset-y-0 w-7 left-0 pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"/></svg>
            </span>

            <input placeholder="Search" className="pl-6 border rounded-md w-44" />

            <span className="absolute inset-y-0 right-0 pr-3 border flex justify-center items-center w-9 text-sm bg-slate-200">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"> */}
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9a2 2 0 1 1 2-2v10a2 2 0 1 1-2-2h10a2 2 0 1 1-2 2V7a2 2 0 1 1 2 2z"/>
              {/* </svg> */}
              {/* <span>F</span> */}
            </span>
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
      <section>
        <header>

        </header>
        <main>

        </main>
      </section>
    </div>
  )
}