import React, { useEffect, Fragment } from 'react';

// MODULE
import { withRouter  } from 'react-router-dom';
import { useDispatch } from 'react-redux'

// GLOBAL STATE
import { changeValueUser } from '../../Redux/Actions/index'

function ScrollToTop({ history, children }) {

  // USE DISPATCH
  const dispatch = useDispatch()

  useEffect(() => {
    const unlisten = history.listen(() => {
        const el = document.getElementById('master-root')
        el.scrollIntoView()
        dispatch(changeValueUser('top',0))
    });
    return () => {
      unlisten();
    }
  }, [history,dispatch]);

  return <Fragment>{children}</Fragment>;
  
}

export default withRouter(ScrollToTop);









// window.scrollTo(0, 0);
//         window.scroll({
//             top: 0,
//             left: 0,
//             behavior: 'smooth'
//         });   