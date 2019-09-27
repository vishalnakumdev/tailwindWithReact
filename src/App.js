import React from 'react';
import './App.css';
import './index.css'
import { Header } from './Component/Header'
import logo from './images/main.svg'
import laravel from './images/laravel_and_vue.svg'
import bootstrap from './images/bootstrap4.svg'
import cloud from './images/cloud_hosting_aodd.svg'
import vishal from './images/vishal.jpg'
import reactjs from './images/reactjs.svg'
import { Random } from 'react-animated-text';
import { height } from 'window-size';

function App() {
    return (
        <div className="app" >
            <Header />
            <div className="row bg-purple-900">
                <div className="w-full md:h-screen " id="home">
                    <div className="text-purple-300 text-3xl text-justify absolute top-10 m-24 hidden md:block">

                        <div>
                            <Random
                                text="Hi, i'm"
                                iterations={1}
                                effect="verticalFadeIn"
                                effectChange={2}
                                effectDirection="up"
                                effectDelay="0.5"
                            />
                        </div>
                        <div className="text-5xl ">
                            <Random
                                text="Vishal Nakum"
                                iterations={1}
                                effect="verticalFadeIn"
                                effectChange={2}
                                effectDirection="up"
                            />
                        </div>
                        <span className="text-purple-200">
                            <Random
                                text="Web Developer"
                                iterations={1}
                                effect="verticalFadeIn"
                                effectChange={2}
                                effectDirection="up"
                            /></span>
                    </div>
                    <img src={logo} />
                </div>
                <div className="w-full bg-purple-900">
                    <div className="container w-3/4 mx-auto text-center  text-white text-xl pb-6 pt-6">
                        I am a passionate and technical expertise developer with a strong backand in Laravel PHP framework and creative  fornt design develped in Reactsjs & Bootstrap. Personally I believe that quality and perfection requires focus and continued efforts
                    </div>
                </div>
                <div className="w-full" id="tech-stack">
                    <div className="container w-3/4 mx-auto text-center  text-white text-xl flex m-6">
                        <div className="w-1/2 rounded bg-red-400 overflow-hidden shadow-lg m-3">
                            <img src={laravel} />
                        </div>
                        <div className="w-1/2 rounded bg-blue-400 overflow-hidden shadow-lg m-3 flex content-end" >
                            <img src={reactjs} />
                        </div>
                    </div>
                    <div className="container w-3/4 mx-auto text-center  text-white text-xl flex m-6">
                        <div className="w-1/2 rounded bg-gray-400 overflow-hidden shadow-lg m-3">
                            <img src={cloud} />
                        </div>
                        <div className="w-1/2 rounded bg-indigo-700 overflow-hidden shadow-lg m-3 flex align-center ">
                            <img src={bootstrap} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-screen" id="about">
                    <div className="container w-3/4 mx-auto text-white text-xl m-6">
                        <div className="text-4xl w-full"> Get to know me: </div>
                        <br />
                        <div className="flex align-center">
                            <div className="w-1/6">
                                <img src={vishal} alt="vishal nakum" className="rounded-full w-32 h-32" />
                            </div>
                            <div className="">
                                <span>I'm a full stack web developer with 14 months of professional experience, based in Jamnagar.</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        </div>
    );
}

export default App;