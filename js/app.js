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
    
    // Auto-generate letter after a short delay to ensure translations are loaded
    setTimeout(() => {
        if (typeof generateLetter === 'function') {
            generateLetter();
        }
    }, 1000);
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
    
    // Introduction variant selection
    document.querySelectorAll('input[name="introVariant"]').forEach(radio => {
        radio.addEventListener('change', updateIntroductionText);
    });
    
    // Duties variant selection
    document.querySelectorAll('input[name="dutiesVariant"]').forEach(radio => {
        radio.addEventListener('change', updateDutiesIntroText);
    });
    
    // Company description variant selection
    document.querySelectorAll('input[name="companyVariant"]').forEach(radio => {
        radio.addEventListener('change', updateCompanyDescriptionText);
    });
    
    // Employee info fields - update introduction when changed
    const employeeFields = ['title', 'firstName', 'lastName', 'dateOfBirth', 'placeOfBirth', 'position', 'department', 'startDate', 'endDate'];
    employeeFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', updateIntroductionText);
            field.addEventListener('change', updateIntroductionText);
            field.addEventListener('input', updateAllPerformanceTexts);
            field.addEventListener('change', updateAllPerformanceTexts);
        }
    });
    
    // Performance rating listeners
    setupPerformanceListeners('knowledge');
    setupPerformanceListeners('willingness');
    setupPerformanceListeners('workstyle');
    setupPerformanceListeners('quality');
    setupPerformanceListeners('resilience');
    setupPerformanceListeners('leadership');
    setupPerformanceListeners('overall');
    setupPerformanceListeners('social');
    setupPerformanceListeners('farewell');
    
    // Leaving reason listeners
    document.querySelectorAll('input[name="leavingReason"]').forEach(radio => {
        radio.addEventListener('change', updateLeavingText);
    });
    
    // Additional phrases listeners
    document.getElementById('additional-application')?.addEventListener('change', updateAdditionalText);
    document.getElementById('additional-offer')?.addEventListener('change', updateAdditionalText);
}

// Setup listeners for a performance category
function setupPerformanceListeners(category) {
    // Rating change listener
    document.querySelectorAll(`input[name="${category}Rating"]`).forEach(radio => {
        radio.addEventListener('change', function() {
            updatePerformanceVariants(category, this.value);
            updatePerformanceText(category);
        });
    });
}

