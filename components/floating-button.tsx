import Link from "next/link";

interface FloatingButtonProps {
  children: React.ReactNode;
  href: string;
}
export default function FloatingButton({
  children,
  href,
}: FloatingButtonProps) {
  return (
    <div>
      <Link
        href={href}
        className="fixed hover:bg-orange-500  transition-colors cursor-pointer bottom-24 right-5 shadow-xl bg-orange-400 rounded-full p-3 text-white"
      >
        {children}
      </Link>
    </div>
  );
}
