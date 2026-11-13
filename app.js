// رابط إرسال النتائج عبر خدمة Web3Forms
const WEB_APP_URL = "https://api.web3forms.com/submit";

// مصفوفة الأسئلة الـ 15 المتقدمة من ملف المتجهات في المستوى
const questions = [
  {
    q: "تحرك عدّاء مسافة 8 كم شرقاً، ثم 6 كم شمالاً، ثم 4 كم شرقاً، ثم 3 كم شمالاً. ما مقدار الإزاحة الكلية للعدّاء، وهل تقع نقاط الانعطاف على استقامة واحدة؟",
    options: [
      "15 كم، نعم تقع على استقامة واحدة لأن نسبة التغير الرأسي إلى الأفقي ثابتة (3/4)",
      "21 كم، لا تقع على استقامة واحدة لأن المسار منكسر",
      "15 كم، لا تقع على استقامة واحدة لاختلاف أطوال المثلثين",
      "10 كم، نعم تقع على استقامة واحدة"
    ],
    answer: 0
  },
  {
    q: "أي من المجموعات الآتية تضم كميات متجهة فقط بناءً على مفهوم الفيزياء والرياضيات؟",
    options: [
      "الوزن، السرعة المتجهة، القوة، الإزاحة",
      "الوزن، الشغل، الكتلة، القوة",
      "الإزاحة، الزمن، السرعة، الكثافة",
      "القوة، درجة الحرارة، الوزن، الإزاحة"
    ],
    answer: 0
  },
  {
    q: "إذا كان المتجه <span class='math-dir'>أ ب</span> في الوضع القياسي يُمثَّل بالزوج المرتب <span class='math-dir'>(-4 , 3)</span>، وكانت إحداثيات نقطة البداية <span class='math-dir'>أ (2 , -1)</span>، فما إحداثيات نقطة النهاية <span class='math-dir'>ب</span>؟",
    options: [
      "<span class='math-dir'>(-2 , 2)</span>",
      "<span class='math-dir'>(6 , -4)</span>",
      "<span class='math-dir'>(-6 , 4)</span>",
      "<span class='math-dir'>(2 , -2)</span>"
    ],
    answer: 0
  },
  {
    q: "إذا كان المتجه <span class='math-dir'>م = (2س + 3 , ص - 2)</span> يساوي المتجه <span class='math-dir'>ن = (ص , س + 3)</span>، فما قيمة المقدار <span class='math-dir'>(س + ص)</span>؟",
    options: [
      "12",
      "7",
      "5",
      "9"
    ],
    answer: 3
  },
  {
    q: "تحرك جسم من النقطة <span class='math-dir'>أ (-3 , 5)</span> إلى النقطة <span class='math-dir'>ب (0 , 8)</span>، ثم تحرك إلى النقطة <span class='math-dir'>جـ (س , 2)</span> حيث <span class='math-dir'>س > 0</span>. إذا كانت المسافة الكلية المقطوعة تساوي <span class='math-dir'>9√2</span> وحدة، فما قيمة <span class='math-dir'>س</span>؟",
    options: [
      "6",
      "3",
      "9",
      "5"
    ],
    answer: 0
  },
  {
    q: "بالاعتماد على إحداثيات النقطة <span class='math-dir'>أ (-3 , 5)</span> والنقطة <span class='math-dir'>جـ (6 , 2)</span>، ما مقدار إزاحة الجسم من نقطة البداية <span class='math-dir'>أ</span> إلى نقطة النهاية <span class='math-dir'>جـ</span>؟",
    options: [
      "<span class='math-dir'>3√10</span> وحدة",
      "<span class='math-dir'>9√2</span> وحدة",
      "<span class='math-dir'>√72</span> وحدة",
      "<span class='math-dir'>12</span> وحدة"
    ],
    answer: 0
  },
  {
    q: "ما قياس الزاوية التي يصنعها المتجه <span class='math-dir'>م = (-3 , 3)</span> مع الاتجاه الموجب لمحور السينات؟",
    options: [
      "135°",
      "45°",
      "225°",
      "315°"
    ],
    answer: 0
  },
  {
    q: "إذا كان المتجه <span class='math-dir'>أ = (3 , 3)</span> والمتجه <span class='math-dir'>ب = (2√3 , 2)</span>، فما قياس الزاوية المحصورة بين المتجهين <span class='math-dir'>أ</span> و <span class='math-dir'>ب</span>؟",
    options: [
      "15°",
      "30°",
      "45°",
      "75°"
    ],
    answer: 0
  },
  {
    q: "إذا كانت النقاط <span class='math-dir'>أ (-5 , 2)</span>، <span class='math-dir'>ب (1 , 3)</span>، <span class='math-dir'>جـ (11 , 4)</span> في المستوى الإحداثي، فما إحداثيات النقطة <span class='math-dir'>د</span> التي تجعل المتجه <span class='math-dir'>أ ب = د جـ</span>؟",
    options: [
      "<span class='math-dir'>(5 , 3)</span>",
      "<span class='math-dir'>(17 , 5)</span>",
      "<span class='math-dir'>(-5 , 3)</span>",
      "<span class='math-dir'>(5 , -3)</span>"
    ],
    answer: 0
  },
  {
    q: "أيٌّ من العبارات الآتية تصف المتجه الصفري وصفاً رياضياً دقيقاً؟",
    options: [
      "متجه طوله صفر وحدة، واتجاهه غير معيّن، ونقطة بدايته تنطبق على نقطة نهايته",
      "متجه طوله صفر وحدة، واتجاهه منطبق على الاتجاه الموجب لمحور السينات",
      "متجه طوله وحدة واحدة، ويمثل بالزوج المرتب <span class='math-dir'>(0 , 0)</span>",
      "متجه ليس له مقدار وله اتجاه محدد نحو نقطة الأصل"
    ],
    answer: 0
  },
  {
    q: "قام عامل بإزاحة صندوق من النقطة <span class='math-dir'>أ (4 , 3)</span> إلى النقطة <span class='math-dir'>ب (10 , 5)</span>. كيف يُكتب متجه الإزاحة <span class='math-dir'>أ ب</span> بدلالة متجهي الوحدة الأساسيين <span class='math-dir'>و₁</span> و <span class='math-dir'>و₂</span>؟",
    options: [
      "<span class='math-dir'>6 و₁ + 2 و₂</span>",
      "<span class='math-dir'>14 و₁ + 8 و₂</span>",
      "<span class='math-dir'>2 و₁ + 6 و₂</span>",
      "<span class='math-dir'>-6 و₁ - 2 و₂</span>"
    ],
    answer: 0
  },
  {
    q: "متجه <span class='math-dir'>ك</span> في الوضع القياسي طوله <span class='math-dir'>8</span> وحدات، ويصنع زاوية قياسها <span class='math-dir'>120°</span> مع الاتجاه الموجب لمحور السينات. ما الصورة الإحداثية للمتجه <span class='math-dir'>ك</span>؟",
    options: [
      "<span class='math-dir'>(-4 , 4√3)</span>",
      "<span class='math-dir'>(4 , 4√3)</span>",
      "<span class='math-dir'>(-4√3 , 4)</span>",
      "<span class='math-dir'>(-4 , -4√3)</span>"
    ],
    answer: 0
  },
  {
    q: "إذا كان <span class='math-dir'>م = (ك - 1) و₁ + (2ك) و₂</span> متجه وحدة، وكانت <span class='math-dir'>ك > 0</span>، فما قيمة الثابت <span class='math-dir'>ك</span>؟",
    options: [
      "<span class='math-dir'>2 / 5</span>",
      "<span class='math-dir'>1 / 5</span>",
      "<span class='math-dir'>1</span>",
      "<span class='math-dir'>3 / 5</span>"
    ],
    answer: 0
  },
  {
    q: "في المستطيل <span class='math-dir'>أ ب جـ د</span>، أيٌّ من أزواج المتجهات الآتية متساوية تماماً؟",
    options: [
      "<span class='math-dir'>أ ب = د جـ</span>",
      "<span class='math-dir'>أ ب = جـ د</span>",
      "<span class='math-dir'>أ جـ = ب د</span>",
      "<span class='math-dir'>أ د = جـ ب</span>"
    ],
    answer: 0
  },
  {
    q: "إذا كانت <span class='math-dir'>أ (2 , 3)</span>، <span class='math-dir'>ب (2 , 5)</span>، <span class='math-dir'>جـ (4 , 3)</span> ثلاث نقاط في المستوى، فما نوع المثلث <span class='math-dir'>أ ب جـ</span> من حيث أطوال أضلاعه وزواياه؟",
    options: [
      "قائم الزاوية في أ ومتساوي الساقين",
      "متساوي الأضلاع",
      "قائم الزاوية في ب ومختلف الأضلاع",
      "منفرج الزاوية في أ ومتساوي الساقين"
    ],
    answer: 0
  }
];

