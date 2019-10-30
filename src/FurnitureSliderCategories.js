import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FurnitureSliderCategoriesFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, link, title, desc } = this.props;
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
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the desc" />
                </div>
            </form>
        );
    }
}

class FurnitureSliderCategoriesFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="items_count">Number of catalogue items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of catalogue items" />
                </div>
            </form>
        );
    }
}

class FurnitureSliderCategories extends BaseSectionConfig {
    defaultTitle = "Furniture Slider Categories";
    scopeName = "FurnitureSliderCategories";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'We Carry Top Brands',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-1.png',
                    link: '#',
                    alt: '',
                    title: 'Marble Drink Table',
                    desc: 'Treated to an intriguingantique finish...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-2.png',
                    link: '#',
                    alt: '',
                    title: 'Mix Console Table',
                    desc: 'Treated to an intriguingantique finish...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-3.png',
                    link: '#',
                    alt: '',
                    title: 'Intarsia Natural Table',
                    desc: 'Treated to an intriguingantique finish...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-4.png',
                    link: '#',
                    alt: '',
                    title: 'Elke Table',
                    desc: 'Treated to an intriguingantique finish...',
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-5.png',
                    link: '#',
                    alt: '',
                    title: 'Marble Drink Table',
                    desc: 'Treated to an intriguingantique finish...',
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-6.png',
                    link: '#',
                    alt: '',
                    title: 'Mix Console Table',
                    desc: 'Treated to an intriguingantique finish...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-7.png',
                    link: '#',
                    alt: '',
                    title: 'Intarsia Natural Table',
                    desc: 'Treated to an intriguingantique finish...'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-item-8.png',
                    link: '#',
                    alt: '',
                    title: 'Elke Table',
                    desc: 'Treated to an intriguingantique finish...'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FurnitureSliderCategories" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FurnitureSliderCategoriesFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <FurnitureSliderCategoriesFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="furniture-slider-categories" data-template="furniture_slider_categories" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FurnitureSliderCategories;
