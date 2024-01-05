import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Heading, MainContainer, RedirectLink } from './style';

const PageNotFound = () => {
  const [timer, setTimer] = useState(15);
  
  const navigate = useNavigate();

  const newTimer = useCallback((new_timer) => {
    setTimeout(() => {
      setTimer(new_timer)
      if (new_timer > 0){
        newTimer(new_timer-1)
      }else {
        navigate('/');
      }
    }, 1000)
  }, [navigate])

  useEffect(() => {
    if(timer === 15){
      newTimer(timer-1);
    }
  }, [newTimer, timer])
  

  return (
    <MainContainer>
      <Heading>404 - Page Not Found</Heading>
      <p>Redirecting to home page in <span style={{color: "var(--base-red)"}}>{timer}</span> seconds, or click <RedirectLink to='/'>here</RedirectLink> to redirect now. </p>
    </MainContainer>
  )
}

export default PageNotFound