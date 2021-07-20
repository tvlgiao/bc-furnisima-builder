import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class BeautyTopBannerFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img1, desc1, alt1, link1, img2, desc2, alt2, link2, img3, desc3, alt3, link3, img4, desc4, alt4, link4, img5, desc5, alt5, link5, img6, desc6, alt6, link6, img7, desc7, alt7, link7  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img1">Banner 1 image URL 285x285</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner 1 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc1">Banner 1 hover image URL 285x285</label>
                    <input type="text" className="form-control" id="desc1" name="desc1" value={desc1} onChange={this.handleChange} placeholder="Enter the banner 1 hover image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Banner 1 image alt</label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter the banner 1 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link1">Banner 1 link</label>
                    <input type="text" className="form-control" id="link1" name="link1" value={link1} onChange={this.handleChange} placeholder="Enter the banner 1 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="img2">Banner 2 image URL 285x285</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner 2 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc2">Banner 2 hover image URL 285x285</label>
                    <input type="text" className="form-control" id="desc2" name="desc2" value={desc2} onChange={this.handleChange} placeholder="Enter the banner 2 hover image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Banner 2 image alt</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter the banner 2 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link2">Banner 2 link</label>
                    <input type="text" className="form-control" id="link2" name="link2" value={link2} onChange={this.handleChange} placeholder="Enter the banner 2 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="img3">Banner 3 image URL 590x285</label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the banner 3 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc3">Banner 3 hover image URL 285x285</label>
                    <input type="text" className="form-control" id="desc3" name="desc3" value={desc3} onChange={this.handleChange} placeholder="Enter the banner 3 hover image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt3">Banner 3 image alt</label>
                    <input type="text" className="form-control" id="alt3" name="alt3" value={alt3} onChange={this.handleChange} placeholder="Enter the banner 3 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link3">Banner 3 link</label>
                    <input type="text" className="form-control" id="link3" name="link3" value={link3} onChange={this.handleChange} placeholder="Enter the banner 3 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="img4">Banner 4 image URL 590x590</label>
                    <input type="text" className="form-control" id="img4" name="img4" value={img4} onChange={this.handleChange} placeholder="Enter the banner 4 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc4">Banner 4 hover image URL 285x285</label>
                    <input type="text" className="form-control" id="desc4" name="desc4" value={desc4} onChange={this.handleChange} placeholder="Enter the banner 4 hover image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt4">Banner 4 image alt</label>
                    <input type="text" className="form-control" id="alt4" name="alt4" value={alt4} onChange={this.handleChange} placeholder="Enter the banner 4 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link4">Banner 4 link</label>
                    <input type="text" className="form-control" id="link4" name="link4" value={link4} onChange={this.handleChange} placeholder="Enter the banner 4 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="img5">Banner 5 image URL 590x285</label>
                    <input type="text" className="form-control" id="img5" name="img5" value={img5} onChange={this.handleChange} placeholder="Enter the banner 5 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc5">Banner 5 hover image URL 285x285</label>
                    <input type="text" className="form-control" id="desc5" name="desc5" value={desc5} onChange={this.handleChange} placeholder="Enter the banner 5 hover image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt5">Banner 5 image alt</label>
                    <input type="text" className="form-control" id="alt5" name="alt5" value={alt5} onChange={this.handleChange} placeholder="Enter the banner 5 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link5">Banner 5 link</label>
                    <input type="text" className="form-control" id="link5" name="link5" value={link5} onChange={this.handleChange} placeholder="Enter the banner 5 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="img6">Banner 6 image URL 285x285</label>
                    <input type="text" className="form-control" id="img6" name="img6" value={img6} onChange={this.handleChange} placeholder="Enter the banner 6 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc6">Banner 6 hover image URL 285x285</label>
                    <input type="text" className="form-control" id="desc6" name="desc6" value={desc6} onChange={this.handleChange} placeholder="Enter the banner 6 hover image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt6">Banner 6 image alt</label>
                    <input type="text" className="form-control" id="alt6" name="alt6" value={alt6} onChange={this.handleChange} placeholder="Enter the banner 6 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link6">Banner 6 link</label>
                    <input type="text" className="form-control" id="link6" name="link6" value={link6} onChange={this.handleChange} placeholder="Enter the banner 6 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="img7">Banner 7 image URL 285x285</label>
                    <input type="text" className="form-control" id="img7" name="img7" value={img7} onChange={this.handleChange} placeholder="Enter the banner 7 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc7">Banner 7 hover image URL 285x285</label>
                    <input type="text" className="form-control" id="desc7" name="desc7" value={desc7} onChange={this.handleChange} placeholder="Enter the banner 7 hover image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt7">Banner 7 image alt</label>
                    <input type="text" className="form-control" id="alt7" name="alt7" value={alt7} onChange={this.handleChange} placeholder="Enter the banner 7 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link7">Banner 7 link</label>
                    <input type="text" className="form-control" id="link7" name="link7" value={link7} onChange={this.handleChange} placeholder="Enter the banner 7 link" />
                </div>
            </form>
        );
    }
}

class BeautyTopBanner extends BaseSectionConfig {
    defaultTitle = "Beauty Top Banner";
    scopeName = "BeautyTopBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-1.png',
            desc1: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            alt1:'',
            link1:'#',
            img2: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-2.png',
            desc2: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            alt2:'',
            link2:'#',
            img3: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-3.png',
            desc3: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            alt3:'',
            link3:'#',
            img4: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-4a.png',
            desc4: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            alt4:'',
            link4:'#',
            img5: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-5a.png',
            desc5: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            alt5:'',
            link5:'#',
            img6: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-6.png',
            desc6: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            alt6:'',
            link6:'#',
            img7: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/beauty-7a.png',
            desc7: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
            alt7:'',
            link7:'#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="BeautyTopBanner" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <BeautyTopBannerFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading}/>,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="beauty-top-banner" data-template="beauty_top_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default BeautyTopBanner;
