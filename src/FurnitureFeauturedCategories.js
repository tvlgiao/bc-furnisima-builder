import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FurnitureFeauturedCategoriesFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, title, link } = this.props;
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

class FurnitureFeauturedCategoriesFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subheading} = this.props;
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
            </form>
        );
    }
}

class FurnitureFeauturedCategories extends BaseSectionConfig {
    defaultTitle = "Furniture Feautured Categories";
    scopeName = "FurnitureFeauturedCategories";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Featured Categories',
            subheading: 'Easy living room updates with free shipping over $49',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/featured-banner-1.png', 
                    title: 'Tables', 
                    link: '#',
                    alt:''
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/featured-banner-2.png', 
                    title: 'Sofas', 
                    link: '#',
                    alt:''
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/featured-banner-3.png', 
                    title: 'Chairs', 
                    link: '#',
                    alt:''
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/featured-banner-4.png', 
                    title: 'Rugs', 
                    link: '#',
                    alt:''
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FurnitureFeauturedCategories" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FurnitureFeauturedCategoriesFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <FurnitureFeauturedCategoriesFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="furniture-feautured-categories" data-template="furniture_feautured_categories" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FurnitureFeauturedCategories;
