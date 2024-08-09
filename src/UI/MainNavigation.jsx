import React from 'react'
import styled from 'styled-components'

const MainNavigation = () => {
  return (
    <Menu>
          <MainDishes>Main Dishes</MainDishes>
          <Desserts>Desserts</Desserts>
    </Menu>
  )
}

const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  border: 2px solid red;
  `
  
  const Desserts = styled.p`
  display: flex;
  margin: 10 25px;
  padding: 0;
  justify-content: center;
  width: 50%;
  font-size: 25px;
  
  `
  const MainDishes = styled.p`
  display: flex;
  margin: 0 25spx;
  padding: 0;
  justify-content: center;
  width: 50%;
  font-size: 25px;

`

export default MainNavigation