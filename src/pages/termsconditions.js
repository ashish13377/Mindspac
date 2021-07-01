import React from 'react';
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import Term from "@/components/term";
import PageBanner from "@/components/page-banner";

const TermsConditions = () =>  {
    return (
        
    <MenuContextProvider>
        <SearchContextProvider>
            <Layout PageTitle="Terms-Conditions">
            <HeaderOne />
            <PageBanner title="Terms & Conditions" name="Terms & Conditions" />
            <Term/>
            <Footer />
            </Layout>
        </SearchContextProvider>
    </MenuContextProvider>
    )
};

export default TermsConditions;