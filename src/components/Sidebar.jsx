import CustomButton from './CustomButton'

import { useNavigate } from 'react-router-dom'

import logo from '../assets/images/logo.png'
import './Sidebar.scss'


const Sidebar = () => {

    const navigate = useNavigate()

    const handleSignOutClick = () => {
        navigate('/login')
    }

    return (
        <div className="sidebar-container">
           <div className="logo">
                <img src={logo} alt="logo" />
           </div>

           <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}> 
                    Sair
                </CustomButton>
           </div>
        </div>
    )
}

export default Sidebar