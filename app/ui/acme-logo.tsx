import { lusitana } from '@/app/ui/fonts';
import {GlobeAsiaAustraliaIcon} from "@heroicons/react/24/solid";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAsiaAustraliaIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
