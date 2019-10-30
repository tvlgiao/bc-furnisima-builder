import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FurnitureListLinkBannerLeftFormItem extends React.Component {
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

class FurnitureListLinkBannerLeftFormGeneral extends React.Component {
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

class FurnitureListLinkBannerLeft extends BaseSectionConfig {
    defaultTitle = "Furniture List Link Banner Left";
    scopeName = "FurnitureListLinkBannerLeft";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Lets create your prettiest patio.',
            img: "https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-b.jpg", 
            buttonText: "Shop Dining Room", 
            buttonLink: "#",
            alt: "",
            items: [
                {
                    title: 'Fire Pits', 
                    link: '#'
                },
                {
                    title: 'Conversation Sets', 
                    link: '#'
                },
                {
                    title: 'Adirondack Chairs', 
                    link: '#'
                },
                {
                    title: 'Patio Dining Sets', 
                    link: '#'
                },{
                    title: 'Outdoor Rugs', 
                    link: '#'
                },
                {
                    title: 'Planters', 
                    link: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FurnitureListLinkBannerLeft" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FurnitureListLinkBannerLeftFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <FurnitureListLinkBannerLeftFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="furniture-list-link-banner-left" data-template="furniture_list_link_banner_left" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FurnitureListLinkBannerLeft;
