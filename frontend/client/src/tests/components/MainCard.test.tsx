import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


import { MainCard } from '../../components/MainCard'
import { SpotifyLogin } from '../../components/SpotifyLoginButton'
import { Dashboard } from '../../components/Dashboard'

const mockSpotifyLogin = jest.fn()
jest.mock('@/components/MainCard', () => ({
    default: (props: any) => {
        mockSpotifyLogin(props)
        return <div>SpotifyLogin</div>
    }
}))

const mockDashboard = jest.fn()
jest.mock('@/components/Dashboard', () => ({
    default: (props: any) => {
        mockDashboard(props)
        return <div>Dashboard</div>
    }
}))

describe('MainCard', () => {
    it('should render the MainCard with the name when name is provided', () => {
        render(<MainCard code={'12345'} name='chao' fav_song='walking on sunshine' profile_pic={'img.png'} background_color={'blue'} bottom_bar_color={'red'}/>)

        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument

        screen.debug();
    })
})