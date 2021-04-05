import React from 'react'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Layout from '../components/layout'
import Project from '../components/Project'
import Experience from '../components/Experience'

import logoAndreani from '../assets/images/thumbs/Logo-Andreani.jpg'
import logoVirtuacom from '../assets/images/thumbs/Virtuacom.png'
import logoVida from '../assets/images/thumbs/vi-da.png'
import logoDDM from '../assets/images/thumbs/ddm.png'
import logoBajalibros from '../assets/images/thumbs/bajalibros.jpg'
import logoElections from '../assets/images/thumbs/elections.jpg'
import logoMobile from '../assets/images/thumbs/andreani-mobile.png'
import logoTh from '../assets/images/thumbs/threat-hunting.png'
import logoTiendas from '../assets/images/thumbs/tiendas andreani.jpg'
import logoOrt from '../assets/images/thumbs/logo-ort.jpg'
import logoItc from '../assets/images/thumbs/itc.jpg'
import logoCP from '../assets/images/thumbs/checkpoint.jpg'
import { hotjar } from 'react-hotjar'

ReactGA.initialize('UA-135456994-1')
ReactGA.pageview('/')

const EXPERIENCE = [
  {
    thumbnail: logoCP,
    caption: 'Check Point Technologies',
    dates: 'Mar 2020 - Present',
    src: 'https://www.checkpoint.com/',
    description:
      'I was in charge of the back-end development, maintenance, and data analysis of a Threat-Hunting platform. The most strategic project of the division.',
  },
  {
    thumbnail: logoAndreani,
    caption: 'Andreani Logistics',
    dates: 'Mar 2014 - Oct 2019',
    src: 'http://www.andreani.com',
    description:
      'I started as Full-Stack developer, then Technical leader and after that, Data Engineer. I was in charge of most strategical products for different business divisions.',
  },
  {
    thumbnail: logoVirtuacom,
    caption: 'Virtuacom',
    src: 'http://www.virtuacom.net/',
    dates: 'Apr 2013 - Oct 2013',
    description:
      'I was in charge of the maintenance of a Multi-tenant application to different e-commerce business using the best OOP practices and methodologies.',
  },
  {
    thumbnail: logoVida,
    caption: 'Grupo Vida (Infobae)',
    dates: 'Oct 2011 - Mar 2013',
    src: 'http://www.grupovi-da.com/',
    description:
      'I was in charge of the maintenance of an eBooks e-commerce platform. Now it is the most important e-book seller in Argentina.',
  },
  {
    thumbnail: logoDDM,
    caption: 'DDM',
    dates: 'Jun 2010 - Oct 2011',
    src: 'http://ddm.com.ar/en/',
    description: 'I was in charge of the maintenance of the company´s CMS.',
  },
]

