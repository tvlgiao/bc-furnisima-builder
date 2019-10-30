import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BeautySimaSalonFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, number, desc } = this.props;
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
                    <label htmlFor="number">Number</label>
                    <input type="text" className="form-control" id="number" name="number" value={number} onChange={this.handleChange} placeholder="Enter the number" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Desc</label>
                    <input type="text" className="form-control" id="desc" name="desc" value={desc} onChange={this.handleChange} placeholder="Enter the desc" />
                </div>
            </form>
        );
    }
}

class BeautySimaSalonFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, headingspan1, headingspan2, desc1, desc2, img, alt} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="headingspan1">Headingspan1</label>
                    <input type="text" className="form-control" id="headingspan1" name="headingspan1" value={headingspan1} onChange={this.handleChange} placeholder="Enter the headingspan1 text" />
                </div>
                <div className="form-group">
                    <label htmlFor="headingspan2">Headingspan2</label>
                    <input type="text" className="form-control" id="headingspan2" name="headingspan2" value={headingspan2} onChange={this.handleChange} placeholder="Enter the headingspan2 text" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc1">Description Left</label>
                    <input type="text" className="form-control" id="desc1" name="desc1" value={desc1} onChange={this.handleChange} placeholder="Enter the description" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc2">Description Right</label>
                    <input type="text" className="form-control" id="desc2" name="desc2" value={desc2} onChange={this.handleChange} placeholder="Enter the description" />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the catalogue image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt" />
                </div>
            </form>
        );
    }
}

class BeautySimaSalon extends BaseSectionConfig {
    defaultTitle = "Beauty Sima Salon";
    scopeName = "BeautySimaSalon";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'BEAUTY SALON',
            headingspan1: 'S',
            headingspan2: 'IMA',
            desc1: 'We feel that people are going to get tired of the Instagram aesthetic that is so ubiquitous and makeup artists like these will be far more inspiring to follow.',
            desc2: 'From the workouts you’ll be doing, to the new designers and destinations you’ll see on your feed, this is your guide to being in the know next year.',
            img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-banner.png',
            alt: '',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/salon-1.png',
                    alt: '',
                    number: '1',
                    desc: 'Guido Palau on Fashion Week’s Biggest Hair Trends and How to Recreate'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/salon-2.png',
                    alt: '',
                    number: '2',
                    desc: 'The Best New Red Lipsticks to Wear This Valentine’s Day'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/salon-3.png',
                    alt: '',
                    number: '3',
                    desc: 'Model Grace Elizabeth Shares Her Fave Beauty Looks And Estée'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BeautySimaSalon" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BeautySimaSalonFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Catalogue item ${index + 1}`,
                        element: <BeautySimaSalonFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="beauty-sima-salon" data-template="beauty_sima_salon" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BeautySimaSalon;
