// Easter Egg Brainrot Activation - ULTIMATE GOON CLUB EDITION
document.addEventListener('DOMContentLoaded', () => {
    // Konami Code
    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
    ];
    let keySequence = [];
    let eggActivated = false;
    let particleInterval = null;
    let glitchInterval = null;
    let screenShakeActive = false;
    let megaShakeInterval = null;
    let emojiRainInterval = null;
    let discoInterval = null;

    // Check sequence - toggle activation
    document.addEventListener('keydown', (e) => {
        keySequence.push(e.code);
        if (keySequence.length > konamiCode.length) {
            keySequence.shift();
        }

        if (JSON.stringify(keySequence) === JSON.stringify(konamiCode)) {
            if (eggActivated) {
                deactivateBrainrot();
            } else {
                activateBrainrot();
            }
            keySequence = [];
        }
    });

    function activateBrainrot() {
        if (eggActivated) return;
        eggActivated = true;

        console.log('💀 ULTIMATE GOON BRAINROT ACTIVATED 💀');

        // Change le titre de la page avec animation
        animateTitle();

        // Ajoute un effet de base
        document.body.classList.add('brainrot-mode');

        // Message secret avec style
        showEasterEggMessage();

        // MEGA ULTIMATE Effets visuels de fou
        startVisualEffects();
        startGlitchEffect();
        startScreenShake();
        startMegaShake();
        startCursorTrail();
        startRandomRotations();
        startColorInversion();
        startEmojiRain();
        startDiscoMode();
        startRandomCursorEmojiReplacement();
        startRandomTextDistortion();
        startVortexEffect();
        startMatrixEffect();

        // Easter egg dans le footer
        const footer = document.querySelector('footer');
        if (footer) {
            const egg = document.createElement('div');
            egg.id = 'brainrot-footer';
            egg.innerHTML = '<span style="color: coral; font-size: 0.8em; display: block; margin-top: 5px;">🧠 ULTIMATE GOON CLUB MODE ACTIVÉ 🧠</span>';
            footer.appendChild(egg);
        }

        // Son notification (si possible)
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZSA0PVanm77BdGAg+ltryxHIpBSh+zPLaizsIGGS57OihUBELTKXh8bllHAU2jdXzzn0vBSF1xe/glEILElyx6OyrWBUIQ5zd8sFuJAUuhM/z1YU2Bhxqvu7mnEoODlOm5O+zYBoGPJPY88p2KwUme8rx3I4+CRZiturqpVITC0mi4PK8aB8GM4nU8tGAMQYfcsLu45ZFDBFYrOTurlkVB0Ga3PLEcSYEKoHO8tiJOQcZaLvt559NEAxPqOPwtmMcBjiP1/HNeSsFI3fH8N2RQAoUXrTp66hVFApGnt/yvmwhBTCG0PPTgjQGHW/A7eCZSQ0PVanm77BdGQc9ltvyxHIpBSh+zPDaizsIGGS56+mjTxELTKXh8bllHAU2jdXy0H4wBSF0xe/glEILElux6eyrWRUIRJzd8sFuJAUuhM/y1oU2Bhxqvu7mnEoPDlOm5O+zYRsGPJLZ88p3KwUme8rx3I4+CRVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMQYfccPu45ZFDBFYrOTurlkVB0Ga3PLEcSYFK4DN8tiIOQcZZ7zs56BODwxPpuPxt2IdBjiP1/HNeSsFI3fH8N+RQAoUXrTp66hWFApGnt/yv2wiBTCG0PPTgzQGHm3A7eCZSQ0PVKnn77BeGAc9ltzyxXIpBSh9y/DajDsIF2W56+mjTxEMS6Xh8bllHAU1jdXy0H4wBSF0xe/glEILElux6eyrWRUIRJvc8sFuJQUthc/y1oU3Bhxpve7mnEoPDlOl5e+zYRsGPJLZ88p3KwUme8rx3I4+CRVht+rqpVMSC0mh4PK8aiAFM4nU8tGAMgYfccPu45ZFDBFYrOTurlkVB0Ga3PLEcSYFK4DN8tiIOQcZZ7zs56BODwxPpuPxt2IdBjiP1/HNeSsFI3fH8N+RQAoUXbTp66hWFApGnt/yv2wiBTCG0PPTgzQGHm3A7eCZSg0PVKnn77BeGAc9ltzyxXIpBSh9y/DajDsIF2W56+mjUBEMS6Xh8bllHAU1jdXy0H4wBSF0xe/glEILElux');
            audio.play().catch(() => {});
        } catch(e) {}
    }

    function deactivateBrainrot() {
        if (!eggActivated) return;
        eggActivated = false;
        screenShakeActive = false;

        console.log('💀 BRAINROT DESACTIVATED 💀');

        // Restore default title
        document.title = "TD3-1 | TD4-1";

        // Remove brainrot class
        document.body.classList.remove('brainrot-mode');

        // Clear body background and filters
        document.body.style.background = '';
        document.body.style.filter = '';
        document.body.style.transform = '';
        document.body.style.perspective = '';

        // Remove all dynamic styles
        const dynamicStyles = document.querySelectorAll('style[data-brainrot]');
        dynamicStyles.forEach(style => style.remove());

        // Clear all intervals
        if (particleInterval) {
            clearInterval(particleInterval);
            particleInterval = null;
        }

        if (glitchInterval) {
            clearInterval(glitchInterval);
            glitchInterval = null;
        }

        if (megaShakeInterval) {
            clearInterval(megaShakeInterval);
            megaShakeInterval = null;
        }

        if (emojiRainInterval) {
            clearInterval(emojiRainInterval);
            emojiRainInterval = null;
        }

        if (discoInterval) {
            clearInterval(discoInterval);
            discoInterval = null;
        }

        // Remove all brainrot elements
        const particles = document.querySelectorAll('.brainrot-particle, .matrix-char, .vortex-element');
        particles.forEach(p => p.remove());

        // Remove footer message
        const footerMessage = document.getElementById('brainrot-footer');
        if (footerMessage) {
            footerMessage.remove();
        }

        // Remove all message boxes
        const msgBoxes = document.querySelectorAll('[data-brainrot-msg]');
        msgBoxes.forEach(msg => msg.remove());

        // Remove all cursor trails
        const trails = document.querySelectorAll('[style*="mix-blend-mode: screen"]');
        trails.forEach(t => t.remove());

        // Restore all transformations
        const transformedElements = document.querySelectorAll('.about-card, img, button, .card');
        transformedElements.forEach(el => {
            el.style.transform = '';
        });
    }

    function animateTitle() {
        const originalTitle = document.title;
        const brainrotTitles = [
            "🧠 ULTIMATE GOON CLUB 🧠",
            "💀 MAXIMUM BRAINROT 💀",
            "🔥 RIZZ GOD LEVEL 999 🔥",
            "🎯 OHIO FINAL BOSS 🎯",
            "✨ GOONING INTENSIFIES ✨",
            "🚀 SKIBIDI TOILET EXTREME 🚀",
            "🗿 MOAI ARMY ACTIVATED 🗿",
            "⚡ GIGACHAD ULTRA INSTINCT ⚡",
            "🍑 GYATTO MAXIMUS 🍑",
            "🌊 SIGMA SQUAD 100 🌊"
        ];

        let titleIndex = 0;
        const titleInterval = setInterval(() => {
            if (!eggActivated) {
                clearInterval(titleInterval);
                document.title = originalTitle;
                return;
            }
            document.title = brainrotTitles[titleIndex % brainrotTitles.length];
            titleIndex++;
        }, 800);
    }

    function startGlitchEffect() {
        glitchInterval = setInterval(() => {
            if (!eggActivated) return;

            // Random glitch effects
            const glitchTypes = ['text-glitch', 'image-glitch', 'screen-glitch', 'mega-glitch'];
            const type = glitchTypes[Math.floor(Math.random() * glitchTypes.length)];

            switch(type) {
                case 'text-glitch':
                    const headings = document.querySelectorAll('h1, h2, h3');
                    headings.forEach(h => {
                        const original = h.textContent;
                        const scrambled = original.split('').map(c =>
                            Math.random() > 0.6 ? String.fromCharCode(Math.random() * 94 + 33) : c
                        ).join('');
                        h.textContent = scrambled;
                        setTimeout(() => h.textContent = original, 30);
                    });
                    break;

                case 'screen-glitch':
                    document.body.style.filter = `hue-rotate(${Math.random() * 360}deg) contrast(${Math.random() + 0.7}) saturate(${Math.random() * 3 + 1})`;
                    setTimeout(() => document.body.style.filter = '', 80);
                    break;

                case 'mega-glitch':
                    document.body.style.transform = `skewX(${Math.random() * 20 - 10}deg) skewY(${Math.random() * 20 - 10}deg)`;
                    setTimeout(() => document.body.style.transform = '', 50);
                    break;
            }
        }, 600);
    }

    function startScreenShake() {
        screenShakeActive = true;
        let shakeX = 0;
        let shakeY = 0;
        let shakeDir = 1;

        const shakeInterval = setInterval(() => {
            if (!eggActivated || !screenShakeActive) {
                clearInterval(shakeInterval);
                document.body.style.transform = '';
                return;
            }

            shakeX = (Math.random() * 15 - 7.5) * shakeDir;
            shakeY = (Math.random() * 15 - 7.5) * shakeDir;
            shakeDir *= -1;

            document.body.style.transform = `translate(${shakeX}px, ${shakeY}px)`;
        }, 40);
    }

    function startMegaShake() {
        megaShakeInterval = setInterval(() => {
            if (!eggActivated) return;

            if (Math.random() > 0.85) {
                // MEGA SHAKE pendant 1 seconde
                let megaShakeCount = 0;
                const megaShake = setInterval(() => {
                    if (!eggActivated || megaShakeCount > 25) {
                        clearInterval(megaShake);
                        return;
                    }
                    document.body.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) rotate(${Math.random() * 10 - 5}deg)`;
                    megaShakeCount++;
                }, 40);
            }
        }, 2000);
    }

    function startCursorTrail() {
        document.addEventListener('mousemove', (e) => {
            if (!eggActivated) return;

            const trail = document.createElement('div');
            const colors = ['#ff00ff', '#00ffff', '#ffff00', '#00ff00', '#ff0066', '#ff0000', '#00ff', '#ff00'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];

            trail.style.cssText = `
                position: fixed;
                width: ${Math.random() * 30 + 10}px;
                height: ${Math.random() * 30 + 10}px;
                background: ${randomColor};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9997;
                left: ${e.clientX - 15}px;
                top: ${e.clientY - 15}px;
                animation: trailFade 0.6s forwards;
                mix-blend-mode: screen;
                box-shadow: 0 0 20px ${randomColor}, 0 0 40px ${randomColor};
            `;

            document.body.appendChild(trail);
            setTimeout(() => trail.remove(), 600);
        });

        // Animation pour le trail
        const trailStyle = document.createElement('style');
        trailStyle.textContent = `
            @keyframes trailFade {
                0% { transform: scale(1.5); opacity: 1; }
                100% { transform: scale(0); opacity: 0; }
            }
        `;
        document.head.appendChild(trailStyle);
    }

    function startRandomRotations() {
        const rotateInterval = setInterval(() => {
            if (!eggActivated) {
                clearInterval(rotateInterval);
                return;
            }

            const elements = document.querySelectorAll('.about-card, img, button, .card');
            elements.forEach(el => {
                if (Math.random() > 0.6) {
                    const rotation = Math.random() * 20 - 10;
                    el.style.transform = `rotate(${rotation}deg) scale(${Math.random() * 0.3 + 0.85})`;
                    setTimeout(() => el.style.transform = '', 150);
                }
            });
        }, 200);
    }

    function startColorInversion() {
        const invertInterval = setInterval(() => {
            if (!eggActivated) {
                clearInterval(invertInterval);
                document.body.style.filter = '';
                return;
            }

            if (Math.random() > 0.75) {
                document.body.style.filter = 'invert(1) hue-rotate(180deg) saturate(2)';
                setTimeout(() => {
                    document.body.style.filter = '';
                }, 200);
            }
        }, 800);
    }

    function startEmojiRain() {
        emojiRainInterval = setInterval(() => {
            if (!eggActivated) return;

            // RAIN D'EMOJIS INTENSE
            const emojis = ['🧠', '💀', '🔥', '🚀', '✨', '🎯', '💪', '🍑', '🗿', '🤡', '👽', '👹', '👺', '👻', '🤖', '💩', '🤬', '🤯', '☠️', '⚰️', '🔞', '☢️', '☣️', '🤑', '😈', ' 👿', '👹', '👺', '💀', '👻', '👽', '👾', '🤖', '😼', '😽', '🙀', '😿', '😾', '🙈', '🙉', '🙊', '💋', '💌', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '💔', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💯', '💢', '💥', '💫', '💦', '💨', '🕳️', '💣', '💬', '🗯️', '💭', '💤'];

            for (let i = 0; i < 5; i++) {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                const particle = document.createElement('div');
                particle.classList.add('brainrot-particle');
                particle.textContent = emoji;
                particle.style.cssText = `
                    position: fixed;
                    font-size: ${Math.random() * 4 + 1}em;
                    z-index: 9998;
                    left: ${Math.random() * 100}vw;
                    top: -100px;
                    animation: rainDrop ${Math.random() * 2 + 1}s forwards;
                    pointer-events: none;
                `;
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 3000);
            }
        }, 100);

        // Animation rain
        const rainStyle = document.createElement('style');
        rainStyle.setAttribute('data-brainrot', '');
        rainStyle.textContent = `
            @keyframes rainDrop {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(120vh) rotate(${Math.random() * 720}deg); opacity: 0; }
            }
        `;
        document.head.appendChild(rainStyle);
    }

    function startDiscoMode() {
        const discoColors = ['#ff0000', '#ff00ff', '#0000ff', '#00ffff', '#00ff00', '#ffff00', '#ff0066', '#9c27b0'];
        let colorIndex = 0;

        discoInterval = setInterval(() => {
            if (!eggActivated) return;

            document.body.style.background = discoColors[colorIndex % discoColors.length];
            colorIndex++;
        }, 200);
    }

    function showEasterEggMessage() {
        const messages = [
            "🧠 ULTIMATE GOON BRAINROT 🧠",
            "💀 SIGMA GRINDSET 999% 💀",
            "🧀 GYATTO LEVEL OVER 9000 🍑",
            "🤯 RIYALITY SHATTERED 🤯",
            "📈 OHIO RIZZ TRANSCENDENCE 📈",
            "🔥 FANUM TAX EVAPORATED 🔥",
            "💪 AURA LEVEL INFINITE 💪",
            "🎯 W RIZZ TRANSCENDENT 🎯",
            "🚀 BALLER ALERT LEVEL 1000+ 🚀",
            "✨ MAIN CHARACTER MULTIVERSE ✨",
            "🗿 MOAI CIVILIZATION RISES 🗿",
            "⚡ GIGACHAD AWAKENED ⚡",
            "🎭 EMOTIONAL DEVASTATION 💀",
            "🌊 BRAINROT TSUNAMI 🌊",
            "🥶 BUSSIN BEYOND REALITY 🥶",
            "🔞 GOON CLUB ELITE 🔞",
            "☢️ RADIATION BRAINROT ☢️",
            "🤑 RIZZ BILLIONAIRE 🤑"
        ];

        const randomMsg = messages[Math.floor(Math.random() * messages.length)];

        const msgBox = document.createElement('div');
        msgBox.setAttribute('data-brainrot-msg', '');
        msgBox.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
            background-size: 300% 300%;
            animation: gradientShift 0.5s infinite, eggFloat 2s ease-in-out;
            color: white;
            padding: 40px 60px;
            border-radius: 25px;
            font-size: 2.5em;
            font-weight: bold;
            text-align: center;
            z-index: 9999;
            border: 6px solid white;
            box-shadow: 0 0 150px rgba(255, 255, 255, 0.9), 0 0 300px rgba(255, 0, 255, 0.8);
            text-shadow: 0 0 20px #fff, 0 0 40px #fff, 0 0 60px #ff00ff;
        `;

        msgBox.innerHTML = `<div style="font-size: 4em; margin-bottom: 20px; animation: spinEmoji 0.5s linear infinite;">🥚</div>${randomMsg}`;

        document.body.appendChild(msgBox);

        // Animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            @keyframes spinEmoji {
                from { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.5); }
                to { transform: rotate(360deg) scale(1); }
            }
            @keyframes eggFloat {
                0% { transform: translate(-50%, -50%) scale(0) rotate(-20deg); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.2) rotate(10deg); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Remove after 4 seconds with style
        setTimeout(() => {
            msgBox.style.animation = 'none';
            msgBox.style.opacity = '0';
            msgBox.style.transform = 'translate(-50%, -50%) scale(0) rotate(720deg)';
            msgBox.style.transition = 'all 0.6s ease-in-out';
            setTimeout(() => msgBox.remove(), 600);
        }, 4000);
    }

    function startVisualEffects() {
        // Effet sur le body avec gradient ULTRA psychedelique
        document.body.style.background = `
            linear-gradient(
                45deg,
                #ff00ff, #ff0066, #ffff00, #00ff00,
                #00ffff, #9c27b0, #ff00ff, #ff0000,
                #0000ff, #00ff00
            );
            background-size: 500% 500%;
            animation: brainrotGradient 2s ease infinite;
        `;

        // Animations CSS ULTRA
        const brainrotStyle = document.createElement('style');
        brainrotStyle.setAttribute('data-brainrot', '');
        brainrotStyle.textContent = `
            .brainrot-mode h1 {
                animation: brainrotTitle 0.5s infinite alternate;
                color: #00ffff !important;
                text-transform: uppercase;
                transform-style: preserve-3d;
            }

            .brainrot-mode .about-card {
                animation: cardFloat 1s infinite alternate;
                border: 4px dashed #ff00ff !important;
                box-shadow: 0 0 50px rgba(255, 0, 255, 0.6), 0 0 100px rgba(255, 0, 255, 0.3);
            }

            .brainrot-mode #bouton-menu {
                animation: buttonWobble 0.15s infinite alternate;
                background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) !important;
                color: black !important;
                border: 4px solid #ffff00 !important;
            }

            .brainrot-mode img {
                animation: imageShake 0.3s infinite alternate;
                filter: hue-rotate(${Math.random() * 360}deg);
            }

            .brainrot-mode a {
                color: #00ff00 !important;
                text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
                animation: linkPulse 0.5s infinite alternate;
            }

            .brainrot-mode * {
                animation-duration: 0.3s !important;
            }

            @keyframes brainrotGradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            @keyframes brainrotTitle {
                from {
                    text-shadow: 0 0 20px #ff00ff, 0 0 40px #ff00ff, 0 0 60px #ff00ff, 0 0 80px #ff00ff;
                    transform: scale(1.1) rotateZ(2deg);
                }
                to {
                    text-shadow: 0 0 30px #00ffff, 0 0 50px #00ffff, 0 0 70px #00ffff, 0 0 90px #00ffff;
                    transform: scale(1) rotateZ(-2deg) skewX(3deg);
                }
            }

            @keyframes cardFloat {
                from { transform: rotate(-10deg) translateY(-30px) scale(1.1); }
                to { transform: rotate(10deg) translateY(30px) scale(1.2); }
            }

            @keyframes buttonWobble {
                from { transform: rotate(-5deg) skewX(-3deg) scale(1.1); }
                to { transform: rotate(5deg) skewX(3deg) scale(0.9); }
            }

            @keyframes imageShake {
                0% { transform: translate(0, 0) rotate(0deg) scale(1); }
                25% { transform: translate(10px, -10px) rotate(5deg) scale(1.1); }
                50% { transform: translate(-10px, 10px) rotate(-5deg) scale(0.9); }
                75% { transform: translate(10px, 10px) rotate(3deg) scale(1.05); }
                100% { transform: translate(0, 0) rotate(0deg) scale(1); }
            }

            @keyframes linkPulse {
                from { transform: scale(1); }
                to { transform: scale(1.2); }
            }

            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }

            @keyframes glitch {
                0% { clip-path: inset(0 0 0 0); transform: translate(0,0); }
                20% { clip-path: inset(20% 0 80% 0); transform: translate(-10px, 0); }
                40% { clip-path: inset(80% 0 5% 0); transform: translate(10px, 0); }
                60% { clip-path: inset(40% 0 30% 0); transform: translate(-10px, 0); }
                80% { clip-path: inset(10% 0 60% 0); transform: translate(10px, 0); }
                100% { clip-path: inset(0 0 0 0); transform: translate(0,0); }
            }

            .brainrot-mode .about-card:hover {
                animation: spin 1s linear infinite !important;
            }
        `;
        document.head.appendChild(brainrotStyle);

        // Effets de particules ULTRA GOON
        particleInterval = setInterval(() => {
            if (!eggActivated) return;

            const emojis = ['🧠', '💀', '🔥', '🚀', '✨', '🎯', '💪', '🍑', '🗿', '🤡', '👽', '👹', '👺', '👻', '🤖', '💩', '🤬', '🤯', '☠️', '⚰️', '🔞', '☢️', '☣️', '🤑', '😈', '👿', '💋', '💌', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '💟', '❣️', '💔', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💯', '💢', '💥', '💫', '💦', '💨', '🕳️', '💣', '💬', '🗯️', '💭', '💤', '👁️', '👁️‍🗨️', '🧿', '📿', '🧿', '🎬', '🎭', '🎨', '🎪', '🎢', '🎡', '🎠', '⛲', '⛱️', '🏖️', '🏝️', '🏜️', '🌋', '⛰️', '🏔️', '🗻', '🏕️', '⛺', '🏠', '🏡', '🏘️', '🏚️', '🏗️', '🏭', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛️', '⛪', '🕌', '🕍', '🕋', '⛩️', '🛤️', '🛣️', '🗾', '🎑', '🏞️', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙️', '🌃', '🌌', '🌉', '🌁'];
            const colors = ['#ff00ff', '#00ffff', '#ffff00', '#00ff00', '#ff0066', '#ff0000', '#0000ff', '#ff00'];
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];

            const particle = document.createElement('div');
            particle.classList.add('brainrot-particle');
            particle.textContent = emoji;
            particle.style.cssText = `
                position: fixed;
                font-size: ${Math.random() * 5 + 1}em;
                z-index: 9998;
                top: ${Math.random() * 100}vh;
                left: ${Math.random() * 100}vw;
                color: ${color};
                animation: floatAway ${Math.random() * 1.5 + 0.5}s forwards;
                pointer-events: none;
                text-shadow: 0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color};
            `;

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 2000);
        }, 80);

        // Animation pour les particules avec style ULTRA
        const particleStyle = document.createElement('style');
        particleStyle.setAttribute('data-brainrot', '');
        particleStyle.textContent = `
            @keyframes floatAway {
                0% {
                    transform: translate(0, 0) rotate(0deg) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                    transform: translate(0, -30px) rotate(30deg) scale(1.5);
                }
                100% {
                    transform: translate(${Math.random() * 600 - 300}px, -300px) rotate(${Math.random() * 1080}deg) scale(0);
                    opacity: 0;
                }
            }

            @keyframes pulsate {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(2); }
            }
        `;
        document.head.appendChild(particleStyle);
    }

    function startVortexEffect() {
        setInterval(() => {
            if (!eggActivated) return;

            if (Math.random() > 0.9) {
                // Créer un vortex d'emojis
                const vortexCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        const vortexEmoji = document.createElement('div');
                        vortexEmoji.classList.add('vortex-element');
                        vortexEmoji.textContent = ['🌀', '💫', '✨', '⭐', '🌟'][Math.floor(Math.random() * 5)];
                        vortexEmoji.style.cssText = `
                            position: fixed;
                            font-size: 3em;
                            left: ${vortexCenter.x}px;
                            top: ${vortexCenter.y}px;
                            z-index: 9995;
                            animation: vortexSpin ${1 + Math.random()}s linear forwards;
                            pointer-events: none;
                        `;
                        document.body.appendChild(vortexEmoji);
                        setTimeout(() => vortexEmoji.remove(), 2000);
                    }, i * 50);
                }
            }
        }, 3000);

        // Vortex animation
        const vortexStyle = document.createElement('style');
        vortexStyle.setAttribute('data-brainrot', '');
        vortexStyle.textContent = `
            @keyframes vortexSpin {
                0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
                100% {
                    transform: translate(
                        ${Math.random() * 400 - 200}px,
                        ${Math.random() * 400 - 200}px
                    ) rotate(720deg) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(vortexStyle);
    }

    function startMatrixEffect() {
        setInterval(() => {
            if (!eggActivated) return;

            // Effet Matrix
            const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
            const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];

            const matrixElement = document.createElement('div');
            matrixElement.classList.add('matrix-char');
            matrixElement.textContent = char;
            matrixElement.style.cssText = `
                position: fixed;
                font-size: 1.5em;
                color: #00ff00;
                z-index: 9994;
                left: ${Math.random() * 100}vw;
                top: -50px;
                text-shadow: 0 0 10px #00ff00;
                animation: matrixFall ${2 + Math.random() * 3}s linear forwards;
                pointer-events: none;
                font-family: monospace;
            `;

            document.body.appendChild(matrixElement);
            setTimeout(() => matrixElement.remove(), 5000);
        }, 50);

        // Matrix animation
        const matrixStyle = document.createElement('style');
        matrixStyle.setAttribute('data-brainrot', '');
        matrixStyle.textContent = `
            @keyframes matrixFall {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(110vh); opacity: 0; }
            }
        `;
        document.head.appendChild(matrixStyle);
    }

    // Fonctions bonus de malice ULTRA
    function startRandomCursorEmojiReplacement() {
        document.addEventListener('mousemove', (e) => {
            if (!eggActivated) return;

            // Une chance sur 30 de spawner un emoji géant
            if (Math.random() > 0.97) {
                const crazyEmojis = ['🗿', '👽', '🤖', '💩', '🤡', '👹', '🎆', '⚡', '🔞', '☢️', '☣️', '🤑', '😈', '👿', '💀', '☠️', '⚰️', '🧠', '🔥', '💥'];
                const emoji = crazyEmojis[Math.floor(Math.random() * crazyEmojis.length)];

                const crazy = document.createElement('div');
                crazy.style.cssText = `
                    position: fixed;
                    left: ${e.clientX}px;
                    top: ${e.clientY}px;
                    font-size: ${Math.random() * 8 + 3}em;
                    pointer-events: none;
                    z-index: 9996;
                    animation: crazySpin 0.3s ease-out forwards;
                `;
                crazy.textContent = emoji;
                document.body.appendChild(crazy);
                setTimeout(() => crazy.remove(), 300);
            }
        });

        // Ajouter l'animation
        const crazyStyle = document.createElement('style');
        crazyStyle.textContent = `
            @keyframes crazySpin {
                0% {
                    transform: scale(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: scale(1.5) rotate(${Math.random() * 1080 - 540}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(crazyStyle);
    }

    function startRandomTextDistortion() {
        setInterval(() => {
            if (!eggActivated) return;

            // Distorsion aléatoire du texte
            if (Math.random() > 0.6) {
                const allText = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li');
                const randomElement = allText[Math.floor(Math.random() * allText.length)];

                if (randomElement) {
                    const original = randomElement.textContent;
                    const flipped = original.split('').reverse().join('');

                    randomElement.textContent = flipped;
                    setTimeout(() => {
                        randomElement.textContent = original;
                    }, 80);
                }
            }
        }, 1500);
    }
});
