import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

interface NavbarProps {
  isPro: boolean;
}

const Navbar: React.FC<NavbarProps> = async ({ isPro = false }) => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4 justify-between">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
