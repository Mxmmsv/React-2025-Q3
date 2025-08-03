import { Link, NavLink } from 'react-router';

import Button from '@/components/button';
import SearchBar from '@/features/header/search-bar';
import ThemeToggleButton from '@/features/theme/theme-toggle-button';

function About() {
  return (
    <>
      <div className="flex flex-row items-center justify-between gap-5">
        <div>
          <img
            src="/Rick_and_Morty.svg"
            alt="Rick and Morty logo"
            loading="lazy"
            decoding="async"
            className="h-16 w-full [filter:drop-shadow(0_0_0_var(--color-muted-hero))] transition duration-300 hover:[filter:drop-shadow(0_0_1rem_var(--color-muted-hero))]"
          />
        </div>
        <SearchBar />
        <ThemeToggleButton />
        <NavLink to="/">
          <Button>Home</Button>
        </NavLink>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 rounded-md">
        <Link
          to={'https://rs.school/courses/reactjs'}
          target="_blank"
          className="bg-background cursor-pointer rounded-xl p-2 shadow-md transition hover:scale-[1.02]"
        >
          <div className="flex flex-col-reverse items-center">
            <div className="flex flex-row items-center gap-5">
              <span className="text-foreground">RS School / React Course</span>
              <img src="/rs-logo.svg" alt="rs-logo" width={32} height={32} />
            </div>
            <img
              src="/rss-welcome.webp"
              alt="RSS welcome sticker"
              loading="lazy"
              decoding="async"
              className="rounded-md [filter:drop-shadow(0_0_0_var(--color-chart-3))] transition duration-500 hover:[filter:drop-shadow(0_0_1rem_var(--color-chart-3))]"
            />
          </div>
        </Link>
        <Link
          to={'https://github.com/Mxmmsv'}
          target="_blank"
          className="bg-background cursor-pointer rounded-xl p-2 shadow-md transition hover:scale-[1.02]"
        >
          <div className="text-foreground flex flex-col items-center">
            <p>Maxim Moiseev</p>
            <img
              src="/Moomin.webp"
              alt="RSS welcome sticker"
              loading="lazy"
              decoding="async"
              width={300}
              height={300}
            />
            Github
          </div>
        </Link>
      </div>
    </>
  );
}

export default About;
