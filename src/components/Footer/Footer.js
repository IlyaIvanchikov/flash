import React from 'react'
import './Footer.css'

const reqSvgs = require.context(
  '../../resources/img/social-icons',
  true,
  /\.svg$/
)
const paths = reqSvgs.keys()

const imgSocial = paths.map((path) => reqSvgs(path))

const socialLinks = [
  ['instagram', 'https://www.instagram.com/pifagoriya_tomsk/'],
  ['vkontakte', 'https://vk.com/pifagoriya'],
  ['youtube', 'https://www.youtube.com/channel/UCg8ss4xW9jASrqWGP30jXiw'],
]

const Footer = () => {
  return (
    <footer className="page-footer container">
      <div className="social-links">
        {socialLinks.map((link) => {
          return (
            <a
              className="social-link"
              href={link[1]}
              key={link[0]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt={
                  'Пифагория в ' +
                  link[0].replace(/\b\w/g, (l) => l.toUpperCase())
                }
                src={
                  imgSocial.filter((l) => {
                    if (l.indexOf(link[0]) > 0) {
                      return l
                    } else {
                      return null
                    }
                  })[0]
                }
              />
            </a>
          )
        })}
      </div>
      <div className="copyrights">&copy; Пифагория, 2020</div>
    </footer>
  )
}

export default Footer
