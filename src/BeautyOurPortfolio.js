import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BeautyOurPortfolioFormItem extends React.Component {
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
                    <label htmlFor="link">Image link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the image link" />
                </div>
            </form>
        );
    }
}

class BeautyOurPortfolioFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subheading, desc, img, alt, items_count} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subheading">Sub Heading</label>
                    <input type="text" className="form-control" id="subheading" name="subheading" value={subheading} onChange={this.handleChange} placeholder="Enter the sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the description" />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Image Background URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the catalogue image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of catalogue items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of catalogue items" />
                </div>
            </form>
        );
    }
}

class BeautyOurPortfolio extends BaseSectionConfig {
    defaultTitle = "Beauty Our Portfolio";
    scopeName = "BeautyOurPortfolio";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'OUR PORTFOLIO',
            subheading: 'CHECK OUT',
            desc: 'One of the tools I used to get me back together was this oil. I would put it on my pulse points and it just centered me and made...',
            img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/portfolio-bg.jpg',
            alt: '',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/portfolio-banner.jpg',
                    alt: '',
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/portfolio-banner.jpg',
                    alt: '',
                    link: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/portfolio-banner.jpg',
                    alt: '',
                    link: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BeautyOurPortfolio" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BeautyOurPortfolioFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <BeautyOurPortfolioFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="beauty-our-portfolio" data-template="beauty_our_portfolio" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BeautyOurPortfolio;
