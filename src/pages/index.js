import React from 'react'
import Helmet from 'react-helmet'
import cv from "../assets/pdf/Maximiliano-David-Ozernickz-CV.pdf"
import ReactGA from 'react-ga';

import Layout from '../components/layout'
import Project from '../components/Project'
import Experience from '../components/Experience'


import logoAndreani from '../assets/images/thumbs/Logo-Andreani.jpg'
import logoVirtuacom from '../assets/images/thumbs/Virtuacom.png'
import logoVida from '../assets/images/thumbs/vi-da.png'
import logoDDM from '../assets/images/thumbs/ddm.png'
import logoBajalibros from "../assets/images/thumbs/bajalibros.jpg";
import logoMobile from "../assets/images/thumbs/andreani-mobile.png";
import logoTiendas from "../assets/images/thumbs/tiendas andreani.jpg";
import logoOrt from "../assets/images/thumbs/logo-ort.jpg";



const EXPERIENCE = [
    {
        thumbnail: logoAndreani,
        caption: 'Andreani Logistics',
        dates: "Mar 2014 - Present",
        src: "http://www.andreani.com",
        description: "I started as Full-Stack developer, then Technical leader and now Data Engineer. I was in charge of most strategical products to different business divisions."
    },
    {
        thumbnail: logoVirtuacom,
        caption: 'Virtuacom',
        src: "http://www.virtuacom.net/",
        dates: "Apr 2013 - Oct 2013",
        description: 'I was in charge of the maintenance of a Multi-tenant application to different e-commerce business. Using the best OOP practices and methodologies.'
    },
    {
        thumbnail: logoVida,
        caption: 'Grupo Vida (Infobae)',
        dates: "Oct 2011 - Mar 2013",
        src: "http://www.grupovi-da.com/",
        description: 'I was in charge of the maintenance of an eBooks e-commerce platform. Now it is the most important e-book seller in Argentina.'
    },
    {
        thumbnail: logoDDM,
        caption: 'DDM',
        dates: "Jun 2010 - Oct 2011",
        src: "http://ddm.com.ar/en/",
        description: 'I was in charge of the maintenance of the company´s CMS.'
    }
];


const Projects = [
    {
        thumbnail: logoMobile,
        caption: 'Andreani Mobile',
        src: "https://www.andreani.com/noticia/140/implementamos-el-sistema-de-distribucion-mobile",
        description: "A software solution who follows the activity of 3600 distributors. I led the entire process of development and release with 5 people in my charge. Also, this software was used for different provinces administrations to manage their election processes.",
        links: [
            { iconClass: "icon far fa-youtube", href: "https://www.youtube.com/watch?v=VYFCNWKxyCQ", description: " Youtube demo" },
            { iconClass: "icon fas fa-link", href: "https://www.enretail.com/2017/08/25/andreani-mobile-una-revolucion-en-la-logistica", description: " Press" },

        ]
    },
    {
        thumbnail: logoTiendas,
        caption: 'Tiendas Andreani',
        src: null,
        description: "Multi-tenant eCommerce platform. It has been the first step of the company in the e-commerce business.",
        links: []
    },
    {
        thumbnail: logoBajalibros,
        caption: 'Bajalibros.com',
        src: "https://www.bajalibros.com/",
        description: "BajaLibros is the most important e-book seller in Argentina. I participated in the release and maintenance of the Full-Stack solution.",
        links: [
            { iconClass: "icon fas fa-link", href: "https://www.bajalibros.com/", description: " www.bajalibros.com" },
        ]
    },
];

const Education = [
    {
        thumbnail: logoOrt,
        caption: 'ORT Insititute - Software Analyst',
        dates: "2012 - 2015",
        src: "http://www.ort.edu.ar/informacion-terciario",
        description: ""
    },
    {
        thumbnail: logoOrt,
        caption: 'ORT High School - Technical diploma - Information Technology and digital media',
        dates: "2005 - 2009",
        src: "http://www.ort.edu.ar",
        description: ""
    },
];

class HomeIndex extends React.Component {

    constructor() {
        super();
        ReactGA.initialize('UA-135456994-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        var urlParams = new URLSearchParams(window.location.search);
        ReactGA.event({
            category: 'General',
            action: 'ref',
            label: urlParams.get('ref') || ""
        });
    }

    registerEventCV = () => ReactGA.event({
            category: 'General',
            action: 'Buttons',
            label: "Get CV"
        });
    

    render() {
        const siteTitle = "Maximiliano David Ozernickz"
        const siteDescription = "Senior Full-Stack web developer and Technical Leader"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>
                <div id="main">
                    <section id="two">
                        <h2>Professional Experience</h2>

                        <Experience images={EXPERIENCE.map(({ src, thumbnail, caption, description, dates }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            dates
                        }))} />
                    </section>

                    <section id="three">
                        <h2>Projects</h2>

                        <Project images={Projects.map(({ src, thumbnail, caption, description, links }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            links
                        }))} />
                    </section>


                    <section id="four">
                        <h2>Education</h2>
                        <Experience images={Education.map(({ src, thumbnail, caption, description, dates }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            dates
                        }))} />
                        <a href={cv} onClick={this.registerEventCV} target="__blank" className="button">Get CV</a>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex