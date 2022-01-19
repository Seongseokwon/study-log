import React from 'react';

interface loginModalOpenProps {
    loginModalOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const Header = (props : loginModalOpenProps) => {
    const onLoginClick = () => {
        props.loginModalOpen(prev => !prev);
    }
    
    return (
        <>
            <header className='header-container'>
                <div className="logo-section">
                    Study Log
                </div>
                <div className="btn-section">
                    <button className='search-btn'>
                        <span>
                            <i className="fas fa-search"></i>
                        </span>
                    </button>
                    <button className='login-btn' onClick={onLoginClick}>로그인</button>
                    {/* <button>새 글 작성</button> */}
                    {/* <button>Porfile</button> */}
                </div>
            </header>
        </>

    )
}

export default Header;