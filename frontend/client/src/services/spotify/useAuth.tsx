import { useState, useEffect } from "react"
import axios from 'axios'

export const useAuth = (code: string | null) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setrefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()


  useEffect(() => {
    axios.post('http://localhost:3001/login', {
      code,
    })
    .then(res => {
      setAccessToken(res.data.accessToken)
      setrefreshToken(res.data.refreshToken)
      setExpiresIn(res.data.expiresIn)
      window.history.pushState({}, '', '/')
    }).catch(() => {
      window.location.href = '/'
    })
  }, [code])

  useEffect(() => {
    axios.post('http://localhost:3001/refresh', {
      refreshToken,
    })
    .then(res => {
      //setAccessToken(res.data.accessToken)
      //setrefreshToken(res.data.refreshToken)
      //setExpiresIn(res.data.expiresIn)
      //window.history.pushState({}, '', '/')
    }).catch(() => {
      window.location.href = '/'
    })
  }, [refreshToken, expiresIn])


  return accessToken
}
