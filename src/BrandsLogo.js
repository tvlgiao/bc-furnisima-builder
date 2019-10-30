import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BrandsLogoFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, link } = this.props;
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
            </form>
        );
    }
}

class BrandsLogoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, heading} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of catalogue items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of catalogue items" />
                </div>
            </form>
        );
    }
}

class BrandsLogo extends BaseSectionConfig {
    defaultTitle = "Brands Logo";
    scopeName = "BrandsLogo";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'We Carry Top Brands',
            items: [
                { 
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand01.png',
                    link: '#',
                    alt: ''
                },
                { 
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand02.png',
                    link: '#',
                    alt: ''
                },
                { 
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand03.png',
                    link: '#',
                    alt: ''
                },
                { 
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand04.png',
                    link: '#',
                    alt: ''
                },
                { 
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand05.png',
                    link: '#',
                    alt: ''
                },
                { 
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand03.png',
                    link: '#',
                    alt: ''
                },
                { 
                    img: 'https://tvlgiao.github.io/bigcommerce-themes/laparis/demo/images/brand02.png',
                    link: '#',
                    alt: ''
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BrandsLogo" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BrandsLogoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <BrandsLogoFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="brands-logo" data-template="brands_logo" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BrandsLogo;
