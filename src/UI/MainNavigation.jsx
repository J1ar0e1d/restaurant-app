import React from 'react'
import styled from 'styled-components'


const MainNavigation = () => {
  
  

  return (
    <Menu>
          <MainDishes>
            Main Dishes
            </MainDishes>
          <Desserts>Desserts</Desserts>
    </Menu>
  )
}

const Menu = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  
  `
  
  const Desserts = styled.button`
  display: flex;
  margin: 10px 25px;
  padding: 0;
  justify-content: center;
  width: 50%;
  font-size: 35px;
  font-weight: bold;
  border-radius: 20px;
  

  `
  const MainDishes = styled.button`
  display: flex;
  margin: 10px 25px;
  padding: 0;
  justify-content: center;
  width: 50%;
  font-size: 35px;
  font-weight: bold;
  border-radius: 20px;

`

export default MainNavigation