const Projects = [
  {
    thumbnail: logoTh,
    caption: 'Threat Hunting',
    src:
      'https://sc1.checkpoint.com/documents/Infinity_Portal/WebAdminGuides/EN/SandBlast-Agent-Admin-Guide/Topics-SBA-AG/Threat_Hunting.htm',
    description:
      'An investigative tool to identify and drill down into suspicious incidents in the organization`s endpoints and take remediation actions.',
    links: [
      {
        iconClass: 'icon far fa-youtube',
        href: 'https://www.youtube.com/watch?v=69sSSamkmh4',
        description: ' Youtube demo 1',
      },
      {
        iconClass: 'icon far fa-youtube',
        href: 'https://www.youtube.com/watch?v=9USgwDFhwLE',
        description: ' Youtube demo 2',
      },
    ],
  },
  {
    thumbnail: logoMobile,
    caption: 'Andreani Mobile',
    src:
      'https://www.andreani.com/noticia/140/implementamos-el-sistema-de-distribucion-mobile',
    description:
      'A software solution to follow the activity of 3600 distributors on the street. I led the entire process of development and release with 5 people in my charge.',
    links: [
      {
        iconClass: 'icon far fa-youtube',
        href: 'https://www.youtube.com/watch?v=VYFCNWKxyCQ',
        description: ' Youtube demo',
      },
      {
        iconClass: 'icon fas fa-link',
        href:
          'https://www.enretail.com/2017/08/25/andreani-mobile-una-revolucion-en-la-logistica',
        description: ' Press',
      },
    ],
  },
  {
    thumbnail: logoElections,
    caption: 'General Elections Solution',
    src: null,
    description:
      'Based on Andreani Mobile, this software consolidates the polling stations results across the province, validates them using AI and shows real-time results. It has been used by different Argentinian provinces such as Chaco, Cordoba and San Luis.',
    links: [],
  },
  {
    thumbnail: logoBajalibros,
    caption: 'Bajalibros.com',
    src: 'https://www.bajalibros.com/',
    description:
      'BajaLibros is the most important e-book seller in Argentina. I participated in the release and maintenance of the Full-Stack solution.',
    links: [
      {
        iconClass: 'icon fas fa-link',
        href: 'https://www.bajalibros.com/',
        description: ' www.bajalibros.com',
      },
    ],
  },
  {
    thumbnail: logoTiendas,
    caption: 'Tiendas Andreani',
    src: null,
    description:
      'Multi-tenant eCommerce platform. It has been the first step of the company in the e-commerce business.',
    links: [],
  },
]

const Education = [
  {
    thumbnail: logoItc,
    caption: 'Israel Tech Challenge - Data Science & Machine Learning',
    dates: '2018 - 2019 (Tel Aviv, Israel)',
    src: 'http://www.itc.tech',
    description:
      'A 5-month full-time program focused on Data Science for B.Sc./M.Sc. graduates with experience in coding.',
  },
  {
    thumbnail: logoOrt,
    caption: 'ORT Argentina - Software Analyst',
    dates: '2012 - 2015',
    src: 'http://www.ort.edu.ar/informacion-terciario',
    description: '',
  },
]

class HomeIndex extends React.Component {
  componentDidMount() {
    hotjar.initialize(1435377)
  }

  constructor(props) {
    super(props)
    let params = decodeURLParams(props.location.search)
    ReactGA.event({
      category: 'General',
      action: 'ref',
      label: params.ref || '',
    })
  }

  registerEventCV = () =>
    ReactGA.event({
      category: 'General',
      action: 'Buttons',
      label: 'Get CV',
    })

  render() {
    const siteTitle = 'Maximiliano Ozernickz'
    const siteDescription =
      'Data Engineer, Senior Full-Stack Web Developer & Technical Leader.'

    return (
      <Layout>
        <Helmet>
          <title> {siteTitle} </title>{' '}
          <meta name="description" content={siteDescription} />{' '}
        </Helmet>{' '}
        <div id="main">
          <section id="two">
            <h2> Professional Experience </h2>{' '}
            <Experience
              images={EXPERIENCE.map(
                ({ src, thumbnail, caption, description, dates }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  dates,
                })
              )}
            />{' '}
          </section>
          <section id="three">
            <h2> Projects </h2>{' '}
            <Project
              images={Projects.map(
                ({ src, thumbnail, caption, description, links }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  links,
                })
              )}
            />{' '}
          </section>
          <section id="four">
            <h2> Education </h2>{' '}
            <Experience
              images={Education.map(
                ({ src, thumbnail, caption, description, dates }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  dates,
                })
              )}
            />{' '}
          </section>{' '}
        </div>{' '}
      </Layout>
    )
  }
}

const decodeURLParams = search => {
  const hashes = search.slice(search.indexOf('?') + 1).split('&')
  return hashes.reduce((params, hash) => {
    const split = hash.indexOf('=')

    if (split < 0) {
      return Object.assign(params, {
        [hash]: null,
      })
    }

    const key = hash.slice(0, split)
    const val = hash.slice(split + 1)

    return Object.assign(params, {
      [key]: decodeURIComponent(val),
    })
  }, {})
}

export default HomeIndex
