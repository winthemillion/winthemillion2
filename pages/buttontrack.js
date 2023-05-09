import React, { useState, useEffect, useRef, createRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

export default function Home() {


  // STATE QUE GUARDA LOS DIAS DE LA SEMANA 
  const [tiempo, setTiempo] = useState(null);

  // REFERIENCIAS A LOS <SPAN> EN REACT
  const daysRef = createRef();
  const hoursRef = createRef();
  const minutesRef = createRef();
  const secondsRef = createRef();

  // FUNCION QUE GUARDA LOS DIAS EN EL STATE
  setInterval(myTimer, 1000);
  function myTimer() {
    const d = new Date();
    const test = d.getDay();
    // const yes = new Date().getTime / 1000
    // console.log(d.getTime() / 1000 * 60)
    setTiempo(test);
  }



  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!completed) {

      if (daysRef.current) {
        daysRef.current.innerHTML = zeroPad(days)
        hoursRef.current.innerHTML = zeroPad(hours)
        minutesRef.current.innerHTML = zeroPad(minutes)
        secondsRef.current.innerHTML = zeroPad(seconds)
        setTimeout(() => {
          if (secondsRef.current) {

            if (secondsRef.current.innerHTML === "01") {
              secondsRef.current.innerHTML = "00"
            }
          }

        }, 10000);
      }
    }
  };

  // console.log(first)

  return (
    <>
      <NextSeo
        type='website'
        locale='es_DO'
        url='https://winthemillion.com/'
        site_name='Winthemillion'
        description='Si quieres aprender a hacer trading y no sabes como comenzar, si ya comenzaste y no comprendes mucho o si te abruma la cantidad de información que encuentras desorganizada.'
        title='Fundamentos de Trading'
        canonical="https://winthemillion.com/"
        logo="http://www.winthemillion.com/logo.png"
      />

      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>WintheMillion - Landing page</title>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js" strategy="beforeInteractive" />
      <Script
        id="test"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    /*!
* Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

`,
        }}
      />

      <div id="page-top">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
          <div className="container px-5">
            <Link href="/">
              <a className="navbar-brand fw-bold">WinThe<span>Million</span></a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

              <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item"><a className="nav-link me-lg-3" href="https://www.instagram.com/samcrossr/">Contáctos</a></li>
                <li className="nav-item"><a className="nav-link me-lg-3" href="https://samuel-s-site-d5bd.thinkific.com/order?ct=fd449acd-6818-4312-b2b0-e786a8dcd0d6">Comprar Curso</a></li>
              </ul>
              {/* <!-- <button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal"> */}
              {/* <span className="d-flex align-items-center"> */}
              {/* <i className="bi-chat-text-fill me-2"></i> --> */}
              {/* <!-- <span className="small">Send Feedback</span> --> */}
              {/* </span> */}
              {/* </button> */}
            </div>
          </div>
        </nav>

        {/* <!-- Mashead header--> */}
        <header className="masthead-2">

          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6 order-2">

                {/* <!-- Mashead text and app badges--> */}
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">Fundamentos del Trading</h1>
                  <p className="lead fw-normal text-muted mb-5">Fundamentos del mercado de valores
