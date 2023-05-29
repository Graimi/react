export const socialLogos = [
  {
    link: 'https://www.instagram.com/',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png',
    alt: 'instagram',
  },
  {
    link: 'https://es.linkedin.com/',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png',
    alt: 'linkedin',
  },
];

const Footer = () => {
  return (
    <footer>
      <ul>
        {socialLogos.map((logo, idx) => {
          return (
            <li key={idx}>
              <a href={logo.link}>
                <img src={logo.src} alt={logo.alt} />
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        Created with 💝 by @aRiveraMerida <span role="img">🚀</span>
      </p>
    </footer>
  );
};

export default Footer;
