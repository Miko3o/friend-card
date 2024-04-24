import React from 'react'
import { useAuth } from '../services/spotify/useAuth'

export const Dashboard = ({code}: {code: string | null}) => {
    const accessToken = useAuth(code)
  return (
    <div>

    </div>
  )
}
