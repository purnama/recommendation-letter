// Employment Reference Letter Generator - Main Application

// Global variables
let currentLanguage = 'en';
let translations = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Employment Reference Letter Generator initialized');
    
    // Load translations
    loadTranslations();
    
    // Setup event listeners
    setupEventListeners();
    
    // Load saved data from localStorage if available
    loadSavedData();
});

// Setup event listeners
function setupEventListeners() {
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', function(e) {
            currentLanguage = e.target.value;
            loadTranslations();
        });
    }
}

// Load translations based on selected language
async function loadTranslations() {
    try {
        const response = await fetch(`i18n/${currentLanguage}.json`);
        translations = await response.json();
        updateUILanguage();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Update UI with current language translations
function updateUILanguage() {
    if (!translations.ui) return;
    
    // Update header
    const appTitle = document.getElementById('app-title');
    if (appTitle) appTitle.textContent = translations.ui.appTitle;
    
    // Update intro section
    const introTitle = document.getElementById('intro-title');
    if (introTitle) introTitle.textContent = translations.ui.introTitle;
    
    const formTitle = document.getElementById('form-title');
    if (formTitle) formTitle.textContent = translations.ui.formTitle;
    
    const formSubtitle = document.getElementById('form-subtitle');
    if (formSubtitle) formSubtitle.textContent = translations.ui.formSubtitle;
    
    // Update intro content if translations available
    updateIntroContent();
}

// Update introduction content
function updateIntroContent() {
    if (!translations.intro) return;
    
    const introContent = document.getElementById('intro-content');
    if (!introContent) return;
    
    introContent.innerHTML = `
        <p class="lead">${translations.intro.description}</p>
        <p>${translations.intro.germanSystem}</p>
        
        <h5 class="mt-4">${translations.intro.howItWorksTitle}</h5>
        <ol>
            ${translations.intro.howItWorks.map(step => `<li>${step}</li>`).join('')}
        </ol>

        <div class="alert alert-info mt-4" role="alert">
            <h6 class="alert-heading">${translations.intro.ratingsTitle}</h6>
            <ul class="mb-0">
                <li><strong>${translations.ratings.veryGood.label}</strong> - ${translations.ratings.veryGood.description}</li>
                <li><strong>${translations.ratings.good.label}</strong> - ${translations.ratings.good.description}</li>
                <li><strong>${translations.ratings.satisfactory.label}</strong> - ${translations.ratings.satisfactory.description}</li>
                <li><strong>${translations.ratings.adequate.label}</strong> - ${translations.ratings.adequate.description}</li>
                <li><strong>${translations.ratings.poor.label}</strong> - ${translations.ratings.poor.description}</li>
            </ul>
        </div>
    `;
}

// Save form data to localStorage
function saveFormData(data) {
    try {
        localStorage.setItem('referenceLetterData', JSON.stringify(data));
        console.log('Form data saved');
    } catch (error) {
        console.error('Error saving form data:', error);
    }
}

// Load saved form data from localStorage
function loadSavedData() {
    try {
        const savedData = localStorage.getItem('referenceLetterData');
        if (savedData) {
            const data = JSON.parse(savedData);
            console.log('Loaded saved data:', data);
            // TODO: Populate form fields with saved data
        }
    } catch (error) {
        console.error('Error loading saved data:', error);
    }
}

// Clear saved data
function clearSavedData() {
    localStorage.removeItem('referenceLetterData');
    console.log('Saved data cleared');
}
