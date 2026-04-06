// ==========================
// SIMULADOR DE INGRESO - ANATOMÍA (ACTUALIZADO)
// ==========================

// ===== PREGUNTAS DE ANATOMÍA (NUEVO CUESTIONARIO) =====
// Extraídas del Cuestionario Final proporcionado
const questions = [
    { 
        id: 1, 
        block: 'ANATOMÍA GENERAL', 
        text: '¿Los huesos de acuerdo a su composición se clasifican en?', 
        options: ['a) Alargado, sesamoideo', 'b) Plano, irregular', 'c) Esponjosos y compactos', 'd) Irregulares, regulares'], 
        answer: 'c' 
    },
    { 
        id: 2, 
        block: 'ANATOMÍA GENERAL', 
        text: '¿Cuál es la posición anatómica correcta?', 
        options: [
            'a) Estar de pie, mirando hacia adelante, con la cabeza erguida y los pies juntos. Los brazos deben estar extendidos a los lados del cuerpo con las palmas de las manos hacia adelante.', 
            'b) Cuerpo de lado, brazos separados cruzados y pies separados.', 
            'c) Cuerpo de frente, brazos extendidos y pies cruzados.', 
            'd) Estar de pie, con los brazos extendidos hacia delante y las palmas hacia atrás.'
        ], 
        answer: 'a' 
    },
    { 
        id: 3, 
        block: 'SISTEMA DIGESTIVO', 
        text: '¿Qué órgano del sistema digestivo secreta enzimas digestivas como la amilasa y la lipasa?', 
        options: ['a) Hígado', 'b) Páncreas', 'c) Estómago', 'd) Intestino delgado'], 
        answer: 'b' 
    }, 
    { 
        id: 4, 
        block: 'SISTEMA MUSCULAR', 
        text: '¿Qué tipo de músculo se encuentra en el corazón?', 
        options: ['a) Músculo liso', 'b) Musculo involuntario', 'c) Músculo estriado esquelético', 'd) Músculo estriado cardíaco'], 
        answer: 'd' 
    }, 
    { 
        id: 5, 
        block: 'SISTEMA RESPIRATORIO', 
        text: '¿Cuál es la función principal del sistema respiratorio en el cuerpo humano?', 
        options: ['a) Regular la temperatura corporal', 'b) Intercambiar gases, como oxígeno y dióxido de carbono, entre el cuerpo y el ambiente', 'c) Producir hormonas para el crecimiento', 'd) Filtrar la sangre para eliminar toxinas'], 
        answer: 'b' 
    }, 
    { 
        id: 6, 
        block: 'SISTEMA CIRCULATORIO', 
        text: '¿Qué tipo de vasos sanguíneos se encargan de llevar sangre rica en oxígeno desde el corazón hacia los tejidos?', 
        options: ['a) Venas', 'b) Capilares', 'c) Arterias', 'd) Válvulas'], 
        answer: 'c' 
    }, 
    { 
        id: 7, 
        block: 'SISTEMA EXCRETOR', 
        text: '¿Cuál es el nombre del proceso por el cual los riñones eliminan los desechos y exceso de líquidos del cuerpo?', 
        options: ['a) Filtración', 'b) Reabsorción', 'c) Secreción', 'd) Excreción'], 
        answer: 'd' 
    }, 
    { 
        id: 8, 
        block: 'SISTEMA NERVIOSO', 
        text: '¿Cuál es la función principal del sistema nervioso?', 
        options: ['a) Regular la temperatura corporal', 'b) Controlar los movimientos del cuerpo', 'c) Procesar información sensorial', 'd) Todas las anteriores'], 
        answer: 'd' 
    }, 
    { 
        id: 9, 
        block: 'SISTEMA ENDOCRINO', 
        text: '¿Qué glándula endocrina produce la hormona adrenalina?', 
        options: ['a) Glándula pituitaria', 'b) Glándula tiroides', 'c) Glándula suprarrenal', 'd) Páncreas'], 
        answer: 'c' 
    }, 
    { 
        id: 10, 
        block: 'SISTEMA ENDOCRINO', 
        text: '¿Qué hormona produce la glándula tiroides?', 
        options: ['a) Insulina', 'b) Adrenalina', 'c) Tiroxina', 'd) Cortisol'], 
        answer: 'c' 
    }, 
    { 
        id: 11, 
        block: 'SISTEMA ENDOCRINO', 
        text: '¿Cuál es la función del sistema endocrino?', 
        options: ['a) Producir hormonas que regulan diversas funciones corporales', 'b) Regular la temperatura corporal', 'c) Controlar los movimientos del cuerpo', 'd) Procesar información sensorial'], 
        answer: 'a' 
    }, 
    { 
        id: 12, 
        block: 'HOMEOSTASIS', 
        text: '¿Qué es la homeostasis?', 
        options: ['a) La capacidad del cuerpo para mantener un entorno interno estable', 'b) La capacidad del cuerpo para adaptarse a cambios sin regulación', 'c) La capacidad del cuerpo para regular solo la temperatura corporal', 'd) La capacidad del cuerpo para eliminar desechos metabólicos'], 
        answer: 'a' 
    }, 
    { 
        id: 13, 
        block: 'CASO CLÍNICO', 
        text: 'Niño de 12 años acude con su tutor legal por presentar dolor abdominal hace aproximadamente 4 horas. Además, refiere fiebre y vómito. Al ser examinado se evidencia dolor de gran intensidad en fosa iliaca derecha (cuadrante inferior derecho). <p>¿Qué diagnóstico tiene?', 
        options: ['a) Cólico Biliar', 'b) Torsión ovárica', 'c) Apendicitis', 'd) Pancreatitis'], 
        answer: 'c' 
    }, 
    { 
        id: 14, 
        block: 'CASO CLÍNICO', 
        text: 'Paciente de 45 años con polidipsia, poliuria, pérdida de peso y glucosa en sangre de 250 mg/dL. ¿Cuál es la causa más probable?', 
        options: ['a) Insuficiencia renal', 'b) Hipertensión arterial', 'c) Diabetes mellitus', 'd) Enfermedad de la tiroides'], 
        answer: 'c' 
    }, 
    { 
        id: 15, 
        block: 'HISTOLOGÍA', 
        text: '¿Cuál es el tipo de tejido animal que se caracteriza por tener una función de almacenamiento de energía y nutrientes?', 
        options: ['a) Tejido conectivo', 'b) Tejido adiposo', 'c) Tejido muscular', 'd) Tejido nervioso'], 
        answer: 'b' 
    }, // [cite: 120, 121, 122, 123, 124, 126]
    { 
        id: 16, 
        block: 'HISTOLOGÍA', 
        text: '¿Cuál es el tipo de tejido animal que se caracteriza por tener una función de protección y defensa contra lesiones e infecciones?', 
        options: ['a) Tejido conectivo', 'b) Tejido epitelial', 'c) Tejido muscular', 'd) Tejido nervioso'], 
        answer: 'b' 
    }, // [cite: 127, 128, 129, 130, 131, 133]
    { 
        id: 17, 
        block: 'NIVELES DE ORGANIZACIÓN', 
        text: '¿Cuál es el tipo de estructura que se caracteriza por ser un conjunto de células que trabajan juntas para realizar una función específica?', 
        options: ['a) Tejido', 'b) Órgano', 'c) Sistema', 'd) Organismo'], 
        answer: 'a' 
    }, // [cite: 134, 135, 136, 137, 138, 140]
    { 
        id: 18, 
        block: 'HISTOLOGÍA', 
        text: '¿Cuál es el tipo de tejido animal que se caracteriza por tener células especializadas para la contracción y el movimiento?', 
        options: ['a) Tejido conectivo', 'b) Tejido epitelial', 'c) Tejido muscular', 'd) Tejido nervioso'], 
        answer: 'c' 
    }, // [cite: 141, 142, 143, 144, 145, 147]
    {
        id: 19, 
	block: 'BIOLOGÍA CELULAR', 
    	text: '¿A qué tipo de organización celular pertenecen las unidades estructurales y funcionales de los seres humanos?', 
    	options: ['a) Célula procariota', 'b) Célula eucariota', 'c) Célula bacteriana', 'd) Célula arquea'], 
    	answer: 'b' 
    },
    { 
        id: 20, 
        block: 'HISTOLOGÍA', 
        text: '¿Qué tipo de tejido recubre las superficies internas y externas del cuerpo (piel y membranas mucosas)?', 
        options: ['a) Tejido conectivo', 'b) Tejido nervioso', 'c) Tejido miosina', 'd) Tejido epitelial'], 
        answer: 'd' 
    } // [cite: 155, 156, 157, 158, 159, 160, 162]
];

