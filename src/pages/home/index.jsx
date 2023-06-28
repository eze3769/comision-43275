import React from 'react'
import NavBar from '../../components/nav-bar';
// import TabsComponent from '../../components/tabs';
import ContadorPage from '../contador';

const HomePage = () => {
  return (
    <div>
        <NavBar />
        {/* <TabsComponent /> */}
        <ContadorPage />

    </div>
  )
}

export default HomePage;