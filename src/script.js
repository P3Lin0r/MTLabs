function showCondition(){
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');
    
    const headerCond = document.createElement('h3')
    headerCond.textContent = 'Умова';
    
    const condition = document.createElement('p');
    fetch('./src/Сonditions/Умова1.txt')
        .then(response => response.text())
        .then(txtContent => {
            condition.textContent = txtContent;
            contentElement.appendChild(condition);
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла CSS:', error);
            codeBlock.textContent = 'Ошибка при загрузке файла CSS';
            contentElement.appendChild(codeBlock);
        });

    condition.textContent = condition;
    // contentElement.appendChild(codeBlock);
    contentElement.appendChild(headerCond);
    contentElement.appendChild(condition);
}



function showResult(){
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';
}



function showHTML() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    const htmlContent = document.documentElement.outerHTML;
    codeBlock.textContent = htmlContent;
    contentElement.appendChild(codeBlock);
}



function showCSS() {
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch('./src/styles.css')
        .then(response => response.text())
        .then(cssContent => {
            codeBlock.textContent = cssContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла CSS:', error);
            codeBlock.textContent = 'Ошибка при загрузке файла CSS';
            contentElement.appendChild(codeBlock);
        });
}



function showJS(){
    const contentElement = document.querySelector('.content');
    contentElement.innerHTML = '';

    const codeBlock = document.createElement('pre');
    codeBlock.classList.add('code');

    fetch('./src/script.js')
        .then(response => response.text())
        .then(jsContent => {
            codeBlock.textContent = jsContent;
            contentElement.appendChild(codeBlock);
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла JS:', error);
            codeBlock.textContent = 'Ошибка при загрузке файла JS';
            contentElement.appendChild(codeBlock);
        });
}