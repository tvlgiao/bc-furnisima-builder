import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class HeadphonesTwoBannerSaleFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, link, infourl, infoalt } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the catalogue image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the link URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="infourl">Info image URL</label>
                    <input type="text" className="form-control" id="infourl" name="infourl" value={infourl} onChange={this.handleChange} placeholder="Enter the info image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="infoalt">Info image ALT</label>
                    <input type="text" className="form-control" id="infoalt" name="infoalt" value={infoalt} onChange={this.handleChange} placeholder="Enter the info image ALT" />
                </div>
            </form>
        );
    }
}

class HeadphonesTwoBannerSaleFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
            </form>
        );
    }
}

class HeadphonesTwoBannerSale extends BaseSectionConfig {
    defaultTitle = "Headphones Two Banner Sale";
    scopeName = "HeadphonesTwoBannerSale";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'MORE DEPARTMENTS',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/more-1-custom.png',
                    link: '#',
                    alt: '',
                    infourl:'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/more-1-info.png',
                    infoalt: ''
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/more-2-custom.png',
                    link: '#',
                    alt: '',
                    infourl:'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/more-2-info.png',
                    infoalt: ''
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="HeadphonesTwoBannerSale" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <HeadphonesTwoBannerSaleFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <HeadphonesTwoBannerSaleFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="headphones-two-banner-sale" data-template="headphones_two_banner_sale" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default HeadphonesTwoBannerSale;
