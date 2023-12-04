import { useState } from 'react';
import banner from '../../../assets/shop/order-banner2.jpg'
import Cover from '../../Menu/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return(
        <div>
            <Cover img={banner} title={"Order Food"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Title 1</Tab>
    <Tab>Title 2</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
        </div>
    );
};

export default Order;