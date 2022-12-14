import React, {useRef, useEffect, useState} from "react";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {UserOutlined} from '@ant-design/icons'

import "./fonts.css";
import "./App.css";
import "./phone.App.css";
import "./Images.css";
import testimonialCover from "./assets/videos/vid-bg.webp";

// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }

export function App() {
  const [rendered, setRendered] = useState(1)

  const pageLoadA = useRef(gsap.timeline({ paused: true }));
  const rRoot = useRef(null)
  // -->-->-->>
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const pageLoadA = gsap.timeline()

    let timeline = pageLoadA.current
    rendered === 1 ?  timeline.play(): timeline.kill();


    timeline.fromTo(
      ".logo, .menu, .actions button, .hero-text, .hero-text *",
      { x: "-30px", opacity: 0}, 
      {x: "0", opacity: 1,
      duration: .8, ease: "expo.out", stagger: 0.2 }
    )
    .fromTo(
      ".hero-img",
      { x: "50px", opacity: 0}, 
      {x: "0", opacity: 1,
      duration: 1.2, ease: "expo.out"}
    )
    .fromTo(
      ".warning-banner",
      { y: "-90px"}, 
      {y: "0",
      duration: .6, ease: "expo.out"}
    )
    .fromTo(
      ".image",
    {y: "30px"},
    {
      y: "0",
      scrollTrigger: {
        trigger: ".image",
        start: "top bottom", // when the top of the trigger hits the top of the viewport
        end: "top center", // end after scrolling 500px beyond the start
        scrub: 0.2
      }
    }
  )


    setRendered(rendered+1)
  }, []);
  

  return (
    <div ref={rRoot}>
      <div className="warning-banner">
        Clean hands, save lives! - Wash your hands
      </div>
      <nav>
        <div className="logo">
          <span className="logo-text">PineCrest MD</span>
        </div>
        <div className="collapse">
          <div className="menu">
            <a href="/">Our Doctors</a>
            <a href="/">How it works</a>
            <a href="/">Book a session</a>
          </div>
          <div className="actions">
            <button className="login">
              <UserOutlined></UserOutlined>
              <span>Login</span>
            </button>
            <button className="pricing">Plans & Pricing</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        
        <div className="hero-text">
          <h1>Virtual Healthcare When You Need It Most</h1>
          <p>For Anyone, Anywhere, at Anytime</p>
          <button>Join Now</button>
        </div>
        <div className="hero-img"></div>
      </section>

      <section id="doctors" className="doctors">
        <h2 className="sub-heading">Meet Our Doctors</h2>
        <div className="profiles">
          <div className="profile">
            <div className="image blake"></div>
            <div className="description">
              <p className="name">Blake Shaw, M.D.</p>
              <p className="paragraph">
                I'm a paragraph. Some lovely text can be added here and such.
                Let your users get to know you.
              </p>
            </div>
          </div>

		  <div className="profile">
            <div className="image evelyn"></div>
            <div className="description">
              <p className="name">Evelyn Wright, M.D.</p>
              <p className="paragraph">
                I'm a paragraph. Some lovely text can be added here and such.
                Let your users get to know you.
              </p>
            </div>
          </div>

		  <div className="profile">
            <div className="image jenna"></div>
            <div className="description">
              <p className="name">Jenna Cadwell, M.D</p>
              <p className="paragraph">
                I'm a paragraph. Some lovely text can be added here and such.
                Let your users get to know you.
              </p>
            </div>
          </div>

		  <div className="profile">
            <div className="image david"></div>
            <div className="description">
              <p className="name">David Wayne, M.D.</p>
              <p className="paragraph">
                I'm a paragraph. Some lovely text can be added here and such.
                Let your users get to know you.
              </p>
            </div>
          </div>
        </div>
      </section>

	  <section id="how-it-works" className="how-it-works">
        <h2 className="sub-heading">How It Works</h2>
		<p><span>I'm a paragraph. Some lovely text can be added here and such.
                Let your users get to know you. It???s easy. Just contact me and tell me what you want to make your own content or make any changes you'd want like to the font.</span></p>
		<div className="workings">
			<div className="image"></div>
			<div className="specs">
                <div className="spec">
                    <div className="icon">
                        <svg preserveAspectRatio="xMidYMid meet" data-bbox="22.797 54.8 154.203 90.4" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="22.797 54.8 154.203 90.4" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--mkdfh0yscwo4"><title id="svgcid--mkdfh0yscwo4"></title>
                            <g>
                                <path fill="#09371f" d="M103.6 54.8c-13.2 0-26.2 2.2-37.5 6.3-1.2.4-1.8 1.8-1.4 3 .4 1.2 1.8 1.8 3 1.4 10.8-3.9 23.2-6 35.9-6 37.9 0 68.8 18.2 68.8 40.5s-30.9 40.5-68.8 40.5c-15.9 0-30.8-3.1-43.2-9.1-3.2-1.5-16.6 2.5-29.4 6.9 9.7-15.3 10.2-21.3 8.6-23.5-3.2-4.7-4.8-9.7-4.8-14.8 0-9.2 5.2-17.9 14.9-25.1 1-.8 1.3-2.2.5-3.3-.8-1-2.2-1.3-3.3-.5-10.8 8-16.8 18.3-16.8 28.9 0 6 1.9 11.9 5.5 17.3.7 2.3-5 13.4-12.4 24.3-.6.8-.5 1.9.1 2.7.5.6 1.1.9 1.8.9.3 0 .5 0 .8-.1 13.6-4.9 29.9-9.9 32.4-9.4 13 6.2 28.6 9.5 45.2 9.5 40.5 0 73.5-20.3 73.5-45.2s-32.8-45.2-73.4-45.2z" data-color="1"></path>
                                <path fill="#09371f" d="M137 100c0-4.3-3.5-7.8-7.8-7.8s-7.8 3.5-7.8 7.8 3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8zm-11 0c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1c-1.7 0-3.1-1.4-3.1-3.1z" data-color="1"></path>
                                <path fill="#09371f" d="M111.5 100c0-4.3-3.5-7.8-7.8-7.8s-7.8 3.5-7.8 7.8 3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8zm-11 0c0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1-1.4 3.1-3.1 3.1-3.1-1.4-3.1-3.1z" data-color="1"></path>
                                <path fill="#09371f" d="M85.9 100c0-4.3-3.5-7.8-7.8-7.8s-7.8 3.5-7.8 7.8 3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8zM75 100c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1c-1.7 0-3.1-1.4-3.1-3.1z" data-color="1"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="description">
                        <p className="desc-title">Start a Chat</p>
                        <p>I'm a paragraph. Some lovely text can be added here and such.</p>
                    </div>
                </div>

                <div className="spec">
                    <div className="icon">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="30.2 29.1 149.6 136.9" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="30.2 29.1 149.6 136.9" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-okitfcbko26q"><title id="svgcid-okitfcbko26q"></title>
                        <g>
                            <path fill="#09371f" d="M125.5 29.1l-92.9.6c-.6 0-1.3.3-1.7.7-.5.5-.7 1.1-.7 1.7l.8 107.3c0 3.7 1.5 7.2 4.1 9.8 2.6 2.6 6.1 4 9.9 4l60.1-.4c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4l-60.1.4c-2.4 0-4.7-.9-6.4-2.6-1.7-1.7-2.7-4-2.7-6.4l-.8-104.8 88-.6.8 116.2c0 1.3 1.1 2.4 2.4 2.4h.3c1.2-.2 2.1-1.2 2.1-2.4L128 31.5c0-1.3-1.1-2.4-2.5-2.4z" data-color="1"></path>
                            <path fill="#09371f" d="M110.2 55.6h.3c1.2-.2 2.1-1.2 2.1-2.4 0-1.3-1.1-2.4-2.4-2.4l-61.9.4c-1.3 0-2.4 1.1-2.4 2.4S47 56 48.3 56l61.9-.4z" data-color="1"></path>
                            <path fill="#09371f" d="M110.3 67.1l-61.9.4c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4l61.9-.4h.3c1.2-.2 2.1-1.2 2.1-2.4 0-1.4-1.1-2.4-2.4-2.4z" data-color="1"></path>
                            <path fill="#09371f" d="M48.5 83.8c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4l38.7-.3h.3c1.2-.2 2.1-1.2 2.1-2.4 0-1.3-1.1-2.4-2.4-2.4l-38.7.3z" data-color="1"></path>
                            <path fill="#09371f" d="M179.8 83.9c0-4.3-3.5-7.9-7.8-7.9h-3.8V62.9c0-1.3-1.1-2.4-2.4-2.4h-15.5c-.6 0-1.3.3-1.7.7-.5.5-.7 1.1-.7 1.7v15.5l-.2 71.6c0 .4.1.8.3 1.2l7.7 13.6c.4.7 1.1 1.1 1.9 1.2h.2c.9 0 1.7-.5 2.1-1.2l7.8-13.5c.2-.4.3-.8.3-1.2l.2-69.2h3.8c1.7 0 3 1.4 3 3v12c0 1.3 1 2.3 2.2 2.4h.2c1.3 0 2.4-1.1 2.4-2.4v-12zm-16.4-18.5V76h-10.6V65.4h10.6zm-.2 84l-5.3 9.3-5.3-9.3.2-68.5h10.6l-.2 68.5z" data-color="1"></path>
                        </g>
                    </svg>
                    </div>
                    <div className="description">
                        <p className="desc-title">Choose a Plan</p>
                        <p>I'm a paragraph. Some lovely text can be added here and such.</p>
                    </div>
                </div>

                <div className="spec">
                    <div className="icon">
                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="30 43.892 139.9 112.308" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="30 43.892 139.9 112.308" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-qfr1gygat0q6"><title id="svgcid-qfr1gygat0q6"></title>
                        <g>
                            <path fill="#09371f" d="M169.9 126.6V60.8c0-3.9-3.2-7-7.1-7h-6.7l.8-7.7c.1-1.1-.7-2-1.8-2.2-1.1-.1-2 .7-2.2 1.8l-.8 8.1h-23.7v-7.9c0-1.1-.9-2-2-2s-2 .9-2 2v7.9h-23.7l-1.1-8.1c-.1-1.1-1.1-1.8-2.2-1.7-1.1.1-1.8 1.1-1.7 2.2l1 7.6H73.5v-7.9c0-1.1-.9-2-2-2s-2 .9-2 2v7.9H46.1l.3-7.9c0-1.1-.8-2-1.9-2-1.1 0-2 .8-2 1.9l-.3 8H32c-1.1 0-2 .9-2 2v94.4c0 1.6.6 3.1 1.8 4.2 1.1 1.1 2.6 1.8 4.2 1.8l131.8-.1c1.1 0 2-.9 2-2l.1-27.5zM34 81.4h17.7v18.4h-13c-1.1 0-2 .9-2 2s.9 2 2 2h13v21.1H34V81.4zM165.9 100l-19.8-.1V81.2h19.8V100zm-23.7-18.7V100l-25.3-.1V81.3h25.3zM113 99.9l-26.6-.1V81.3h26.7l-.1 18.6zm0 3.9v20.9H86.4v-20.9H113zM82.4 81.3v18.5l-26.7-.1V81.3h26.7zm-26.7 22.4l26.7.1v21H55.7v-21.1zm26.7 24.9v23.6H55.7v-23.6h26.7zm4 0H113v12.2c0 1.1.9 2 2 2s2-.9 2-2v-12.3h25.4v23.6H86.5l-.1-23.5zm30.5-3.9v-20.8l25.3.1v20.7h-25.3zm29.3-20.8l19.8.1v20.7h-19.8v-20.8zM42.1 57.7l-.3 7.8c0 1.1.8 2 1.9 2h.1c1.1 0 1.9-.8 2-1.9l.3-8h23.6v7.9c0 1.1.9 2 2 2s2-.9 2-2v-7.9h23.7l1.1 8.1c.1 1 1 1.7 1.9 1.7h.3c1.1-.1 1.8-1.1 1.7-2.2l-1-7.6h23.2v7.9c0 1.1.9 2 2 2s2-.9 2-2v-7.9h23.3l-.8 7.7c-.1 1.1.7 2 1.8 2.2h.2c1 0 1.9-.8 2-1.8l.8-8.1h7.1c1.7 0 3.1 1.4 3.1 3.1v16.6H34.3V57.6l7.8.1zm-6 94.5c-.6 0-1.1-.2-1.5-.6-.4-.4-.6-.9-.6-1.5v-21.5h17.7v23.6H36.1zm110.1 0v-23.6H166v23.6h-19.8z" data-color="1"></path>
                        </g>
                    </svg>
                    </div>
                    <div className="description">
                        <p className="desc-title">Book a Session</p>
                        <p>I'm a paragraph. Some lovely text can be added here and such..</p>
                    </div>
                </div>
				
			</div>
		</div>
	</section>

    <section id="consultation-section" className="consultation-section">
        <h2 className="sub-heading">Certified. Responsive. Compassionate.</h2>
        <div className="consultation-icons">
            <div className="icon">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="26.598 32 144.456 129.998" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="26.598 32 144.456 129.998" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-huef17-n87hyf"><title id="svgcid-huef17-n87hyf"></title>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#EAF2F6" d="M151.774 70.149c-17.373-13.571-39.077-20.282-61.12-19.979-31.211.428-49.626 7.932-55.244 22.51-10.394 26.969-20.587 76.459 25.84 82.398s45.267-25.564 69.059-6.94 53.217-43.261 35.148-64.819c-4.016-4.791-8.577-9.181-13.683-13.17z" data-color="1"></path>
                        <path fill="#09371F" d="M146.055 59.851L143.08 47.42a.736.736 0 00-.264-.398 5.27 5.27 0 001.621-5.524l-1.743-5.757a5.226 5.226 0 00-2.554-3.115 5.225 5.225 0 00-4.009-.397 5.268 5.268 0 00-3.512 6.562l1.743 5.757a5.226 5.226 0 002.554 3.115 5.234 5.234 0 004.009.397c.243-.074.474-.169.698-.273l2.971 12.414c1.971 8.235 1.293 16.575-1.911 23.485-3.176 6.85-8.456 11.468-14.869 13.002a19.685 19.685 0 01-4.597.542C111.4 97.229 99.92 86.743 96.332 71.752l-2.854-11.925c2.349-1.08 3.608-3.757 2.838-6.3l-1.743-5.757a5.226 5.226 0 00-2.554-3.115 5.225 5.225 0 00-4.009-.397 5.268 5.268 0 00-3.512 6.562l1.743 5.757a5.226 5.226 0 002.554 3.115 5.234 5.234 0 003.241.569l2.834 11.841c3.754 15.68 15.857 26.63 28.362 26.63a21.12 21.12 0 004.933-.582c.11-.026.218-.061.327-.089a.743.743 0 00.008.873c9.961 13.339 11.095 30.951 2.822 43.826-7.18 11.175-19.564 16.403-27.986 17.484-5.808.745-10.686-.251-13.382-2.733-5.178-4.769-2.795-15.216-.49-25.319 2.247-9.849 4.369-19.152-.751-22.867-4.047-2.934-11.318-1.274-21.617 4.936-.017.01-.026.027-.042.039-2.188-3.013-5.729-4.983-9.729-4.983-6.633 0-12.03 5.397-12.03 12.03 0 6.633 5.397 12.03 12.03 12.03s12.03-5.397 12.03-12.03c0-2.1-.544-4.074-1.493-5.794l.011-.004c9.596-5.786 16.497-7.518 19.956-5.006 4.316 3.132 2.302 11.964.169 21.316-2.4 10.521-4.881 21.4.938 26.759 2.411 2.22 6.126 3.38 10.684 3.38 1.243 0 2.549-.087 3.908-.261 8.743-1.123 21.6-6.553 29.06-18.163 8.61-13.4 7.452-31.701-2.882-45.54a.725.725 0 00-.293-.224c6.304-1.916 11.469-6.663 14.635-13.493 3.343-7.213 4.056-15.903 2.007-24.466zm-5.567-13.23a3.766 3.766 0 01-4.688-2.509l-1.743-5.757a3.764 3.764 0 013.596-4.85 3.765 3.765 0 013.6 2.67l1.743 5.757a3.764 3.764 0 01-2.508 4.689zm-52.809 9.522l-1.743-5.757a3.764 3.764 0 013.596-4.85 3.765 3.765 0 013.6 2.67l1.743 5.757a3.764 3.764 0 01-2.509 4.688 3.765 3.765 0 01-4.687-2.508zm-30.357 75.733c-5.804 0-10.527-4.722-10.527-10.527 0-5.804 4.722-10.527 10.527-10.527s10.527 4.722 10.527 10.527c0 5.805-4.723 10.527-10.527 10.527z" data-color="2"></path>
                        <path fill="#09371F" d="M57.322 113.83c-4.146 0-7.519 3.373-7.519 7.519s3.373 7.519 7.519 7.519 7.519-3.373 7.519-7.519-3.373-7.519-7.519-7.519zm0 13.534c-3.317 0-6.015-2.698-6.015-6.015s2.698-6.015 6.015-6.015c3.317 0 6.015 2.698 6.015 6.015s-2.698 6.015-6.015 6.015z" data-color="2"></path>
                    </g>
                </svg>
            </div>

            <div className="icon">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="30.569 28.381 140.6 143.119" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="30.569 28.381 140.6 143.119" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-xsdgw5s1o9vu"><title id="svgcid-xsdgw5s1o9vu"></title>
                    <g>
                        <path fill="#eaf2f6" clipRule="evenodd" fillRule="evenodd" d="M151.2 148.2c-20.1 13.7-44.8 18.7-68.8 15.2-29-4.3-45.1-13.9-48.4-28.8-6.2-28.3-9-79.2 37.2-79.7s40.4 31 66.4 15.1 45.6 49.7 24.9 69.2c-3.6 3.3-7.3 6.3-11.3 9z" data-color="1"></path>
                        <path fill="#09371f" d="M107 35.4l-2.6 18.3c-.1.4.2.7.6.8s.7-.2.8-.6l2.6-18.3 3.8-4c.3-.3.3-.7 0-.9-.3-.3-.7-.3-.9 0l-2.6 2.7.6-4.2c.1-.4-.2-.7-.6-.8s-.7.2-.8.6l-.6 4-1.4-3c-.2-.3-.6-.5-.9-.3-.3.2-.5.6-.3.9l2.3 4.8z" data-color="2"></path>
                        <path fill="#09371f" d="M92.9 36.2l2.8 13c.1.3.3.5.6.5h.2c.4-.1.6-.4.5-.8l-2.8-13 2.3-5c.2-.3 0-.7-.3-.9-.3-.2-.7 0-.9.3l-1.5 3.4-.9-4.1c-.1-.4-.4-.6-.8-.5-.4.1-.6.4-.5.8l.8 4-2.4-2.4c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 .9l3.8 3.8z" data-color="2"></path>
                        <path fill="#09371f" d="M75 39.5l4.9 2.2L88 54.6c.1.2.3.3.5.3.1 0 .3 0 .4-.1.3-.2.4-.6.2-.9L81 41l.4-5.5c0-.4-.3-.7-.6-.7-.4 0-.7.2-.7.6l-.3 3.7-2.2-3.6c-.2-.3-.6-.4-.9-.2-.3.2-.4.6-.2.9l2.1 3.4-3-1.4c-.3-.2-.7 0-.9.3-.2.4-.1.8.3 1z" data-color="2"></path>
                        <path fill="#09371f" d="M63.5 50.2c0 .4.2.7.6.7l5.3.4 9.2 7.2c.1.1.2.1.3.1.2 0 .5-.1.6-.3.2-.3.2-.7-.1-.9l-9.2-7.1-1.4-5.3c-.1-.4-.5-.6-.8-.5-.4.1-.6.5-.5.8l1 3.6-3.3-2.6c-.3-.2-.7-.2-.9.1-.2.3-.2.7.1.9l3.2 2.5-3.3-.3c-.4.1-.8.4-.8.7z" data-color="2"></path>
                        <path fill="#09371f" d="M56.9 62l3.8 1.2-3.2.9c-.4.1-.6.5-.5.8.1.3.3.4.6.5h.3L63 64l14.5 4.7h.1c.3 0 .6-.1.7-.5.1-.4-.1-.7-.4-.8l-14.5-4.7-3.2-4.5c-.2-.3-.6-.4-.9-.1-.3.2-.4.6-.1.9l2.2 3-4-1.3c-.4-.1-.7.1-.8.4-.3.4-.1.8.3.9z" data-color="2"></path>
                        <path fill="#09371f" d="M73.3 77.6c.4 0 .7-.3.6-.7 0-.4-.3-.7-.7-.6l-12 .4-4.6-3.1c-.3-.2-.7-.1-.9.2-.2.3-.1.7.2.9l3.1 2.1-4.2.2c-.4 0-.7.3-.6.7 0 .3.3.6.6.6h.1l4-.1-2.7 1.9c-.3.2-.4.6-.2.9.1.2.3.2.5.3.2 0 .3 0 .5-.1l4.4-3.1 11.9-.5z" data-color="2"></path>
                        <path fill="#09371f" d="M78.6 86.1c.3-.1.5-.5.4-.9-.1-.3-.5-.5-.9-.4L64 90.6l-5.4-1.4c-.4-.1-.7.1-.8.5-.1.4.1.7.5.8l3.6.9L58 93c-.3.1-.5.5-.4.9.1.2.3.4.5.4h.3l3.7-1.5-1.9 2.7c-.2.3-.1.7.2.9.1.1.2.1.3.1.2 0 .5-.1.6-.3l3-4.4 14.3-5.7z" data-color="2"></path>
                        <path fill="#09371f" d="M70.1 109.4c.3 0 .7-.2.7-.5l1.3-5.2 9.5-8.6c.3-.2.3-.7 0-.9-.2-.3-.7-.3-.9 0l-9.5 8.5-5.5.6c-.4 0-.6.4-.6.7 0 .4.4.6.7.6l3.7-.4-3.1 2.8c-.3.2-.3.7 0 .9.1.1.3.2.4.2.2 0 .4 0 .5-.2l3-2.7-.8 3.2c0 .5.2.9.6 1z" data-color="2"></path>
                        <path fill="#09371f" d="M89.5 98.1l-7.1 13.5-5 2.4c-.3.2-.5.6-.3.9.2.3.6.5.9.3l3.3-1.6-2 3.7c-.2.3 0 .7.3.9.1 0 .1.1.2.1.3 0 .5-.1.7-.3l1.9-3.6.3 3.3c0 .3.3.6.6.6h.2c.4 0 .6-.4.6-.7l-.5-5.3 7.1-13.5c.2-.3 0-.7-.3-.9-.3-.2-.7-.1-.9.2z" data-color="2"></path>
                        <path fill="#09371f" d="M111.2 115.6l-3.2-14.9c-.1-.4-.4-.6-.8-.5-.4.1-.6.4-.5.8l3.2 14.9-2.3 5c-.2.3 0 .7.3.9.1 0 .1 0 .2.1.3 0 .6-.1.7-.4l1.5-3.4.9 4.1c.1.3.3.5.6.5h.2c.4-.1.6-.4.5-.8l-.8-4 2.4 2.3c.3.3.7.3.9 0 .3-.3.3-.7 0-.9l-3.8-3.7z" data-color="2"></path>
                        <path fill="#09371f" d="M129.1 112.3l-4.9-2.2-6.5-10.4c-.2-.3-.6-.4-.9-.2-.3.2-.4.6-.2.9l6.5 10.4-.4 5.5c0 .4.2.7.6.7.4 0 .7-.2.7-.6l.3-3.7 2.2 3.6c.1.2.3.3.5.3.1 0 .3 0 .4-.1.3-.2.4-.6.2-.9l-2.1-3.4 3 1.4c.3.2.7 0 .9-.3.2-.4 0-.8-.3-1z" data-color="2"></path>
                        <path fill="#09371f" d="M140.5 101.6c0-.4-.2-.7-.6-.7l-5.3-.4-12-9.4c-.3-.2-.7-.2-.9.1-.2.3-.2.7.1.9l12 9.4 1.5 5.3c.1.3.3.4.5.5h.3c.4-.1.6-.5.5-.8l-1-3.6 3.3 2.6c.1.1.2.1.3.1.2 0 .5-.1.6-.3.2-.3.2-.7-.1-.9l-3.2-2.5 3.3.3c.4 0 .7-.2.7-.6z" data-color="2"></path>
                        <path fill="#09371f" d="M147.2 89.8l-3.8-1.2 3.2-.9c.4-.1.6-.5.5-.8-.1-.4-.5-.6-.8-.5l-5.2 1.4-9.2-3c-.4-.1-.7.1-.8.4-.1.4.1.7.4.8l9.2 3 3.2 4.5c.1.2.3.2.4.3.2 0 .3 0 .5-.1.3-.2.4-.6.1-.9l-2.2-3 4 1.3h.1c.3 0 .6-.1.7-.5.2-.3 0-.7-.3-.8z" data-color="2"></path>
                        <path fill="#09371f" d="M127.5 74.3c-.4 0-.7.3-.6.7 0 .3.3.6.6.6h.1l15.2-.5 4.6 3.1c.1.1.2.1.3.1.2 0 .5-.1.6-.3.2-.3.1-.7-.2-.9L145 75l4.2-.2c.4 0 .7-.3.6-.7 0-.4-.3-.7-.7-.6l-4 .1 2.7-1.9c.3-.2.4-.6.2-.9-.2-.3-.6-.4-.9-.2l-4.4 3.1-15.2.6z" data-color="2"></path>
                        <path fill="#09371f" d="M128.2 64.6c-.3.1-.5.5-.4.9.1.2.3.4.5.4h.3l11.4-4.6 5.4 1.4h.1c.3 0 .7-.2.7-.5.1-.4-.1-.7-.5-.8l-3.6-.9 3.9-1.6c.3-.1.5-.5.4-.9-.1-.3-.5-.5-.9-.4l-3.7 1.5 1.9-2.7c.2-.3.1-.7-.2-.9-.3-.2-.7-.1-.9.2l-3 4.4-11.4 4.5z" data-color="2"></path>
                        <path fill="#09371f" d="M120.5 58.3c-.3.2-.3.7 0 .9.1.1.3.2.4.2.2 0 .4 0 .5-.2L132.7 49l5.5-.6c.4 0 .6-.4.6-.7 0-.4-.4-.6-.7-.6l-3.7.4 3.1-2.8c.3-.2.3-.7 0-.9-.2-.3-.7-.3-.9 0l-3 2.7.8-3.2c.1-.4-.1-.7-.5-.8-.4-.1-.7.1-.8.5l-1.3 5.2-11.3 10.1z" data-color="2"></path>
                        <path fill="#09371f" d="M114.9 51.6c.1 0 .1.1.2.1.3 0 .5-.1.7-.3l5.9-11.1 5-2.4c.3-.2.5-.6.3-.9-.2-.3-.6-.5-.9-.3l-3.3 1.6 2-3.7c.2-.3 0-.7-.3-.9-.3-.2-.7 0-.9.3l-1.9 3.6-.3-3.3c0-.4-.4-.6-.7-.6-.4 0-.6.4-.6.7l.5 5.3-5.9 11.1c-.2.2-.1.6.2.8z" data-color="2"></path>
                        <path fill="#09371f" d="M102.9 68.7c-3.6-.5-7 2-7.5 5.7-.5 3.4 1.7 6.6 5 7.4 0 7.1-1.2 69-38.4 88.2-.4.2-.6.7-.4 1.1.1.3.4.4.6.4.2 0 .3 0 .5-.1 21-10.8 30.6-34.9 34.9-53.1 4.1-17.2 4.4-32.6 4.4-36.4 3.3 0 6.1-2.4 6.6-5.7.5-3.6-2.1-7-5.7-7.5zm-1.6 11.6c-2.7-.4-4.6-2.9-4.3-5.6.4-2.7 2.9-4.6 5.6-4.3s4.6 2.9 4.3 5.6c-.4 2.7-2.9 4.6-5.6 4.3z" data-color="2"></path>
                    </g>
                </svg>
            </div>

            <div className="icon">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="32.581 34.837 139.319 133.032" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="32.581 34.837 139.319 133.032" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid--qubsw4-qcn75l"><title id="svgcid--qubsw4-qcn75l"></title>
                    <g>
                        <path fill="#eaf2f6" clipRule="evenodd" fillRule="evenodd" d="M49.2 123.5c25.9 35.2 46.8 49.4 62.8 42.8 23.9-10 62.3-34.7 37.6-71.8-24.7-37.1-44.4-15.9-47-45S41.8 39.2 38.9 66.1C37 84 40.4 103.2 49.2 123.5z" data-color="1"></path>
                        <path fill="#09371f" d="M161.5 110.6c.3-.3.6-.5.9-.8 6.2-5.8 9.5-12.6 9.5-19.7 0-8.5-4.7-16.6-13.3-22.8-.3-.2-.8-.2-1 .2-.2.3-.2.8.2 1 8.2 5.9 12.7 13.6 12.7 21.7 0 6.8-3.1 13.2-9.1 18.7-.4.4-.9.8-1.3 1.2-.3.2-.3.6-.2.9l9.6 16.3-22.8-9.3c-.2-.1-.4-.1-.5 0-1.8.7-3.6 1.3-5.4 1.8-6 1.7-12.3 2.5-18.9 2.5-5.7 0-11.3-.7-16.6-1.9 5.2-4.4 8-9.8 8-15.3 0-13.4-16.2-24.5-37.2-25.6 6.9-12.8 25.1-21.4 45.7-21.4 8.4 0 16.6 1.4 23.8 4.1.4.1.8 0 .9-.4.1-.4 0-.8-.4-.9-7.4-2.8-15.8-4.2-24.3-4.2-21.5 0-40.4 9.1-47.3 22.8h-1.7c-9.4 0-18 2-24.8 5.4-.3.2-.5.6-.3.9.2.4.6.5.9.3 6.7-3.3 15.1-5.3 24.2-5.3h2.1c20.7.7 36.9 11.3 36.9 24.2 0 5.6-3 10.8-8.6 15.1-7.5 5.8-18.5 9.1-30.4 9.1-5.3 0-10.4-.6-15.2-1.9-1.5-.4-2.9-.8-4.3-1.4-.2-.1-.4-.1-.6.1l-16.5 10.2 6.2-15.5c.1-.3 0-.6-.2-.8-.4-.3-.7-.6-1.1-.9-4-3.5-6.4-7.5-7.1-11.8-.1-.4-.4-.6-.8-.6s-.7.4-.6.8c.7 4.6 3.2 8.9 7.5 12.7.2.2.5.4.7.6l-6.8 17c-.1.3 0 .6.2.8.1.1.3.2.5.2.1 0 .3 0 .4-.1l18-11.2c1.4.5 2.8.9 4.1 1.3 4.9 1.3 10.2 2 15.6 2 12 0 23.3-3.3 31-9.2 5.8 1.5 11.8 2.3 18 2.3 6.7 0 13.2-.9 19.3-2.6 1.8-.5 3.5-1.1 5.3-1.7l24.5 10c.1 0 .2.1.3.1.2 0 .4-.1.5-.2.2-.2.2-.6.1-.8l-10.3-18z" data-color="2"></path>
                        <path fill="#09371f" d="M85.6 100c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm0 5.7c-1.2 0-2.1-1-2.1-2.1s1-2.1 2.1-2.1 2.1 1 2.1 2.1-.9 2.1-2.1 2.1z" data-color="2"></path>
                        <path fill="#09371f" d="M73.5 100c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm0 5.7c-1.2 0-2.1-1-2.1-2.1s1-2.1 2.1-2.1 2.1 1 2.1 2.1-.9 2.1-2.1 2.1z" data-color="2"></path>
                        <path fill="#09371f" d="M61.4 100c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.7-3.6-3.6-3.6zm0 5.7c-1.2 0-2.1-1-2.1-2.1s1-2.1 2.1-2.1 2.1 1 2.1 2.1-.9 2.1-2.1 2.1z" data-color="2"></path>
                    </g>
                </svg>
            </div>

            <div className="icon">
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="32.648 41.22 138.051 120.169" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="32.648 41.22 138.051 120.169" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-9uvo2jwjanm"><title id="svgcid-9uvo2jwjanm"></title>
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#EAF2F6" d="M104.534 161.389c-40.522-8.916-61.14-22.214-61.852-39.893-1.068-26.518 4.619-72.849 46.332-65.896s31.507 34.437 57.436 24.257c25.93-10.18 33.181 52.134 11.321 66.405-14.572 9.513-32.318 14.556-53.237 15.127z" data-color="1"></path>
                        <path fill="#09371F" d="M56.59 52.708c.608-.41 1.224-.811 1.849-1.205 15.619-9.813 34.236-12.829 49.803-8.067 17.007 5.202 30.187 15.429 37.109 28.797 6.143 11.863 6.98 25.449 2.419 39.292-4.012 12.174-12.522 22.061-23.97 27.831-11.446 5.773-24.454 6.742-36.629 2.731-20.192-6.652-31.207-28.493-24.554-48.685 5.352-16.24 22.917-25.099 39.156-19.748 13.077 4.309 20.212 18.454 15.903 31.533-3.476 10.547-14.884 16.302-25.433 12.826-8.525-2.809-13.175-12.029-10.366-20.554 2.275-6.905 9.745-10.671 16.651-8.397a10.641 10.641 0 016.212 5.351 10.644 10.644 0 01.61 8.177.82.82 0 11-1.559-.515 9.012 9.012 0 00-.516-6.923 9.014 9.014 0 00-5.261-4.531c-6.046-1.992-12.587 1.308-14.578 7.353-2.526 7.664 1.656 15.956 9.321 18.481 9.689 3.192 20.167-2.093 23.36-11.782 4.026-12.218-2.64-25.434-14.858-29.46-15.38-5.068-32.016 3.32-37.083 18.703-6.37 19.332 4.177 40.243 23.509 46.613 11.759 3.874 24.322 2.937 35.376-2.638 11.056-5.572 19.275-15.121 23.15-26.88 4.419-13.413 3.618-26.561-2.317-38.023-6.718-12.972-19.55-22.91-36.132-27.982-15.116-4.624-33.229-1.675-48.449 7.888-13.7 8.622-23.065 21.436-25.037 34.306a.821.821 0 01-1.622-.25c1.951-12.743 10.843-25.41 23.936-34.242z" data-color="2"></path>
                    </g>
                </svg>
            </div>
        </div>
        <div className="consultations">
            <div className="consultation">
                <p className="cons-title">Medical Consultation</p>
                <p className="cons-time">1 hr</p>
                <button className="button">Book Now</button>
            </div>
            <div className="consultation">
                <p className="cons-title">Allergy Consultation</p>
                <p className="cons-time">1 hr</p>
                <button className="button">Book Now</button>
            </div>
            <div className="consultation">
                <p className="cons-title">Psychology Consultation</p>
                <p className="cons-time">1 hr</p>
                <button className="button">Book Now</button>
            </div>
            <div className="consultation">
                <p className="cons-title">Psychiatry Consultation</p>
                <p className="cons-time">1 hr</p>
                <button className="button">Book Now</button>
            </div>
        </div>
    </section>

    <section id="testimonials" className="testimonials"> 
        <img src={testimonialCover} className="video-bg" alt="Background video for testimonial section."/>
        {/* <video src={testimonialCover} className="video-bg" autoPlay loop mute="true"></video> */}
        <div className="testimonial">
            <h2 className="sub-heading">Patient Stories</h2>
            <p className="message">???I'm a testimonial. Contact me to have something like this done for you with text that says something nice about you and your services.???</p>
            <p className="name">Jackie, 27</p>
        </div>

        <div className="carousel-controls">
            <a href="" className="carousel-control active"></a>
            <a href="" className="carousel-control"></a>
            <a href="" className="carousel-control"></a>
        </div>
    </section>

    <section id="contact-section" className="contact-section">
        <div className="phone-image"></div>
        <div className="contact-form">
            <h2 className="sub-heading">Join us on mobile!</h2>
            <p>The app lets you easily stay in touch and updated with us on the go. Just add your phone number and we???ll text you a link to download the app.</p>
            <form action="">
                <div className="control">
                  <label htmlFor="prefix">Prefix</label>
                  <input type="text" name="prefix" placeholder="+234" className="prefix" />
                </div>
                <div className="control">
                  <label htmlFor="number">Phone Number</label>
                  <input type="text" name="number" placeholder="Phone Number" className="number" />
                </div>
                <button className="number-send">Send</button>
            </form>
            <div className="download-icons">
                  <div className="g-play">
                    <svg role="img" aria-label="Get it on Google Play" width="135px" height="41px" viewBox="0 0 135 41"><desc>Created with Sketch.</desc><defs><linearGradient x1="61.023168%" y1="4.5388%" x2="26.115776%" y2="71.6684%" id="linearGradient-1"><stop stopColor="#00A0FF" offset="0%"></stop><stop stopColor="#00A1FF" offset="0.657445%"></stop><stop stopColor="#00BEFF" offset="26.01%"></stop><stop stopColor="#00D2FF" offset="51.22%"></stop><stop stopColor="#00DFFF" offset="76.04%"></stop><stop stopColor="#00E3FF" offset="100%"></stop></linearGradient><linearGradient x1="107.727094%" y1="49.7223529%" x2="-130.66601%" y2="49.7223529%" id="linearGradient-2"><stop stopColor="#FFE000" offset="0%"></stop><stop stopColor="#FFBD00" offset="40.87%"></stop><stop stopColor="#FFA500" offset="77.54%"></stop><stop stopColor="#FF9C00" offset="100%"></stop></linearGradient><linearGradient x1="86.3886228%" y1="30.9452896%" x2="-49.8886228%" y2="136.119855%" id="linearGradient-3"><stop stopColor="#FF3A44" offset="0%"></stop><stop stopColor="#C31162" offset="100%"></stop></linearGradient><linearGradient x1="-18.5796407%" y1="-12.2790887%" x2="42.2742515%" y2="34.8320202%" id="linearGradient-4"><stop stopColor="#32A071" offset="0%"></stop><stop stopColor="#2DA771" offset="6.85%"></stop><stop stopColor="#15CF74" offset="47.62%"></stop><stop stopColor="#06E775" offset="80.09%"></stop><stop stopColor="#00F076" offset="100%"></stop></linearGradient></defs><g id="FInal" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="GetmyApp11" transform="translate(-799.000000, -767.000000)" fillRule="nonzero"><g id="Group-4" transform="translate(789.000000, 651.000000)"><g id="google-play-badge" transform="translate(0.000000, 106.000000)"><rect id="Rectangle" fillOpacity="0" fill="#FFFFFF" x="0" y="0.1" width="155" height="60"></rect><path d="M140,50.1 L15,50.1 C12.2,50.1 10,47.9 10,45.1 L10,15.1 C10,12.4 12.2,10.1 15,10.1 L140,10.1 C142.8,10.1 145,12.3 145,15.1 L145,45.1 C145,47.9 142.8,50.1 140,50.1 Z" id="Path" fill="#000000"></path><path d="M140,10.9 C142.3,10.9 144.2,12.8 144.2,15.1 L144.2,45.1 C144.2,47.4 142.3,49.3 140,49.3 L15,49.3 C12.7,49.3 10.8,47.4 10.8,45.1 L10.8,15.1 C10.8,12.8 12.7,10.9 15,10.9 L140,10.9 L140,10.9 Z M140,10.1 L15,10.1 C12.2,10.1 10,12.3 10,15.1 L10,45.1 C10,47.9 12.2,50.1 15,50.1 L140,50.1 C142.8,50.1 145,47.9 145,45.1 L145,15.1 C145,12.4 142.8,10.1 140,10.1 L140,10.1 Z" id="Shape" fill="#A6A6A6"></path><g id="Group" transform="translate(51.000000, 17.000000)" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="0.2"><path d="M6.4,3.4 C6.4,4.2 6.2,4.9 5.7,5.4 C5.1,6 4.4,6.3 3.5,6.3 C2.6,6.3 1.9,6 1.3,5.4 C0.7,4.8 0.4,4.1 0.4,3.2 C0.4,2.3 0.7,1.6 1.3,1 C1.9,0.3 2.6,0 3.5,0 C3.9,0 4.3,0.1 4.7,0.3 C5.1,0.5 5.4,0.7 5.6,1 L5.1,1.5 C4.7,1 4.2,0.8 3.5,0.8 C2.9,0.8 2.3,1 1.9,1.5 C1.4,1.9 1.2,2.5 1.2,3.2 C1.2,3.9 1.4,4.5 1.9,4.9 C2.4,5.3 2.9,5.6 3.5,5.6 C4.2,5.6 4.7,5.4 5.2,4.9 C5.5,4.6 5.7,4.2 5.7,3.7 L3.5,3.7 L3.5,2.9 L6.4,2.9 C6.4,3.1 6.4,3.2 6.4,3.4 Z" id="Path"></path><polygon id="Path" points="11 0.9 8.3 0.9 8.3 2.8 10.8 2.8 10.8 3.5 8.3 3.5 8.3 5.4 11 5.4 11 6.1 7.5 6.1 7.5 0.1 11 0.1"></polygon><polygon id="Path" points="14.3 6.1 13.5 6.1 13.5 0.9 11.8 0.9 11.8 0.1 16 0.1 16 0.8 14.3 0.8"></polygon><polygon id="Path" points="18.9 6.1 18.9 0.1 19.7 0.1 19.7 6.1"></polygon><polygon id="Path" points="23.1 6.1 22.3 6.1 22.3 0.9 20.6 0.9 20.6 0.1 24.7 0.1 24.7 0.8 23 0.8 23 6.1"></polygon><path d="M32.6,5.3 C32,5.9 31.3,6.2 30.4,6.2 C29.5,6.2 28.8,5.9 28.2,5.3 C27.6,4.7 27.3,4 27.3,3.1 C27.3,2.2 27.6,1.5 28.2,0.9 C28.8,0.3 29.5,0 30.4,0 C31.3,0 32,0.3 32.6,0.9 C33.2,1.5 33.5,2.2 33.5,3.1 C33.5,4 33.2,4.7 32.6,5.3 Z M28.8,4.8 C29.2,5.2 29.8,5.5 30.4,5.5 C31,5.5 31.6,5.3 32,4.8 C32.4,4.4 32.7,3.8 32.7,3.1 C32.7,2.4 32.5,1.9 32,1.4 C31.6,1 31,0.7 30.4,0.7 C29.8,0.7 29.2,0.9 28.8,1.4 C28.4,1.8 28.1,2.4 28.1,3.1 C28.1,3.8 28.3,4.4 28.8,4.8 Z" id="Shape"></path><polygon id="Path" points="34.6 6.1 34.6 0.1 35.5 0.1 38.4 4.8 38.4 4.8 38.4 3.6 38.4 0.1 39.2 0.1 39.2 6.1 38.4 6.1 35.3 1.2 35.3 1.2 35.3 2.4 35.3 6.1 34.6 6.1"></polygon></g><path d="M78.1,31.9 C75.7,31.9 73.8,33.7 73.8,36.2 C73.8,38.6 75.7,40.5 78.1,40.5 C80.5,40.5 82.4,38.7 82.4,36.2 C82.4,33.7 80.5,31.9 78.1,31.9 Z M78.1,38.7 C76.8,38.7 75.7,37.6 75.7,36.1 C75.7,34.6 76.8,33.5 78.1,33.5 C79.4,33.5 80.5,34.5 80.5,36.1 C80.5,37.6 79.4,38.7 78.1,38.7 Z M68.8,31.9 C66.4,31.9 64.5,33.7 64.5,36.2 C64.5,38.6 66.4,40.5 68.8,40.5 C71.2,40.5 73.1,38.7 73.1,36.2 C73.1,33.7 71.2,31.9 68.8,31.9 Z M68.8,38.7 C67.5,38.7 66.4,37.6 66.4,36.1 C66.4,34.6 67.5,33.5 68.8,33.5 C70.1,33.5 71.2,34.5 71.2,36.1 C71.2,37.6 70.1,38.7 68.8,38.7 Z M57.7,33.2 L57.7,35 L62,35 C61.9,36 61.5,36.8 61,37.3 C60.4,37.9 59.4,38.6 57.7,38.6 C55,38.6 53,36.5 53,33.8 C53,31.1 55.1,29 57.7,29 C59.1,29 60.2,29.6 61,30.3 L62.3,29 C61.2,28 59.8,27.2 57.8,27.2 C54.2,27.2 51.1,30.2 51.1,33.8 C51.1,37.4 54.2,40.4 57.8,40.4 C59.8,40.4 61.2,39.8 62.4,38.5 C63.6,37.3 64,35.6 64,34.3 C64,33.9 64,33.5 63.9,33.2 L57.7,33.2 Z M103.1,34.6 C102.7,33.6 101.7,31.9 99.5,31.9 C97.3,31.9 95.5,33.6 95.5,36.2 C95.5,38.6 97.3,40.5 99.7,40.5 C101.6,40.5 102.8,39.3 103.2,38.6 L101.8,37.6 C101.3,38.3 100.7,38.8 99.7,38.8 C98.7,38.8 98.1,38.4 97.6,37.5 L103.3,35.1 L103.1,34.6 Z M97.3,36 C97.3,34.4 98.6,33.5 99.5,33.5 C100.2,33.5 100.9,33.9 101.1,34.4 L97.3,36 Z M92.6,40.1 L94.5,40.1 L94.5,27.6 L92.6,27.6 L92.6,40.1 Z M89.6,32.8 L89.6,32.8 C89.1,32.3 88.3,31.8 87.3,31.8 C85.2,31.8 83.2,33.7 83.2,36.1 C83.2,38.5 85.1,40.3 87.3,40.3 C88.3,40.3 89.1,39.8 89.5,39.3 L89.6,39.3 L89.6,40 C89.6,41.6 88.7,42.5 87.3,42.5 C86.2,42.5 85.4,41.7 85.2,41 L83.6,41.7 C84.1,42.8 85.3,44.2 87.4,44.2 C89.6,44.2 91.4,42.9 91.4,39.8 L91.4,32.2 L89.6,32.2 L89.6,32.8 L89.6,32.8 Z M87.4,38.7 C86.1,38.7 85,37.6 85,36.1 C85,34.6 86.1,33.5 87.4,33.5 C88.7,33.5 89.7,34.6 89.7,36.1 C89.7,37.6 88.7,38.7 87.4,38.7 Z M111.8,27.6 L107.3,27.6 L107.3,40.1 L109.2,40.1 L109.2,35.4 L111.8,35.4 C113.9,35.4 115.9,33.9 115.9,31.5 C115.9,29.1 113.9,27.6 111.8,27.6 Z M111.9,33.6 L109.2,33.6 L109.2,29.3 L111.9,29.3 C113.3,29.3 114.1,30.5 114.1,31.4 C114,32.5 113.2,33.6 111.9,33.6 Z M123.4,31.9 C122,31.9 120.6,32.5 120.1,33.8 L121.8,34.5 C122.2,33.8 122.8,33.6 123.5,33.6 C124.5,33.6 125.4,34.2 125.5,35.2 L125.5,35.3 C125.2,35.1 124.4,34.8 123.6,34.8 C121.8,34.8 120,35.8 120,37.6 C120,39.3 121.5,40.4 123.1,40.4 C124.4,40.4 125,39.8 125.5,39.2 L125.6,39.2 L125.6,40.2 L127.4,40.2 L127.4,35.4 C127.2,33.1 125.5,31.9 123.4,31.9 Z M123.2,38.7 C122.6,38.7 121.7,38.4 121.7,37.6 C121.7,36.6 122.8,36.3 123.7,36.3 C124.5,36.3 124.9,36.5 125.4,36.7 C125.2,37.9 124.2,38.7 123.2,38.7 Z M133.7,32.1 L131.6,37.5 L131.5,37.5 L129.3,32.1 L127.3,32.1 L130.6,39.7 L128.7,43.9 L130.6,43.9 L135.7,32.1 L133.7,32.1 L133.7,32.1 Z M116.9,40.1 L118.8,40.1 L118.8,27.6 L116.9,27.6 L116.9,40.1 Z" id="Shape" fill="#FFFFFF"></path><g id="Group" transform="translate(19.000000, 17.000000)"><path d="M1.4,0.7 C1.1,1 1,1.4 1,2.1 L1,24.2 C1,24.8 1.2,25.3 1.5,25.6 L1.6,25.7 L14,13.3 L14,13.2 L14,13 L1.4,0.7 L1.4,0.7 Z" id="Path" fill="url(#linearGradient-1)"></path><path d="M18,17.4 L13.9,13.3 L13.9,13.2 L13.9,13 L18,8.9 L18.1,9 L23,11.8 C24.4,12.6 24.4,13.9 23,14.7 L18,17.4 L18,17.4 Z" id="Path" fill="url(#linearGradient-2)"></path><path d="M18.1,17.3 L13.9,13.1 L1.4,25.6 C1.9,26.1 2.6,26.1 3.5,25.7 L18.1,17.3" id="Path" fill="url(#linearGradient-3)"></path><path d="M18.1,8.9 L3.5,0.6 C2.6,0.1 1.9,0.2 1.4,0.7 L13.9,13.2 L18.1,8.9 Z" id="Path" fill="url(#linearGradient-4)"></path><g transform="translate(0.000000, 17.000000)" fill="#000000" id="Path"><path d="M18,0.3 L3.5,8.5 C2.7,9 2,8.9 1.5,8.5 L1.5,8.5 L1.4,8.6 L1.4,8.6 L1.5,8.7 L1.5,8.7 C2,9.1 2.7,9.2 3.5,8.7 L18,0.3 L18,0.3 Z" opacity="0.2"></path><path d="M1.4,8.4 C1.1,8.1 1,7.7 1,7 L1,7.1 C1,7.7 1.2,8.2 1.5,8.5 L1.5,8.4 L1.4,8.4 Z" opacity="0.12"></path></g><path d="M23,14.4 L18,17.2 L18.1,17.3 L23,14.5 C23.7,14.1 24,13.6 24,13.1 L24,13.1 C24,13.6 23.6,14.1 23,14.4 Z" id="Path" fill="#000000" opacity="0.12"></path><path d="M3.5,0.7 L23,11.8 C23.6,12.2 24,12.6 24,13.1 L24,13.1 C24,12.6 23.7,12.1 23,11.7 L3.5,0.6 C2.1,-0.2 1,0.5 1,2.1 L1,2.2 C1,0.6 2.1,0 3.5,0.7 Z" id="Path" fill="#FFFFFF" opacity="0.25"></path></g></g></g></g></g></svg>
                  </div>
                  <div className="a-stro">
                    <svg role="img" aria-label="Download on the App Store" width="135px" height="40px" viewBox="0 0 135 40"><desc>Created with Sketch.</desc><defs><linearGradient x1="49.9984472%" y1="100.265508%" x2="49.9984472%" y2="-260.382794%" id="linearGradientAppStore-1"><stop stopColor="#1A1A1A" stopOpacity="0.1" offset="0%"></stop><stop stopColor="#212121" stopOpacity="0.151" offset="12.3%"></stop><stop stopColor="#353535" stopOpacity="0.227" offset="30.8%"></stop><stop stopColor="#575757" stopOpacity="0.318" offset="53.2%"></stop><stop stopColor="#858585" stopOpacity="0.421" offset="78.3%"></stop><stop stopColor="#B3B3B3" stopOpacity="0.51" offset="100%"></stop></linearGradient></defs><g id="FInal" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="GetmyApp11" transform="translate(-942.000000, -767.000000)" fillRule="nonzero"><g id="Group-4" transform="translate(789.000000, 651.000000)"><g id="google-play-badge" transform="translate(0.000000, 106.000000)"><g id="download-on-the-app-store-apple" transform="translate(153.000000, 10.000000)"><path d="M134,35.1908482 C134.000001,36.2017871 133.596366,37.1712626 132.878003,37.8857312 C132.15964,38.6001999 131.185477,39.0010537 130.170089,38.9999979 L4.83490559,38.9999979 C2.71954166,39.0021964 1.00275682,37.2969418 1,35.1908482 L1,4.81412248 C1.00275536,2.7072249 2.71873304,1.00054689 4.83490559,1 L130.16909,1 C131.185019,0.999999966 132.159323,1.4018756 132.877599,2.11719092 C133.595876,2.83250624 133.999266,3.80264577 133.999001,4.81412248 L134,35.1908482 Z" id="Path" fill="#FFFFFF"></path><path d="M130.269406,40 L4.73159356,40 C2.12175721,39.9994531 0.00496580476,37.88682 0,35.2777014 L0,4.72730001 C0.0038608321,2.11691334 2.12049159,0.00220326476 4.73159356,0 L130.268405,0 C132.879051,0.00330249303 134.995039,2.11736983 134.999999,4.72730001 L134.999999,35.2777014 C135.002,37.8824177 132.875834,40 130.269406,40 L130.269406,40 Z" id="Path" fill="#A6A6A6"></path><path d="M134,35.1908482 C134.000001,36.2017871 133.596366,37.1712626 132.878003,37.8857312 C132.15964,38.6001999 131.185477,39.0010537 130.170089,38.9999979 L4.83490559,38.9999979 C2.71954166,39.0021964 1.00275682,37.2969418 1,35.1908482 L1,4.81412248 C1.00275536,2.7072249 2.71873304,1.00054689 4.83490559,1 L130.16909,1 C131.185019,0.999999966 132.159323,1.4018756 132.877599,2.11719092 C133.595876,2.83250624 133.999266,3.80264577 133.999001,4.81412248 L134,35.1908482 Z" id="Path" fill="#000000"></path><path d="M30.5398117,19.2949505 C30.5104709,16.1365791 33.2098225,14.6000211 33.3332561,14.5284849 C31.8045004,12.3696601 29.4349796,12.0746958 28.6023086,12.0511771 C26.6121944,11.8483279 24.6817735,13.2045755 23.667999,13.2045755 C22.6339896,13.2045755 21.0728578,12.070776 19.3903159,12.1040943 C17.2251688,12.1364325 15.1996434,13.3505877 14.0887408,15.2360071 C11.7961131,19.080342 13.5059723,24.7297405 15.7024836,27.8371547 C16.8012452,29.3599934 18.0851572,31.0582428 19.7656755,30.998466 C21.4097709,30.9337894 22.0239037,29.9842201 24.0079474,29.9842201 C25.9737795,29.9842201 26.5504776,30.998466 28.2643837,30.960248 C30.0288774,30.9337894 31.13978,29.4315296 32.200095,27.8959515 C33.4698425,26.1526246 33.979765,24.4337963 34,24.345601 C33.95953,24.3318817 30.5742112,23.0795086 30.5398117,19.2949505 Z M27.3022085,10.0070062 C28.1864789,8.93592332 28.791506,7.47874109 28.6235553,6 C27.3436903,6.05487707 25.7431003,6.85745424 24.8213952,7.90501834 C24.0059239,8.82812908 23.2774632,10.3411683 23.4656489,11.7640524 C24.903347,11.8679269 26.3794917,11.0614299 27.3022085,10.0070062 L27.3022085,10.0070062 Z" id="Shape" fill="#FFFFFF"></path><path d="M130.266661,5.25724154e-16 L63,0 L89.3471516,40 L130.266661,40 C132.877946,39.9977993 134.995035,37.8843058 135,35.2747005 L135,4.72730001 C134.995588,2.11714164 132.878498,0.00275310063 130.266661,5.25724154e-16 Z" id="Path" fill="url(#linearGradientAppStore-1)"></path><g id="Group" transform="translate(42.000000, 18.000000)" fill="#FFFFFF"><path d="M11.3347337,13.1997422 L9.05829372,13.1997422 L7.8113138,9.39291085 L3.47695596,9.39291085 L2.28911738,13.1997422 L0.0728210798,13.1997422 L4.3680855,0.239570354 L7.02042381,0.239570354 L11.3347337,13.1997422 L11.3347337,13.1997422 Z M7.43541552,7.79577515 L6.30772066,4.41160043 C6.1884356,4.06587898 5.96389902,3.25172932 5.63511332,1.97012531 L5.59501751,1.97012531 C5.46270131,2.5213319 5.25119587,3.33548156 4.96150359,4.41160043 L3.85285425,7.79577515 L7.43541552,7.79577515 Z M22.3590787,8.41223058 C22.3590787,10.0015754 21.9150175,11.2578589 21.0258928,12.1801074 C20.2299908,13.0010741 19.2406265,13.4110705 18.0608071,13.4110705 C16.7867625,13.4110705 15.8705731,12.9699105 15.3142436,12.0856427 L15.3142436,16.989044 L13.1771365,16.989044 L13.1771365,6.92611529 C13.1771365,5.92790548 13.1500719,4.90437522 13.0979473,3.85455066 L14.9774387,3.85455066 L15.0967238,5.33579663 L15.1368196,5.33579663 C15.8495228,4.21974937 16.9311074,3.66172574 18.382576,3.66172574 C19.5172876,3.66172574 20.4645513,4.09704261 21.2223623,4.9686502 C21.9791708,5.84220551 22.3590787,6.9894164 22.3590787,8.41223058 Z M20.1818758,8.48819191 C20.1818758,7.57860365 19.9713728,6.82872897 19.5483619,6.23759398 C19.0862576,5.62308629 18.4657748,5.31534551 17.687916,5.31534551 C17.160656,5.31534551 16.681511,5.48674544 16.2534881,5.82467598 C15.8244629,6.16552811 15.5437922,6.6105836 15.4124783,7.16179019 C15.3538572,7.36792941 15.3205466,7.5800832 15.3132412,7.79382743 L15.3132412,9.35298246 C15.3132412,10.0317651 15.5277538,10.6053706 15.9567791,11.0747726 C16.3858043,11.542227 16.9431362,11.776928 17.6287746,11.776928 C18.4336982,11.776928 19.0601953,11.4740566 19.5082661,10.873183 C19.9573392,10.2703616 20.1818758,9.47568922 20.1818758,8.48819191 L20.1818758,8.48819191 Z M33.422517,8.41223058 C33.422517,10.0015754 32.9784559,11.2578589 32.0893311,12.1801074 C31.2924268,13.0010741 30.3040649,13.4110705 29.123243,13.4110705 C27.8491985,13.4110705 26.933009,12.9699105 26.3766796,12.0856427 L26.3766796,16.989044 L24.2395725,16.989044 L24.2395725,6.92611529 C24.2395725,5.92790548 24.2125078,4.90437522 24.1603833,3.85455066 L26.0398747,3.85455066 L26.1591598,5.33579663 L26.1992556,5.33579663 C26.9109563,4.21974937 27.992541,3.66172574 29.445012,3.66172574 C30.5787212,3.66172574 31.5259849,4.09704261 32.2858006,4.9686502 C33.0416068,5.84220551 33.422517,6.9894164 33.422517,8.41223058 L33.422517,8.41223058 Z M31.2443118,8.48819191 C31.2443118,7.57860365 31.0328063,6.82872897 30.6097955,6.23759398 C30.1476912,5.62308629 29.5292132,5.31534551 28.7513543,5.31534551 C28.2240943,5.31534551 27.7449493,5.48674544 27.3149217,5.82467598 C26.8858964,6.16552811 26.6062281,6.6105836 26.4749143,7.16179019 C26.4097586,7.41889008 26.3746748,7.62827068 26.3746748,7.79382743 L26.3746748,9.35298246 C26.3746748,10.0317651 26.5901898,10.6053706 27.0172102,11.0747726 C27.4462355,11.5412531 28.0035673,11.776928 28.6912106,11.776928 C29.4971365,11.776928 30.1236337,11.4740566 30.570702,10.873183 C31.0197752,10.2703616 31.2443118,9.47568922 31.2443118,8.48819191 L31.2443118,8.48819191 Z M45.7920767,9.56431078 C45.7920767,10.6676978 45.3951281,11.5646259 44.6062429,12.2570426 C43.7381684,13.0127605 42.5262723,13.3915933 40.9725594,13.3915933 C39.5371292,13.3915933 38.3863792,13.122807 37.5183048,12.5842607 L38.0124857,10.8537057 C38.9497254,11.3932259 39.9791856,11.6620122 41.0998636,11.6620122 C41.9057896,11.6620122 42.5322867,11.4847691 42.9793551,11.1332044 C43.4274258,10.780666 43.6539672,10.3093161 43.6539672,9.72110276 C43.6539672,9.19424275 43.4665193,8.75308271 43.0986401,8.39372718 C42.7287562,8.03534551 42.117295,7.70131042 41.2582421,7.3945435 C38.9226608,6.54825636 37.7538677,5.31047619 37.7538677,3.68217687 C37.7538677,2.61871822 38.1668546,1.7480845 38.9908237,1.0673541 C39.8147927,0.387597565 40.9074037,0.0477192982 42.2666519,0.0477192982 C43.4805528,0.0477192982 44.4919698,0.25320444 45.2948885,0.663200859 L44.758607,2.35577515 C44.0028008,1.95843895 43.1497623,1.75977086 42.1954819,1.75977086 C41.4416805,1.75977086 40.8502672,1.93993555 40.4272563,2.29831722 C40.0714059,2.61871822 39.8909748,3.00923738 39.8909748,3.47279628 C39.8909748,3.98407447 40.0964658,4.40867884 40.5054432,4.74174006 C40.8602911,5.04850698 41.5078386,5.38254207 42.4440759,5.74092374 C43.5928211,6.19084855 44.436838,6.71478697 44.9771292,7.31663444 C45.5214299,7.91848192 45.7920767,8.66933047 45.7920767,9.56431078 Z M52.8760052,5.41273183 L50.5203759,5.41273183 L50.5203759,9.94996062 C50.5203759,11.1039885 50.9353676,11.6795417 51.7673558,11.6795417 C52.1492685,11.6795417 52.4660254,11.6483781 52.7166243,11.5831293 L52.7757656,13.1598138 C52.3547595,13.3127103 51.8004349,13.3896455 51.113794,13.3896455 C50.269777,13.3896455 49.6102008,13.1393627 49.134063,12.638797 C48.65993,12.1382313 48.4213599,11.2997351 48.4213599,10.1194128 L48.4213599,5.40883638 L47.0180063,5.40883638 L47.0180063,3.85065521 L48.4213599,3.85065521 L48.4213599,2.13957752 L50.5203759,1.52409595 L50.5203759,3.85065521 L52.8760052,3.85065521 L52.8760052,5.41273183 L52.8760052,5.41273183 Z M63.4833536,8.45021124 C63.4833536,9.88665951 63.0603427,11.0660079 62.2163258,11.9882564 C61.3332154,12.937773 60.158408,13.4110705 58.6939082,13.4110705 C57.2805307,13.4110705 56.1568454,12.9562764 55.3188428,12.047662 C54.4808402,11.1370999 54.061839,9.98988901 54.061839,8.60602936 C54.061839,7.15789474 54.4948738,5.97172932 55.3579362,5.04948084 C56.2230035,4.1262585 57.387787,3.66464733 58.8522867,3.66464733 C60.2636595,3.66464733 61.3973687,4.12041532 62.2554192,5.03000358 C63.0753787,5.91232367 63.4833536,7.05174364 63.4833536,8.45021124 Z M61.2680597,8.49793054 C61.2680597,7.64190476 61.0776046,6.90761189 60.6956919,6.29310419 C60.2476212,5.55102041 59.6060881,5.17997852 58.7751023,5.17997852 C57.9190566,5.17997852 57.2624876,5.55102041 56.8154192,6.29310419 C56.4325041,6.90761189 56.242049,7.65456498 56.242049,8.53688507 C56.242049,9.39388471 56.4325041,10.1301253 56.8154192,10.7426853 C57.2775235,11.4847691 57.9220638,11.855811 58.7570591,11.855811 C59.5740114,11.855811 60.2145421,11.4769782 60.6776488,10.7241819 C61.0705878,10.0950662 61.2680597,9.35590405 61.2680597,8.49793054 Z M70.4329611,5.68054422 C70.2106864,5.6415576 69.9852181,5.62232548 69.7593514,5.62308629 C69.0075548,5.62308629 68.4261655,5.89771572 68.0171881,6.45087003 C67.6623402,6.93780165 67.4839138,7.55328321 67.4839138,8.29634085 L67.4839138,13.1997422 L65.3468067,13.1997422 L65.3468067,6.79756534 C65.3487126,5.81655717 65.3279912,4.83563068 65.2846582,3.85552453 L67.1461065,3.85552453 L67.2242933,5.64353741 L67.2834347,5.64353741 C67.509976,5.02902972 67.864824,4.53333333 68.3519882,4.16229144 C68.7979072,3.83807067 69.3397128,3.66249561 69.8966796,3.66172574 C70.0941515,3.66172574 70.2725779,3.67535983 70.4309563,3.69970641 L70.4329611,5.68054422 L70.4329611,5.68054422 Z M79.9908015,8.08501253 C79.9962208,8.40064126 79.9700353,8.71603404 79.9126147,9.02673827 L73.5012935,9.02673827 C73.525351,9.94996062 73.8360936,10.6569853 74.4315165,11.1439169 C74.9718076,11.5782599 75.6704772,11.7964053 76.5285277,11.7964053 C77.4777962,11.7964053 78.3438659,11.6503258 79.1227271,11.3552453 L79.4575272,12.795589 C78.5473521,13.1812388 77.4727842,13.3730899 76.2328211,13.3730899 C74.7412567,13.3730899 73.5704588,12.9465378 72.7184227,12.0953813 C71.8683914,11.243251 71.4423733,10.0979878 71.4423733,8.66348729 C71.4423733,7.25528106 71.8383195,6.08177587 72.6312143,5.1458933 C73.4611977,4.14670963 74.5828782,3.64711779 75.994251,3.64711779 C77.3805638,3.64711779 78.4300719,4.14670963 79.142775,5.1458933 C79.7071236,5.93764411 79.9908015,6.91929825 79.9908015,8.08501253 L79.9908015,8.08501253 Z M77.9529316,7.54646617 C77.9679676,6.93001074 77.8276322,6.39925528 77.5379399,5.95030433 C77.168056,5.37182957 76.5986954,5.08356606 75.8358725,5.08356606 C75.1372029,5.08356606 74.5678423,5.36501253 74.1348074,5.9298532 C73.7789571,6.37880415 73.5674516,6.91832438 73.5022959,7.54451844 L77.9529316,7.54646617 Z" id="Shape"></path></g><g id="Group" transform="translate(44.000000, 7.000000)" fill="#FFFFFF"><path d="M1.62168312,6.85266458 C1.02631149,6.85266458 0.511259804,6.82432917 0.0825520696,6.77645208 L0.0825520696,0.489897917 C0.682149126,0.399757218 1.28806443,0.355327681 1.89477095,0.357014583 C4.34954943,0.357014583 5.48005273,1.53244583 5.48005273,3.44850625 C5.48005273,5.65866875 4.14473356,6.85266458 1.62168312,6.85266458 Z M1.98111489,1.16310833 C1.6497951,1.16310833 1.36767127,1.18265 1.13373942,1.22955 L1.13373942,6.00846458 C1.26024334,6.02800625 1.50321119,6.0368 1.84457098,6.0368 C3.45297798,6.0368 4.36862542,5.1457 4.36862542,3.47684167 C4.36862542,1.98874375 3.54032593,1.16310833 1.98111489,1.16310833 L1.98111489,1.16310833 Z M9.00308655,6.90054167 C7.61957541,6.90054167 6.72300396,5.89512292 6.72300396,4.5301375 C6.72300396,3.10750417 7.63865139,2.09329167 9.0813985,2.09329167 C10.4448297,2.09329167 11.3614811,3.05083333 11.3614811,4.45490208 C11.3614811,5.89512292 10.4167177,6.90054167 9.00308655,6.90054167 Z M9.04324652,2.8417375 C8.283219,2.8417375 7.7962793,3.5335125 7.7962793,4.500825 C7.7962793,5.44957292 8.29325899,6.14134792 9.03320653,6.14134792 C9.77315407,6.14134792 10.2701338,5.40169583 10.2701338,4.48128333 C10.2701338,3.54328333 9.78319407,2.8417375 9.04324652,2.8417375 Z M19.2509082,2.18806875 L17.7700091,6.79599375 L16.8051657,6.79599375 L16.1917221,4.79492708 C16.0391933,4.30545274 15.9121926,3.80878605 15.8112063,3.30682917 L15.7911263,3.30682917 C15.7138184,3.80905 15.5672345,4.31224792 15.4116146,4.79492708 L14.759015,6.79599375 L13.7841316,6.79599375 L12.3905805,2.18806875 L13.4718878,2.18806875 L14.0080235,4.37868958 C14.1345274,4.90045208 14.2409513,5.39290208 14.3293033,5.85799375 L14.3493832,5.85799375 C14.4266912,5.47009167 14.5531951,4.98545833 14.738935,4.38846042 L15.4116146,2.18904583 L16.2690301,2.18904583 L16.9125937,4.34156042 C17.0682136,4.86332292 17.1947175,5.37531458 17.2931094,5.85897083 L17.3212214,5.85897083 C17.3894934,5.38508542 17.4969213,4.8818875 17.6425012,4.34156042 L18.2177928,2.18904583 L19.2509082,2.18806875 L19.2509082,2.18806875 Z M24.7026248,6.79599375 L23.6504335,6.79599375 L23.6504335,4.15005208 C23.6504335,3.33516458 23.3291537,2.92674375 22.6956301,2.92674375 C22.0721465,2.92674375 21.6434387,3.44850625 21.6434387,4.055275 L21.6434387,6.79599375 L20.5912474,6.79599375 L20.5912474,3.50517708 C20.5912474,3.09773333 20.5812074,2.66097708 20.5520914,2.18709167 L21.4777788,2.18709167 L21.5269748,2.89840833 L21.5560908,2.89840833 C21.8392186,2.40595833 22.4135063,2.09329167 23.0570699,2.09329167 C24.0510292,2.09329167 24.7036288,2.83294375 24.7036288,4.03671042 L24.7026248,6.79599375 L24.7026248,6.79599375 Z M27.604183,6.79599375 L26.5509877,6.79599375 L26.5509877,0.0736604167 L27.604183,0.0736604167 L27.604183,6.79599375 Z M31.4404647,6.90054167 C30.0579575,6.90054167 29.1603821,5.89512292 29.1603821,4.5301375 C29.1603821,3.10750417 30.0760295,2.09329167 31.5177726,2.09329167 C32.8822078,2.09329167 33.7978552,3.05083333 33.7978552,4.45490208 C33.7988592,5.89512292 32.8530918,6.90054167 31.4404647,6.90054167 Z M31.4796206,2.8417375 C30.7195931,2.8417375 30.2326534,3.5335125 30.2326534,4.500825 C30.2326534,5.44957292 30.7306371,6.14134792 31.4685766,6.14134792 C32.2095282,6.14134792 32.7055039,5.40169583 32.7055039,4.48128333 C32.7065079,3.54328333 32.2205722,2.8417375 31.4796206,2.8417375 L31.4796206,2.8417375 Z M37.9463806,6.79599375 L37.8700767,6.2654375 L37.8419647,6.2654375 C37.5206849,6.69242292 37.0518172,6.90054167 36.4574496,6.90054167 C35.6090701,6.90054167 35.0066705,6.32210833 35.0066705,5.54435 C35.0066705,4.407025 36.0197058,3.81882083 37.7736927,3.81882083 L37.7736927,3.73381458 C37.7736927,3.12704583 37.443377,2.82317292 36.7907774,2.82317292 C36.3239176,2.82317292 35.9142859,2.93749167 35.5538501,3.16515208 L35.3399983,2.49194167 C35.777742,2.226175 36.3239176,2.09329167 36.9654732,2.09329167 C38.2024005,2.09329167 38.8268881,2.72839583 38.8268881,3.99958125 L38.8268881,5.696775 C38.8268881,6.16186667 38.8479721,6.52241042 38.8951601,6.79697083 L37.9463806,6.79599375 L37.9463806,6.79599375 Z M37.8018047,4.500825 C36.6331495,4.500825 36.0468138,4.7763625 36.0468138,5.43003125 C36.0468138,5.9136875 36.3490176,6.15014167 36.7686894,6.15014167 C37.303821,6.15014167 37.8018047,5.75246875 37.8018047,5.21214167 L37.8018047,4.500825 L37.8018047,4.500825 Z M43.9362409,6.79599375 L43.887045,6.05634167 L43.857929,6.05634167 C43.5557252,6.61523333 43.0477015,6.90054167 42.3378739,6.90054167 C41.1963266,6.90054167 40.3509592,5.92345833 40.3509592,4.54870208 C40.3509592,3.10750417 41.2274506,2.09231458 42.4242179,2.09231458 C43.0577415,2.09231458 43.5065292,2.30043333 43.759537,2.718625 L43.780621,2.718625 L43.780621,0.0736604167 L44.8338164,0.0736604167 L44.8338164,5.55412083 C44.8338164,5.99967083 44.8448604,6.41688542 44.8729724,6.79599375 L43.9362409,6.79599375 Z M43.780621,4.0845875 C43.780621,3.4397125 43.3418733,2.88961458 42.6722057,2.88961458 C41.8920982,2.88961458 41.4151985,3.562825 41.4151985,4.51059583 C41.4151985,5.43980208 41.9101702,6.07588333 42.6511217,6.07588333 C43.3127573,6.07588333 43.780621,5.51601458 43.780621,4.852575 L43.780621,4.0845875 Z M51.5114162,6.90054167 C50.1289091,6.90054167 49.2323377,5.89512292 49.2323377,4.5301375 C49.2323377,3.10750417 50.1479851,2.09329167 51.5897282,2.09329167 C52.9541634,2.09329167 53.8698108,3.05083333 53.8698108,4.45490208 C53.8708148,5.89512292 52.9260514,6.90054167 51.5114162,6.90054167 Z M51.5505722,2.8417375 C50.7915487,2.8417375 50.304609,3.5335125 50.304609,4.500825 C50.304609,5.44957292 50.8015887,6.14134792 51.5405322,6.14134792 C52.2814838,6.14134792 52.7774595,5.40169583 52.7774595,4.48128333 C52.7794675,3.54328333 52.2925278,2.8417375 51.5505722,2.8417375 Z M59.5283513,6.79599375 L58.4751559,6.79599375 L58.4751559,4.15005208 C58.4751559,3.33516458 58.1538761,2.92674375 57.5203525,2.92674375 C56.8968689,2.92674375 56.4691652,3.44850625 56.4691652,4.055275 L56.4691652,6.79599375 L55.4159698,6.79599375 L55.4159698,3.50517708 C55.4159698,3.09773333 55.4059298,2.66097708 55.3768139,2.18709167 L56.3025013,2.18709167 L56.3516973,2.89840833 L56.3808132,2.89840833 C56.6629371,2.40595833 57.2382287,2.09231458 57.8807883,2.09231458 C58.8747477,2.09231458 59.5283513,2.83196667 59.5283513,4.03573333 L59.5283513,6.79599375 Z M66.6075509,2.95605625 L65.4499396,2.95605625 L65.4499396,5.19357708 C65.4499396,5.76321667 65.6527475,6.04754792 66.0623792,6.04754792 C66.2481191,6.04754792 66.403739,6.02800625 66.529239,5.99967083 L66.5583549,6.77742917 C66.3545431,6.85364167 66.0814552,6.89174792 65.7421034,6.89174792 C64.9128,6.89174792 64.4168243,6.44619792 64.4168243,5.27956042 L64.4168243,2.95605625 L63.7260727,2.95605625 L63.7260727,2.18806875 L64.4168243,2.18806875 L64.4168243,1.34386875 L65.4499396,1.03999583 L65.4499396,2.18709167 L66.6075509,2.18709167 L66.6075509,2.95605625 L66.6075509,2.95605625 Z M72.1777395,6.79599375 L71.1265521,6.79599375 L71.1265521,4.16959375 C71.1265521,3.34493542 70.8062763,2.92772083 70.1717487,2.92772083 C69.626577,2.92772083 69.1185534,3.28826458 69.1185534,4.01814583 L69.1185534,6.79599375 L68.067366,6.79599375 L68.067366,0.0736604167 L69.1185534,0.0736604167 L69.1185534,2.8417375 L69.1396373,2.8417375 C69.4709571,2.33951667 69.9508688,2.09231458 70.5633085,2.09231458 C71.5652998,2.09231458 72.1777395,2.85053125 72.1777395,4.055275 L72.1777395,6.79599375 L72.1777395,6.79599375 Z M77.8844719,4.73825625 L74.7268939,4.73825625 C74.7469739,5.61079167 75.3403375,6.10324167 76.218837,6.10324167 C76.6856967,6.10324167 77.1154084,6.02702917 77.4949202,5.88535208 L77.6585721,6.59666875 C77.2107883,6.78622292 76.6836887,6.881 76.070245,6.881 C74.589346,6.881 73.7128545,5.97035833 73.7128545,4.55847292 C73.7128545,3.14561042 74.61043,2.08352083 75.9517731,2.08352083 C77.1615924,2.08352083 77.9206159,2.95605625 77.9206159,4.27414167 C77.9274197,4.42969239 77.9152873,4.58548023 77.8844719,4.73825625 L77.8844719,4.73825625 Z M76.9196285,4.008375 C76.9196285,3.29705833 76.5511608,2.7948375 75.8784812,2.7948375 C75.2740735,2.7948375 74.7961698,3.30682917 74.7278979,4.008375 L76.9196285,4.008375 L76.9196285,4.008375 Z" id="Shape"></path></g></g></g></g></g></g></svg>
                  </div>
                </div>
        </div>
    </section>
    <footer>
      <div className="top">
        <div className="footer-head">
          <div className="logo">
            <span className="logo-text">PineCrest MD</span>
          </div>
          <p>For our latest health tips and tricks subscribe below</p>
          <form action="">
              <div className="control">
                <input type="text" name="email" placeholder="Email" className="email" />
              </div>
              <button>Send</button>
          </form>
        </div>
        
        <div className="f-menus">
          <div className="f-menu page-menu">
            <h3 className="menu-title">Menu</h3>
            <ul className="menu-links">
              <li>Our Doctors</li>
              <li>How It Works</li>
              <li>Book a Session</li>
            </ul>
          </div>
          <div className="f-menu">
            <h3 className="menu-title">Social</h3>
            <ul className="menu-links">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="f-menu">
            <h3 className="menu-title">Contact</h3>
            <ul className="menu-links">
              <li>123-456-7890</li>
              <li>info@mysite.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>?? 2023 PineCrest MD.</p>
        <p>Created by Daniel Ebabhi</p>
        <p>Inspiration from Wix</p>
      </div>
    </footer>
    {/* {AddLibrary("./assets/js-utils/gsap.min.js")}
    {AddLibrary("./assets/js-utils/ScrollTrigger.min.js")}
    {AddLibrary("./pageAnimations.js")} */}
    </div>
  );
}

export default App;
