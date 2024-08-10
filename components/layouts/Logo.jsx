import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src="/logo.svg" width={54} height={54} priority alt="" /> */}
      <div className="h-[54px] w-[54px] bg-logo dark:bg-logo_dark bg-contain bg-no-repeat"></div>
    </Link>
  );
};

export default Logo;
