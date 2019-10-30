import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BeautyAppointmentFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subheading, img, alt, buttonText, } = this.props;
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
                    <label htmlFor="img">Image Banner URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the catalogue image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonText">Button text</label>
                    <input type="text" className="form-control" id="buttonText" name="buttonText" value={buttonText} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
            </form>
        );
    }
}

class BeautyAppointment extends BaseSectionConfig {
    defaultTitle = "Beauty Appointment";
    scopeName = "BeautyAppointment";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'APPOINTMENT',
            subheading: 'CLIENT`S QUICK',
            img: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/appointment-banner.jpg',
            alt: '',
            buttonText: 'Make appoitment', 
            buttonLink: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BeautyAppointment" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BeautyAppointmentFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="beauty-appointment" data-template="beauty_appointment" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BeautyAppointment;
