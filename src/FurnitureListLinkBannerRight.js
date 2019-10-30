import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FurnitureListLinkBannerRightFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { title, link  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter the link URL" />
                </div>
            </form>
        );
    }
}

class FurnitureListLinkBannerRightFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, heading, img, alt, buttonText, buttonLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonText">Button text</label>
                    <input type="text" className="form-control" id="buttonText" name="buttonText" value={buttonText} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonLink">Button link</label>
                    <input type="text" className="form-control" id="buttonLink" name="buttonLink" value={buttonLink} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of catalogue items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of catalogue items" />
                </div>
            </form>
        );
    }
}

class FurnitureListLinkBannerRight extends BaseSectionConfig {
    defaultTitle = "Furniture List Link Banner Right";
    scopeName = "FurnitureListLinkBannerRight";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Help yourself to a stylish dining room.',
            img: "https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-aa.jpg", 
            buttonText: "Shop Dining Room", 
            buttonLink: "#",
            alt: "",
            items: [
                {
                    title: 'Dining Table Sets', 
                    link: '#'
                },
                {
                    title: 'Bar Stools', 
                    link: '#'
                },
                {
                    title: 'Buffets & Sideboards', 
                    link: '#'
                },
                {
                    title: 'Dinnerware', 
                    link: '#'
                },{
                    title: 'Serving Carts', 
                    link: '#'
                },
                {
                    title: 'Dining Chairs', 
                    link: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FurnitureListLinkBannerRight" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FurnitureListLinkBannerRightFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <FurnitureListLinkBannerRightFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="furniture-list-link-banner-right" data-template="furniture_list_link_banner_right" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FurnitureListLinkBannerRight;
