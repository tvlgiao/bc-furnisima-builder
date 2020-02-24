import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FooterLogoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image Footer Logo</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the image url" />
                </div>
            </form>
        );
    }
}

class FooterLogo extends BaseSectionConfig {
    defaultTitle = "Footer Logo";
    scopeName = "FooterLogo";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/footer-logo.png'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FooterLogo" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FooterLogoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading}/>,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="popup-newsletter-banner" data-template="popup_newsletter_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FooterLogo;
