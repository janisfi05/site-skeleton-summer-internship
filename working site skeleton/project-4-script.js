const runButton4 = document.getElementById('run-button');
const resultPanel = document.getElementById('result-panel');
const botStatus = document.getElementById('bot-status');
const botResults = document.getElementById('bot-results');

runButton4.addEventListener('click', function() {
    this.disabled = true;
    this.textContent = 'InsightBot is thinking...';
    
    resultPanel.classList.remove('opacity-0', 'translate-y-5');
    botResults.classList.add('hidden');
    botStatus.textContent = 'Analyzing conversation...';

    setTimeout(() => {
        botStatus.textContent = 'Summary complete.';
        botResults.classList.remove('hidden');
        this.disabled = false;
        this.textContent = '@InsightBot summarize this';
    }, 2500);
});