let currentLabNumber = 1;



function selectLab(labNumber) {
    currentLabNumber = labNumber;
    document.querySelector('.content').innerHTML = '';
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

