let currentLabNumber = 1;



function selectLab(labNumber) {
    currentLabNumber = labNumber;
    document.querySelector('.content').innerHTML = '';
    labBtnChanger();
}

function showCondition() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const headerCond = document.createElement('h3');
    headerCond.textContent = `Умова лабораторної роботи ${currentLabNumber}`;

    const condition = document.createElement('p');
    fetch(`./src/conditions/lab${currentLabNumber}.txt`)
        .then(response => response.text())
        .then(txtContent => {
            condition.innerHTML = txtContent.replace(/\n/g, '<br>');
            contentElement.appendChild(condition);
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла:', error);
            condition.textContent = 'Ошибка при загрузке файла';
            contentElement.appendChild(condition);
        });

    contentElement.appendChild(headerCond);
    contentElement.appendChild(condition);
}


function showResult(showInContent = true) {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';



    const openButton = document.createElement('button');
    openButton.textContent = 'Відкрити сторінку у новому вікні';
    openButton.classList.add('open-page-button');

    if (showInContent) {
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '600px';
        contentElement.appendChild(iframe);
        fetch(`./src/lab-pages/lab${currentLabNumber}.html`)
            .then(response => response.text())
            .then(htmlContent => {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(htmlContent);
                iframeDoc.close();

                const link = iframeDoc.createElement('link');
                link.rel = 'stylesheet';
                link.href = `./src/lab-styles/lab${currentLabNumber}.css`;
                iframeDoc.head.appendChild(link);

                const script = iframeDoc.createElement('script');
                script.src = `./src/lab-scripts/lab${currentLabNumber}.js`;
                iframeDoc.body.appendChild(script);
            })
            .catch(error => {
                console.error('Ошибка при загрузке файла:', error);
                contentElement.innerHTML = 'Ошибка при загрузке результата';
            });


        contentElement.insertBefore(openButton, iframe);
    }
    else {
        openButton.style.height = '100px';
        contentElement.appendChild(openButton);

    }

    openButton.addEventListener('click', () => {
        window.open(`./src/lab-pages/lab${currentLabNumber}.html`, '_blank');
    });
}



function showHTML() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/lab-pages/lab${currentLabNumber}.html`)
        .then(response => response.text())
        .then(htmlContent => {
            codeBlock.textContent = htmlContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке HTML:', error);
            codeBlock.textContent = 'Ошибка при загрузке HTML';
            contentElement.appendChild(codeBlock);
        });
}



function showCSS() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/lab-styles/lab${currentLabNumber}.css`)
        .then(response => response.text())
        .then(cssContent => {
            codeBlock.textContent = cssContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке CSS:', error);
            codeBlock.textContent = 'Ошибка при загрузке CSS';
            contentElement.appendChild(codeBlock);
        });
}



function showJS() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/lab-scripts/lab${currentLabNumber}.js`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке JS:', error);
            codeBlock.textContent = 'Ошибка при загрузке JS';
            contentElement.appendChild(codeBlock);
        });
}



function selectSubMenu(labNumber) {
    const submenuLab = document.getElementById(`submenu-${labNumber}`);

    if (submenuLab.classList.contains('hidden')) {
        submenuLab.classList.remove('hidden');
    } else {
        submenuLab.classList.add('hidden');
    }
}

function showXML() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');
    fetch(`./src/lab-xmls/lab${currentLabNumber}.xml`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке XML:', error);
            codeBlock.textContent = 'Ошибка при загрузке XML';
            contentElement.appendChild(codeBlock);
        });
}
function showStModel() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const stModelimg = document.createElement('img');
    fetch(`./img/lab${currentLabNumber}StModel.png`)
        .then(response => response.blob())
        .then(blob => {
            const objectURL = URL.createObjectURL(blob);
            stModelimg.src = objectURL;
            contentElement.appendChild(stModelimg);
        })
        .catch(error => {
            console.error('Ошибка при загрузке изображения:', error);
        });
}
function showDnModel() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const dnModelimg = document.createElement('img');
    fetch(`./img/lab${currentLabNumber}DnModel.png`)
        .then(response => response.blob())
        .then(blob => {
            const objectURL = URL.createObjectURL(blob);
            dnModelimg.src = objectURL;
            contentElement.appendChild(dnModelimg);
        })
        .catch(error => {
            console.error('Ошибка при загрузке изображения:', error);
        });
}

function showDTD() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');
    fetch(`./src/lab-dtds/lab${currentLabNumber}.dtd`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке DTD:', error);
            codeBlock.textContent = 'Ошибка при загрузке DTD';
            contentElement.appendChild(codeBlock);
        });
}

function showXSD() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');
    fetch(`./src/lab-xsds/lab${currentLabNumber}.xsd`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке XSD:', error);
            codeBlock.textContent = 'Ошибка при загрузке XSD';
            contentElement.appendChild(codeBlock);
        });
}

function showXSL() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');
    fetch(`./src/lab-xsls/lab${currentLabNumber}.xsl`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке XSL:', error);
            codeBlock.textContent = 'Ошибка при загрузке XSL';
            contentElement.appendChild(codeBlock);
        });
}

/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////
/////////////////////

function showScreenshots(step) {
    const contentElement = document.querySelector('.content');

    contentElement.innerHTML = '';
    i = 1;

    function loadNextImage() {
        const img = document.createElement('img');
        img.src = `./src/lab-screenshots/lab${currentLabNumber}_screenshots/step${step}_${i}.png`;
        img.alt = `Скриншот ${step}-${i}`;
        img.style.width = '100%';
        img.style.marginBottom = '15px';

        img.onload = function () {
            contentElement.appendChild(img);
            i++;
            loadNextImage();
        };

        img.onerror = function () {
            console.log(`Файл не найден: ${img.src}, остановка загрузки.`);
        };
    }
    loadNextImage();
}

function showAnswersText(step) {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const headerCond = document.createElement('h3');
    headerCond.textContent = `Відповіді на питання:`;

    const condition = document.createElement('p');
    fetch(`./src/answers/lab${currentLabNumber}/step${step}.txt`)
        .then(response => response.text())
        .then(txtContent => {
            condition.innerHTML = txtContent.replace(/\n/g, '<br>');
            contentElement.appendChild(condition);
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла:', error);
            condition.textContent = 'Ошибка при загрузке файла';
            contentElement.appendChild(condition);
        });

    contentElement.appendChild(headerCond);
    contentElement.appendChild(condition);
}

function showServerJS(path) {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/${path}/server.js`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке JS:', error);
            codeBlock.textContent = 'Ошибка при загрузке JS';
            contentElement.appendChild(codeBlock);
        });
}

