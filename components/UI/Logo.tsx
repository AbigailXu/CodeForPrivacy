import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logos/code-for-privacy.png";

type LogoProps = {
  classes?: string;
};

export default function Logo({ classes }: LogoProps) {
  return (
    <Link href="/" className={`block ${classes}`}>
      <Image src={logo} alt="logo" className="w-10 lg:w-12" />
    </Link>
  );
}
