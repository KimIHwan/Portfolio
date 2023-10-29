import { useCallback } from "react";
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles";
import React from 'react'

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
  return (
    <Particles
        id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            

            options={
                {
                    name: "React Polygon Mask",
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 40,
                                duration: 0.4,
                                opacity: 1,
                                size: 6,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#FFF",
                        },
                        links: {
                            blink: false,
                            color: {
                                value: "#fff",
                            },
                            consent: false,
                            distance: 30,
                            enable: true,
                            opacity: 0.4,
                            shadow: {
                                blur: 5,
                                color: {
                                    value: "lime",
                                },
                                enable: false,
                            },
                            width: 1,
                        },
                        move: {
                            enable: true,
                            outModes: "bounce",
                            speed: 1,
                        },
                        number: {
                            limit: -1,
                            value: 200,
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                speed: 2,
                                sync: false,
                            },
                            value: {
                                min: 0.05,
                                max: 0.4,
                            },
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 1,
                        },
                    },
                    polygon: {
                        draw: {
                            enable: true,
                            stroke: {
                                color: "rgba(255, 255, 255, .2)",
                                width: 0.5,
                                opacity: 0.2,
                            },
                        },
                        enable: true,
                        inline: {
                            arrangement: "equidistant",
                        },
                        move: {
                            radius: 10,
                            type: "path",
                        },
                        scale: 0.5,
                        type: "inline",
                        url: "https://particles.js.org/images/smalldeer.svg",
                    },
                    pauseOnBlur: true,
                }
            }
    />
  )
}

export default Particle