import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

// SVG Icons
const WaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h2l3-3 3 3 3-3 3 3 3-3 3 3h2"/>
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/>
    <circle cx="12" cy="16" r="2"/>
    <path d="M3 12h2.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H3"/>
    <path d="M21 12h-2.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H21"/>
  </svg>
);

const MedicationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <line x1="9" y1="8" x2="9" y2="16"/>
    <line x1="15" y1="8" x2="15" y2="16"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
  </svg>
);

const RecordsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 14 21h-4a7 7 0 0 1-6.73-5H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
    <circle cx="9" cy="14" r="1"/>
    <circle cx="15" cy="14" r="1"/>
  </svg>
);

const LearnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16"/>
    <path d="M4 12h16"/>
    <path d="M4 18h10"/>
    <circle cx="18" cy="18" r="2"/>
    <circle cx="18" cy="12" r="2"/>
    <circle cx="18" cy="6" r="2"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const BulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a1 1 0 01-1 1h-2a1 1 0 01-1-1v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const HistoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const NotificationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

// Google Calendar Icon
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// Apple Calendar Icon
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <circle cx="12" cy="14" r="1"/>
    <circle cx="8" cy="14" r="1"/>
    <circle cx="16" cy="14" r="1"/>
  </svg>
);

// Outlook Icon
const OutlookIcon = () => (
  <svg viewBox="0 0 24 24" fill="#0078D4">
    <rect x="2" y="4" width="20" height="18" rx="2"/>
    <path d="M8 2v4"/>
    <path d="M16 2v4"/>
    <path d="M2 10h20"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </svg>
);

