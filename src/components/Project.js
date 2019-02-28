import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Project extends Component {
    constructor () {
        super();

        this.state = {
        };

    }
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
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <p>{obj.description}</p>
                    {obj.links.map(link => 
                        <p>
                            <a href={link.href} target="__blank" className={link.iconClass}>{link.description}</a>
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