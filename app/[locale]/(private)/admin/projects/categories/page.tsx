"use client";

import ThemeSwitcher from "@/components/common/theme-switcher";
import { Header } from "@/components/layout/admin/header";
import { Main } from "@/components/layout/admin/main";
import { ProfileDropdown } from "@/components/layout/admin/profile-dropdown";

export default function Page() {
  return (
    <>
      <Header>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitcher />
          <ProfileDropdown />
        </div>
      </Header>
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Project Categories
          </h1>
        </div>
      </Main>
    </>
  );
}