function showDockerfile() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/lab-docker/lab${currentLabNumber}docker/Dockerfile`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке Dockerfile:', error);
            codeBlock.textContent = 'Ошибка при загрузке Dockerfile';
            contentElement.appendChild(codeBlock);
        });
}
function showDockerCompose() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/lab-docker/lab${currentLabNumber}docker/docker-compose.yml`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке docker-compose:', error);
            codeBlock.textContent = 'Ошибка при загрузке docker-compose';
            contentElement.appendChild(codeBlock);
        });
}
function showPackage(path, filename = "package.json") {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/${path}/${filename}`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке package.json:', error);
            codeBlock.textContent = 'Ошибка при загрузке package.json';
            contentElement.appendChild(codeBlock);
        });
}
function showVideo() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const video = document.createElement("video");
    // video.setAttribute("controls", "play-large, restart, rewind, play, fast-forward, progress, current-time, mute, volume, captions, settings, pip, airplay, download, fullscreen");
    video.setAttribute("controls", "");

    const videoUrl = `./src/lab-videos/lab${currentLabNumber}video.mp4`;
    video.src = videoUrl;

    video.onerror = function () {
        const codeBlock = document.createElement('pre');
        codeBlock.classList.add('code');
        console.error('Ошибка при загрузке video:', error);
        codeBlock.textContent = 'Ошибка при загрузке video';
        contentElement.appendChild(codeBlock);
    }
    contentElement.appendChild(video);
}

function showFirebaseJS(path) {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch(`./src/${path}/index.js`)
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке firebase index.js:', error);
            codeBlock.textContent = 'Ошибка при загрузке firebase index.js';
            contentElement.appendChild(codeBlock);
        });
}


function labBtnChanger() {
    const bwrp = document.querySelector('.buttons-wrapper');
    bwrp.innerHTML = ' ';
    const buttons = [];

    if (currentLabNumber > 0 && currentLabNumber <= 6 || typeof currentLabNumber === 'string') {

        buttons.push(
            '<div class="button condition" onclick="showCondition()">Умова</div>',
            '<div class="button result" onclick="showResult()">Результат</div>',
            '<div class="button htmlshow" onclick="showHTML()">HTML</div>',
            '<div class="button cssshow" onclick="showCSS()">CSS</div>',
            '<div class="button jsshow" onclick="showJS()">JS</div>'
        );
    }
    if (currentLabNumber > 6) {

        if (currentLabNumber === 7) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button statisticalmodel" onclick="showStModel()">Статистична модель</div>',
                '<div class="button dynamicmodel" onclick="showDnModel()">Динамічна модель</div>',
                '<div class="button xmlshow" onclick="showXML()">XML</div>',
            );
        }
        else if (currentLabNumber === 8) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button xmlshow" onclick="showXML()">XML</div>',
                '<div class="button showDTD" onclick="showDTD()">DTD</div>',
                '<div class="button showXSD" onclick="showXSD()">XSD</div>',
            );
        }
        else if (currentLabNumber === 9) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button result" onclick="showResult(false)">Результат</div>',
                '<div class="button htmlshow" onclick="showHTML()">HTML</div>',
                '<div class="button cssshow" onclick="showCSS()">CSS</div>',
                '<div class="button jsshow" onclick="showJS()">JS</div>',
                '<div class="button xmlshow" onclick="showXML()">XML</div>',
            );
        }
        else if (currentLabNumber === 10) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button result" onclick="showResult(false)">Результат</div>',
                '<div class="button htmlshow" onclick="showHTML()">HTML</div>',
                '<div class="button cssshow" onclick="showCSS()">CSS</div>',
                '<div class="button jsshow" onclick="showJS()">JS</div>',
                '<div class="button xmlshow" onclick="showXML()">XML</div>',
            );
        }
        else if (currentLabNumber === 11) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button screenshot" onclick="showScreenshots(1)">Скріншоти крок 1</div>',
                '<div class="button screenshot" onclick="showScreenshots(2)">Скріншоти крок 2</div>',
                '<div class="button screenshot" onclick="showScreenshots(3)">Скріншоти крок 3</div>',
                '<div class="button screenshot" onclick="showScreenshots(4)">Скріншоти крок 4</div>',
                '<div class="button screenshot" onclick="showScreenshots(5)">Скріншоти крок 5</div>',
                '<div class="button screenshot" onclick="showScreenshots(6)">Скріншоти крок 6</div>',
                '<div class="button screenshot" onclick="showScreenshots(7)">Скріншоти крок 7</div>',
                '<div class="button screenshot" onclick="showScreenshots(8)">Скріншоти крок 8</div>',
            );
        }
        else if (currentLabNumber === 12) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button screenshot" onclick="showScreenshots(1)">Скріншоти крок 1</div>',
                '<div class="button screenshot" onclick="showAnswersText(1)">Відповіді до питань 1</div>',
                '<div class="button screenshot" onclick="showScreenshots(2)">Скріншоти крок 2</div>',
                '<div class="button screenshot" onclick="showAnswersText(2)">Відповіді до питань 2</div>',
                '<div class="button screenshot" onclick="showScreenshots(3)">Скріншоти крок 3</div>',
                '<div class="button screenshot" onclick="showAnswersText(3)">Відповіді до питань 3</div>',
                '<div class="button screenshot" onclick="showScreenshots(4)">Скріншоти крок 4</div>',
                '<div class="button screenshot" onclick="showAnswersText(4)">Відповіді до питань 4</div>',
                '<div class="button jsshow" onclick="showJS()">Server js</div>',
                '<div class="button screenshot" onclick="showAnswersText(5)">Контрольні відповіді</div>',
            );
        }
        else if (currentLabNumber === 13) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button result" onclick="showResult(false)">Результат</div>',
                '<div class="button htmlshow" onclick="showHTML()">HTML</div>',
                '<div class="button cssshow" onclick="showCSS()">CSS</div>',
                '<div class="button jsshow" onclick="showJS()">JS</div>',
            );
        }
        else if (currentLabNumber === 14) {
            const path = `lab-servers/lab${currentLabNumber}-server`
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button screenshot" onclick="showScreenshots(1)">Скріншоти</div>',
                `<div class="button servershow" onclick="showServerJS('${path}')">ServerJS</div>`,
            );
        }
        else if (currentLabNumber === 15) {
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
            );
        }
        else if (currentLabNumber === 16) {
            const path = `lab-docker/lab${currentLabNumber}docker`
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button condition" onclick="showDockerfile()">Dockerfile</div>',
                '<div class="button condition" onclick="showDockerCompose()">docker-compose</div>',
                `<div class="button condition" onclick="showPackage('${path}')">package.json</div>`,
                `<div class="button servershow" onclick="showServerJS('${path}')">Програма</div>`,
                '<div class="button condition" onclick="showVideo()">Відео</div>',
                '<div class="button screenshot" onclick="showScreenshots(1)">Скріншоти результату</div>',
            );
        }
        else if (currentLabNumber === 17) {
            const jpath = `lab-firebase/functions`
            const ppath = `lab-firebase`
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                `<div class="button package" onclick="showPackage('${ppath}', 'firebase.json')">firebase.json</div>`,
                `<div class="button firebasejs" onclick="showFirebaseJS('${jpath}')">index.js</div>`,
                '<div class="button video" onclick="showVideo()">Відео</div>',
                '<div class="button screenshot" onclick="showScreenshots(1)">Скріншоти результату</div>',
            );
        }
    }
    bwrp.insertAdjacentHTML('beforeend', buttons.join(''));
}

