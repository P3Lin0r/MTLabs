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
            condition.textContent = txtContent;
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



function showResult() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

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

    const openButton = document.createElement('button');
    openButton.textContent = 'Відкрити сторінку у новому вікні';
    openButton.classList.add('open-page-button');

    openButton.addEventListener('click', () => {
        window.open(`./src/lab-pages/lab${currentLabNumber}.html`, '_blank');
    });

    contentElement.insertBefore(openButton, iframe);
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
///////////////
/////////////
//////////////
/////////////
//////////////
//////////

function showXML(){
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
function showDnModel(){
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


function labBtnChanger(){
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
    if(currentLabNumber > 6 && currentLabNumber <=10){
        
        if(currentLabNumber === 7){
            buttons.push(
                '<div class="button condition" onclick="showCondition()">Умова</div>',
                '<div class="button statisticalmodel" onclick="showStModel()">Статистична модель</div>',
                '<div class="button dynamicmodel" onclick="showDnModel()">Динамічна модель</div>',
                '<div class="button xmlshow" onclick="showXML()">XML</div>',
            );
        }
        else if(currentLabNumber === 8){

        }
        else if(currentLabNumber === 7){

        }
        else if(currentLabNumber === 8){
            
        }
    }
    bwrp.insertAdjacentHTML('beforeend', buttons.join(''));
}