// Variables globales
let currentQuestionIndex = 0;
let timerInterval;
const totalTime = 24 * 60; // 24 minutos
let timeRemaining = totalTime;
let userAnswers = {};
let flaggedQuestions = new Set();
let isQuizSubmitted = false;
let isQuizActive = false;

function startQuiz() {
    const email = window.currentUser ? window.currentUser.email : null;
    if (!email) {
        alert("Error: No se ha podido identificar al usuario. Por favor, inicie sesión de nuevo.");
        return;
    }

    // Verificar intentos
    const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
    let attempts = localStorage.getItem(`attempts_${email}`) || 0;
    
    if (!isAdmin && attempts >= 2) {
      alert("Ya alcanzaste el límite de 2 intentos. Se cerrará tu sesión.");
      logoutAndReload();
      return;
    }

    if (typeof registerAttempt === 'function') {
        registerAttempt();
    } else {
        console.error("La función registerAttempt no está definida.");
        return;
    }

    isQuizActive = true;
    currentQuestionIndex = 0;
    timeRemaining = totalTime;
    userAnswers = {};
    flaggedQuestions.clear();
    isQuizSubmitted = false;
    document.getElementById('intro-page-container').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'flex';
    renderQuiz();
    startTimer();
    saveProgress();
}

function renderQuiz() {
    renderNavigation();
    renderQuestion(currentQuestionIndex);
    if (window.MathJax) {
        window.MathJax.typeset();
    }
}

