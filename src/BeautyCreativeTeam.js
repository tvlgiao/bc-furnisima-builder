import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BeautyCreativeTeamFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subheading, img1, img2, img3, alt1, alt2, alt3, link1, link2, link3, name1, name2, name3, job1, job2, job3, desc1, desc2, desc3 } = this.props;
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
                    <label htmlFor="name1">name1</label>
                    <input type="text" className="form-control" id="name1" name="name1" value={name1} onChange={this.handleChange} placeholder="Enter the name1" />
                </div>
                <div className="form-group">
                    <label htmlFor="job1">Job 1</label>
                    <input type="text" className="form-control" id="job1" name="job1" value={job1} onChange={this.handleChange} placeholder="Enter the job1" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc1">Description 1</label>
                    <input type="text" className="form-control" id="desc1" name="desc1" value={desc1} onChange={this.handleChange} placeholder="Enter the desc1" />
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
                    <label htmlFor="name2">Name 2</label>
                    <input type="text" className="form-control" id="name2" name="name2" value={name2} onChange={this.handleChange} placeholder="Enter the name2" />
                </div>
                <div className="form-group">
                    <label htmlFor="job2">Job 2</label>
                    <input type="text" className="form-control" id="job2" name="job2" value={job2} onChange={this.handleChange} placeholder="Enter the job2" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc2">Description 2</label>
                    <input type="text" className="form-control" id="desc2" name="desc2" value={desc2} onChange={this.handleChange} placeholder="Enter the desc2" />
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
                    <label htmlFor="link3">Link 3</label>
                    <input type="text" className="form-control" id="link3" name="link3" value={link3} onChange={this.handleChange} placeholder="Enter the link3" />
                </div>
                <div className="form-group">
                    <label htmlFor="name3">Name 3</label>
                    <input type="text" className="form-control" id="name3" name="name3" value={name3} onChange={this.handleChange} placeholder="Enter the name3" />
                </div>
                <div className="form-group">
                    <label htmlFor="job3">Job 3</label>
                    <input type="text" className="form-control" id="job3" name="job3" value={job3} onChange={this.handleChange} placeholder="Enter the job3" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc3">Description 3</label>
                    <input type="text" className="form-control" id="desc3" name="desc3" value={desc3} onChange={this.handleChange} placeholder="Enter the desc3" />
                </div>
            </form>
        );
    }
}

class BeautyCreativeTeam extends BaseSectionConfig {
    defaultTitle = "Beauty Creative Team";
    scopeName = "BeautyCreativeTeam";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'CREATIVE TEAM',
            subheading: 'MEET OUR',
            img1: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/team-1.jpg', 
            alt1: '',
            link1: '#', 
            name1: 'Ruth Crilly', 
            job1: 'tattoo',
            desc1: 'Now that it`s officially December, I decided to share all the best beauty gifts...', 
            img2: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/team-2.jpg', 
            alt2: '',
            link2: '#', 
            name2: 'Simply Sona',
            job2: 'makeup', 
            desc2: 'Chances are you`ve read somewhere or heard from someone that you should be using...', 
            img3: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/team-3.jpg', 
            alt3: '',
            link3: '#', 
            name3: 'Caroline Hirons', 
            job3: 'barber',
            desc3: 'Leopard has been having a major moment and it doesn’t seem to be going anywhere...',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BeautyCreativeTeam" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BeautyCreativeTeamFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="beauty-creative-team" data-template="beauty_creative_team" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BeautyCreativeTeam;
