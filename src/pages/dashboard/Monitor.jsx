import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Monitor.css';

// SVG Icons
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

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
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

const FilterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 13 10 21 14 18 14 13 22 3"/>
  </svg>
);

const Monitor = () => {
  // Sample readings data (would come from props/context in real app)
  const [readings] = useState([
    { id: 1, systolic: 150, diastolic: 80, pulse: 65, date: 'Fri', time: '10:38 AM', status: 'Recheck advised', statusLevel: 'caution' },
    { id: 2, systolic: 132, diastolic: 84, pulse: 72, date: 'Thu', time: '08:15 AM', status: 'Monitor', statusLevel: 'normal' },
    { id: 3, systolic: 128, diastolic: 82, pulse: 68, date: 'Wed', time: '07:45 AM', status: 'Routine', statusLevel: 'normal' },
    { id: 4, systolic: 145, diastolic: 90, pulse: 70, date: 'Tue', time: '09:20 AM', status: 'Monitor', statusLevel: 'caution' },
    { id: 5, systolic: 118, diastolic: 78, pulse: 62, date: 'Mon', time: '08:00 AM', status: 'Routine', statusLevel: 'normal' },
    { id: 6, systolic: 155, diastolic: 95, pulse: 75, date: 'Sun', time: '11:00 AM', status: 'Recheck advised', statusLevel: 'caution' },
    { id: 7, systolic: 125, diastolic: 80, pulse: 66, date: 'Sat', time: '07:30 AM', status: 'Routine', statusLevel: 'normal' },
    { id: 8, systolic: 135, diastolic: 85, pulse: 70, date: 'Fri', time: '06:45 PM', status: 'Monitor', statusLevel: 'normal' },
    { id: 9, systolic: 140, diastolic: 88, pulse: 72, date: 'Thu', time: '12:15 PM', status: 'Monitor', statusLevel: 'caution' },
    { id: 10, systolic: 122, diastolic: 79, pulse: 64, date: 'Wed', time: '09:00 AM', status: 'Routine', statusLevel: 'normal' },
  ]);

  const [filter, setFilter] = useState('all');
  const [selectedReading, setSelectedReading] = useState(null);

  // Get status dot color
  const getStatusDot = (level) => {
    switch(level) {
      case 'urgent': return '#C0392B';
      case 'caution': return '#D4A017';
      default: return '#3A7D5C';
    }
  };

  // Get badge class
  const getBadgeClass = (level) => {
    switch(level) {
      case 'urgent': return 'badge-urgent';
      case 'caution': return 'badge-caution';
      default: return 'badge-normal';
    }
  };

  // Filter readings
  const filteredReadings = filter === 'all' 
    ? readings 
    : readings.filter(r => r.statusLevel === filter);

  // Calculate stats
  const totalReadings = readings.length;
  const avgSystolic = Math.round(readings.reduce((sum, r) => sum + r.systolic, 0) / totalReadings);
  const avgDiastolic = Math.round(readings.reduce((sum, r) => sum + r.diastolic, 0) / totalReadings);
  const normalCount = readings.filter(r => r.statusLevel === 'normal').length;
  const cautionCount = readings.filter(r => r.statusLevel === 'caution').length;

  return (
    <div className="monitor-page">
      {/* Header */}
      <div className="monitor-header">
        <Link to="/app" className="monitor-back">
          <ArrowLeftIcon />
          Back to Dashboard
        </Link>
        <h1>Blood Pressure Monitor</h1>
        <p className="text-muted">View and track your blood pressure history</p>
      </div>

      {/* Stats Cards */}
      <div className="monitor-stats">
        <div className="stat-card-mini">
          <span className="stat-mini-label">Total Readings</span>
          <span className="stat-mini-value">{totalReadings}</span>
        </div>
        <div className="stat-card-mini">
          <span className="stat-mini-label">Average</span>
          <span className="stat-mini-value">{avgSystolic}/{avgDiastolic}</span>
          <span className="stat-mini-unit">mmHg</span>
        </div>
        <div className="stat-card-mini">
          <span className="stat-mini-label">Normal</span>
          <span className="stat-mini-value" style={{ color: '#3A7D5C' }}>{normalCount}</span>
        </div>
        <div className="stat-card-mini">
          <span className="stat-mini-label">Elevated</span>
          <span className="stat-mini-value" style={{ color: '#D4A017' }}>{cautionCount}</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="monitor-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'normal' ? 'active' : ''}`}
          onClick={() => setFilter('normal')}
        >
          Normal
        </button>
        <button 
          className={`filter-btn ${filter === 'caution' ? 'active' : ''}`}
          onClick={() => setFilter('caution')}
        >
          Elevated
        </button>
        <button 
          className={`filter-btn ${filter === 'urgent' ? 'active' : ''}`}
          onClick={() => setFilter('urgent')}
        >
          Urgent
        </button>
      </div>

      {/* Readings List */}
      <div className="monitor-list">
        {filteredReadings.length === 0 ? (
          <div className="monitor-empty">
            <div className="empty-icon"><ChartIcon /></div>
            <h3>No readings found</h3>
            <p className="text-muted">Try adjusting your filter or log a new reading</p>
          </div>
        ) : (
          filteredReadings.map((reading) => (
            <div 
              key={reading.id} 
              className="monitor-item"
              onClick={() => setSelectedReading(selectedReading === reading.id ? null : reading.id)}
            >
              <div className="monitor-item-main">
                <div className="monitor-item-left">
                  <span 
                    className="monitor-status-dot" 
                    style={{ backgroundColor: getStatusDot(reading.statusLevel) }}
                  ></span>
                  <div className="monitor-item-info">
                    <span className="monitor-item-date">{reading.date}</span>
                    <span className="monitor-item-time">{reading.time}</span>
                  </div>
                </div>
                <div className="monitor-item-values">
                  <span className="monitor-item-sys">{reading.systolic}</span>
                  <span className="monitor-item-divider">/</span>
                  <span className="monitor-item-dia">{reading.diastolic}</span>
                  <span className="monitor-item-unit">mmHg</span>
                </div>
                <div className="monitor-item-status">
                  <span className={`badge ${getBadgeClass(reading.statusLevel)}`}>
                    {reading.status}
                  </span>
                </div>
              </div>
              
              {/* Expanded Details */}
              {selectedReading === reading.id && (
                <div className="monitor-item-details">
                  <div className="detail-row">
                    <span className="detail-label">Pulse</span>
                    <span className="detail-value">{reading.pulse} bpm</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Systolic</span>
                    <span className="detail-value">{reading.systolic} mmHg</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Diastolic</span>
                    <span className="detail-value">{reading.diastolic} mmHg</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Status</span>
                    <span className={`badge ${getBadgeClass(reading.statusLevel)}`}>
                      {reading.status}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Recorded</span>
                    <span className="detail-value">{reading.date} at {reading.time}</span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Log BP Button */}
      <div className="monitor-cta">
        <Link to="/app/monitor/log" className="btn btn-primary btn-block">
          <ChartIcon />
          Log New Reading
        </Link>
      </div>
    </div>
  );
};

export default Monitor;