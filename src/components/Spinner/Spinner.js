import React from "react";
import './Spinner.module.css';
import preLoader from './../assets/images/preloader.svg';

const LoaderSpinner = () => {
  return(
    <div>
      <img src={preLoader} alt='loading...'/>
    </div>
  )
}

export default LoaderSpinner;