import React from 'react';
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import Term2 from "@/components/term2";
import PageBanner from "@/components/page-banner";

const TermsConditions = () =>  {
    return (
        
    <MenuContextProvider>
        <SearchContextProvider>
            <Layout PageTitle="Privacy-Policies">
            <HeaderOne />
            <PageBanner title="Privacy & Policies" name="Privacy & Policies" />
            <Term2/>
            <Footer />
            </Layout>
        </SearchContextProvider>
    </MenuContextProvider>
    )
};

export default TermsConditions;