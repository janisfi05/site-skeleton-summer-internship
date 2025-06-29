const runButton3 = document.getElementById('run-button');
const logSection3 = document.getElementById('log-section');
const logOutput3 = document.getElementById('log-output');
const resultSection3 = document.getElementById('result-section');
const tabButtons = document.getElementById('tab-buttons');
const tabContents = document.getElementById('tab-contents');

runButton3.addEventListener('click', function() {
    const button = this;
    
    button.disabled = true;
    button.textContent = 'Processing...';
    logOutput3.innerHTML = '';
    resultSection3.classList.add('hidden');
    logSection3.classList.remove('hidden');

    const logs = [
        { text: '> Fetching video from YouTube...', delay: 0 },
        { text: '> Transcribing audio with Whisper API... (simulated 30s audio)', delay: 1500 },
        { text: '> Transcription complete. Analyzing content...', delay: 3500 },
        { text: '> Identifying key themes and quotes...', delay: 4500 },
        { text: '> Generating blog post, social thread, and video clip ideas...', delay: 6000 },
        { text: '<span class="text-green-400">> Assets generated successfully.</span>', delay: 7000 }
    ];

    logs.forEach(log => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.innerHTML = log.text;
            p.classList.add('log-line');
            logOutput3.appendChild(p);
            logOutput3.scrollTop = logOutput3.scrollHeight;
        }, log.delay);
    });

    setTimeout(() => {
        resultSection3.classList.remove('hidden');
        button.disabled = false;
        button.textContent = 'Start Repurposing';
    }, 7500);
});

tabButtons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const tab = e.target.dataset.tab;
        
        // Update button styles
        for (const btn of tabButtons.children) {
            btn.classList.remove('active');
        }
        e.target.classList.add('active');

        // Update content visibility
        for (const content of tabContents.children) {
            content.classList.remove('active');
        }
        document.getElementById(`tab-${tab}`).classList.add('active');
    }
});