let shuffledQuestions = [];
let userAnswers = {};
let timerInterval;
let totalSeconds = 15 * 60; // 15 دقيقة
let isSubmitted = false;

function prepareQuestions() {
  shuffledQuestions = questions.map((item, qIndex) => {
    const optionsWithFlag = item.options.map((opt, idx) => ({
      text: opt,
      isCorrect: idx === item.answer
    }));
    for (let i = optionsWithFlag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithFlag[i], optionsWithFlag[j]] = [optionsWithFlag[j], optionsWithFlag[i]];
    }
    return {
      id: qIndex,
      q: item.q,
      options: optionsWithFlag
    };
  });
}

function startQuiz() {
  try {
    if (localStorage.getItem('vectors_quiz_done') === '1') {
      alert('تم تسليم هذا الاختبار من هذا الجهاز مسبقاً.');
      return;
    }
  } catch (e) {}
  const nameInput = document.getElementById('student-name').value.trim();
  const sectionInput = document.getElementById('student-section').value;
  let valid = true;

  if (nameInput.split(/\s+/).length < 4) {
    document.getElementById('name-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('name-error').classList.add('hidden');
  }

  if (!sectionInput) {
    document.getElementById('section-error').classList.remove('hidden');
    valid = false;
  } else {
    document.getElementById('section-error').classList.add('hidden');
  }

  if (!valid) return;

  prepareQuestions();
  renderQuestions();

  document.getElementById('display-student-info').textContent = `الطالب: ${nameInput} | الشعبة: (${sectionInput})`;
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  startTimer();
}

function renderQuestions() {
  const container = document.getElementById('questions-container');
  container.innerHTML = '';

  shuffledQuestions.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    let optionsHtml = '';
    item.options.forEach((opt, optIdx) => {
      optionsHtml += `
        <label class="option-label" id="label-${index}-${optIdx}">
          <input type="radio" name="q-${index}" value="${optIdx}" onchange="selectOption(${index}, ${optIdx})">
          <span>${opt.text}</span>
        </label>
      `;
    });

    card.innerHTML = `
      <div class="question-header">
        <span class="q-number">السؤال ${index + 1} من 15</span>
        <span class="q-marks">علامتان</span>
      </div>
      <div class="q-text">${item.q}</div>
      <div class="options-grid">${optionsHtml}</div>
    `;
    container.appendChild(card);
  });
}

