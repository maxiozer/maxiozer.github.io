import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactGA from 'react-ga';

class Experience extends Component {
    
    registerEvent = (label) => ReactGA.event({
        category: 'Experience',
        action: 'link',
        label: label
    });

    renderGallery () {
        const { images } = this.props;

        if (!images) return;

        const gallery = images.map((obj, i) => {
            return (
                <article className="4u 24u$(xsmall) work-item" key={i}>
                    <a
                        className="image fit"
                        href={obj.src}
                        target="__blank"
                        onClick={this.registerEvent.bind(this, obj.src)}
                    >
                        <img alt={obj.caption} src={obj.thumbnail} />
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

Experience.displayName = 'Gallery';
Experience.propTypes = {
    images: PropTypes.array
};

export default Experience;