import Link from "next/link";
import { Icon } from "@/components/icon";

export function BookCallButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Link
      href="/book-a-call"
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-[#101832] shadow-lg shadow-black/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lime/40 ${className}`}
    >
      Book a Free Call <Icon name="arrowUpRight" className="size-4" />
    </Link>
  );
}
