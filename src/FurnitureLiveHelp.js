import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class FurnitureLiveHelpFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { buttonText, buttonLink, title} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonText">Button text</label>
                    <input type="text" className="form-control" id="buttonText" name="buttonText" value={buttonText} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
                <div className="form-group">
                    <label htmlFor="buttonLink">Button link</label>
                    <input type="text" className="form-control" id="buttonLink" name="buttonLink" value={buttonLink} onChange={this.handleChange} placeholder="Enter the button text" />
                </div>
            </form>
        );
    }
}

class FurnitureLiveHelp extends BaseSectionConfig {
    defaultTitle = "Furniture Live Help";
    scopeName = "FurnitureLiveHelp";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            title: 'Need help? We`re available at 1800 000 6890  -  Email us atsupport@halothemes.com',
            buttonText: 'Live help',
            buttonLink: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FurnitureLiveHelp" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <FurnitureLiveHelpFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading}/>,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="furniture-live-help" data-template="furniture_live_help" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FurnitureLiveHelp;