function renderNavigation() {
    // Apunta al nuevo ID definido en index.html
    const navContainer = document.getElementById('anatomy-nav-buttons');
    if (!navContainer) {
        console.error("Error: No se encontró el div 'anatomy-nav-buttons'.");
        return;
    }
    navContainer.innerHTML = '';

    // Limpieza preventiva
    if (document.getElementById('biology-nav-buttons')) document.getElementById('biology-nav-buttons').innerHTML = '';

    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.textContent = q.id;
        button.onclick = () => {
            renderQuestion(index);
            saveProgress(); 
        };
        
        if (userAnswers[q.id]) button.classList.add('answered');
        if (flaggedQuestions.has(q.id)) button.classList.add('flagged');
        if (index === currentQuestionIndex) button.classList.add('active');
        
        navContainer.appendChild(button);
    });
}

function renderQuestion(index) {
    currentQuestionIndex = index;
    const container = document.getElementById('question-container');
    container.innerHTML = '';
    const q = questions[index];
    document.getElementById('section-title').textContent = q.block;
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question active';

    // Renderizado estándar de texto
    let html = `<h3>Pregunta ${q.id}.</h3><p>${q.text}</p>`;

    // Imágenes opcionales (por si se agregan en el futuro)
    if (q.image) {
        const style = q.imageStyle || '';
        html += `<div class="image-container"><img src="${q.image}" alt="Imagen ${q.id}" style="${style}"></div>`;
    }
    if (q.textAfterImage) {
        html += `<p>${q.textAfterImage}</p>`;
    }
    if (q.imageOptions) {
        const style = q.imageOptionsStyle || '';
        html += `<div class="image-container"><img src="${q.imageOptions}" alt="Opciones visuales" style="${style}"></div>`;
    }

    // Opciones
    html += '<div class="options">';
    if (q.optionImages) {
        const containerClass = 'image-options-container'; 
        html += `<div class="${containerClass}">`;
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i);
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label class="image-option-label">
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    <span>${option}</span>
                    <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                </label>
            `;
        });
        html += `</div>`;
    } else {
        q.options.forEach((option, i) => {
            const optionValue = String.fromCharCode(97 + i); // Convierte 0->a, 1->b...
            const checked = userAnswers[q.id] === optionValue ? 'checked' : '';
            html += `
                <label>
                    <input type="radio" name="q${q.id}" value="${optionValue}" ${checked} onclick="handleOptionClick(${q.id}, this)">
                    ${option}
                </label>
            `;
        });
    }
    html += '</div>';
    
    questionDiv.innerHTML = html;
    container.appendChild(questionDiv);
    
    if (window.MathJax) {
        window.MathJax.typesetPromise([questionDiv]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }

    updateNavigationButtons();
}

function handleOptionClick(questionId, element) {
    userAnswers[questionId] = element.value;
    saveProgress(); 
    renderNavigation();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'none' : 'block';
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    const flagBtn = document.getElementById('flag-btn');
    if (flaggedQuestions.has(questions[currentQuestionIndex].id)) {
        flagBtn.style.backgroundColor = '#ffc107';
    } else {
        flagBtn.style.backgroundColor = '#6c757d';
    }
    renderNavigation();
}

function toggleFlaggedQuestion() {
    const currentId = questions[currentQuestionIndex].id;
    if (flaggedQuestions.has(currentId)) {
        flaggedQuestions.delete(currentId);
    } else {
        flaggedQuestions.add(currentId);
    }
    saveProgress();
    updateNavigationButtons();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
        saveProgress();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
        saveProgress();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
            return;
        }
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (timeRemaining % 5 === 0) {
            saveProgress();
        }
    }, 1000);
}

function submitQuiz() {
    if (isQuizSubmitted) return; 
    clearInterval(timerInterval);
    isQuizSubmitted = true;
    isQuizActive = false; 
    localStorage.removeItem("quizState"); 
    
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'flex';
    displayResultsPage();
}

function calculateResults() {
    let correctAnswers = 0;
    questions.forEach(q => {
        if (userAnswers[q.id] === q.answer) {
            correctAnswers++;
        }
    });
    return { correctAnswers, totalQuestions: questions.length };
}

function displayResultsPage() {
    const existingAdjustedScore = document.querySelector('.adjusted-score-display');
    if (existingAdjustedScore) {
        existingAdjustedScore.remove();
    }
    const results = calculateResults();
    const resultsScoreEl = document.querySelector('.results-score');
    resultsScoreEl.textContent = `Aciertos: ${results.correctAnswers} / ${results.totalQuestions} (${(results.correctAnswers / results.totalQuestions * 100).toFixed(1)}%)`;
    
    // Puntuación ajustada (Base 425 + Variable 575)
    const baseScore = 425;
    const variableScore = 575;
    const pointsPerAnswer = variableScore / results.totalQuestions;
    const finalScore = Math.round(baseScore + (results.correctAnswers * pointsPerAnswer));
    
    const adjustedScoreEl = document.createElement('p');
    adjustedScoreEl.className = 'results-score adjusted-score-display';
    adjustedScoreEl.style.marginTop = '15px';
    adjustedScoreEl.style.fontSize = '2.8em';
    adjustedScoreEl.innerHTML = `Puntuación Final: <strong style="color: var(--accent-color);">${finalScore} / 1000</strong>`;
    resultsScoreEl.parentNode.insertBefore(adjustedScoreEl, resultsScoreEl.nextSibling);
    
    const resultsContent = document.getElementById('results-content');
    resultsContent.innerHTML = '';
    
    questions.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = userAnswer === q.answer;
        const block = document.createElement('div');
        block.className = 'results-question-block';
        
        let html = `<h4>Pregunta ${q.id}. ${q.block}</h4><p>${q.text}</p>`;
        
        if (q.image) html += `<div class="image-container"><img src="${q.image}" style="${q.imageStyle || ''}"></div>`;
        if (q.textAfterImage) html += `<p>${q.textAfterImage}</p>`;
        if (q.imageOptions) html += `<div class="image-container"><img src="${q.imageOptions}" style="${q.imageOptionsStyle || ''}"></div>`;

        html += '<div class="options">';
        if (q.optionImages) {
            html += `<div class="image-options-container">`;
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = 'image-option-label';
                if (isSelected && isCorrect) labelClass += ' correct';
                else if (isSelected && !isCorrect) labelClass += ' incorrect';
                else if (isTheCorrectAnswer) labelClass += ' correct';
                
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        <span>${option}</span>
                        <img src="${q.optionImages[i]}" alt="Opción ${optionValue}">
                    </label>`;
            });
            html += `</div>`;
        } else {
            q.options.forEach((option, i) => {
                const optionValue = String.fromCharCode(97 + i);
                const isSelected = userAnswer === optionValue;
                const isTheCorrectAnswer = q.answer === optionValue;
                let labelClass = '';
                if (isSelected && isCorrect) labelClass = 'correct';
                else if (isSelected && !isCorrect) labelClass = 'incorrect';
                else if (isTheCorrectAnswer) labelClass = 'correct';
                
                html += `
                    <label class="${labelClass}">
                        <input type="radio" name="results_q${q.id}" value="${optionValue}" ${isSelected ? 'checked' : ''} disabled>
                        ${option}
                    </label>`;
            });
        }
        html += '</div>';
        
        if (!isCorrect) {
            html += `<p style="color: red; margin-top: 10px;">Tu respuesta: ${userAnswer ? userAnswer.toUpperCase() : 'Ninguna'}. Respuesta correcta: <strong>${q.answer.toUpperCase()}</strong></p>`;
        } else {
            html += `<p style="color: green; margin-top: 10px;">¡Respuesta correcta!</p>`;
        }
        block.innerHTML = html;
        resultsContent.appendChild(block);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise([resultsContent]).catch(function (err) {
            console.log('MathJax error: ' + err.message);
        });
    }
}

