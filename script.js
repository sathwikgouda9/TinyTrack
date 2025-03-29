
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f9f9f9;
    color: #333;
    line-height: 1.6;
}

.hidden {
    display: none !important;
}

.login-container {
    display: flex;
    min-height: 100vh;
}

.login-left {
    flex: 1;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
}

.login-left h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.login-left p {
    font-size: 1.1rem;
    max-width: 80%;
}

.login-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
}

.login-form {
    width: 80%;
    max-width: 400px;
}

.login-form h2 {
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #555;
}

.form-group input, 
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

.btn-login, .btn-signup, .btn-back {
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: background-color 0.3s;
}

.btn-login {
    background-color: #6e8efb;
    color: white;
}

.btn-login:hover {
    background-color: #5a7bf0;
}

.btn-signup {
    background-color: #f0f0f0;
    color: #333;
}

.btn-signup:hover {
    background-color: #e0e0e0;
}

.btn-back {
    background-color: #f0f0f0;
    color: #333;
}

.btn-back:hover {
    background-color: #e0e0e0;
}

.social-login {
    margin-top: 2rem;
    text-align: center;
}

.social-login p {
    margin-bottom: 1rem;
    color: #777;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.social-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: #f0f0f0;
    color: #555;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.social-btn:hover {
    background-color: #e0e0e0;
}

.baby-animation {
    position: relative;
    width: 150px;
    height: 150px;
    margin-bottom: 2rem;
}

.pacifier {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #ff9ff3;
    border-radius: 50%;
    top: 0;
    left: 60px;
    z-index: 2;
    animation: float 3s ease-in-out infinite;
}

.baby-face {
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: #feca57;
    border-radius: 50%;
    top: 30px;
    left: 15px;
}

.eyes {
    display: flex;
    justify-content: space-between;
    width: 70px;
    position: absolute;
    top: 40px;
    left: 25px;
}

.eye {
    width: 20px;
    height: 20px;
    background-color: #333;
    border-radius: 50%;
    animation: blink 4s infinite;
}