En este curo aprenderás a hacer operaciones en la bolsa de valores, análisis técnico fundamental, gráficos y velas, daytrading+++
</p>

                  < Countdown
                    // cantidad de horas que va a estar corriendo el reloj 3 dias en milisengundos
                    // date={Date.now() + 259200000}
                    //  date={1655959589000}
                    // TERMINA EL JUEVES A LAS 11:59:59
                    date={1686830400000}
                    renderer={renderer}
                  />

                  {/*HERE IS THE COUNTDOWN/*/}

                  <div className="timer-2020 countdown d-flex text-h-white">
                    <div className="d-flex flex-column align-items-center">
                      <div className="days timer-2020__number text-h-meteorite-dark wrapper   d-flex align-items-center justify-content-center">
                        <div ref={daysRef} className="value">00</div>
                      </div>
                      <div className="timer-2020__text pt-5 lh-1">días</div></div>
                    <div className="d-flex align-items-center mr-5 ml-5 mt-n4">
                      <span className="f-title ">:</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <div className="hours timer-2020__number text-h-meteorite-dark wrapper   d-flex align-items-center justify-content-center">
                        <div ref={hoursRef} className="value ">00</div>
                      </div>
                      <div className="timer-2020__text pt-5 lh-1 ">horas</div>
                    </div>

                    <div className="d-flex align-items-center mr-5 ml-5 mt-n4">
                      <span className="f-title">:</span>
                    </div>

                    <div className="d-flex flex-column align-items-center">
                      <div className="minutes timer-2020__number text-h-meteorite-dark wrapper   d-flex align-items-center justify-content-center">
                        <div ref={minutesRef} className="value ">00</div>
                      </div>
                      <div className="timer-2020__text pt-5 lh-1 "> minutos</div>
                    </div>
                    <div className="d-flex align-items-center mr-5 ml-5 mt-n4">
                      <span className="f-tittle ">:</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <div className="seconds timer-2020__number text-h-meteorite-dark wrapper   d-flex align-items-center justify-content-center">
                        <div ref={secondsRef} className="value">00</div>
                      </div>
                      <div className="timer-2020__text pt-5 lh-1">segundos<div />
                      </div>
                    </div>


                  </div>





                  <div className="d-flex flex-column flex-lg-row align-items-center">
                    <a href="https://samuel-s-site-d5bd.thinkific.com/order?ct=fd449acd-6818-4312-b2b0-e786a8dcd0d6" className="btn btn-primary rounded-pill px-3 mb-5 mb-lg-0 " >Comenzar curso <i className="bi bi-cart"></i></a>

                    {/* <span className="d-flex align-items-center"> */}

                    {/* <!-- <span className="small">Send Feedback</span> */}
                    {/* <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="google-play-badge.svg" alt="..." /></a> */}
                    {/* <!-- <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a> --> */}
                    {/* </span> */}
                  </div>
                  <div className="letrero">Acceso de por vida. 🥳</div>
                </div>
              </div>

              <div className="col-lg-6 order-md-2 ">
                {/* <!-- Masthead device mockup feature--> */}
                <div className="img-portada">
                  {/* <video style={{ maxWidth: "100%", height: "150%" }} > */}
                  <img style={{ maxWidth: "130%", width: "700px" }} src="pagina-portada.png" />
                  {/* </video> */}

                  {/* <!-- <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> --> */}

                  {/* <!-- <defs>                                     */}
                  {/* <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                        <stop className="gradient-start-color" offset="0%"></stop>
                                        <stop className="gradient-end-color" offset="100%"></stop>
                                    </linearGradient> */}
                  {/* </defs> --> */}
                  {/* <!-- <circle cx="50" cy="50" r="50"></circle> */}

                  {/* </svg> --> */}

                  {/* <!-- <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">  */}
                  {/* <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect> */}
                  {/* <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg> --> */}

                  {/* <!-- <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg> --> */}

                  {/* <!-- <div className="embed-responsive embed-responsive-16by9"> */}
                  {/* <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=Js6oqkUrge8&ab_channel=RespirardelCielo"></iframe> */}
                  {/* </div> --> */}


                  {/* <!-- <div className="device-wrapper"> */}
                  {/* <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black"> */}
                  {/* <div className="screen bg-black"> --> */}
                  {/* <!-- PUT CONTENTS HERE:--> */}
                  {/* <!-- * * This can be a video, image, or just about anything else.--> */}
                  {/* <!-- * * Set the max width of your media to 100% and the height to--> */}
                  {/* <!-- * * 100% like the demo example below.--> */}

                </div>
              </div>
            </div>

          </div>

        </header>



        {/* <!-- Footer--> */}
        <footer className="bg-black text-center py-5">
          <div className="container px-5">
            <div className="text-white-50 small">
              <div className="mb-2">&copy; WinTheMillion.com 2022. All Rights Reserved.</div>
              <a href="">Privacy</a>
              <span className="mx-1">&middot;</span>
              <a href="">Terms</a>
              <span className="mx-1">&middot;</span>
              <a href="#!">FAQ</a>
            </div>
          </div>
        </footer>
        {/* <!-- Feedback Modal--> */}
        <div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-gradient-primary-to-secondary p-4">
                <h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
                <button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body border-0 p-4">
                {/* <!-- * * * * * * * * * * * * * * *--> */}
                {/* <!-- * * SB Forms Contact Form * *--> */}
                {/* <!-- * * * * * * * * * * * * * * *--> */}
                {/* <!-- This form is pre-integrated with SB Forms.--> */}
                {/* <!-- To make this form functional, sign up at--> */}
                {/* <!-- https://startbootstrap.com/solution/contact-forms--> */}
                {/* <!-- to get an API token!--> */}
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  {/* <!-- Name input--> */}
                  <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                    <label htmlFor="name">Full name</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  {/* <!-- Email address input--> */}
                  <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                    <label htmlFor="email">Email address</label>
                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                  </div>
                  {/* <!-- Phone number input--> */}
                  <div className="form-floating mb-3">
                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                    <label htmlFor="phone">Phone number</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>
                  {/* <!-- Message input--> */}
                  <div className="form-floating mb-3">
                    <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: "10rem" }} data-sb-validations="required"></textarea>
                    <label htmlFor="message">Message</label>
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                  {/* <!-- Submit success message--> */}
                  {/* <!----> */}
                  {/* <!-- This is what your users will see when the form--> */}
                  {/* <!-- has successfully submitted--> */}
                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">Form submission successful!</div>
                      To activate this form, sign up at
                      <br />
                      <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                  </div>
                  {/* <!-- Submit error message--> */}
                  {/* <!----> */}
                  {/* <!-- This is what your users will see when there is--> */}
                  {/* <!-- an error submitting the form--> */}
                  <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                  {/* <!-- Submit Button--> */}
                  <div className="d-grid"><button className="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}


