import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { LanguagesIcon } from "lucide-react";
import { useTransition } from "react";

export const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa" },
];

const LocaleSwitcher = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="size-9 p-0"
          aria-label={`Change Language`}
        >
          <LanguagesIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-3">
        {supportedLanguages.map((locale) => (
          <Item key={locale.code} locale={locale.code} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type ItemProps = {
  locale: string;
};

const Item = (props: ItemProps) => {
  const { locale } = props;
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <DropdownMenuItem
      key={locale}
      disabled={isPending}
      onClick={switchLanguage}
    >
      {supportedLanguages.find((l) => l.code === locale)?.label}
    </DropdownMenuItem>
  );
};

export default LocaleSwitcher;
