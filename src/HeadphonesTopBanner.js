import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';


class HeadphonesTopBannerFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img1, alt1, link1, info1url, info1alt, img2, alt2, link2, img3, alt3, link3, img4, alt4, link4, img5, alt5, link5, img6, alt6, link6, info6url, info6alt, img7, alt7, link7, img8, alt8, link8, info8url, info8alt  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img1">Banner 1 image URL 370x288</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner 1 image URL" />
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
                    <label htmlFor="info1url">Banner 1 info image URL</label>
                    <input type="text" className="form-control" id="info1url" name="info1url" value={info1url} onChange={this.handleChange} placeholder="Enter the banner 1 info URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="info1alt">Banner 1 info image ALT</label>
                    <input type="text" className="form-control" id="info1alt" name="info1alt" value={info1alt} onChange={this.handleChange} placeholder="Enter the banner 1 info ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="img2">Banner 2 image URL 370x288</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner 2 image URL" />
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
                    <label htmlFor="img3">Banner 3 image URL 370x288</label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the banner 3 image URL" />
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
                    <label htmlFor="img4">Banner 4 image URL 370x288</label>
                    <input type="text" className="form-control" id="img4" name="img4" value={img4} onChange={this.handleChange} placeholder="Enter the banner 4 image URL" />
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
                    <label htmlFor="img5">Banner 5 image URL 370x498</label>
                    <input type="text" className="form-control" id="img5" name="img5" value={img5} onChange={this.handleChange} placeholder="Enter the banner 5 image URL" />
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
                    <label htmlFor="img6">Banner 6 image URL 770x498</label>
                    <input type="text" className="form-control" id="img6" name="img6" value={img6} onChange={this.handleChange} placeholder="Enter the banner 6 image URL" />
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
                    <label htmlFor="info6url">Banner 6 info image URL</label>
                    <input type="text" className="form-control" id="info6url" name="info6url" value={info6url} onChange={this.handleChange} placeholder="Enter the banner 6 info URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="info6alt">Banner 6 info image ALT</label>
                    <input type="text" className="form-control" id="info6alt" name="info6alt" value={info6alt} onChange={this.handleChange} placeholder="Enter the banner 6 info ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="img7">Banner 7 image URL 370x288</label>
                    <input type="text" className="form-control" id="img7" name="img7" value={img7} onChange={this.handleChange} placeholder="Enter the banner 7 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt7">Banner 7 image alt</label>
                    <input type="text" className="form-control" id="alt7" name="alt7" value={alt7} onChange={this.handleChange} placeholder="Enter the banner 7 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link7">Banner 7 link</label>
                    <input type="text" className="form-control" id="link7" name="link7" value={link7} onChange={this.handleChange} placeholder="Enter the banner 7 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="img8">Banner 8 image URL 370x288</label>
                    <input type="text" className="form-control" id="img8" name="img8" value={img8} onChange={this.handleChange} placeholder="Enter the banner 8 image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt8">Banner 8 image alt</label>
                    <input type="text" className="form-control" id="alt8" name="alt8" value={alt8} onChange={this.handleChange} placeholder="Enter the banner 8 image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="link8">Banner 8 link</label>
                    <input type="text" className="form-control" id="link8" name="link8" value={link8} onChange={this.handleChange} placeholder="Enter the banner 8 link" />
                </div>
                <div className="form-group">
                    <label htmlFor="info8url">Banner 8 info image URL</label>
                    <input type="text" className="form-control" id="info8url" name="info8url" value={info8url} onChange={this.handleChange} placeholder="Enter the banner 8 info URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="info8alt">Banner 8 info image ALT</label>
                    <input type="text" className="form-control" id="info8alt" name="info8alt" value={info8alt} onChange={this.handleChange} placeholder="Enter the banner 8 info ALT" />
                </div>
            </form>
        );
    }
}

class HeadphonesTopBanner extends BaseSectionConfig {
    defaultTitle = "Beauty Top Banner";
    scopeName = "HeadphonesTopBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/banner-1-custom.png',
            alt1:'',
            link1:'#',
            info1url: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/banner-1-info.png',
            info1alt: '',
            img2: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-2.png',
            alt2:'',
            link2:'#',
            img3: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-3.png',
            alt3:'',
            link3:'#',
            img4: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-4.png',
            alt4:'',
            link4:'#',
            img5: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-5.png',
            alt5:'',
            link5:'#',
            img6: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/banner-6-custom.png',
            alt6:'',
            link6:'#',
            info6url: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/banner-6-info.png',
            info6alt: '',
            img7: 'https://cdn11.bigcommerce.com/s-2zaei19psd/product_images/uploaded_images/banner-7.png',
            alt7:'',
            link7:'#',
            img8: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/banner-8-custom.png',
            alt8:'',
            link8:'#',
            info8url: 'https://cdn11.bigcommerce.com/s-1j4fquqwze/product_images/uploaded_images/banner-8-info.png',
            info8alt: '',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="HeadphonesTopBanner" title={this.title} 
                panels={[
                    {
                        title: "General",
                        element: <HeadphonesTopBannerFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading}/>,

                    },
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="headphones-top-banner" data-template="headphones_top_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default HeadphonesTopBanner;
