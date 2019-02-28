import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Project from '../components/Project'
import Experience from '../components/Experience'


import logoAndreani from '../assets/images/thumbs/Logo-Andreani.jpg'
import logoVirtuacom from '../assets/images/thumbs/Virtuacom.png'
import logoVida from '../assets/images/thumbs/vi-da.png'
import logoDDM from '../assets/images/thumbs/ddm.png'
import logoBajalibros from "../assets/images/thumbs/bajalibros.jpg";
import logoMobile from "../assets/images/thumbs/andreani-mobile.png";
import logoTiendas from "../assets/images/thumbs/tiendas andreani.jpg";


const EXPERIENCE = [
    { 
        thumbnail: logoAndreani, 
        caption: 'Andreani Logistica', 
        dates: "Mar 2014 - Present",
        src: "http://www.andreani.com",
        description: "Started as Full-Stack developer, later as Technical leader and now Data Engineer. I was in charge of most strategical products to diferent business divisions."
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
        description: "A software solution who follows the activity of 3600 distributors. I led the entire process of development and release with 5 people in my charge. Also, this software was used for different government administrations to manage their election processes.",
        links: [
            {iconClass: "icon far fa-youtube", href: "https://www.youtube.com/watch?v=VYFCNWKxyCQ", description: " Youtube demo"},
            {iconClass: "icon fas fa-link", href: "https://www.andreani.com/noticia/140/implementamos-el-sistema-de-distribucion-mobile", description: " Press"},
            
        ]
    },
    { 
        thumbnail: logoTiendas, 
        caption: 'Tiendas Andreani', 
        src: "http://www.tiendasandreani.com",
        description: "Multi-tenant eCommerce platform. It has been the first step of the company in the e-commerce business.",
        links:[]
    },
    { 
        thumbnail: logoBajalibros, 
        caption: 'Bajalibros.com', 
        src: "https://www.bajalibros.com/",
        description: "BajaLibros is the most important e-book seller in Argentina. I participated in the release and maintenance of the Full-Stack solution.",
        links:[
            {iconClass: "icon fas fa-link", href: "https://www.bajalibros.com/", description: " www.bajalibros.com"},
        ]
    },
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox(index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

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

                    <section id="one">
                        <header className="major">
                            <h2>Maximiliano David Ozernickz</h2>
                        </header>
                        <p>I dedicate myself to building high traffic applications, with the main focus being to improve the performance and user experience by using the best development and UI practices.
My biggest motivation is to help people improve their personal drive for achievement, so they can later on apply it on their professional skills and attitude growth.
My years of work taught me how and when to properly evaluate and decide which would be the best technology to use, how to commit professionally with clients, and to manage different contingencies efficiently.</p>
                    </section>

                    <section id="two">
                        <h2>Experience</h2>

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
                        <h2>Get In Touch</h2>
                        <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex