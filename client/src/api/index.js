import axios from 'axios'

export const submitWithCaptcha = async (token) => {
  return axios.post(`${process.env.REACT_APP_PUBLIC_URL}/api/verify`, {
    token
  })

}