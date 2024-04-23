import { useState, useEffect } from "react"
import axios from 'axios'

export const useAuth = (code: string) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setrefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios.post('http://localhost:3001/login', {
      code,
    })
    .then(res => {
      console.log(res.data)
    }).catch(() => {
      console.log('shoot')
      window.location.href = '/'
  })
  }, [code])
}
