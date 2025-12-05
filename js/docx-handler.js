// DOCX Handler Module
import { Document, Packer, Paragraph, TextRun, AlignmentType } from 'docx';
import FileSaver from 'file-saver';

// Make the function globally available
window.downloadLetterAsDOCX = async function() {
    const preview = document.getElementById('letter-preview');
    
    // Check if letter has been generated
    if (!preview || preview.innerHTML.includes('preview-placeholder')) {
        alert(window.translations[window.currentLanguage]?.preview?.placeholder || 'Please generate the letter first');
        return;
    }
    
    // Get all the data we need
    const companyName = document.getElementById('companyName')?.value || '';
    const companyStreet = document.getElementById('companyStreet')?.value || '';
    const companyCity = document.getElementById('companyCity')?.value || '';
    const companyPostalCode = document.getElementById('companyPostalCode')?.value || '';
    const companyPhone = document.getElementById('companyPhone')?.value || '';
    const companyEmail = document.getElementById('companyEmail')?.value || '';
    const referenceNumber = document.getElementById('referenceNumber')?.value || '';
    
    const firstName = document.getElementById('firstName')?.value || '';
    const lastName = document.getElementById('lastName')?.value || '';
    
    const writerName = document.getElementById('writerName')?.value || '';
    const writerPosition = document.getElementById('writerPosition')?.value || '';
    const writerEmail = document.getElementById('writerEmail')?.value || '';
    const writerPhone = document.getElementById('writerPhone')?.value || '';
    
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
    
    const today = new Date().toISOString().split('T')[0];
    const formattedDate = window.formatDate(today);
    
    // Build document sections
    const sections = [];
    
    // Letterhead - Company info on left, date/ref on right
    sections.push(new Paragraph({
        children: [new TextRun({ text: companyName, bold: true, size: 22 })],
        spacing: { after: 100 }
    }));
    
    if (companyStreet) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: companyStreet, size: 20 })],
            spacing: { after: 50 }
        }));
    }
    
    sections.push(new Paragraph({
        children: [new TextRun({ text: `${companyPostalCode ? companyPostalCode + ' ' : ''}${companyCity}`, size: 20 })],
        spacing: { after: 50 }
    }));
    
    if (companyPhone) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: `Tel: ${companyPhone}`, size: 20 })],
            spacing: { after: 50 }
        }));
    }
    
    if (companyEmail) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: `Email: ${companyEmail}`, size: 20 })],
            spacing: { after: 50 }
        }));
    }
    
    // Add reference number and date on right
    if (referenceNumber) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: `Ref: ${referenceNumber}`, size: 20 })],
            alignment: AlignmentType.RIGHT,
            spacing: { after: 50 }
        }));
    }
    
    sections.push(new Paragraph({
        children: [new TextRun({ text: `${companyCity}, ${formattedDate}`, size: 20 })],
        alignment: AlignmentType.RIGHT,
        spacing: { after: 200 }
    }));
    
    // Document Title
    sections.push(new Paragraph({
        children: [new TextRun({ 
            text: window.translations.preview?.letterTitle || 'EMPLOYMENT REFERENCE LETTER',
            bold: true,
            size: 28
        })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 400 }
    }));
    
    // Introduction
    if (introText) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: introText, size: 22 })],
            spacing: { after: 200 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    // Company Description
    if (companyText) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: companyText, size: 22 })],
            spacing: { after: 200 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    // Job Duties
    if (dutiesIntro) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: dutiesIntro, size: 22 })],
            spacing: { after: 100 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    if (dutiesList) {
        const duties = dutiesList.split('\n').filter(line => line.trim());
        for (const duty of duties) {
            const cleanDuty = duty.replace(/^[•\-*]\s*/, '').trim();
            if (cleanDuty) {
                sections.push(new Paragraph({
                    children: [new TextRun({ text: `• ${cleanDuty}`, size: 22 })],
                    spacing: { after: 100 },
                    alignment: AlignmentType.JUSTIFIED
                }));
            }
        }
        sections.push(new Paragraph({ spacing: { after: 100 } }));
    }
    
    // Performance sections
    const performanceTexts = [
        knowledgeText, willingnessText, workstyleText, qualityText,
        resilienceText, leadershipText
    ];
    
    for (const text of performanceTexts) {
        if (text) {
            sections.push(new Paragraph({
                children: [new TextRun({ text, size: 22 })],
                spacing: { after: 200 },
                alignment: AlignmentType.JUSTIFIED
            }));
        }
    }
    
    // Overall Assessment
    if (overallText) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: overallText, size: 22 })],
            spacing: { after: 200 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    // Social Behavior
    if (socialText) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: socialText, size: 22 })],
            spacing: { after: 200 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    // Reason for Leaving
    if (leavingText) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: leavingText, size: 22 })],
            spacing: { after: 200 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    // Farewell
    if (farewellText) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: farewellText, size: 22 })],
            spacing: { after: 200 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    // Additional phrases
    if (additionalText) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: additionalText, size: 22 })],
            spacing: { after: 200 },
            alignment: AlignmentType.JUSTIFIED
        }));
    }
    
    // Signature block
    sections.push(new Paragraph({
        children: [new TextRun({ text: `${companyCity}, ${formattedDate}`, size: 22 })],
        spacing: { before: 400, after: 100 }
    }));
    
    sections.push(new Paragraph({
        children: [new TextRun({ text: companyName, size: 22 })],
        spacing: { after: 400 }
    }));
    
    sections.push(new Paragraph({
        children: [new TextRun({ text: '_______________________', size: 22 })],
        spacing: { after: 100 }
    }));
    
    sections.push(new Paragraph({
        children: [new TextRun({ text: writerName, bold: true, size: 22 })],
        spacing: { after: 50 }
    }));
    
    sections.push(new Paragraph({
        children: [new TextRun({ text: writerPosition, size: 22 })],
        spacing: { after: 50 }
    }));
    
    if (writerEmail) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: writerEmail, size: 20 })],
            spacing: { after: 50 }
        }));
    }
    
    if (writerPhone) {
        sections.push(new Paragraph({
            children: [new TextRun({ text: writerPhone, size: 20 })],
            spacing: { after: 50 }
        }));
    }
    
    // Create document
    const doc = new Document({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 1440,    // 1 inch = 1440 twips
                        right: 1440,
                        bottom: 1440,
                        left: 1440
                    }
                }
            },
            children: sections
        }]
    });
    
    // Generate and download
    const blob = await Packer.toBlob(doc);
    const filename = `Reference_Letter_${firstName}_${lastName}_${today}.docx`;
    
    FileSaver.saveAs(blob, filename);
};