// Load translations based on selected language
async function loadTranslations() {
    try {
        console.log(`Loading translations for language: ${currentLanguage}`);
        const response = await fetch(`i18n/${currentLanguage}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        translations = await response.json();
        console.log('Translations loaded successfully:', translations);
        updateUILanguage();
    } catch (error) {
        console.error('Error loading translations:', error);
        console.error('Make sure you are running this from a web server, not file:// protocol');
    }
}

// Update UI with current language translations
function updateUILanguage() {
    if (!translations.ui) {
        console.error('Translations UI not loaded');
        return;
    }
    
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
    
    // Update form labels (this must be called even if translations.ui exists)
    updateFormLabels();
}

// Update form field labels
function updateFormLabels() {
    if (!translations.form) {
        console.error('Translations form not loaded');
        return;
    }
    
    // Section titles
    const employeeInfoTitle = document.getElementById('employee-info-title');
    if (employeeInfoTitle) {
        employeeInfoTitle.textContent = translations.form.employeeInfo;
        console.log('Updated employee info title:', translations.form.employeeInfo);
    }
    
    const introductionTitle = document.getElementById('introduction-title');
    if (introductionTitle) {
        introductionTitle.textContent = translations.form.introduction;
        console.log('Updated introduction title:', translations.form.introduction);
    }
    
    const companyDescTitle = document.getElementById('company-description-title');
    if (companyDescTitle) {
        companyDescTitle.textContent = translations.form.companyDescription;
        console.log('Updated company desc title:', translations.form.companyDescription);
    }
    
    const dutiesTitle = document.getElementById('duties-title');
    if (dutiesTitle) {
        dutiesTitle.textContent = translations.form.duties;
        console.log('Updated duties title:', translations.form.duties);
    }
    
    // Update all form labels
    if (translations.form.labels) {
        const labels = translations.form.labels;
        for (const key of Object.keys(labels)) {
            const label = document.getElementById(`label-${key}`);
            if (label) label.textContent = labels[key];
        }
    }
    
    // Update title dropdown options
    if (translations.form.titleOptions) {
        const titleMr = document.getElementById('title-mr');
        const titleMs = document.getElementById('title-ms');
        const titleDr = document.getElementById('title-dr');
        
        if (titleMr) titleMr.textContent = translations.form.titleOptions.mr;
        if (titleMs) titleMs.textContent = translations.form.titleOptions.ms;
        if (titleDr) titleDr.textContent = translations.form.titleOptions.dr;
    }
    
    // Update section titles for performance ratings
    const performanceTitle = document.getElementById('performance-ratings-title');
    if (performanceTitle) performanceTitle.textContent = translations.form.performanceRatings;
    
    const knowledgeTitle = document.getElementById('knowledge-title');
    if (knowledgeTitle) knowledgeTitle.textContent = translations.form.knowledge;
    
    const willingnessTitle = document.getElementById('willingness-title');
    if (willingnessTitle) willingnessTitle.textContent = translations.form.willingness;
    
    const workstyleTitle = document.getElementById('workstyle-title');
    if (workstyleTitle) workstyleTitle.textContent = translations.form.workstyle;
    
    const qualityTitle = document.getElementById('quality-title');
    if (qualityTitle) qualityTitle.textContent = translations.form.quality;
    
    const resilienceTitle = document.getElementById('resilience-title');
    if (resilienceTitle) resilienceTitle.textContent = translations.form.resilience;
    
    const leadershipTitle = document.getElementById('leadership-title');
    if (leadershipTitle) leadershipTitle.textContent = translations.form.leadership;
    
    const overallTitle = document.getElementById('overall-title');
    if (overallTitle) overallTitle.textContent = translations.form.overall;
    
    const socialTitle = document.getElementById('social-title');
    if (socialTitle) socialTitle.textContent = translations.form.social;
    
    const leavingTitle = document.getElementById('leaving-title');
    if (leavingTitle) leavingTitle.textContent = translations.form.leaving;
    
    const farewellTitle = document.getElementById('farewell-title');
    if (farewellTitle) farewellTitle.textContent = translations.form.farewell;
    
    const additionalTitle = document.getElementById('additional-title');
    if (additionalTitle) additionalTitle.textContent = translations.form.additional;
    
    // Update leaving reason labels
    const leavingLabels = {
        'leaving-employee': translations.form?.labels?.leavingEmployee || 'Resignation by Employee',
        'leaving-mutual': translations.form?.labels?.leavingMutual || 'Mutual Agreement',
        'leaving-employer': translations.form?.labels?.leavingEmployer || 'Termination by Employer',
        'leaving-operational': translations.form?.labels?.leavingOperational || 'Operational Reasons',
        'leaving-temporary': translations.form?.labels?.leavingTemporary || 'Fixed Term (Internship)'
    };
    
    Object.entries(leavingLabels).forEach(([id, text]) => {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) label.textContent = text;
    });
    
    // Update additional phrases labels
    const appLabel = document.querySelector('label[for="additional-application"]');
    if (appLabel && translations.form?.labels?.additionalApplication) {
        appLabel.textContent = translations.form.labels.additionalApplication;
    }
    
    const offerLabel = document.querySelector('label[for="additional-offer"]');
    if (offerLabel && translations.form?.labels?.additionalOffer) {
        offerLabel.textContent = translations.form.labels.additionalOffer;
    }
    
    // Update preview section
    const previewTitle = document.getElementById('preview-title');
    if (previewTitle && translations.preview) previewTitle.textContent = translations.preview.title;
    
    const btnGenerate = document.getElementById('btn-generate');
    if (btnGenerate && translations.preview) btnGenerate.innerHTML = `<i class="bi bi-file-earmark-text"></i> ${translations.preview.generateButton}`;
    
    const btnPrint = document.getElementById('btn-print');
    if (btnPrint && translations.preview) btnPrint.innerHTML = `<i class="bi bi-printer"></i> ${translations.preview.printButton}`;
    
    const previewPlaceholder = document.getElementById('preview-placeholder');
    if (previewPlaceholder && translations.preview) previewPlaceholder.textContent = translations.preview.placeholder;
    
    // Update dynamic content
    updateIntroductionText();
    updateCompanyDescriptionText();
    updateDutiesIntroText();
    
    // Update performance sections
    updatePerformanceVariants('knowledge', 'sehr-gut');
    updatePerformanceVariants('willingness', 'sehr-gut');
    updatePerformanceVariants('workstyle', 'sehr-gut');
    updatePerformanceVariants('quality', 'sehr-gut');
    updatePerformanceVariants('resilience', 'sehr-gut');
    updatePerformanceVariants('leadership', 'sehr-gut');
    updatePerformanceVariants('overall', 'sehr-gut');
    updatePerformanceVariants('social', 'sehr-gut');
    updatePerformanceVariants('farewell', 'sehr-gut');
    updateAllPerformanceTexts();
    updateLeavingText();
    updateAdditionalText();
}

// Update introduction text based on selected variant and form data
function updateIntroductionText() {
    const selectedVariant = document.querySelector('input[name="introVariant"]:checked')?.value || '1';
    const template = translations.form?.introductionVariants?.[selectedVariant];
    
    if (!template) return;
    
    // Get form values
    const formData = {
        title: document.getElementById('title')?.value || '',
        firstName: document.getElementById('firstName')?.value || '',
        lastName: document.getElementById('lastName')?.value || '',
        dateOfBirth: document.getElementById('dateOfBirth')?.value || '',
        placeOfBirth: document.getElementById('placeOfBirth')?.value || '',
        position: document.getElementById('position')?.value || '',
        department: document.getElementById('department')?.value || '',
        startDate: document.getElementById('startDate')?.value || '',
        endDate: document.getElementById('endDate')?.value || ''
    };
    
    // Replace placeholders with actual values
    let text = template;
    for (const [key, value] of Object.entries(formData)) {
        text = text.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    const introTextArea = document.getElementById('introduction-text');
    if (introTextArea) introTextArea.value = text;
}

// Update company description text based on selected example
function updateCompanyDescriptionText() {
    const examples = translations.form?.companyExamples;
    if (!examples) return;
    
    const selectedVariant = document.querySelector('input[name="companyVariant"]:checked')?.value || '1';
    const selectedText = examples[selectedVariant] || '';
    
    const companyTextArea = document.getElementById('company-description-text');
    if (companyTextArea) {
        companyTextArea.value = selectedText;
    }
}

// Update duties intro text based on selected variant
function updateDutiesIntroText() {
    const selectedVariant = document.querySelector('input[name="dutiesVariant"]:checked')?.value || '1';
    const template = translations.form?.dutiesVariants?.[selectedVariant];
    
    if (!template) return;
    
    // Get form values for replacement
    const formData = {
        title: getTranslatedTitle(),
        firstName: document.getElementById('firstName')?.value || '',
        position: document.getElementById('position')?.value || '',
        department: document.getElementById('department')?.value || ''
    };
    
    // Replace placeholders
    let text = template;
    for (const [key, value] of Object.entries(formData)) {
        text = text.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    const dutiesIntroTextArea = document.getElementById('duties-intro-text');
    if (dutiesIntroTextArea) dutiesIntroTextArea.value = text;
}

// Update performance variants based on selected rating
function updatePerformanceVariants(category, rating) {
    const container = document.getElementById(`${category}-variant-container`);
    if (!container) return;
    
    const variants = translations.form?.[`${category}Variants`]?.[rating];
    if (!variants) {
        container.innerHTML = '';
        return;
    }
    
    const variantCount = Object.keys(variants).length;
    let html = '<label class="form-label small">Variant:</label>';
    
    for (let i = 1; i <= variantCount; i++) {
        const isChecked = i === 1 ? 'checked' : '';
        html += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="${category}Variant" 
                       id="${category}-variant-${i}" value="${i}" ${isChecked} 
                       onchange="updatePerformanceText('${category}')">
                <label class="form-check-label" for="${category}-variant-${i}">
                    ${translations.form?.labels?.variant || 'Variant'} ${i}
                </label>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// Helper function to get translated title
function getTranslatedTitle() {
    const titleValue = document.getElementById('title')?.value || '';
    if (!titleValue || !translations?.form?.titleOptions) return '';
    return translations.form.titleOptions[titleValue] || titleValue;
}

// Update performance text based on selected rating and variant
function updatePerformanceText(category) {
    const rating = document.querySelector(`input[name="${category}Rating"]:checked`)?.value || 'sehr-gut';
    const variant = document.querySelector(`input[name="${category}Variant"]:checked`)?.value || '1';
    
    const template = translations.form?.[`${category}Variants`]?.[rating]?.[variant];
    if (!template) return;
    
    // Get form values for replacement
    const formData = {
        title: getTranslatedTitle(),
        firstName: document.getElementById('firstName')?.value || '',
        lastName: document.getElementById('lastName')?.value || '',
        position: document.getElementById('position')?.value || '',
        department: document.getElementById('department')?.value || ''
    };
    
    // Replace placeholders
    let text = template;
    for (const [key, value] of Object.entries(formData)) {
        text = text.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    const textArea = document.getElementById(`${category}-text`);
    if (textArea) textArea.value = text;
}

// Update all performance texts
function updateAllPerformanceTexts() {
    updatePerformanceText('knowledge');
    updatePerformanceText('willingness');
    updatePerformanceText('workstyle');
    updatePerformanceText('quality');
    updatePerformanceText('resilience');
    updatePerformanceText('leadership');
    updatePerformanceText('overall');
    updatePerformanceText('social');
    updatePerformanceText('farewell');
}

// Update leaving reason text
function updateLeavingText() {
    const selectedReason = document.querySelector('input[name="leavingReason"]:checked')?.value;
    if (!selectedReason || !translations?.form?.leavingReasons) return;
    
    let text = translations.form.leavingReasons[selectedReason] || '';
    
    // Replace placeholders
    const formData = {
        title: getTranslatedTitle(),
        firstName: document.getElementById('firstName')?.value || '',
        lastName: document.getElementById('lastName')?.value || '',
        endDate: document.getElementById('endDate')?.value || ''
    };
    
    for (const [key, value] of Object.entries(formData)) {
        text = text.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    const textArea = document.getElementById('leaving-text');
    if (textArea) textArea.value = text;
}

// Update additional phrases text
function updateAdditionalText() {
    if (!translations?.form?.additionalPhrases) return;
    
    const phrases = [];
    
    if (document.getElementById('additional-application')?.checked) {
        phrases.push(translations.form.additionalPhrases.application);
    }
    
    if (document.getElementById('additional-offer')?.checked) {
        phrases.push(translations.form.additionalPhrases.offer);
    }
    
    let text = phrases.join(' ');
    
    // Replace placeholders
    const formData = {
        title: getTranslatedTitle(),
        firstName: document.getElementById('firstName')?.value || '',
        lastName: document.getElementById('lastName')?.value || ''
    };
    
    for (const [key, value] of Object.entries(formData)) {
        text = text.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    const textArea = document.getElementById('additional-text');
    if (textArea) textArea.value = text;
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

// Helper function to format date
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(currentLanguage === 'de' ? 'de-DE' : currentLanguage === 'id' ? 'id-ID' : 'en-US', options);
}

// Generate complete letter
function generateLetter() {
    const preview = document.getElementById('letter-preview');
    if (!preview) return;
    
    // Get employee data
    const title = getTranslatedTitle();
    const firstName = document.getElementById('firstName')?.value || '';
    const lastName = document.getElementById('lastName')?.value || '';
    const dateOfBirth = document.getElementById('dateOfBirth')?.value || '';
    const placeOfBirth = document.getElementById('placeOfBirth')?.value || '';
    const position = document.getElementById('position')?.value || '';
    const department = document.getElementById('department')?.value || '';
    const startDate = document.getElementById('startDate')?.value || '';
    const endDate = document.getElementById('endDate')?.value || '';
    
    // Check required fields
    if (!firstName || !lastName || !position || !startDate || !endDate) {
        alert(currentLanguage === 'de' ? 'Bitte füllen Sie alle Pflichtfelder aus.' : 
              currentLanguage === 'id' ? 'Harap lengkapi semua bidang yang wajib diisi.' :
              'Please fill in all required fields.');
        return;
    }
    
    // Get all text sections
    const introText = document.getElementById('introduction-text')?.value || '';
    const companyText = document.getElementById('company-description-text')?.value || '';
    const dutiesIntro = document.getElementById('duties-intro-text')?.value || '';
    const dutiesList = document.getElementById('duties-list')?.value || '';
    
    const knowledgeText = document.getElementById('knowledge-text')?.value || '';
    const willingnessText = document.getElementById('willingness-text')?.value || '';
    const workstyleText = document.getElementById('workstyle-text')?.value || '';
    const qualityText = document.getElementById('quality-text')?.value || '';
    const resilienceText = document.getElementById('resilience-text')?.value || '';
    const leadershipText = document.getElementById('leadership-text')?.value || '';
    const overallText = document.getElementById('overall-text')?.value || '';
    const socialText = document.getElementById('social-text')?.value || '';
    
    const leavingText = document.getElementById('leaving-text')?.value || '';
    const farewellText = document.getElementById('farewell-text')?.value || '';
    const additionalText = document.getElementById('additional-text')?.value || '';
    
    // Build letter HTML
    let letterHTML = `
        <div class="letter-header mb-4">
            <h2 class="text-center">${translations.preview?.letterTitle || 'Employment Reference Letter'}</h2>
            <p class="text-center text-muted">${formatDate(endDate)}</p>
        </div>
        
        <div class="letter-body">
    `;
    
    // Introduction
    if (introText) {
        letterHTML += `<p class="mb-3">${introText}</p>`;
    }
    
    // Company Description
    if (companyText) {
        letterHTML += `<p class="mb-3">${companyText}</p>`;
    }
    
    // Job Duties
    if (dutiesIntro) {
        letterHTML += `<p class="mb-2">${dutiesIntro}</p>`;
    }
    if (dutiesList) {
        // Convert plain text list to formatted list
        const duties = dutiesList.split('\n').filter(line => line.trim());
        if (duties.length > 0) {
            letterHTML += '<ul class="mb-3">';
            duties.forEach(duty => {
                const cleanDuty = duty.replace(/^[•\-*]\s*/, '').trim();
                if (cleanDuty) letterHTML += `<li>${cleanDuty}</li>`;
            });
            letterHTML += '</ul>';
        }
    }
    
    // Performance Sections
    const performanceSections = [
        knowledgeText, willingnessText, workstyleText, qualityText, 
        resilienceText, leadershipText
    ];
    
    performanceSections.forEach(text => {
        if (text) letterHTML += `<p class="mb-3">${text}</p>`;
    });
    
    // Overall Assessment
    if (overallText) {
        letterHTML += `<p class="mb-3">${overallText}</p>`;
    }
    
    // Social Behavior
    if (socialText) {
        letterHTML += `<p class="mb-3">${socialText}</p>`;
    }
    
    // Reason for Leaving
    if (leavingText) {
        letterHTML += `<p class="mb-3">${leavingText}</p>`;
    }
    
    // Farewell Formula
    if (farewellText) {
        letterHTML += `<p class="mb-3">${farewellText}</p>`;
    }
    
    // Additional Phrases (for internships)
    if (additionalText) {
        letterHTML += `<p class="mb-3">${additionalText}</p>`;
    }
    
    letterHTML += `
        </div>
        
        <div class="letter-footer mt-5">
            <div class="row">
                <div class="col-6">
                    <p class="mb-0">_______________________</p>
                    <p class="small">${currentLanguage === 'de' ? 'Ort, Datum' : currentLanguage === 'id' ? 'Tempat, Tanggal' : 'Place, Date'}</p>
                </div>
                <div class="col-6">
                    <p class="mb-0">_______________________</p>
                    <p class="small">${currentLanguage === 'de' ? 'Unterschrift' : currentLanguage === 'id' ? 'Tanda Tangan' : 'Signature'}</p>
                </div>
            </div>
        </div>
    `;
    
    preview.innerHTML = letterHTML;
}
