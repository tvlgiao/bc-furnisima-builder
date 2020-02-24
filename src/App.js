import React from 'react';
import './App.css';
import BrandsLogo from './BrandsLogo';
import SupportInfo from './SupportInfo';
import FurnitureFeauturedCategories from './FurnitureFeauturedCategories';
import FurnitureListLinkBannerRight from './FurnitureListLinkBannerRight';
import FurnitureListLinkBannerLeft from './FurnitureListLinkBannerLeft';
import FurnitureTwoBannerSale from './FurnitureTwoBannerSale';
import FurnitureLiveHelp from './FurnitureLiveHelp';
import FurnitureSliderCategories from './FurnitureSliderCategories';
import BeautyTopBanner from './BeautyTopBanner';
import BeautySimaSalon from './BeautySimaSalon';
import BeautyOurPortfolio from './BeautyOurPortfolio';
import BeautyAppointment from './BeautyAppointment';
import BeautyCatalogue from './BeautyCatalogue';
import BeautySliderProfile from './BeautySliderProfile';
import BeautyCreativeTeam from './BeautyCreativeTeam';
import HeadphonesTopBanner from './HeadphonesTopBanner';
import HeadphonesBannerParallax from './HeadphonesBannerParallax';
import HeadphonesTwoBannerSale from './HeadphonesTwoBannerSale';
import HeadphonesSliderProfile from './HeadphonesSliderProfile';
import FooterLogo from './FooterLogo';


function App() {
    const tabs = [
        <BrandsLogo title="Brands Logo" />,
        <SupportInfo title="Support Info" />,
        <FurnitureFeauturedCategories title="Furniture Feautured Categories" />,
        <FurnitureListLinkBannerRight title="Furniture List Link Banner Right" />,
        <FurnitureListLinkBannerLeft title="Furniture List Link Banner Left" />,
        <FurnitureTwoBannerSale title="Furniture Two Banner Sale" />,
        <FurnitureLiveHelp title="Furniture Live Help" />,
        <FurnitureSliderCategories title="Furniture Slider Categories" />,
        <BeautyTopBanner title="Beauty Top Banner" />,
        <BeautySimaSalon title="Beauty Sima Salon" />,
        <BeautyOurPortfolio title="Beauty Our Portfolio" />,
        <BeautyAppointment title="Beauty Appointment" />,
        <BeautyCatalogue title="Beauty Catalogue" />,
        <BeautySliderProfile title="Beauty Slider Profile" />,
        <BeautyCreativeTeam title="Beauty Creative Team" />,
        <HeadphonesTopBanner title="Headphones Top Banner" />,
        <HeadphonesBannerParallax title="Headphones Banner Parallax" />,
        <HeadphonesTwoBannerSale title="Headphones Two Banner Sale" />,
        <HeadphonesSliderProfile title="Headphones Slider Profile" />,
        <FooterLogo title="Footer Logo" />,
        
    ];
    return (
        <div className="App">
            <div className="container-fuild">
                <div className="row App-row">
                    <div className="col-md-auto App-col-sidebar">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {tabs.map((el, i) =>
                                <a key={i} className={`nav-link ${i === 0 ? 'active' : ''}`} id={`v-pills-${i}-tab`} data-toggle="pill" href={`#v-pills-${i}`} role="tab" aria-controls={`v-pills-${i}`} aria-selected={i === 0 ? 'true' : 'false'}>{el.props.title}</a>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="tab-content" id="v-pills-tabContent">
                            {tabs.map((el, i) =>
                                <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`v-pills-${i}`} role="tabpanel" aria-labelledby={`v-pills-${i}-tab`}>
                                    {el}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
