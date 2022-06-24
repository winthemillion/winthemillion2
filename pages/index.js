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
            <a className="navbar-brand fw-bold" href="#page-top">WinThe<span>Million</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

              <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li className="nav-item"><a className="nav-link me-lg-3" href="https://www.instagram.com/samcrossr/">Contáctos</a></li>
                <Link href="/buttontrack">
                <li className="nav-item"><a className="nav-link me-lg-3" >Comprar Curso</a></li>
                </Link>
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
        <header className="masthead">

          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">

                {/* <!-- Mashead text and app badges--> */}
                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                  <h1 className="display-1 lh-1 mb-3">Guía definitiva para aprender a invertir!</h1>
                  <p className="lead fw-normal text-muted mb-5">El mejor curso para aprender cómo invertir en la bolsa de valores. Deja de perder tiempo, comienza hoy mismo.</p>

                  < Countdown
                    // cantidad de horas que va a estar corriendo el reloj 3 dias en milisengundos
                    // date={Date.now() + 259200000}
                    //  date={1655959589000}
                    // TERMINA EL JUEVES A LAS 11:59:59
                    date={1656541575000}
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
                    <Link href="/buttontrack">
                    <a className="btn btn-primary rounded-pill px-3 mb-5 mb-lg-0 " >Comprar Curso por <b><s>  $94   /</s></b>   $39.99 usd</a>
                    
                    </Link>
                    {/* <span className="d-flex align-items-center"> */}

                    {/* <!-- <span className="small">Send Feedback</span> */}
                    {/* <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="google-play-badge.svg" alt="..." /></a> */}
                    {/* <!-- <a href="#!"><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a> --> */}
                    {/* </span> */}
                  </div>
                  <div className="letrero">Acceso de por vida 🥳</div>
                </div>
              </div>

              <div className="col-lg-6">
                {/* <!-- Masthead device mockup feature--> */}
                <div className="masthead-device-mockup">
                  <video style={{ maxWidth: "100%", height: "150%" }} autoPlay controls controlsList="nodownload" poster="path-1.jpg">
                    <source src="video para pagina.mp4" type="video/mp4" />
                  </video>

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

        {/* <!-- Quote/testimonial aside--> */}
        <aside className="text-center bg-gradient-primary-to-secondary">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xl-8">
                <div className="h2 fs-1 text-white mb-4">Más de 35 lecciones y 4 horas de contenido!</div>

              </div>
            </div>
          </div>
        </aside>


        {/* CONTENIDO DEL CURSO */}

        <section id="questions" className="p-5">
          <div className="container">
            <h2 className="text-center mb-4">Acerca del curso</h2>
            <div className="accordion accordion-flush" id="questions">
              {/* Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-one"
                  >
                    A quién va dirigido el curso?
                  </button>
                </h2>
                <div
                  id="question-one"
                  className="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body">
                    Este curso está dirigido a personas que han comenzado a interesarse por el mundo del traiding y la bolsa de valores. Si quieres aprender a invertir o mejorar tu trading este curso es para ti.
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-two"
                  >
                    Tiempo de duración del curso
                  </button>
                </h2>
                <div
                  id="question-two"
                  className="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body">
                    Este es un curso intensivo con 4 horas de duración, con él podrás aprender a invertir en el mercado de valores desde cualquier parte del mundo.
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-three"
                  >
                    Qué vas a aprender con este curso?
                  </button>
                </h2>
                <div
                  id="question-three"
                  className="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body">
                    Aprenderás sobre lo que es el mercado de valores, como comenzar tus primeras operaciones y análisis, además como controlar tus emociones con el fin de maximizar las ganancias cuando inviertes.
                  </div>
                </div>
              </div>
              {/* Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-four"
                  >
                    Contenido del curso
                  </button>
                </h2>
                <div
                  id="question-four"
                  className="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body">
                    <li><b>Introducción</b> / Sección de 8 lecciones.</li>
                    <li><b>Órdenes y precios</b> / Sección de 4 lecciones.</li>
                    <li><b>Recursos recomendados</b> / Sección de 3 lecciones.</li>
                    <li><b>Análisis Técnico </b>/ Sección de 9 lecciones.</li>
                    <li><b>Gestión de riesgo y gestión del dinero</b> / Sección de 6 lecciones.</li>
                    <li><b>Psicología del trading </b>/ Sección de 6 lecciones.</li>
                    <li><b>Bonus</b> (Sorpresa).</li>
                    <p>Nota:Todas las lecciones del curso están contenidas en videos, calidad 1080p. También tendrás acceso a material de apoyo y documentación usada por traders profesionales en todo el mundo.</p>
                  </div>
                </div>
              </div>
              {/* Item 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#question-five"
                  >
                    Conocimiento previo necesario para el curso
                  </button>
                </h2>
                <div
                  id="question-five"
                  className="accordion-collapse collapse"
                  data-bs-parent="#questions"
                >
                  <div className="accordion-body">
                    Este curso no necesita conocimiento previo, si tienes interés y te gusta el mercado de valores o tienes la necesidad de producir dinero extra, este curso es para ti. Paso a paso aprenderás todo lo que necesitas saber para invertir en la bolsa de valores guiado por tu instructor que esta disponible a responder preguntas siempre que necesites.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>









        {/* <!-- Basic features section--> */}
        <section className="bg-light">
          <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
              <div className="col-12 col-lg-5">
                <h2 className="display-4 lh-1 mb-4">Sobre Mi</h2>
                <p className="lead fw-normal text-muted mb-5 mb-lg-0">Mi nombre es Samuel Cross, Soy Ingeniero Civil e Inversionista. Recuerdo que cuando comencé a invertir en la bolsa de valores, no encontraba información organizada y eso me llevó a tener perdidas innecesarias, luego de años de experiencia e inversiones exitosas, decidí compartir la información organizada para personas que quieren aprender del mercado y tener éxito. </p>
              </div>
              <div className="col-12 col-lg-5">
                <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between"><img className="img-fluid" src="DSC011522.png" style={{ maxWidth: "1200px", height: "150%" }} alt="..." /></div>
              </div>
            </div>
          </div>
        </section>





        {/* <!-- App features section--> */}
        <section id="features">
          <div className="container px-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                <div className="container-fluid px-5">
                  <div className="row gx-5">


                    <div className="col-md-6 mb-5">

                      {/* <!-- INSTAGRAM--> */}
                      <div className="text-center">


                        <i className="bi bi-tiktok icon-feature text-gradient d-block mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                          </svg>
                        </i>
                        <h3 className="font-alt">Sígueme en Instagram</h3>
                        <p className="text-muted mb-0">Videos sobre la bolsa de valores y mi vida diaria.</p>
                        <a href="https://www.instagram.com/samcrossr/" className="btn btn-primary rounded-pill px-3 mb-5 mb-lg-2 mt-md-2">@samcrossr</a>
                      </div>


                    </div>

                    <div className="col-md-6 mb-5">

                      {/* <!-- TIKTOK--> */}
                      <div className="text-center">


                        <i className="bi bi-tiktok icon-feature text-gradient d-block mb-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="40px" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16" >
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                          </svg>
                        </i>
                        <h3 className="font-alt">Sígueme en TikTok</h3>
                        <p className="text-muted mb-0">Videos sobre negocios e inversiones en la bolsa de valores.</p>
                        <a href="https://www.tiktok.com/@winthemillion" className="btn btn-primary rounded-pill px-3 mb-5 mb-lg-2 mt-md-2">@winthemillion</a>
                      </div>


                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">


                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-lg-0">
                {/* <!-- Features section device mockup--> */}
                <div className="features-device-mockup">
                  <svg className="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                        <stop className="gradient-start-color" offset="0%"></stop>
                        <stop className="gradient-end-color" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50"></circle></svg>
                  <svg className="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                    <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg>
                  <svg className="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                  <div className="device-wrapper">
                    <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                      <div className="screen bg-black">
                        {/* <!-- PUT CONTENTS HERE:--> */}
                        {/* <!-- * * This can be a video, image, or just about anything else.--> */}
                        {/* <!-- * * Set the max width of your media to 100% and the height to--> */}
                        {/* <!-- * * 100% like the demo example below.--> */}
                        {/*  style={{maxWidth:"100%", height: "150%"}} */}
                        <video style={{ maxWidth: "100%", height: "100%" }} loop autoPlay muted poster="path-2.jpg">
                          <source src="Sequence 02.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* REVIEWS}*/}

        {/* <section className="container reviews bg-light">
          <div className="d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="mb-4">Estudiantes egresados</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Algunos de los comentarios de nuestros estudiantes después de hacer este curso.
              </p>
            </div>
          </div>


          <div className="row text-center">
            <div className="col-md-3 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle shadow-1-strong" width="150" height="150" />
              </div>
              <h5 className="col-mb-3">María Samantha</h5>
              <h6 className="text-primary mb-3">Estudiante de Mercadeo</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2"></i>Para mí fue increíble encontrar un curso tan completo que tiene poco tiempo, es decir lo puedes hacer en cualquier momento del día y enseñan cosas tan importantes como el libro de órdenes, luego de eso mi trading mejoró mucho.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐
                  </i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-warning">⭐</i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">
              <div className="d-flex justify-content-center mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle shadow-1-strong" width="150" height="150" />
              </div>
              <h5 className="mb-3">Ana Rodríguez</h5>
              <h6 className="text-primary mb-3">Fotógrafa</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2"></i>Súper completo, me encanta, aparte de la fotografía mi pasión durante
                el último año ha sido aprender a invertir. Con este curso mejoré bastante luego de corregir el tamaño de mis posiciones.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-0">
              <div className="d-flex justify-content-center mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle shadow-1-strong" width="150" height="150" />
              </div>
              <h5 className="mb-3">Rodrigo Jiménez</h5>
              <h6 className="text-primary mb-3">Ingeniero en Alimentos</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2"></i>Bueno en pocas palabras pasé de perder 100 o 200 
                     dólares semanales a tener una cuenta de mas de 4,500 dólares en 7 meses, pensé que seria imposible.
              </p>
              <ul className="list-unstyled d-flex justify-content-center mb-0">
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-warning">⭐</i>
                </li>
                <li>
                  <i className="far fa-star fa-sm text-warning">⭐</i>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <!-- Call to action section--> *
        <section className="cta">
          <div className="cta-content">
            <div className="container px-5">
              <h2 className="text-white display-1 lh-1 mb-4">
                Posibilidades infinitas al aprender a Invertir.
                <br />
                Comienza ahora!.
              </h2>
              <a className="btn btn-outline-light py-3 px-4 rounded-pill" href="https://winthemillion.thinkific.com/order?ct=6eedddba-aaf4-49c7-866e-0a748f380e20" target="_blank" rel="noreferrer">Comprar curso por $39.99 usd</a>
            </div>
          </div>
        </section> */}

        {/* <!-- App badge section--> */}
        {/* <!-- <section className="bg-gradient-primary-to-secondary" id="download"> 
            <div className="container px-5">
                <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="google-play-badge.svg" alt="..." /></a>
                    <a href="#!"><img className="app-badge" src="app-store-badge.svg" alt="..." /></a>
                </div>
            </div>
         </section> --> */}
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