.mouth {
    position: absolute;
    width: 40px;
    height: 20px;
    border-bottom: 3px solid #333;
    border-radius: 0 0 20px 20px;
    top: 70px;
    left: 40px;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes blink {
    0%, 45%, 55%, 100% {
        height: 20px;
    }
    50% {
        height: 5px;
    }
}

.dashboard {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.header-left {
    display: flex;
    align-items: center;
}

.header-left h1 {
    margin-right: 2rem;
    color: #6e8efb;
}

.header-left h1 i {
    margin-right: 0.5rem;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-right: 1.5rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s;
}

nav ul li:hover {
    background-color: #f0f0f0;
}

nav ul li.active {
    background-color: #e6f0ff;
    color: #6e8efb;
}

nav ul li i {
    margin-right: 0.5rem;
}

.header-right {
    display: flex;
    align-items: center;
}

.user-profile {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.profile-pic {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.username {
    margin-right: 0.5rem;
    font-weight: 600;
}

main {
    flex: 1;
    padding: 2rem;
    background-color: #f5f7fa;
}

.page {
    display: none;
}

.page.active {
    display: block;
}
.welcome-banner {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.welcome-banner h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.stat-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.stat-card h3 {
    margin-bottom: 1rem;
    color: #555;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.btn-add {
    background-color: #f0f0f0;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 0.9rem;
}

.btn-add:hover {
    background-color: #e0e0e0;
}

.btn-add i {
    margin-right: 0.5rem;
}

.feeding {
    border-top: 4px solid #6e8efb;
}

.sleep {
    border-top: 4px solid #a777e3;
}

.diaper {
    border-top: 4px solid #feca57;
}

.growth {
    border-top: 4px solid #1dd1a1;
}

.growth-bar {
    height: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-bottom: 0.5rem;
}

.progress {
    height: 100%;
    border-radius: 5px;
    background-color: #1dd1a1;
}

.charts-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.chart-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.chart-card h3 {
    margin-bottom: 1rem;
    color: #555;
}
.nutrition-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.btn-primary {
    background-color: #6e8efb;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
    display: flex;
    align-items: center;
}

.btn-primary:hover {
    background-color: #5a7bf0;
}

.btn-primary i {
    margin-right: 0.5rem;
}

.nutrition-history {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.nutrition-history h3 {
    margin-bottom: 1rem;
    color: #555;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 0.8rem;
    text-align: left;
    border-bottom: 1px solid #eee;
}

th {
    font-weight: 600;
    color: #555;
}

td i {
    margin-right: 1rem;
    cursor: pointer;
    color: #777;
}

td i:hover {
    color: #333;
}

.sleep-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.sleep-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.sleep-stat {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.sleep-stat h3 {
    margin-bottom: 1rem;
    color: #555;
}

.sleep-stat .stat-value {
    font-size: 1.5rem;
    font-weight: 600;
}

.sleep-history {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.sleep-history h3 {
    margin-bottom: 1rem;
    color: #555;
}

.timeline {
    position: relative;
    padding-left: 2rem;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #eee;
}

.timeline-item {
    position: relative;
    margin-bottom: 1.5rem;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #a777e3;
}

.timeline-time {
    font-weight: 600;
    color: #555;
    margin-bottom: 0.5rem;
}

.timeline-content {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 4px;
}

.timeline-content h4 {
    margin-bottom: 0.5rem;
    color: #333;
}

.timeline-actions {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
}

.timeline-actions button {
    padding: 0.3rem 0.8rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
}

.btn-edit {
    background-color: #6e8efb;
    color: white;
}

.btn-delete {
    background-color: #ff6b6b;
    color: white;
}

.growth-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.metric-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    text-align: center;
}

.metric-card h3 {
    margin-bottom: 1rem;
    color: #555;
}

.metric-value {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333;
}

.metric-percentile {
    color: #777;
    font-size: 0.9rem;
}

.growth-charts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.chart-container {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.chart-container h3 {
    margin-bottom: 1rem;
    color: #555;
}

.milestones {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.milestones h3 {
    margin-bottom: 1rem;
    color: #555;
}

.milestone-progress {
    margin-bottom: 1.5rem;
}

.progress-bar {
    height: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-bottom: 0.5rem;
}

.progress-text {
    font-size: 0.9rem;
    color: #777;
}

.milestone-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.milestone-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 4px;
}

.milestone-item i {
    margin-right: 0.5rem;
}

.milestone-item.completed {
    background-color: #e6f7f0;
    color: #1dd1a1;
}

.milestone-item.in-progress {
    background-color: #fff8e6;
    color: #feca57;
}

.milestone-item.pending {
    background-color: #f0f0f0;
    color: #777;
}

.contact-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.contact-info {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.contact-info h3 {
    margin-bottom: 1rem;
    color: #555;
}

.contact-info p {
    margin-bottom: 1.5rem;
    color: #777;
}

.contact-method {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.contact-method i {
    margin-right: 1rem;
    color: #6e8efb;
    width: 20px;
    text-align: center;
}

.social-links {
    margin-top: 2rem;
}

.social-links h4 {
    margin-bottom: 1rem;
    color: #555;
}

.social-icons {
    display: flex;
    gap: 0.5rem;
}

.social-icons a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
    color: #555;
    transition: background-color 0.3s;
}

.social-icons a:hover {
    background-color: #e0e0e0;
}

.contact-form {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.contact-form h3 {
    margin-bottom: 1rem;
    color: #555;
}

.contact-form textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    resize: vertical;
}

.btn-submit {
    background-color: #6e8efb;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
    font-weight: 600;
}

.btn-submit:hover {
    background-color: #5a7bf0;
}

.chatbot-widget {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.3s ease;
}

.chatbot-widget.active {
    transform: translateY(0);
    opacity: 1;
}

.chatbot-header {
    display: flex;
    align-items: center;
    padding: 1rem;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    border-radius: 10px 10px 0 0;
}

.chatbot-avatar {
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    color: #6e8efb;
    font-size: 1.2rem;
}

.chatbot-header h3 {
    flex: 1;
    font-size: 1rem;
}

.chatbot-close {
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
}

.chatbot-messages {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
}

.message {
    max-width: 80%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border-radius: 10px;
    font-size: 0.9rem;
    line-height: 1.4;
}

.bot-message {
    background-color: #f0f0f0;
    color: #333;
    align-self: flex-start;
    margin-right: auto;
}

.user-message {
    background-color: #6e8efb;
    color: white;
    align-self: flex-end;
    margin-left: auto;
}

.chatbot-input {
    display: flex;
    padding: 1rem;
    border-top: 1px solid #eee;
}

.chatbot-input input {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 0.9rem;
    outline: none;
}

.chatbot-input button {
    background: none;
    border: none;
    color: #6e8efb;
    font-size: 1.2rem;
    margin-left: 0.5rem;
    cursor: pointer;
}

.chatbot-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1001;
    justify-content: center;
    align-items: center;
}

.modal.active {
    display: flex;
}

.modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: #777;
}

.modal h2 {
    margin-bottom: 1.5rem;
    color: #555;
}
@media (max-width: 768px) {
    .login-container {
        flex-direction: column;
    }
    
    .login-left, .login-right {
        flex: none;
        width: 100%;
    }
    
    .login-left {
        padding: 2rem 1rem;
    }
    
    .login-form {
        width: 90%;
    }
    
    header {
        flex-direction: column;
        padding: 1rem;
    }
    
    .header-left {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
    
    .header-left h1 {
        margin-bottom: 1rem;
    }
    
    nav ul {
        flex-wrap: wrap;
        width: 100%;
    }
    
    nav ul li {
        margin-bottom: 0.5rem;
    }
    
    .header-right {
        margin-top: 1rem;
        width: 100%;
        justify-content: flex-end;
    }
    
    .stats-grid, .charts-container {
        grid-template-columns: 1fr;
    }
    
    .nutrition-actions, .sleep-actions {
        flex-direction: column;
    }
    
    .chatbot-widget {
        width: 90%;
        right: 5%;
    }
}
canvas {
    width: 100% !important;
    height: auto !important;
}