function saveProgress() {
    if (!isQuizActive || isQuizSubmitted) return;
    const state = {
        currentQuestionIndex,
        userAnswers,
        timeRemaining,
        flaggedQuestions: Array.from(flaggedQuestions)
    };
    localStorage.setItem("quizState", JSON.stringify(state));
}

function restoreProgress() {
    const savedState = localStorage.getItem("quizState");
    if (savedState) {
        const saved = JSON.parse(savedState);
        isQuizActive = true; 
        document.getElementById('intro-page-container').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'flex';
        currentQuestionIndex = saved.currentQuestionIndex || 0;
        userAnswers = saved.userAnswers || {};
        timeRemaining = saved.timeRemaining || totalTime;
        flaggedQuestions = new Set(saved.flaggedQuestions || []);
        renderQuiz();
        startTimer();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.currentUser = user; 
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('app-container').style.display = 'block';

            if (localStorage.getItem("quizState")) {
                restoreProgress();
            } else {
                document.getElementById('intro-page-container').style.display = 'flex';
                document.getElementById('quiz-page').style.display = 'none';
                document.getElementById('results-page').style.display = 'none';
            }
        } else {
            window.currentUser = null;
            document.getElementById('login-page').style.display = 'flex';
            document.getElementById('app-container').style.display = 'none';
        }
    });
});

window.addEventListener("beforeunload", (e) => {
    if (isQuizActive && !isQuizSubmitted) {
        const confirmationMessage = '¡Atención! Si cierras o recargas la pestaña, tu intento se enviará automáticamente. ¿Estás seguro?';
        e.returnValue = confirmationMessage; 
        return confirmationMessage;
    }
});

window.addEventListener("pagehide", () => {
    if (isQuizActive && !isQuizSubmitted) {
        saveProgress();
    }
});

