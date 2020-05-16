import React from 'react';
import { GeneralTemplate } from '../templates';
import { FilterableProductTable } from '../components/organisms';
import data from '../data.json'

const Home = () => {
    return (
        <GeneralTemplate>
            <FilterableProductTable products={data} />
        </GeneralTemplate>
    );
};

export default Home;
