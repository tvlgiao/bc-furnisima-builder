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
        const { img, title1, text1, title2, text2, iconurl, iconalt } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image Parallax</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="title1">Title 1</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter title 1" />
                </div>
                <div className="form-group">
                    <label htmlFor="text1">Text 1</label>
                    <input type="text" className="form-control" id="text1" name="text1" value={text1} onChange={this.handleChange} placeholder="Enter text 1" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconurl">Icon URL</label>
                    <input type="text" className="form-control" id="iconurl" name="iconurl" value={iconurl} onChange={this.handleChange} placeholder="Enter the icon URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconalt">Icon ALT</label>
                    <input type="text" className="form-control" id="iconalt" name="iconalt" value={iconalt} onChange={this.handleChange} placeholder="Enter the icon ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="title2">Title 2</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter title 2" />
                </div>
                <div className="form-group">
                    <label htmlFor="text2">Text 2</label>
                    <input type="text" className="form-control" id="text2" name="text2" value={text2} onChange={this.handleChange} placeholder="Enter text 2" />
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
            img: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/banner-parallax.jpg',
            title1: 'Redesigned around you',
            text1: 'The LCD-2C uses a suspension headband unlike previous Audezs. In theory this should help distribute the weight better, but on this particular unit, the suspension headband didn’t really do much suspending as it was almost flush with the headband.',
            iconurl: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/parallax-icon.png',
            iconalt: '',
            title2: 'throw them in your bag',
            text2: 'The frequency response measurements are an average of 10 different seated positions but I am posting the variance...'
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
