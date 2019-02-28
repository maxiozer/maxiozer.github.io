import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class LinkGallery extends Component {
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
                <article className="3u 8u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit experience"
                        href={obj.src}
                        target="__blank"
                    >
                        <img src={obj.thumbnail} />
                    </a>

                    <h3>{obj.caption}</h3>
                    <h6>{obj.dates}</h6>
                    <p>{obj.description}</p>
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

LinkGallery.displayName = 'Gallery';
LinkGallery.propTypes = {
    images: PropTypes.array
};

export default LinkGallery;