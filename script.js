// Скрипт для переключения между вкладками внутри страницы
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');

    const buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    const activeButton = document.querySelector(`.tab-buttons button[onclick="showTab('${tabId}')"]`);
    activeButton.classList.add('active');
}
