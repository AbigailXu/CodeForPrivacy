import { GitHub } from 'react-feather'
import { RxDiscordLogo } from 'react-icons/rx'
import { RiSpotifyLine, RiTiktokLine } from 'react-icons/ri'

import Logo from '@/components/UI/Logo'

const SOCIALS = [
  {
    icon: <GitHub className="w-6" />,
    href: 'https://github.com/AbigailXu/CodeForPrivacy',
  },
]

export default function Footer() {
  return (
    <>
      <hr className="border-b-1 border-grey3" />
      <footer className="mx-container mb-12 mt-9 flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center sm:items-start">
          <Logo classes="mb-4" />
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="mailto:x389xu@uwaterloo.ca"
            className="font-medium"
          >
            Abigail Xu
          </a>
          <a
            href="mailto:c655zhan@uwaterloo.ca"
            className="font-medium"
          >
            Charles Zhang
          </a>
          <a
            href="mailto:"
            className="font-medium"
          >
            Peter Li
          </a>
          
          {SOCIALS.map((social, i) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              key={`social-${i}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}
