import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Updates from './Pages/Updates/Updates'
import Analysis from './Pages/Analysis/Analysis'
import CountrySearch from './Pages/CountrySearch/CountrySearch'
import Definition from './Pages/Definition/Definition'
import Authority from './Pages/Authority/Authority'
import Regulation from './Pages/Regulation/Regulation'
import DataProtectionOfficers from './Pages/DataProtectionOfficers/DataProtectionOfficers'
import CollectionProcessing from './Pages/CollectionProcessing/CollectionProcessing'
import Transfer from './Pages/Transfer/Transfer'
import Security from './Pages/Security/Security'
import Breach from './Pages/Breach/Breach'
import Enforcement from './Pages/Enforcement/Enforcement'
import Marketing from './Pages/Marketing/Marketing'
import Privacy from './Pages/Privacy/Privacy'
import Contacts from './Pages/Contacts/Contacts'
import SetupPage from './Pages/SetupPage/SetupPage'
import CategorySetupPage from './Pages/CategorySetupPage/CategorySetupPage'
import Law from './Pages/Law/Law'
import MoreAboutUs from './Pages/MoreAboutUs/MoreAboutUs'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/more' element={<MoreAboutUs />} />
        <Route path='/updates' element={<Updates />} />
        <Route path='/analysis' element={<Analysis />} />
        <Route path='/countrysearch' element={<CountrySearch />} />
        <Route path='/category/:id' element={<Law />} />
        <Route path='/definition' element={<Definition />} />
        <Route path='/authority' element={<Authority />} />
        <Route path='/regulation' element={<Regulation />} />
        <Route path='/protectionofficers' element={<DataProtectionOfficers />} />
        <Route path='/collection' element={<CollectionProcessing />} />
        <Route path='/transfer' element={<Transfer />} />
        <Route path='/security' element={<Security />} />
        <Route path='/breach' element={<Breach />} />
        <Route path='/enforcement' element={<Enforcement />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/setup' element={<SetupPage />} />
        <Route path='/category-setup' element={<CategorySetupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App