import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BeautyCatalogueFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subheading, buttonText, buttonLink, desc, img1, img2, img3, img4, alt1, alt2, alt3, alt4, link1, link2, link3, link4, title1, title2, title3, title4, job1, job2, job3, job4 } = this.props;
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
                    <label htmlFor="img1">Img URL 1 </label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the Img URL 1" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Img ALT 1 </label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter the Img ALT 1" />
                </div>
                <div className="form-group">
                    <label htmlFor="link1">Link 1</label>
                    <input type="text" className="form-control" id="link1" name="link1" value={link1} onChange={this.handleChange} placeholder="Enter the link1" />
                </div>
                <div className="form-group">
                    <label htmlFor="title1">Title1</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter the title1" />
                </div>
                <div className="form-group">
                    <label htmlFor="job1">Job 1</label>
                    <input type="text" className="form-control" id="job1" name="job1" value={job1} onChange={this.handleChange} placeholder="Enter the job1" />
                </div>
                <div className="form-group">
                    <label htmlFor="img2">Img URL 2 </label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the Img URL 2" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Img ALT 2 </label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter the Img ALT 2" />
                </div>
                <div className="form-group">
                    <label htmlFor="link2">Link2</label>
                    <input type="text" className="form-control" id="link2" name="link2" value={link2} onChange={this.handleChange} placeholder="Enter the link2" />
                </div>
                <div className="form-group">
                    <label htmlFor="title2">Title2</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter the title2" />
                </div>
                <div className="form-group">
                    <label htmlFor="job2">Job 2</label>
                    <input type="text" className="form-control" id="job2" name="job2" value={job2} onChange={this.handleChange} placeholder="Enter the job2" />
                </div>
                <div className="form-group">
                    <label htmlFor="img3">Img URL 3 </label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the Img URL 3" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt3">Img ALT 3 </label>
                    <input type="text" className="form-control" id="alt3" name="alt3" value={alt3} onChange={this.handleChange} placeholder="Enter the Img ALT 3" />
                </div>
                <div className="form-group">
                    <label htmlFor="link3">Link3</label>
                    <input type="text" className="form-control" id="link3" name="link3" value={link3} onChange={this.handleChange} placeholder="Enter the link3" />
                </div>
                <div className="form-group">
                    <label htmlFor="title3">Title3</label>
                    <input type="text" className="form-control" id="title3" name="title3" value={title3} onChange={this.handleChange} placeholder="Enter the title3" />
                </div>
                <div className="form-group">
                    <label htmlFor="job3">Job 3</label>
                    <input type="text" className="form-control" id="job3" name="job3" value={job3} onChange={this.handleChange} placeholder="Enter the job3" />
                </div>
                <div className="form-group">
                    <label htmlFor="img4">Img URL 4 </label>
                    <input type="text" className="form-control" id="img4" name="img4" value={img4} onChange={this.handleChange} placeholder="Enter the Img URL 4" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt4">Img ALT 4 </label>
                    <input type="text" className="form-control" id="alt4" name="alt4" value={alt4} onChange={this.handleChange} placeholder="Enter the Img ALT 4" />
                </div>
                <div className="form-group">
                    <label htmlFor="link4">Link4</label>
                    <input type="text" className="form-control" id="link4" name="link4" value={link4} onChange={this.handleChange} placeholder="Enter the link4" />
                </div>
                <div className="form-group">
                    <label htmlFor="title4">Title4</label>
                    <input type="text" className="form-control" id="title4" name="title4" value={title4} onChange={this.handleChange} placeholder="Enter the title4" />
                </div>
                <div className="form-group">
                    <label htmlFor="job4">Job 4</label>
                    <input type="text" className="form-control" id="job4" name="job4" value={job4} onChange={this.handleChange} placeholder="Enter the job4" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonText">Button Text</label>
                    <input type="text" className="form-control" id="buttonText" name="buttonText" value={buttonText} onChange={this.handleChange} placeholder="Enter the button Text" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonLink">Button Link</label>
                    <input type="Link" className="form-control" id="buttonLink" name="buttonLink" value={buttonLink} onChange={this.handleChange} placeholder="Enter the button Link" />
                </div>
            </form>
        );
    }
}

class BeautyCatalogue extends BaseSectionConfig {
    defaultTitle = "Beauty Catalogue";
    scopeName = "BeautyCatalogue";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'SEE THE 2019 CATALOGUE',
            subheading: 'STYLISH FOR WOMEN',
            desc: 'One of the tools I used to get me back together was this oil. I would put it on my pulse points and it just centered me and made...',
            img1: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/catalogue-1.png', 
            alt1: '',
            link1: '#', 
            title1: 'The Top Misconceptions About Makeup Artists', 
            job1: 'makeup', 
            img2: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/catalogue-2.png', 
            alt2: '',
            link2: '#', 
            title2: 'Tattoo & Piercing',
            job2: 'MODIFICATIONS',  
            img3: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/catalogue-3.png', 
            alt3: '',
            link3: '#', 
            title3: 'Hair Trends For Women', 
            job3: 'hair', 
            img4: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/catalogue-4.png', 
            alt4: '', 
            link4: '#', 
            title4: 'Heart Print Nail Art', 
            job4: 'Manicure & Pedicure Services',
            buttonText: 'see whole collection', 
            buttonLink: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BeautyCatalogue" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BeautyCatalogueFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="beauty-catalogue" data-template="beauty_catalogue" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BeautyCatalogue;
