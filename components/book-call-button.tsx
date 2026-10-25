import Link from "next/link";
import { Icon } from "@/components/icon";

export function BookCallButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/book-a-call"
      onClick={onClick}
      className={`button-gold ${className}`}
    >
      Book a Free Call <Icon name="arrowUpRight" className="size-4" />
    </Link>
  );
}
