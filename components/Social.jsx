import Link from 'next/link'

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socilas = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/Ricardo10111',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/ricardo-alberto-lopez-roman-493136104/',
  },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socilas.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target='_blank' // abre en una nueva pestaña
            rel='noopener noreferrer' // seguridad adicional
          >
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
