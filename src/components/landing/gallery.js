import React, { useEffect } from 'react';
import '../../css/gallery.css';
function Gallery() {
    useEffect(() => {
        var radius = 240; // how big of the radius
        var autoRotate = true; // auto rotate or not
        var rotateSpeed = -60; // unit: seconds/360 degrees
        var imgWidth = 120; // width of images (unit: px)
        var imgHeight = 170; // height of images (unit: px)

        // Link of background music - set 'null' if you dont want to play background music
        var bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
        var bgMusicControls = true; // Show UI music control
        init(1000);

        const odrag = document.getElementById('drag-container');
        const ospin = document.getElementById('spin-container');
        const aImg = ospin.getElementsByTagName('img');
        const aVid = ospin.getElementsByTagName('video');
        const aEle = [...aImg, ...aVid];


        // Size of images
        ospin.style.width = `${imgWidth}px`;
        ospin.style.height = `${imgHeight}px`;

        // Size of ground - depend on radius
        const ground = document.getElementById('ground');
        ground.style.width = `${radius * 3}px`;
        ground.style.height = `${radius * 3}px`;

        function init(delayTime) {
            const aImg = ospin.getElementsByTagName('img');
            const aVid = ospin.getElementsByTagName('video');
            aEle = [...aImg, ...aVid];
            for (let i = 0; i < aEle.length; i++) {
                aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
                aEle[i].style.transition = 'transform 1s';
                aEle[i].style.transitionDelay = `${delayTime || (aEle.length - i) / 4}s`;
            }
        }

        function applyTranform(obj) {
            // Constrain the angle of camera (between 0 and 180)
            if (tY > 180) tY = 180;
            if (tY < 0) tY = 0;

            // Apply the angle
            obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
        }

        function playSpin(yes) {
            const ospin = document.getElementById('spin-container');
            ospin.style.animationPlayState = (yes ? 'running' : 'paused');
        }

        let sX, sY, nX, nY, desX = 0,
            desY = 0,
            tX = 0,
            tY = 10;

        // auto spin
        if (autoRotate) {
            const ospin = document.getElementById('spin-container');
            const animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
            ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        }

        // add background music
        if (bgMusicURL) {
            document.getElementById('music-container').innerHTML += `
            <audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>    
              <p>If you are reading this, it is because your browser does not support the audio element.</p>
            </audio>
          `;
        }

        // setup events
        document.onpointerdown = function (e) {
            clearInterval(odrag.timer);
            e = e || window.event;
            sX = e.clientX;
            sY = e.clientY;

            document.onpointermove = function (e) {
                e = e || window.event;
                nX = e.clientX;
                nY = e.clientY;
                desX = nX - sX;
                desY = nY - sY;
                tX += desX * 0.1;
                tY += desY * 0.1;
                applyTranform(odrag);
                sX = nX;
                sY = nY;
            };

            document.onpointerup = function (e) {
                odrag.timer = setInterval(function () {
                    desX *= 0.95;
                    desY *= 0.95;
                    tX += desX * 0.1;
                    tY += desY * 0.1;
                    applyTranform(odrag);
                    playSpin(false);
                    if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                        clearInterval(odrag.timer);
                        playSpin(true);
                    }
                }, 17);
                document.onpointermove = document.onpointerup = null;
            };
            return false;
        };

        // add zoom-in/out functionality
        // if (enableZoom) {
        //     let wheelVal = 0;
        //     document.addEventListener('wheel', function (e) {
        //         wheelVal += e.deltaY;
        //         odrag.style.transform = `translateZ(-${wheelVal / 30}px)`;
        //     });
        // }
    }, []);


    // This is about
    return (
        <div className="gallery-contianer">
            <div id="drag-container">
                <div id="spin-container">
                    <img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

                    {/* <!-- Text at center of ground -->
<!--     <p>3D Tiktok Carousel</p> --> */}
                </div>
                <div id="ground"></div>
            </div>

        </div>
    );
}

export default Gallery;
