import { Link, NavLink } from 'react-router';

function About() {
  return (
    <>
      <NavLink to="/" className="text-accent text-2xl">
        Home
      </NavLink>
      <div className="bg-muted-foreground/50 flex flex-row items-center justify-center rounded-md">
        <div className="flex flex-col-reverse items-center">
          <div className="flex flex-row items-center gap-5">
            <span>RS School JS / Front-end RU Course</span>
            <Link to={'https://rs.school/courses/javascript-ru'} target="_blank">
              <img src="/rs-logo.svg" alt="rs-logo" width={32} height={32} />
            </Link>
          </div>
          <Link to={'https://rs.school/courses/javascript-ru'} target="_blank">
            <img
              src="/rss-welcome.webp"
              alt="RSS welcome sticker"
              loading="lazy"
              decoding="async"
              className="rounded-md [filter:drop-shadow(0_0_0_var(--color-chart-3))] transition duration-500 hover:[filter:drop-shadow(0_0_1rem_var(--color-chart-3))]"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <p>Maxim Moiseev</p>
          <img
            src="/Moomin.webp"
            alt="RSS welcome sticker"
            loading="lazy"
            decoding="async"
            width={300}
            height={300}
          />
          <Link to={'https://github.com/Mxmmsv'} target="_blank">
            Github
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
