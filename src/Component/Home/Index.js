import React from 'react';
import About from './About';
import Achievements from './Achievements';
import Banner from './Banner';
import Clients from './Clients';
import Counter from './Counter';
import Delivered from './Delivered';
import Products from './Products';
import Team from './Team';
import WhatClient from './WhatClient';
const Index = () => {
  return (
    <>
      <Banner />
      <About />
      <Counter />
      <Products />
      <Delivered />
      <Clients />
      <Achievements />
      <WhatClient />
      <Team />
    </>
  )
}

export default Index