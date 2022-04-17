import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import TopCategory from './TopCategory/TopCategory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopCategory/>
            <Services/>
        </div>
    );
};

export default Home;