import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactGA from 'react-ga';

class Project extends Component {
    constructor () {
        super();

        this.state = {
        };

    }

    registerEvent = (label) => ReactGA.event({
        category: 'Projects',
        action: 'link',
        label: label
    });

    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="4u 8u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit Project"
                        href={obj.src}
                        target="__blank"
                        onClick={this.registerEvent.bind(this, obj.src)}
                    >
                        <img alt={obj.caption}  src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                    {obj.links.map(link => 
                        <p>
                            <a onClick={this.registerEvent.bind(this, link.href)} href={link.href} target="__blank" className={link.iconClass}>{link.description}</a>
                        </p>
                    )}
                </article>
            );
        });

        return (
            <div className="row">
                {gallery}
            </div>
        );
    }
    render () {
        return (
            <div>
                {this.renderGallery()}
            </div>
        );
    }
}

Project.displayName = 'Gallery';
Project.propTypes = {
    images: PropTypes.array
};

export default Project;