import React, { useState, useEffect } from 'react';
const ScrollButton = props => {
  const [intervalId, setIntervalId] = useState(0);
  const scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  }
  const scrollToTop = () => {
    let intervalId = setInterval(scrollStep.bind(this), props.delayInMs);
    setIntervalId(intervalId);
  }
  return (<button title='Back to top' className='scroll'
    onClick={() => { scrollToTop(); }}>
    <i className='fa fa-angle-up'></i>
    <span className='text-uppercase'>top</span>
  </button>);
}
const ScrollApp = () => {
  // eslint-disable-next-line class-methods-use-this
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const element = document.getElementById('BottomTopScroll');
      const h = window.innerHeight;
      if (h > 5) {
        if (window.scrollY > 6) {
          element.classList.add('scroll');

        } else {
          element.classList && element.classList.remove('scroll');
        }
      }
    });
  }, [])
  return (<div id="BottomTopScroll" className="long">
    <ScrollButton scrollStepInPx="50" delayInMs="25.66" />
  </div >);

}
export default ScrollApp;