function selectOption(qIndex, optIdx) {
  userAnswers[qIndex] = optIdx;
  
  for (let i = 0; i < 4; i++) {
    const lbl = document.getElementById(`label-${qIndex}-${i}`);
    if (lbl) {
      if (i === optIdx) lbl.classList.add('option-selected');
      else lbl.classList.remove('option-selected');
    }
  }

  document.getElementById('answered-count').textContent = Object.keys(userAnswers).length;
}

let endTime = 0;

function startTimer() {
  const timerEl = document.getElementById('timer');
  endTime = Date.now() + totalSeconds * 1000;
  timerInterval = setInterval(() => {
    totalSeconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
    
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (totalSeconds <= 120) {
      timerEl.classList.add('timer-warning');
    }

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      submitQuiz(true);
    }
  }, 1000);
}

function submitQuiz(isAuto) {
  if (isSubmitted) return;

  if (!isAuto) {
    const answered = Object.keys(userAnswers).length;
    if (answered < 15) {
      const confirmSubmit = confirm(`لقد أجبت على ${answered} من أصل 15 سؤالاً. هل أنت متأكد من رغبتك في تسليم الاختبار الآن؟`);
      if (!confirmSubmit) return;
    }
  }

  isSubmitted = true;
  clearInterval(timerInterval);
  try { localStorage.setItem('vectors_quiz_done', '1'); } catch (e) {}

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'جاري اعتماد النتيجة...';

  let correctCount = 0;
  shuffledQuestions.forEach((item, index) => {
    const selectedOptIdx = userAnswers[index];
    if (selectedOptIdx !== undefined && item.options[selectedOptIdx].isCorrect) {
      correctCount++;
    }
  });

  const finalScore = correctCount * 2;
  const elapsedSeconds = (15 * 60) - totalSeconds;
  const elapsedMins = Math.floor(elapsedSeconds / 60);
  const elapsedSecs = elapsedSeconds % 60;
  const timeSpentStr = `${elapsedMins} دقيقة و ${elapsedSecs} ثانية`;

  const studentName = document.getElementById('student-name').value.trim();
  const studentSection = document.getElementById('student-section').value;

  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('result-student-details').textContent = `الطالب: ${studentName} — الشعبة (${studentSection})`;
  document.getElementById('final-score').textContent = finalScore;
  document.getElementById('result-stats').textContent = `عدد الإجابات الصحيحة: ${correctCount} من أصل 15 سؤالاً | الزمن المستغرق: ${timeSpentStr}`;

  const payload = {
    access_key: "855afd4a-1b9e-4149-839d-19e4065d1ee6", // <--- ضع مفتاحك الذي وصلك على الايميل هنا بين الرمزين
    subject: `نتيجة اختبار المتجهات - ${studentName} (${studentSection})`,
    from_name: "منصة اختبارات الأستاذ محمود قط",
    "اسم_الطالب_الرباعي": studentName,
    "الشعبة": studentSection,
    "العلامة_المستحقة": `${finalScore} من 30`,
    "عدد_الإجابات_الصحيحة": `${correctCount} من 15`,
    "الزمن_المستغرق": timeSpentStr
  };

  // إرسال البيانات عبر fetch إلى Web3Forms
  fetch(WEB_APP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(async (response) => {
    const statusEl = document.getElementById('sync-status');
    if (response.status === 200) {
      statusEl.style.color = '#16a34a';
      statusEl.textContent = 'تم توثيق وإرسال علامتك بنجاح إلى بريد الأستاذ محمود قط.';
    } else {
      statusEl.style.color = '#dc2626';
      statusEl.textContent = 'حدث خطأ في الإرسال، يرجى تصوير الشاشة وإرسالها للأستاذ.';
    }
  })
  .catch(() => {
    const statusEl = document.getElementById('sync-status');
    statusEl.style.color = '#dc2626';
    statusEl.textContent = 'تعذر الاتصال بالخادم، يرجى تصوير الشاشة وإرسالها للأستاذ.';
  });
}
