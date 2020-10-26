import React, {useEffect, useRef} from 'react';
import './App.css'
import './reset.css'

export const App = () => {
    let container = useRef(null);
    let card = useRef(null);
    let title = useRef(null);
    let sneaker = useRef(null);
    let description = useRef(null);
    let sizes = useRef(null);
    let purchase = useRef(null);

    useEffect(() => {
        container.current.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        })

        container.current.addEventListener("mouseenter", (e) => {
            title.current.style.transform = "translateZ(150px)";
            sneaker.current.style.transform = "translateZ(200px) rotateZ(-45deg)";
            description.current.style.transform = "translateZ(125px)";
            sizes.current.style.transform = "translateZ(100px)";
            purchase.current.style.transform = "translateZ(75px)";
            card.current.style.transition = "none";
        });

        container.current.addEventListener("mouseleave", (e) => {
            card.current.style.transition = "all 0.5s ease";
            card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
            title.current.style.transform = "translateZ(0px)";
            sneaker.current.style.transform = "translateZ(0px) rotateZ(0deg)";
            description.current.style.transform = "translateZ(0px)";
            sizes.current.style.transform = "translateZ(0px)";
            purchase.current.style.transform = "translateZ(0px)";
        });
    }, []);

    return (
        <div ref={container} className="container">
            <div ref={card} className="card">
                <div className="sneaker">
                    <div className="circle"/>
                    <img ref={sneaker} src="assets/adidas.png" alt="adidas"/>
                </div>
                <div className="info">
                    <h1 ref={title} className="title">Adidas ZX</h1>
                    <h3 ref={description}>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                    <div ref={sizes} className="sizes">
                        <button>39</button>
                        <button>40</button>
                        <button className="active">42</button>
                        <button>44</button>
                    </div>
                    <div className="purchase">
                        <button ref={purchase}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

