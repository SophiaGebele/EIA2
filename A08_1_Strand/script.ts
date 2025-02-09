namespace BeachSceneAnja {
    interface Vector {
        x: number;
        y: number;
    }
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        canvas = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        drawSky({ x: 0, y: 0 });
        drawSun({ x: 400, y: 195 });
        drawSea({ x: 0, y: 200 });
        drawBeach({ x: 0, y: 300 });
        drawCloud({ x: 600, y: 125 }, { x: 150, y: 75 });
        drawCloud({ x: 200, y: 145 }, { x: 120, y: 65 });
        drawBoat({ x: 250, y: 180 }, { x: -1, y: 1 }, "#f3c4cf");
        drawBoat({ x: 400, y: 155 }, { x: 0.5, y: 0.5 }, "#CCBBEE");
        drawTowel2({ x: 300, y: 400 });
        drawPerson({ x: 300, y: 410 }, "shirt", "#8800FF");
        drawPerson({ x: 410, y: 420 }, "skirt", "#C4FAF8");
        drawSwimmer({ x: 300, y: 220 }, { x: 0.5, y: 0.5 },);
        drawSwimmer({ x: 400, y: 290 }, { x: 1, y: 1 });
        drawSurfBoard({ x: 540, y: 290 });
        drawSurfer({ x: 500, y: 200 });
        drawTowel1({ x: 500, y: 400 });
        drawTowel3({ x: 200, y: 400 });
        drawMoewe({ x: 650, y: 100 }, { x: 1, y: 1 });
        drawMoewe({ x: 600, y: 400 }, { x: 1.5, y: 1.5 });
        drawMoewe({ x: 600, y: 75 }, { x: 0.5, y: 0.5 });
        drawMoewe({ x: 700, y: 60 }, { x: 0.3, y: 0.3 });
        drawMoewe({ x: 100, y: 75 }, { x: 0.5, y: 0.5 });
        drawPalmTree({ x: 700, y: 200 }, {x: 1, y: 1});
        drawPalmTree({ x: 160, y: 170} , {x: -0.8, y: 0.9});
        drawBush({ x: 60, y: 500 }, { x: 120, y: 100 });
        drawBush({ x: 720, y: 600 }, { x: 180, y: 80 });
        drawMoewe({ x: 490, y: 550 }, { x: 1.8, y: 1.8 });




    }

    function drawSky(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 200);
        crc2.lineTo(800, 200);
        crc2.lineTo(800, 0);
        crc2.closePath();


        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 200);

        gradient.addColorStop(0, "#0047ab");
        gradient.addColorStop(.5, "#0088FF");
        gradient.addColorStop(1, "#C6E6FB");

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    function drawSea(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, 300);
        crc2.lineTo(800, 300);
        crc2.lineTo(800, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 300);

        gradient.addColorStop(0, "#7bb5d8");
        gradient.addColorStop(.5, "#3976a3");
        gradient.addColorStop(1, "#2bb8c3");

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }

    function drawBeach(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.bezierCurveTo(200, 100, 600, 130, 800, 40);
        crc2.lineTo(800, 300);
        crc2.lineTo(0, 300);
        crc2.closePath();
        crc2.fillStyle = "#fbdea4";
        crc2.fill();
        crc2.restore();
    }

    function drawSun(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(0, 0, 150, 0, 2 * Math.PI);
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 75, 0, 0, 150);
        gradient.addColorStop(0, "rgba(255,166,70, 0.75)");

        gradient.addColorStop(1, "rgba(255,166,70, 0)");
        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.beginPath();
        crc2.arc(0, 0, 75, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffa646";
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        let nParticles: number = 90;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawBush(_position: Vector, _size: Vector): void {
        let nParticles: number = 90;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#183812");
        gradient.addColorStop(1, "#407029");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawBoat(_position: Vector, _scale: Vector, _boatColor: string): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_scale.x, _scale.y)
        crc2.beginPath();
        crc2.moveTo(0, 75);
        crc2.bezierCurveTo(25, 110, 75, 110, 100, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _boatColor;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(50, 25);
        crc2.lineTo(75, 50);
        crc2.lineTo(50, 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#fffff0";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(50, 75);
        crc2.lineTo(50, 25);
        crc2.strokeStyle = "#5b3a29";
        crc2.stroke();
        crc2.restore();

    }

    function drawPerson(_position: Vector, _clothes: 'skirt' | 'shirt', _color: string): void {
        // Hände
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        // Füße
        crc2.beginPath();
        crc2.arc(30, 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(45, 88, 5.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //shirt/skirt
        crc2.beginPath();
        crc2.moveTo(37.5, 20);
        crc2.lineTo(12.5, 37.5);
        crc2.lineTo(15, 45);
        crc2.lineTo(25, 42);
        if (_clothes === 'shirt') {
            crc2.lineTo(22, 57);
            crc2.lineTo(53, 57);
        } else {
            crc2.lineTo(20, 87.5);
            crc2.lineTo(55, 87.5);
        }
        crc2.lineTo(50, 42);
        crc2.lineTo(60, 45);
        crc2.lineTo(62.5, 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();

        if (_clothes === 'shirt') {
            // hose
            crc2.beginPath();
            crc2.moveTo(25, 57);
            crc2.lineTo(27, 87.5);
            crc2.lineTo(35, 87.5);
            crc2.lineTo(36, 63);
            crc2.lineTo(39, 63);
            crc2.lineTo(40, 87.5);
            crc2.lineTo(48, 87.5);
            crc2.lineTo(50, 57);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#343F51";
            crc2.fill();
        }


        // Kopf
        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.restore();
    }

    function drawSwimmer(_position: Vector, _scale: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_scale.x, _scale.y);

        crc2.beginPath();
        crc2.moveTo(37.5, 20);
        crc2.lineTo(12.5, 37.5);
        crc2.lineTo(15, 45);
        crc2.lineTo(25, 42);

        crc2.lineTo(25, 57);
        crc2.lineTo(50, 57);



        crc2.lineTo(50, 42);
        crc2.lineTo(60, 45);
        crc2.lineTo(62.5, 37.5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.restore();
    }

    function drawSurfer(_position: Vector): void {
        //Kopf
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Körper

        
        crc2.beginPath();
        crc2.moveTo(37.5, 20);
        crc2.lineTo(12.5, 37.5);
        crc2.lineTo(15, 45);
        crc2.lineTo(25, 42);

        crc2.lineTo(25, 57);
        crc2.lineTo(50, 57);

        crc2.lineTo(50, 30);
        crc2.lineTo(65, 7.5);
        crc2.lineTo(62.5, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(64, 3, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Badehose

        crc2.beginPath();
        crc2.moveTo(25, 57);
        crc2.lineTo(27, 75);
        crc2.lineTo(35, 75);
        crc2.lineTo(36, 63);
        crc2.lineTo(39, 63);
        crc2.lineTo(40, 75);
        crc2.lineTo(48, 75);
        crc2.lineTo(50, 57);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E71837";
        crc2.fill();

        //Bein links
        crc2.beginPath();
        crc2.moveTo(28, 75);
        crc2.lineTo(28, 90);
        crc2.lineTo(34, 90);
        crc2.lineTo(34, 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();


        //Bein rechts
        crc2.beginPath();
        crc2.moveTo(46.5, 75);
        crc2.lineTo(46.5, 90);
        crc2.lineTo(40, 90);
        crc2.lineTo(40, 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Füße
        crc2.beginPath();
        crc2.arc(30, 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(45, 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.restore();
    }

    //Surfboard
    function drawSurfBoard(_position: Vector): void {

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.ellipse(0, 0, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFF99";
        crc2.fill();
        crc2.restore();
    }

    //Handtuch

    function drawTowel1(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(50, 0);
        crc2.lineTo(125, 75);
        crc2.lineTo(50, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FEA95E";
        crc2.fill();
        crc2.restore();


    }
    function drawTowel2(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(75, 0);
        crc2.lineTo(125, 0);
        crc2.lineTo(125, 75);
        crc2.lineTo(50, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CFF0CC";
        crc2.fill();
        crc2.restore();
    }
    function drawTowel3(_position: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(75, 0);
        crc2.lineTo(125, 0);
        crc2.lineTo(75, 75);
        crc2.lineTo(0, 75);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FBCCD1";
        crc2.fill();
        crc2.restore();
    }

    function drawMoewe(_position: Vector, _scale: Vector): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_scale.x, _scale.y);
        
        crc2.beginPath();
        crc2.moveTo(0, 0);
        // crc2.moveTo(650, 100);
        crc2.quadraticCurveTo(35, -25, 50, 0);
        crc2.quadraticCurveTo(70, -25, 100, 0);
        crc2.quadraticCurveTo(70, -14, 50, 0);
        crc2.quadraticCurveTo(35, -14, 0, 0);

        crc2.strokeStyle = "#000000";
        crc2.fillStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fill();
//Kopf
        crc2.beginPath();
        crc2.arc(50, 0, 7.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
//Schnabel
        crc2.beginPath();
        crc2.moveTo(47, 0);
        crc2.lineTo(50, 5);
        crc2.lineTo(53, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FF8800";
        crc2.fill();


        crc2.restore();
    }

    function drawPalmTree(_position: Vector, _scale: Vector): void {
        //Stamm
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.scale(_scale.x, _scale.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(30, 0);
        crc2.bezierCurveTo(70, 50, 90, 150, 90, 250);
        crc2.lineTo(60, 250);
        crc2.bezierCurveTo(60, 150, 40, 50, 0, 0);
        crc2.closePath();
        crc2.fillStyle = "#5B3A24";
        crc2.fill();
        crc2.stroke();

        //Krone
        crc2.save();
        crc2.translate(15, 0);
        const scaleList: Vector[] = [{ x: 1, y: 1 }, { x: -1, y: 1 }];
        const angleList: number[] = [25, -25, 0];
        for (const scale of scaleList) {
            crc2.save();
            crc2.scale(scale.x, scale.y);
            for (const angle of angleList) {
                crc2.save();
                crc2.rotate(angle * Math.PI / 180);
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.bezierCurveTo(70, 12.5, 125, 30, 170, 75);
                crc2.bezierCurveTo(140, 0, 75, -70, 0, 0);
    
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 170, 75);
    
                gradient.addColorStop(0, "#008800");
                gradient.addColorStop(.5, "#98FF98");
                gradient.addColorStop(1, "#53753C");
    
                crc2.fillStyle = gradient;
    
                crc2.fill();
                crc2.stroke();
                crc2.restore();
            }
            crc2.restore();
        }
        crc2.restore();
        crc2.restore();
    }

}