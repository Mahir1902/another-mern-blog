import React from 'react'
import Featured from '../components/Featured'
import CategoryList from '../components/CategoryList'
import CardList from '../components/CardList'
import Menu from '../components/Menu'

export default function Home() {
  return (
    <div>
      <Featured/>
      <CategoryList/>
      <div>
        <CardList/>
        <Menu/>
      </div>
      
    </div>
  )
}
