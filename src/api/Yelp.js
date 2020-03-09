import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer noPlutbAxSJgq90pAG-VJNWNxduL78OOUtmAgDpSPc9XqVmO2WJL_WfJ4a0Kh2frrVDXlDxs1c9FwX1ocTTkAc7axkL1YuwOITtnSaPhDvuwQPBdkzcOfdF5I3dWXnYx'
  }
})