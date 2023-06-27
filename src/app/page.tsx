import { cookies } from 'next/dist/client/components/headers';
import { ThemeButton } from './ThemeButton';

export default function Home() {
  const theme = cookies().get('theme')?.value || 'light';

  return (
    <main className="h-screen w-screen dark:bg-black bg-white grid place-items-center">
      <ThemeButton theme={theme} />
      <p className="text-white dark:block hidden">DARK MODE</p>

      <p className="text-black dark:hidden">LIGHT MODE</p>
    </main>
  );
}
