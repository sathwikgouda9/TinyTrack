document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginPage = document.getElementById('loginPage');
    const dashboard = document.getElementById('dashboard');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const showSignupBtn = document.getElementById('showSignup');
    const showLoginBtn = document.getElementById('showLogin');
    const navLinks = document.querySelectorAll('nav ul li');
    const pages = document.querySelectorAll('.page');
    const chatbotWidget = document.getElementById('chatbotWidget');
    const toggleChatbotBtn = document.getElementById('toggleChatbot');
    const closeChatbotBtn = document.getElementById('closeChatbot');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessageBtn = document.getElementById('sendMessage');
    
    // Modal Elements
    const bottleModal = document.getElementById('bottleModal');
    const solidFoodModal = document.getElementById('solidFoodModal');
    const sleepModal = document.getElementById('sleepModal');
    const bottleForm = document.getElementById('bottleForm');
    const solidFoodForm = document.getElementById('solidFoodForm');
    const sleepForm = document.getElementById('sleepForm');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    // Button Elements
    const addBottleBtn = document.getElementById('addBottleBtn');
    const addSolidFoodBtn = document.getElementById('addSolidFoodBtn');
    const addVitaminBtn = document.getElementById('addVitaminBtn');
    const startNapBtn = document.getElementById('startNapBtn');
    const startNightSleepBtn = document.getElementById('startNightSleepBtn');
    const manualSleepEntryBtn = document.getElementById('manualSleepEntryBtn');
    const addFeedingBtn = document.getElementById('addFeedingBtn');
    const addSleepBtn = document.getElementById('addSleepBtn');
    
    // Data Display Elements
    const nutritionTableBody = document.getElementById('nutritionTableBody');
    const sleepTimeline = document.getElementById('sleepTimeline');
    const lastFeedingTime = document.getElementById('lastFeedingTime');
    const lastNapTime = document.getElementById('lastNapTime');
    const todaySleep = document.getElementById('todaySleep');
    const avgSleep = document.getElementById('avgSleep');
    const lastNapDuration = document.getElementById('lastNapDuration');
    
    // Data Storage
    let babyData = {
        name: 'Baby Name',
        dob: new Date(),
        feedings: [],
        solidFoods: [],
        sleepSessions: [],
        growthRecords: []
    };
    
    // Chart Instances
    let feedingChart, sleepChart, weightChart, heightChart;
    
    // Initialize the app
    initApp();
    
    function initApp() {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        
        if (isLoggedIn) {
            loginPage.classList.add('hidden');
            dashboard.classList.remove('hidden');
            loadBabyData();
            initCharts();
            updateDashboardStats();
        } else {
            loginPage.classList.remove('hidden');
            dashboard.classList.add('hidden');
        }
        
        // Load sample data if empty
        if (babyData.feedings.length === 0 && babyData.sleepSessions.length === 0) {
            loadSampleData();
        }
    }
    
    function loadBabyData() {
        const savedData = localStorage.getItem('babyData');
        if (savedData) {
            babyData = JSON.parse(savedData);
            // Convert string dates back to Date objects
            babyData.feedings.forEach(f => f.time = new Date(f.time));
            babyData.solidFoods.forEach(f => f.time = new Date(f.time));
            babyData.sleepSessions.forEach(s => {
                s.startTime = new Date(s.startTime);
                s.endTime = new Date(s.endTime);
            });
            babyData.growthRecords.forEach(g => g.date = new Date(g.date));
        }
    }
    
    function saveBabyData() {
        localStorage.setItem('babyData', JSON.stringify(babyData));
    }
    
    function loadSampleData() {
        // Sample feeding data
        const now = new Date();
        const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
        const threeHoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000);
        
        babyData.feedings = [
            { id: generateId(), type: 'bottle', time: twoHoursAgo, amount: 180, milkType: 'breast', notes: 'Finished all' },
            { id: generateId(), type: 'bottle', time: threeHoursAgo, amount: 150, milkType: 'formula', notes: 'Left 20ml' }
        ];
        
        // Sample solid food data
        const todayLunch = new Date(now);
        todayLunch.setHours(12, 15, 0, 0);
        
        babyData.solidFoods = [
            { id: generateId(), time: todayLunch, foodType: 'Sweet potatoes', amount: '1/2 cup', reaction: 'liked', notes: 'First time trying' }
        ];
        
        // Sample sleep data
        const nap1Start = new Date(now);
        nap1Start.setHours(9, 0, 0, 0);
        const nap1End = new Date(nap1Start.getTime() + 75 * 60 * 1000);
        
        const nap2Start = new Date(now);
        nap2Start.setHours(13, 30, 0, 0);
        const nap2End = new Date(nap2Start.getTime() + 90 * 60 * 1000);
        
        babyData.sleepSessions = [
            { id: generateId(), type: 'nap', startTime: nap1Start, endTime: nap1End, quality: 'good', notes: 'Fell asleep quickly' },
            { id: generateId(), type: 'nap', startTime: nap2Start, endTime: nap2End, quality: 'restless', notes: 'Woke up once but went back to sleep' }
        ];
        
        // Sample growth data
        babyData.growthRecords = [
            { id: generateId(), date: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000), weight: 6.8, height: 65, headCircumference: 42 },
            { id: generateId(), date: now, weight: 7.5, height: 68, headCircumference: 43 }
        ];
        
        saveBabyData();
    }
    
    function generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
    
    // Login/Signup Functionality
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        loginPage.classList.add('hidden');
        dashboard.classList.remove('hidden');
        loadBabyData();
        initCharts();
        updateDashboardStats();
    });
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const parentName = document.getElementById('signupName').value;
        const babyName = document.getElementById('babyName').value;
        
        babyData.name = babyName;
        saveBabyData();
        
        localStorage.setItem('isLoggedIn', 'true');
        loginPage.classList.add('hidden');
        dashboard.classList.remove('hidden');
        loadBabyData();
        initCharts();
        updateDashboardStats();
        
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
    
    showSignupBtn.addEventListener('click', function() {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });
    
    showLoginBtn.addEventListener('click', function() {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));
            
            this.classList.add('active');
            const pageId = this.getAttribute('data-page') + 'Page';
            document.getElementById(pageId).classList.add('active');
            
            if (pageId === 'dashboardPage') {
                updateCharts();
                updateDashboardStats();
            }
            
            if (pageId === 'nutritionPage') {
                updateNutritionTable();
            }
            
            if (pageId === 'sleepPage') {
                updateSleepTimeline();
                updateSleepStats();
            }
        });
    });
    
    // Chatbot Functionality
    toggleChatbotBtn.addEventListener('click', function() {
        chatbotWidget.classList.toggle('active');
    });
    
    closeChatbotBtn.addEventListener('click', function() {
        chatbotWidget.classList.remove('active');
    });
    
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'bot-message');
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'user-message');
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    sendMessageBtn.addEventListener('click', function() {
        const message = chatbotInput.value.trim();
        if (message) {
            addUserMessage(message);
            chatbotInput.value = '';
            
            setTimeout(() => {
                const responses = [
                    "I can help you track your baby's activities. Try logging a feeding or sleep session!",
                    "Remember to log your baby's meals and naps for accurate tracking.",
                    "You can view your baby's growth progress on the Growth page.",
                    "How is your baby doing today?",
                    "Don't forget to log diaper changes too!"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addBotMessage(randomResponse);
            }, 1000);
        }
    });
    
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessageBtn.click();
        }
    });
    
    // Modal Functionality
    function openModal(modal) {
        modal.classList.add('active');
    }
    
    function closeModal(modal) {
        modal.classList.remove('active');
    }
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Add Bottle Feeding
    addBottleBtn.addEventListener('click', function() {
        const bottleTime = document.getElementById('bottleTime');
        bottleTime.value = new Date().toISOString().slice(0, 16);
        openModal(bottleModal);
    });
    
    bottleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const time = new Date(document.getElementById('bottleTime').value);
        const amount = parseInt(document.getElementById('bottleAmount').value);
        const milkType = document.getElementById('bottleType').value;
        const notes = document.getElementById('bottleNotes').value;
        
        const newFeeding = {
            id: generateId(),
            type: 'bottle',
            time: time,
            amount: amount,
            milkType: milkType,
            notes: notes
        };
        
        babyData.feedings.push(newFeeding);
        saveBabyData();
        
        updateNutritionTable();
        updateDashboardStats();
        updateCharts();
        
        this.reset();
        closeModal(bottleModal);
    });
    
    // Add Solid Food
    addSolidFoodBtn.addEventListener('click', function() {
        const foodTime = document.getElementById('foodTime');
        foodTime.value = new Date().toISOString().slice(0, 16);
        openModal(solidFoodModal);
    });
    
    solidFoodForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const time = new Date(document.getElementById('foodTime').value);
        const foodType = document.getElementById('foodType').value;
        const amount = document.getElementById('foodAmount').value;
        const reaction = document.getElementById('foodReaction').value;
        const notes = document.getElementById('foodNotes').value;
        
        const newFood = {
            id: generateId(),
            time: time,
            foodType: foodType,
            amount: amount,
            reaction: reaction,
            notes: notes
        };
        
        babyData.solidFoods.push(newFood);
        saveBabyData();
        
        updateNutritionTable();
        updateDashboardStats();
        updateCharts();
        
        this.reset();
        closeModal(solidFoodModal);
    });
    
    // Add Sleep Session
    manualSleepEntryBtn.addEventListener('click', function() {
        const now = new Date();
        const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
        
        document.getElementById('sleepStart').value = oneHourAgo.toISOString().slice(0, 16);
        document.getElementById('sleepEnd').value = now.toISOString().slice(0, 16);
        
        openModal(sleepModal);
    });
    
    sleepForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('sleepType').value;
        const startTime = new Date(document.getElementById('sleepStart').value);
        const endTime = new Date(document.getElementById('sleepEnd').value);
        const quality = document.getElementById('sleepQuality').value;
        const notes = document.getElementById('sleepNotes').value;
        
        const newSleep = {
            id: generateId(),
            type: type,
            startTime: startTime,
            endTime: endTime,
            quality: quality,
            notes: notes
        };
        
        babyData.sleepSessions.push(newSleep);
        saveBabyData();
        
        updateSleepTimeline();
        updateSleepStats();
        updateDashboardStats();
        updateCharts();
        
        this.reset();
        closeModal(sleepModal);
    });
    
    // Quick add buttons from dashboard
    addFeedingBtn.addEventListener('click', function() {
        addBottleBtn.click();
    });
    
    addSleepBtn.addEventListener('click', function() {
        manualSleepEntryBtn.click();
    });
    
    // Data Display Functions
    function updateNutritionTable() {
        nutritionTableBody.innerHTML = '';
        
        const allNutrition = [
            ...babyData.feedings.map(f => ({ ...f, isFeeding: true })),
            ...babyData.solidFoods.map(f => ({ ...f, isFeeding: false }))
        ].sort((a, b) => b.time - a.time);
        
        allNutrition.forEach(item => {
            const row = document.createElement('tr');
            
            if (item.isFeeding) {
                row.innerHTML = `
                    <td>${formatTime(item.time)}</td>
                    <td>Bottle (${item.milkType})</td>
                    <td>${item.amount}ml</td>
                    <td>${item.notes || '-'}</td>
                    <td>
                        <i class="fas fa-edit" data-id="${item.id}" data-type="feeding"></i>
                        <i class="fas fa-trash" data-id="${item.id}" data-type="feeding"></i>
                    </td>
                `;
            } else {
                row.innerHTML = `
                    <td>${formatTime(item.time)}</td>
                    <td>${item.foodType}</td>
                    <td>${item.amount}</td>
                    <td>${getReactionEmoji(item.reaction)} ${item.notes || '-'}</td>
                    <td>
                        <i class="fas fa-edit" data-id="${item.id}" data-type="solidFood"></i>
                        <i class="fas fa-trash" data-id="${item.id}" data-type="solidFood"></i>
                    </td>
                `;
            }
            
            nutritionTableBody.appendChild(row);
        });
        
        document.querySelectorAll('#nutritionTableBody .fa-edit').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const type = this.getAttribute('data-type');
                editNutritionItem(id, type);
            });
        });
        
        document.querySelectorAll('#nutritionTableBody .fa-trash').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                const type = this.getAttribute('data-type');
                deleteNutritionItem(id, type);
            });
        });
    }
    
    function editNutritionItem(id, type) {
        if (type === 'feeding') {
            const feeding = babyData.feedings.find(f => f.id === id);
            if (feeding) {
                document.getElementById('bottleTime').value = feeding.time.toISOString().slice(0, 16);
                document.getElementById('bottleAmount').value = feeding.amount;
                document.getElementById('bottleType').value = feeding.milkType;
                document.getElementById('bottleNotes').value = feeding.notes || '';
                
                bottleForm.dataset.editId = id;
                openModal(bottleModal);
            }
        } else if (type === 'solidFood') {
            const food = babyData.solidFoods.find(f => f.id === id);
            if (food) {
                document.getElementById('foodTime').value = food.time.toISOString().slice(0, 16);
                document.getElementById('foodType').value = food.foodType;
                document.getElementById('foodAmount').value = food.amount;
                document.getElementById('foodReaction').value = food.reaction;
                document.getElementById('foodNotes').value = food.notes || '';
                
                solidFoodForm.dataset.editId = id;
                openModal(solidFoodModal);
            }
        }
    }
    
    function deleteNutritionItem(id, type) {
        if (confirm('Are you sure you want to delete this item?')) {
            if (type === 'feeding') {
                babyData.feedings = babyData.feedings.filter(f => f.id !== id);
            } else if (type === 'solidFood') {
                babyData.solidFoods = babyData.solidFoods.filter(f => f.id !== id);
            }
            
            saveBabyData();
            updateNutritionTable();
            updateDashboardStats();
            updateCharts();
        }
    }
    
    function updateSleepTimeline() {
        sleepTimeline.innerHTML = '';
        
        const sortedSessions = [...babyData.sleepSessions].sort((a, b) => b.startTime - a.startTime);
        
        sortedSessions.forEach(session => {
            const duration = (session.endTime - session.startTime) / (60 * 1000);
            const hours = Math.floor(duration / 60);
            const minutes = Math.floor(duration % 60);
            
            const sessionDiv = document.createElement('div');
            sessionDiv.classList.add('timeline-item');
            sessionDiv.innerHTML = `
                <div class="timeline-time">${formatTime(session.startTime)} - ${formatTime(session.endTime)}</div>
                <div class="timeline-content">
                    <h4>${session.type === 'nap' ? 'Nap' : 'Night Sleep'}</h4>
                    <p>Duration: ${hours > 0 ? `${hours} hour${hours !== 1 ? 's' : ''} ` : ''}${minutes} minute${minutes !== 1 ? 's' : ''}</p>
                    <p>Quality: ${session.quality}</p>
                    <p>Notes: ${session.notes || 'None'}</p>
                    <div class="timeline-actions">
                        <button class="btn-edit" data-id="${session.id}"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn-delete" data-id="${session.id}"><i class="fas fa-trash"></i> Delete</button>
                    </div>
                </div>
            `;
            
            sleepTimeline.appendChild(sessionDiv);
        });
        
        document.querySelectorAll('.btn-edit').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                editSleepSession(id);
            });
        });
        
        document.querySelectorAll('.btn-delete').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                deleteSleepSession(id);
            });
        });
    }
    
    function editSleepSession(id) {
        const session = babyData.sleepSessions.find(s => s.id === id);
        if (session) {
            document.getElementById('sleepType').value = session.type;
            document.getElementById('sleepStart').value = session.startTime.toISOString().slice(0, 16);
            document.getElementById('sleepEnd').value = session.endTime.toISOString().slice(0, 16);
            document.getElementById('sleepQuality').value = session.quality;
            document.getElementById('sleepNotes').value = session.notes || '';
            
            sleepForm.dataset.editId = id;
            openModal(sleepModal);
        }
    }
    
    function deleteSleepSession(id) {
        if (confirm('Are you sure you want to delete this sleep session?')) {
            babyData.sleepSessions = babyData.sleepSessions.filter(s => s.id !== id);
            saveBabyData();
            updateSleepTimeline();
            updateSleepStats();
            updateDashboardStats();
            updateCharts();
        }
    }
    
    function updateDashboardStats() {
        // Last feeding time
        if (babyData.feedings.length > 0) {
            const lastFeeding = babyData.feedings.reduce((latest, current) => 
                current.time > latest.time ? current : latest
            );
            
            const hoursAgo = Math.floor((new Date() - lastFeeding.time) / (60 * 60 * 1000));
            const minutesAgo = Math.floor((new Date() - lastFeeding.time) / (60 * 1000) % 60);
            
            lastFeedingTime.textContent = 
                hoursAgo > 0 ? `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago` : 
                `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
        } else {
            lastFeedingTime.textContent = 'No data';
        }
        
        // Last nap time
        const naps = babyData.sleepSessions.filter(s => s.type === 'nap');
        if (naps.length > 0) {
            const lastNap = naps.reduce((latest, current) => 
                current.endTime > latest.endTime ? current : latest
            );
            
            const hoursAgo = Math.floor((new Date() - lastNap.endTime) / (60 * 60 * 1000));
            const minutesAgo = Math.floor((new Date() - lastNap.endTime) / (60 * 1000) % 60);
            
            lastNapTime.textContent = 
                hoursAgo > 0 ? `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago` : 
                `${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
        } else {
            lastNapTime.textContent = 'No data';
        }
    }
    
    function updateSleepStats() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const todaySessions = babyData.sleepSessions.filter(s => 
            s.endTime >= today && s.type === 'nap'
        );
        
        let todayTotal = 0;
        todaySessions.forEach(s => {
            todayTotal += (s.endTime - s.startTime);
        });
        
        const todayHours = Math.floor(todayTotal / (60 * 60 * 1000));
        const todayMinutes = Math.floor((todayTotal % (60 * 60 * 1000)) / (60 * 1000));
        
        todaySleep.textContent = 
            todayHours > 0 ? `${todayHours} hour${todayHours !== 1 ? 's' : ''} ${todayMinutes} minute${todayMinutes !== 1 ? 's' : ''}` : 
            `${todayMinutes} minute${todayMinutes !== 1 ? 's' : ''}`;
        
        const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        const recentSessions = babyData.sleepSessions.filter(s => s.endTime >= sevenDaysAgo);
        
        let totalSleep = 0;
        recentSessions.forEach(s => {
            totalSleep += (s.endTime - s.startTime);
        });
        
        const avgDaily = totalSleep / 7;
        const avgHours = Math.floor(avgDaily / (60 * 60 * 1000));
        const avgMinutes = Math.floor((avgDaily % (60 * 60 * 1000)) / (60 * 1000));
        
        avgSleep.textContent = 
            avgHours > 0 ? `${avgHours} hour${avgHours !== 1 ? 's' : ''} ${avgMinutes} minute${avgMinutes !== 1 ? 's' : ''}` : 
            `${avgMinutes} minute${avgMinutes !== 1 ? 's' : ''}`;
        
        const naps = babyData.sleepSessions.filter(s => s.type === 'nap');
        if (naps.length > 0) {
            const lastNap = naps.reduce((latest, current) => 
                current.endTime > latest.endTime ? current : latest
            );
            
            const duration = lastNap.endTime - lastNap.startTime;
            const hours = Math.floor(duration / (60 * 60 * 1000));
            const minutes = Math.floor((duration % (60 * 60 * 1000)) / (60 * 1000));
            
            lastNapDuration.textContent = 
                hours > 0 ? `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}` : 
                `${minutes} minute${minutes !== 1 ? 's' : ''}`;
        } else {
            lastNapDuration.textContent = 'No data';
        }
    }
    
    // Helper Functions
    function formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    function formatDate(date) {
        return date.toLocaleDateString();
    }
    
    function getReactionEmoji(reaction) {
        switch (reaction) {
            case 'liked': return '😊';
            case 'neutral': return '😐';
            case 'disliked': return '😞';
            case 'allergy': return '⚠️';
            default: return '';
        }
    }
    
    // Chart Initialization
    function initCharts() {
        // Feeding Chart
        const feedingCtx = document.getElementById('feedingChart').getContext('2d');
        feedingChart = new Chart(feedingCtx, {
            type: 'bar',
            data: {
                labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
                datasets: [{
                    label: 'Feedings (ml)',
                    data: [0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(110, 142, 251, 0.7)',
                    borderColor: 'rgba(110, 142, 251, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Amount (ml)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Time of Day'
                        }
                    }
                }
            }
        });
        
        // Sleep Chart
        const sleepCtx = document.getElementById('sleepChart').getContext('2d');
        sleepChart = new Chart(sleepCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Sleep Duration (hours)',
                    data: [0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(167, 119, 227, 0.2)',
                    borderColor: 'rgba(167, 119, 227, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hours'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Day of Week'
                        }
                    }
                }
            }
        });
        
        // Weight Chart
        const weightCtx = document.getElementById('weightChart').getContext('2d');
        weightChart = new Chart(weightCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Weight (kg)',
                    data: [],
                    backgroundColor: 'rgba(29, 209, 161, 0.2)',
                    borderColor: 'rgba(29, 209, 161, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Weight (kg)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    }
                }
            }
        });
        
        // Height Chart
        const heightCtx = document.getElementById('heightChart').getContext('2d');
        heightChart = new Chart(heightCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Height (cm)',
                    data: [],
                    backgroundColor: 'rgba(254, 202, 87, 0.2)',
                    borderColor: 'rgba(254, 202, 87, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Height (cm)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    }
                }
            }
        });
        
        updateCharts();
    }
    
    function updateCharts() {
        // Update Feeding Chart
        if (babyData.feedings.length > 0) {
            const feedingData = [0, 0, 0, 0, 0, 0, 0, 0];
            
            babyData.feedings.forEach(f => {
                const hour = f.time.getHours();
                let slot;
                
                if (hour >= 0 && hour < 3) slot = 0;
                else if (hour >= 3 && hour < 6) slot = 1;
                else if (hour >= 6 && hour < 9) slot = 2;
                else if (hour >= 9 && hour < 12) slot = 3;
                else if (hour >= 12 && hour < 15) slot = 4;
                else if (hour >= 15 && hour < 18) slot = 5;
                else if (hour >= 18 && hour < 21) slot = 6;
                else slot = 7;
                
                feedingData[slot] += f.amount;
            });
            
            feedingChart.data.datasets[0].data = feedingData;
            feedingChart.update();
        }
        
        // Update Sleep Chart
        if (babyData.sleepSessions.length > 0) {
            const sleepData = [0, 0, 0, 0, 0, 0, 0];
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            
            babyData.sleepSessions.forEach(s => {
                const day = s.startTime.getDay();
                const duration = (s.endTime - s.startTime) / (60 * 60 * 1000);
                sleepData[day] += duration;
            });
            
            // Reorder to start with Monday
            const reorderedData = [...sleepData.slice(1), sleepData[0]];
            const reorderedLabels = [...days.slice(1), days[0]];
            
            sleepChart.data.labels = reorderedLabels;
            sleepChart.data.datasets[0].data = reorderedData;
            sleepChart.update();
        }
        
        // Update Growth Charts
        if (babyData.growthRecords.length > 0) {
            const sortedRecords = [...babyData.growthRecords].sort((a, b) => a.date - b.date);
            
            weightChart.data.labels = sortedRecords.map(r => formatDate(r.date));
            weightChart.data.datasets[0].data = sortedRecords.map(r => r.weight);
            weightChart.update();
            
            heightChart.data.labels = sortedRecords.map(r => formatDate(r.date));
            heightChart.data.datasets[0].data = sortedRecords.map(r => r.height);
            heightChart.update();
        }
    }
});