const Home = () => {
  // Generate sample readings
  const generateSampleReadings = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const statuses = ['Routine', 'Monitor', 'Recheck advised', 'Routine', 'Monitor', 'Routine', 'Routine', 'Recheck advised', 'Monitor', 'Routine'];
    const statusLevels = ['normal', 'normal', 'caution', 'normal', 'normal', 'normal', 'normal', 'caution', 'normal', 'normal'];
    
    return Array.from({ length: 10 }, (_, i) => {
      const sys = 115 + Math.floor(Math.random() * 35);
      const dia = 75 + Math.floor(Math.random() * 20);
      return {
        id: i + 1,
        systolic: sys,
        diastolic: dia,
        pulse: 65 + Math.floor(Math.random() * 15),
        date: days[i % 7],
        time: `${8 + Math.floor(Math.random() * 4)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
        status: statuses[i % statuses.length],
        statusLevel: statusLevels[i % statusLevels.length]
      };
    });
  };

  // State
  const [readings, setReadings] = useState(generateSampleReadings());
  const [showForm, setShowForm] = useState(false);
  const [showMedicationForm, setShowMedicationForm] = useState(false);
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);
  const [pendingMedication, setPendingMedication] = useState(null);
  const [formData, setFormData] = useState({
    systolic: '',
    diastolic: '',
    pulse: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    context: 'Morning',
    notes: ''
  });

  const [medicationFormData, setMedicationFormData] = useState({
    name: '',
    dose: '',
    time: '08:00',
    frequency: 'Once daily',
    reminder: false
  });

  const [medications, setMedications] = useState([
    { id: 1, name: 'Paracetamol', dose: '10mg', time: '08:00', frequency: 'Once daily', taken: false, takenTime: null, reminder: true },
    { id: 2, name: 'Amlodipine', dose: '5mg', time: '20:00', frequency: 'Once daily', taken: false, takenTime: null, reminder: true }
  ]);

  const [takenMedications, setTakenMedications] = useState([
    { id: 3, name: 'Paracetamol', dose: '10mg', time: '08:00', date: 'Today', takenTime: '08:15 AM' },
    { id: 4, name: 'Amlodipine', dose: '5mg', time: '20:00', date: 'Yesterday', takenTime: '08:10 PM' }
  ]);

  const [showReminderSuccess, setShowReminderSuccess] = useState(false);
  const [savedMessage, setSavedMessage] = useState('');

  const user = { name: 'Alex' };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // ========================================
  // CALENDAR INTEGRATION - DIRECT REDIRECTS
  // ========================================

  // 1. Add to Google Calendar
  const addToGoogleCalendar = (name, dose, time, frequency) => {
    const now = new Date();
    const [hours, minutes] = time.split(':');
    const startDate = new Date(now);
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    if (startDate < now) {
      startDate.setDate(startDate.getDate() + 1);
    }
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);
    
    const formatGoogleDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const title = encodeURIComponent(`💊 Take ${name} (${dose})`);
    const details = encodeURIComponent(`Medication reminder for ${name} - ${dose}\nFrequency: ${frequency}`);
    const start = formatGoogleDate(startDate);
    const end = formatGoogleDate(endDate);
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${start}/${end}&recur=RRULE:FREQ=DAILY;COUNT=30`;
    
    window.open(url, '_blank');
  };

  // 2. Add to Apple Calendar
  const addToAppleCalendar = (name, dose, time, frequency) => {
    const now = new Date();
    const [hours, minutes] = time.split(':');
    const startDate = new Date(now);
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    if (startDate < now) {
      startDate.setDate(startDate.getDate() + 1);
    }
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);
    
    const formatICSDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    // Create .ics content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//NORM//Medication Reminder//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:${Date.now()}-norm-medication
DTSTAMP:${formatICSDate(now)}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:💊 Take ${name} (${dose})
DESCRIPTION:Medication reminder for ${name} - ${dose}\nFrequency: ${frequency}
CATEGORIES:HEALTH,MEDICATION
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT10M
ACTION:DISPLAY
DESCRIPTION:Reminder: Time to take your medication
END:VALARM
END:VEVENT
END:VCALENDAR`;
    
    // Use data URI to open in Calendar app
    const encoded = encodeURIComponent(icsContent);
    const url = `data:text/calendar;charset=utf-8,${encoded}`;
    
    window.open(url, '_blank');
  };

  // 3. Add to Outlook Calendar
  const addToOutlookCalendar = (name, dose, time, frequency) => {
    const now = new Date();
    const [hours, minutes] = time.split(':');
    const startDate = new Date(now);
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    if (startDate < now) {
      startDate.setDate(startDate.getDate() + 1);
    }
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);
    
    const formatOutlookDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0];
    };
    
    const subject = encodeURIComponent(`💊 Take ${name} (${dose})`);
    const body = encodeURIComponent(`Medication reminder for ${name} - ${dose}\nFrequency: ${frequency}`);
    const start = formatOutlookDate(startDate);
    const end = formatOutlookDate(endDate);
    
    const url = `https://outlook.office.com/calendar/action/compose?subject=${subject}&body=${body}&startdt=${start}&enddt=${end}`;
    
    window.open(url, '_blank');
  };

  // 4. Add to Yahoo Calendar
  const addToYahooCalendar = (name, dose, time, frequency) => {
    const now = new Date();
    const [hours, minutes] = time.split(':');
    const startDate = new Date(now);
    startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    
    if (startDate < now) {
      startDate.setDate(startDate.getDate() + 1);
    }
    
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);
    
    const formatYahooDate = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0];
    };
    
    const title = encodeURIComponent(`💊 Take ${name} (${dose})`);
    const details = encodeURIComponent(`Medication reminder for ${name} - ${dose}\nFrequency: ${frequency}`);
    const start = formatYahooDate(startDate);
    const end = formatYahooDate(endDate);
    
    const url = `https://calendar.yahoo.com/?v=60&title=${title}&st=${start}&et=${end}&desc=${details}`;
    
    window.open(url, '_blank');
  };

  // Show success message
  const showSuccessMessage = (name) => {
    setSavedMessage(`✅ Reminder added to calendar for ${name}`);
    setShowReminderSuccess(true);
    setTimeout(() => {
      setShowReminderSuccess(false);
      setSavedMessage('');
    }, 4000);
  };

  // Get latest reading
  const latestBP = readings.length > 0 ? readings[0] : { 
    systolic: 0, 
    diastolic: 0, 
    pulse: 0, 
    date: '--', 
    time: '--', 
    status: 'No readings', 
    statusLevel: 'normal' 
  };

  // Calculate average
  const avgReadings = readings.slice(0, 7);
  const avgBP = avgReadings.length > 0 ? {
    systolic: Math.round(avgReadings.reduce((sum, r) => sum + r.systolic, 0) / avgReadings.length),
    diastolic: Math.round(avgReadings.reduce((sum, r) => sum + r.diastolic, 0) / avgReadings.length),
    readings: avgReadings.length
  } : { systolic: 0, diastolic: 0, readings: 0 };

  const historyReadings = readings.slice(0, 3);
  const todaysMedications = medications.filter(m => !m.taken);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMedicationChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setMedicationFormData({ ...medicationFormData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReading = {
      id: readings.length + 1,
      systolic: parseInt(formData.systolic),
      diastolic: parseInt(formData.diastolic),
      pulse: parseInt(formData.pulse) || 0,
      date: new Date().toLocaleDateString('en-US', { weekday: 'short' }),
      time: formData.time,
      status: getStatus(parseInt(formData.systolic), parseInt(formData.diastolic)),
      statusLevel: getStatusLevel(parseInt(formData.systolic), parseInt(formData.diastolic))
    };

    setReadings([newReading, ...readings]);
    setShowForm(false);
    setFormData({
      systolic: '',
      diastolic: '',
      pulse: '',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      context: 'Morning',
      notes: ''
    });
  };

  const handleMedicationSubmit = (e) => {
    e.preventDefault();
    
    const newMedication = {
      id: medications.length + 1,
      name: medicationFormData.name,
      dose: medicationFormData.dose,
      time: medicationFormData.time,
      frequency: medicationFormData.frequency,
      taken: false,
      takenTime: null,
      reminder: medicationFormData.reminder
    };

    setMedications([...medications, newMedication]);
    setShowMedicationForm(false);

    if (medicationFormData.reminder) {
      setPendingMedication(newMedication);
      setShowCalendarOptions(true);
    } else {
      setMedicationFormData({
        name: '',
        dose: '',
        time: '08:00',
        frequency: 'Once daily',
        reminder: false
      });
    }
  };

  const handleCalendarSelect = (type) => {
    if (!pendingMedication) return;
    
    const { name, dose, time, frequency } = pendingMedication;
    
    switch(type) {
      case 'google':
        addToGoogleCalendar(name, dose, time, frequency);
        break;
      case 'apple':
        addToAppleCalendar(name, dose, time, frequency);
        break;
      case 'outlook':
        addToOutlookCalendar(name, dose, time, frequency);
        break;
      case 'yahoo':
        addToYahooCalendar(name, dose, time, frequency);
        break;
      default:
        break;
    }
    
    setShowCalendarOptions(false);
    setPendingMedication(null);
    setMedicationFormData({
      name: '',
      dose: '',
      time: '08:00',
      frequency: 'Once daily',
      reminder: false
    });
    
    showSuccessMessage(name);
  };

  const handleMarkAsTaken = (id) => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString('en-US', { weekday: 'short' });
    
    const medication = medications.find(m => m.id === id);
    if (medication) {
      setMedications(medications.filter(m => m.id !== id));
      setTakenMedications([
        { 
          id: takenMedications.length + 1, 
          name: medication.name, 
          dose: medication.dose, 
          time: medication.time, 
          date: dateStr, 
          takenTime: timeStr 
        },
        ...takenMedications
      ]);
    }
  };

  const getStatus = (sys, dia) => {
    if (sys >= 180 || dia >= 120) return 'Urgent Medical Review';
    if (sys >= 160 || dia >= 100) return 'Recheck advised';
    if (sys >= 140 || dia >= 90) return 'Monitor';
    return 'Routine';
  };

  const getStatusLevel = (sys, dia) => {
    if (sys >= 180 || dia >= 120) return 'urgent';
    if (sys >= 160 || dia >= 100) return 'caution';
    if (sys >= 140 || dia >= 90) return 'caution';
    return 'normal';
  };

  const getBadgeClass = (level) => {
    switch(level) {
      case 'urgent': return 'badge-urgent';
      case 'caution': return 'badge-caution';
      default: return 'badge-normal';
    }
  };

  const getStatusDot = (level) => {
    switch(level) {
      case 'urgent': return '#C0392B';
      case 'caution': return '#D4A017';
      default: return '#3A7D5C';
    }
  };

  return (
    <div className="dashboard">
      {/* Back to Home Link */}
      <div className="back-to-home">
        <Link to="/" className="back-to-home-link">
          <ArrowLeftIcon />
          Back to Home
        </Link>
      </div>

      {/* Reminder Success Message */}
      {showReminderSuccess && (
        <div className="reminder-success">
          <CheckIcon />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="dashboard-header">
        <h1>
          {getGreeting()}, {user.name}
          <span className="greeting-icon">
            <WaveIcon />
          </span>
        </h1>
        <p className="text-muted">Here's your health snapshot.</p>
      </div>

      {/* Latest BP Card */}
      <div className="card bp-card">
        <div className="bp-card-header">
          <span className="bp-card-label">Your latest BP</span>
          <span className={`badge ${getBadgeClass(latestBP.statusLevel)}`}>
            {latestBP.status}
          </span>
        </div>
        
        <div className="bp-main-display">
          <div className="bp-numbers">
            <span className="bp-systolic">{latestBP.systolic}</span>
            <span className="bp-divider">/</span>
            <span className="bp-diastolic">{latestBP.diastolic}</span>
            <span className="bp-unit">mmHg</span>
          </div>
          <div className="bp-pulse">
            <span className="pulse-icon">
              <HeartIcon />
            </span>
            <span className="pulse-value">{latestBP.pulse}</span>
            <span className="pulse-label">bpm</span>
          </div>
        </div>
        
        <div className="bp-meta">
          <span className="bp-date">{latestBP.date} {latestBP.time}</span>
          <span className="bp-readings-count">{readings.length} total readings</span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="stats-grid">
        <div className="card stat-card">
          <p className="stat-label">7-day average</p>
          <p className="stat-value">{avgBP.systolic}/{avgBP.diastolic}</p>
          <p className="stat-unit">mmHg</p>
          <p className="stat-detail">Based on {avgBP.readings} readings</p>
        </div>

        <div className="card stat-card medication-stat">
          <p className="stat-label">Today's medication</p>
          {todaysMedications.length > 0 ? (
            todaysMedications.map((med) => (
              <div key={med.id} className="medication-stat-item">
                <div className="medication-stat-info">
                  <p className="stat-med-name">{med.name}</p>
                  <p className="stat-med-dose">{med.dose}</p>
                  <p className="stat-med-time">{med.time} · {med.frequency}</p>
                  {med.reminder && (
                    <span className="reminder-badge">
                      <NotificationIcon />
                      Reminder set
                    </span>
                  )}
                </div>
                <button 
                  className="btn btn-primary btn-small" 
                  onClick={() => handleMarkAsTaken(med.id)}
                >
                  Mark as taken
                </button>
              </div>
            ))
          ) : (
            <div className="medication-stat-empty">
              <p className="stat-med-time">No medications due today</p>
              <button 
                className="btn btn-primary btn-small" 
                onClick={() => setShowMedicationForm(true)}
              >
                Add Medication
              </button>
            </div>
          )}
        </div>
      </div>

      {/* BP Chart */}
      <div className="card chart-card">
        <h3>BP Trend</h3>
        <div className="chart-container">
          <div className="chart-y-axis">
            <span>180</span>
            <span>160</span>
            <span>140</span>
            <span>120</span>
            <span>100</span>
            <span>80</span>
          </div>
          <div className="chart-area">
            <svg className="chart-svg" viewBox="0 0 500 200" preserveAspectRatio="none">
              {/* Chart lines - same as before */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="#E8ECF0" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="60" x2="500" y2="60" stroke="#E8ECF0" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="90" x2="500" y2="90" stroke="#E8ECF0" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="#E8ECF0" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="150" x2="500" y2="150" stroke="#E8ECF0" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="0" y1="180" x2="500" y2="180" stroke="#E8ECF0" strokeWidth="1" strokeDasharray="4,4" />
              
              <polyline
                points={readings.slice(0, 10).reverse().map((r, i, arr) => {
                  const x = (i / (arr.length - 1 || 1)) * 500;
                  const y = 200 - ((r.systolic - 80) / 100) * 160;
                  return `${x},${Math.max(0, Math.min(200, y))}`;
                }).join(' ')}
                fill="none"
                stroke="#1B4F72"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              <polyline
                points={readings.slice(0, 10).reverse().map((r, i, arr) => {
                  const x = (i / (arr.length - 1 || 1)) * 500;
                  const y = 200 - ((r.diastolic - 80) / 100) * 160;
                  return `${x},${Math.max(0, Math.min(200, y))}`;
                }).join(' ')}
                fill="none"
                stroke="#E08E5B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {readings.slice(0, 10).reverse().map((r, i, arr) => {
                const x = (i / (arr.length - 1 || 1)) * 500;
                const y = 200 - ((r.systolic - 80) / 100) * 160;
                return (
                  <circle 
                    key={`sys-${r.id}`} 
                    cx={x} 
                    cy={Math.max(0, Math.min(200, y))} 
                    r="5" 
                    fill="#1B4F72" 
                    stroke="white" 
                    strokeWidth="2" 
                  />
                );
              })}
              
              {readings.slice(0, 10).reverse().map((r, i, arr) => {
                const x = (i / (arr.length - 1 || 1)) * 500;
                const y = 200 - ((r.diastolic - 80) / 100) * 160;
                return (
                  <circle 
                    key={`dia-${r.id}`} 
                    cx={x} 
                    cy={Math.max(0, Math.min(200, y))} 
                    r="5" 
                    fill="#E08E5B" 
                    stroke="white" 
                    strokeWidth="2" 
                  />
                );
              })}
            </svg>
            
            <div className="chart-labels">
              {readings.slice(0, 10).reverse().map((r) => (
                <span key={r.id} className="chart-label">{r.date}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="chart-legend">
          <span className="legend-item">
            <span className="legend-color systolic-color"></span>
            Systolic
          </span>
          <span className="legend-item">
            <span className="legend-color diastolic-color"></span>
            Diastolic
          </span>
          <span className="legend-item">
            <span className="legend-readings">{readings.length} readings</span>
          </span>
        </div>
      </div>

      {/* BP History */}
      <div className="card history-card">
        <div className="history-header">
          <h3>
            <span className="history-icon"><HistoryIcon /></span>
            Recent Readings
          </h3>
          <Link to="/app/monitor" className="history-view-all">
            View all →
          </Link>
        </div>
        <div className="history-list">
          {historyReadings.map((reading) => (
            <div key={reading.id} className="history-item">
              <div className="history-item-left">
                <span 
                  className="history-status-dot" 
                  style={{ backgroundColor: getStatusDot(reading.statusLevel) }}
                ></span>
                <div className="history-item-info">
                  <span className="history-item-date">{reading.date}</span>
                  <span className="history-item-time">{reading.time}</span>
                </div>
              </div>
              <div className="history-item-values">
                <span className="history-item-sys">{reading.systolic}</span>
                <span className="history-item-divider">/</span>
                <span className="history-item-dia">{reading.diastolic}</span>
                <span className="history-item-unit">mmHg</span>
              </div>
              <div className="history-item-status">
                <span className={`badge ${getBadgeClass(reading.statusLevel)}`}>
                  {reading.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medication Taken Section */}
      {takenMedications.length > 0 && (
        <div className="card taken-medications-card">
          <div className="taken-medications-header">
            <h3>
              <span className="taken-icon"><CheckIcon /></span>
              Taken Medications
            </h3>
            <span className="taken-count">{takenMedications.length} taken</span>
          </div>
          <div className="taken-medications-list">
            {takenMedications.slice(0, 5).map((med) => (
              <div key={med.id} className="taken-medication-item">
                <div className="taken-medication-info">
                  <span className="taken-medication-name">{med.name}</span>
                  <span className="taken-medication-dose">{med.dose}</span>
                  <span className="taken-medication-time">
                    <ClockIcon />
                    {med.takenTime}
                  </span>
                </div>
                <span className="taken-medication-date">{med.date}</span>
              </div>
            ))}
          </div>
          {takenMedications.length > 5 && (
            <div className="taken-medications-footer">
              <button className="btn btn-ghost btn-view-all">
                View all {takenMedications.length} taken →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Today's Focus */}
      <div className="card focus-card">
        <h3>
          <span className="focus-icon"><BulbIcon /></span>
          What would you like to do today?
        </h3>
        <p className="focus-text">
          Take your medication as prescribed and log a morning BP reading.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="action-grid">
        <button onClick={() => setShowForm(true)} className="action-item primary-action">
          <span className="action-icon"><ChartIcon /></span>
          <span className="action-label">Log BP</span>
        </button>
        <button onClick={() => setShowMedicationForm(true)} className="action-item">
          <span className="action-icon"><MedicationIcon /></span>
          <span className="action-label">Medication</span>
        </button>
        <Link to="/app/records" className="action-item">
          <span className="action-icon"><RecordsIcon /></span>
          <span className="action-label">Records</span>
        </Link>
        <Link to="/app/ai" className="action-item">
          <span className="action-icon"><AIIcon /></span>
          <span className="action-label">Ask NORM</span>
        </Link>
        <Link to="/app/learn" className="action-item">
          <span className="action-icon"><LearnIcon /></span>
          <span className="action-label">Learn</span>
        </Link>
      </div>

      {/* Health Tip */}
      <div className="card tip-card">
        <p className="tip-question">
          <span className="tip-icon"><BulbIcon /></span>
          Why does blood pressure change?
        </p>
        <Link to="/app/learn" className="tip-link">
          Learn
          <span className="link-arrow"><ArrowIcon /></span>
        </Link>
      </div>

      {/* Log BP Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Log Blood Pressure</h2>
              <button className="modal-close" onClick={() => setShowForm(false)}>
                <CloseIcon />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="bp-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="systolic">Systolic (mmHg)</label>
                  <input
                    type="number"
                    id="systolic"
                    name="systolic"
                    className="form-control"
                    placeholder="e.g., 120"
                    value={formData.systolic}
                    onChange={handleChange}
                    required
                    min="80"
                    max="250"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="diastolic">Diastolic (mmHg)</label>
                  <input
                    type="number"
                    id="diastolic"
                    name="diastolic"
                    className="form-control"
                    placeholder="e.g., 80"
                    value={formData.diastolic}
                    onChange={handleChange}
                    required
                    min="40"
                    max="150"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pulse">Pulse (bpm)</label>
                  <input
                    type="number"
                    id="pulse"
                    name="pulse"
                    className="form-control"
                    placeholder="e.g., 72"
                    value={formData.pulse}
                    onChange={handleChange}
                    min="40"
                    max="200"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="context">Context</label>
                  <select
                    id="context"
                    name="context"
                    className="form-control"
                    value={formData.context}
                    onChange={handleChange}
                  >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                    <option value="Before medication">Before medication</option>
                    <option value="After medication">After medication</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notes (optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  className="form-control"
                  placeholder="Any additional notes..."
                  value={formData.notes}
                  onChange={handleChange}
                  rows="2"
                />
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Reading
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Medication Modal */}
      {showMedicationForm && (
        <div className="modal-overlay" onClick={() => setShowMedicationForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Medication</h2>
              <button className="modal-close" onClick={() => setShowMedicationForm(false)}>
                <CloseIcon />
              </button>
            </div>
            
            <form onSubmit={handleMedicationSubmit} className="bp-form">
              <div className="form-group">
                <label htmlFor="med-name">Medication Name</label>
                <input
                  type="text"
                  id="med-name"
                  name="name"
                  className="form-control"
                  placeholder="e.g., Amlodipine"
                  value={medicationFormData.name}
                  onChange={handleMedicationChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="med-dose">Dose</label>
                  <input
                    type="text"
                    id="med-dose"
                    name="dose"
                    className="form-control"
                    placeholder="e.g., 5mg"
                    value={medicationFormData.dose}
                    onChange={handleMedicationChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="med-time">Time</label>
                  <input
                    type="time"
                    id="med-time"
                    name="time"
                    className="form-control"
                    value={medicationFormData.time}
                    onChange={handleMedicationChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="med-frequency">Frequency</label>
                <select
                  id="med-frequency"
                  name="frequency"
                  className="form-control"
                  value={medicationFormData.frequency}
                  onChange={handleMedicationChange}
                >
                  <option value="Once daily">Once daily</option>
                  <option value="Twice daily">Twice daily</option>
                  <option value="Three times daily">Three times daily</option>
                  <option value="As needed">As needed</option>
                </select>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="reminder"
                    checked={medicationFormData.reminder}
                    onChange={handleMedicationChange}
                  />
                  <span className="checkbox-text">
                    <CalendarIcon />
                    Add to calendar & send reminder
                  </span>
                </label>
                <p className="checkbox-hint">
                  You'll receive a notification and calendar event
                </p>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowMedicationForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Medication
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Calendar Options Modal */}
      {showCalendarOptions && (
        <div className="modal-overlay" onClick={() => setShowCalendarOptions(false)}>
          <div className="modal-content calendar-options" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Choose Your Calendar</h2>
              <button className="modal-close" onClick={() => setShowCalendarOptions(false)}>
                <CloseIcon />
              </button>
            </div>
            
            <div className="calendar-options-grid">
              <button 
                className="calendar-option google"
                onClick={() => {
                  addToGoogleCalendar(
                    pendingMedication.name, 
                    pendingMedication.dose, 
                    pendingMedication.time, 
                    pendingMedication.frequency
                  );
                  setShowCalendarOptions(false);
                  setPendingMedication(null);
                  setMedicationFormData({
                    name: '',
                    dose: '',
                    time: '08:00',
                    frequency: 'Once daily',
                    reminder: false
                  });
                  showSuccessMessage(pendingMedication.name);
                }}
              >
                <GoogleIcon />
                <span>Google Calendar</span>
                <small>Opens in browser</small>
              </button>
              
              <button 
                className="calendar-option apple"
                onClick={() => {
                  addToAppleCalendar(
                    pendingMedication.name, 
                    pendingMedication.dose, 
                    pendingMedication.time, 
                    pendingMedication.frequency
                  );
                  setShowCalendarOptions(false);
                  setPendingMedication(null);
                  setMedicationFormData({
                    name: '',
                    dose: '',
                    time: '08:00',
                    frequency: 'Once daily',
                    reminder: false
                  });
                  showSuccessMessage(pendingMedication.name);
                }}
              >
                <AppleIcon />
                <span>Apple Calendar</span>
                <small>Opens in Calendar app</small>
              </button>
              
              <button 
                className="calendar-option outlook"
                onClick={() => {
                  addToOutlookCalendar(
                    pendingMedication.name, 
                    pendingMedication.dose, 
                    pendingMedication.time, 
                    pendingMedication.frequency
                  );
                  setShowCalendarOptions(false);
                  setPendingMedication(null);
                  setMedicationFormData({
                    name: '',
                    dose: '',
                    time: '08:00',
                    frequency: 'Once daily',
                    reminder: false
                  });
                  showSuccessMessage(pendingMedication.name);
                }}
              >
                <OutlookIcon />
                <span>Outlook Calendar</span>
                <small>Opens in browser</small>
              </button>
              
              <button 
                className="calendar-option yahoo"
                onClick={() => {
                  addToYahooCalendar(
                    pendingMedication.name, 
                    pendingMedication.dose, 
                    pendingMedication.time, 
                    pendingMedication.frequency
                  );
                  setShowCalendarOptions(false);
                  setPendingMedication(null);
                  setMedicationFormData({
                    name: '',
                    dose: '',
                    time: '08:00',
                    frequency: 'Once daily',
                    reminder: false
                  });
                  showSuccessMessage(pendingMedication.name);
                }}
              >
                <svg viewBox="0 0 24 24" fill="#312245">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <circle cx="12" cy="15" r="1"/>
                  <circle cx="8" cy="15" r="1"/>
                  <circle cx="16" cy="15" r="1"/>
                </svg>
                <span>Yahoo Calendar</span>
                <small>Opens in browser</small>
              </button>
            </div>
            
            <p className="calendar-options-note">
              Your medication reminder will be added to your calendar with a 10-minute alert.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;