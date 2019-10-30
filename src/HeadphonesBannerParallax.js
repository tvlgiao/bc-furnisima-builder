import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class HeadphonesBannerParallaxFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image Parallax</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the image url" />
                </div>
            </form>
        );
    }
}

class HeadphonesBannerParallax extends BaseSectionConfig {
    defaultTitle = "Headphones Banner Parallax";
    scopeName = "HeadphonesBannerParallax";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-headphone.jpg'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="HeadphonesBannerParallax" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <HeadphonesBannerParallaxFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="headphones-banner-parallax" data-template="headphones_banner_parallax" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default HeadphonesBannerParallax;
