import React from 'react';

interface loginModalOpen { 
    isOpen : boolean
    loginModalClose : React.Dispatch<React.SetStateAction<boolean>>
}
const LoginAndSignup = (props: loginModalOpen) => {
    const onModalClose = () => {
        props.loginModalClose(prev => !prev);
    }

    return (
        <div className='login-modal-wrapper'>
        <div className='login-modal'>
            <div className='login-modal-left'>
                <div>
                    <img src='images/wellcome.svg' width='200px' height='100%' />
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
                    <h3>로그인</h3>
                    <div className='email-input'>
                        <span>이메일로 로그인</span>
                        <div>
                            <input type="text" placeholder='이메일을 입력하세요.' /><button>로그인</button>
                        </div>
                    </div>
                    <div className='social-btn-group'>
                        <span>소셜 계정으로 로그인</span>
                        <div>
                            <button className='github-login'><span><i className="fab fa-github"></i></span></button>
                            <button className='google-login'><span><i className="fab fa-google"></i></span></button>
                        </div>

                    </div>
                </main>

                <footer className='modal-footer'>
                    <span>
                        아직 회원이 아니신가요? <button>회원가입</button>
                    </span>
                </footer>

            </div>
        </div>
        </div>
    )
}

export default LoginAndSignup;