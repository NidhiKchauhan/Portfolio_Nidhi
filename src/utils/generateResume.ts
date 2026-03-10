import { jsPDF } from 'jspdf';

export const generateResumePDF = () => {
  const doc = new jsPDF();
  const margin = 20;
  let y = margin;

  // Helper to add text and update y
  const addText = (text: string, fontSize = 10, isBold = false, spacing = 6) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const splitText = doc.splitTextToSize(text, 170);
    doc.text(splitText, margin, y);
    y += (splitText.length * spacing);
  };

  // Header
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('NIDHI CHAUHAN', margin, y);
  y += 10;

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('+1 (613)-276-6430 | nidhikchauhan0411@gmail.com | linkedin.com/in/nkchauhan | Ontario, Canada', margin, y);
  y += 15;

  // Professional Summary
  addText('PROFESSIONAL SUMMARY', 12, true, 8);
  addText('Salesforce-certified professional focused on designing and delivering scalable CRM solutions on the Salesforce platform. Experienced in translating business needs into robust implementations using Apex, Lightning Web Components (LWC), Salesforce Flows, and integrations while collaborating closely with stakeholders throughout delivery. Holds a Master’s in Computer Science (Applied Artificial Intelligence), bringing data-driven thinking and innovative problem-solving to Salesforce solutions.', 10, false, 5);
  y += 5;

  // Technical Skills
  addText('TECHNICAL SKILLS', 12, true, 8);
  addText('Salesforce Development & Configuration: Apex Classes & Triggers, Lightning Web Components (LWC), Visualforce Pages, Salesforce Flows, Approval Processes, SOQL, OmniStudio, CPQ Configuration, Vlocity EPC, Custom Objects, Record Types', 9, false, 5);
  addText('Salesforce Administration: Custom Objects & Fields, Record Types, Lightning Record Page Layouts, User Management, Profiles, Permission Sets, Validation Rules, Reports & Dashboards, Roles, Sharing Rules, OWD', 9, false, 5);
  addText('Integration & Tools: REST APIs, Custom Apex APIs, Third-Party Platform Integration, Real-Time Data Sync, Data Import Wizard, IDX Workbench, Salesforce Workbench, External Object Configuration', 9, false, 5);
  addText('Other Languages/Frameworks: Python, JavaScript, AWS (Lambda, EC2, S3), Azure OpenAI API, Power BI, Microsoft Power Automate, SQL, DAX, Agile/Scrum, Requirements Gathering', 9, false, 5);
  y += 5;

  // Work Experience
  addText('WORK EXPERIENCE', 12, true, 8);
  
  // CNPS
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Canadian Nurses Protective Society', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text('Ottawa, ON', 190, y, { align: 'right' });
  y += 5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('Salesforce Administrator', margin, y);
  doc.text('July 2024 – Present', 190, y, { align: 'right' });
  y += 7;
  
  const cnpsBullets = [
    'Acted as primary liaison between business stakeholders and technical teams to align Salesforce enhancements with compliance and regulatory needs.',
    'Designed and deployed 10+ Lightning Web Components (LWC) and Apex triggers to automate business logic, enforce data validation, and streamline internal workflows.',
    'Configure and manage declarative Salesforce architecture, including custom objects, fields, record types, Lightning page layouts, and validation rules.',
    'Managed and optimised a 50,000+ recipient email automation system using Salesforce Flow.',
    'Generated certificate PDFs using APTK weaver and Visualforce pages, streamlining document automation.',
    'Integrated Salesforce with third-party platforms, ensuring real-time data sync and zero data loss.',
    'Ensured code quality by adhering to Apex best practices and comprehensive test class coverage.'
  ];
  
  cnpsBullets.forEach(bullet => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const splitBullet = doc.splitTextToSize('• ' + bullet, 165);
    doc.text(splitBullet, margin + 5, y);
    y += (splitBullet.length * 4.5);
  });
  y += 5;

  // AAFC
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Agriculture and Agri-Food Canada', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text('Ottawa, Canada', 190, y, { align: 'right' });
  y += 5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('AI Developer', margin, y);
  doc.text('Sep 2023 – June 2024', 190, y, { align: 'right' });
  y += 7;

  const aafcBullets = [
    'Developed a table extraction automation system using Azure OpenAI API and Streamlit.',
    'Built and maintained interactive Power BI dashboards and KPI scorecards.',
    'Revamped 50+ Power BI reports for WCAG 2.0 AA accessibility.'
  ];

  aafcBullets.forEach(bullet => {
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const splitBullet = doc.splitTextToSize('• ' + bullet, 165);
    doc.text(splitBullet, margin + 5, y);
    y += (splitBullet.length * 4.5);
  });

  // Save the PDF
  doc.save('Nidhi_Chauhan_Resume.pdf');
};
