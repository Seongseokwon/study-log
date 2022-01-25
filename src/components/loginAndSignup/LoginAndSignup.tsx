import React, { useState } from 'react';

interface loginModalOpen {
    isOpen: boolean
    loginModalClose: React.Dispatch<React.SetStateAction<boolean>>
}


const LoginAndSignup = (props: loginModalOpen) => {
    const [togglePage, setTogglePage] = useState<boolean>(false);

    const onModalClose = () => {
        props.loginModalClose(prev => !prev);
    }

    const onLoginSignupChange = () => {
        setTogglePage(prev => !prev);
    }

    return (
        <div className='login-modal-wrapper'>
            <div className='login-modal'>
                <div className='login-modal-left'>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/images/wellcome.svg'} width='200px' height='100%' />
                    </div>
                    <h3>환영합니다!</h3>
                </div>
                <div className='login-modal-right'>

                    <div className='modal-header'>
                        <button className='login-modal-close-btn' onClick={onModalClose}>
                            <span>
                                <i className="fas fa-times">
                                </i>
                            </span></button>
                    </div>

                    <main className='modal-content'>

                        {togglePage ? <h3>회원가입</h3> : <h3>로그인</h3>}
                        <div className='email-input'>
                            <span>이메일로 {togglePage ? '회원가입' : '로그인'}</span>
                            <div>
                                <input type="text" placeholder='이메일을 입력하세요.' />
                                {togglePage ? <button>회원가입</button> : <button>로그인</button>}

                            </div>
                        </div>
                        <div className='social-btn-group'>
                            <span>소셜 계정으로 {togglePage ? '회원가입' : '로그인'}</span>
                            <div>
                                <button className='github-login'><span><i className="fab fa-github"></i></span></button>
                                <button className='google-login'><span><i className="fab fa-google"></i></span></button>
                            </div>

                        </div>
                    </main>

                    <footer className='modal-footer'>
                        {togglePage ? <span>계정이 이미 있으신가요? <button onClick={onLoginSignupChange}>로그인</button></span> : <span>아직 회원이 아니신가요? <button onClick={onLoginSignupChange}>회원가입</button></span>}
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default LoginAndSignup;