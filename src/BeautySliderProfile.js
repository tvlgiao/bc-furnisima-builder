import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BeautySliderProfileFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { imgAvatar, name, job, desc, imgSign } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="imgAvatar">Image Avatar URL</label>
                    <input type="text" className="form-control" id="imgAvatar" name="imgAvatar" value={imgAvatar} onChange={this.handleChange} placeholder="Enter the image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter the name" />
                </div>
                <div className="form-group">
                    <label htmlFor="job">Job</label>
                    <input type="text" className="form-control" id="job" name="job" value={job} onChange={this.handleChange} placeholder="Enter the job" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the desc" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgSign">Image Sign URL</label>
                    <input type="text" className="form-control" id="imgSign" name="imgSign" value={imgSign} onChange={this.handleChange} placeholder="Enter the image Sign" />
                </div>
            </form>
        );
    }
}

class BeautySliderProfileFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count } = this.props;
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

class BeautySliderProfile extends BaseSectionConfig {
    defaultTitle = "Beauty Slider Profile";
    scopeName = "BeautySliderProfile";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    imgAvatar: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/avatar.png', 
                    name: 'Jesse d. caballero', 
                    job: 'makeup client', 
                    desc: 'No matter how much makeup you wear or what hair color trends you adapt, the search for new beauty trends never ends. A little help is always welcome when it comes to beauty.', 
                    imgSign: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/signature.png',
                },
                { 
                    imgAvatar: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/avatar.png', 
                    name: 'Jesse d. caballero', 
                    job: 'makeup client', 
                    desc: 'No matter how much makeup you wear or what hair color trends you adapt, the search for new beauty trends never ends. A little help is always welcome when it comes to beauty.', 
                    imgSign: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/signature.png',
                },
                { 
                    imgAvatar: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/avatar.png', 
                    name: 'Jesse d. caballero', 
                    job: 'makeup client', 
                    desc: 'No matter how much makeup you wear or what hair color trends you adapt, the search for new beauty trends never ends. A little help is always welcome when it comes to beauty.', 
                    imgSign: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/signature.png',
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BeautySliderProfile" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BeautySliderProfileFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <BeautySliderProfileFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="beauty-slider-profile" data-template="beauty_slider_profile" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BeautySliderProfile;
