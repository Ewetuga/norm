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

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Monitor = () => {
  // Sample readings data
  const [readings, setReadings] = useState([
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
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    systolic: '',
    diastolic: '',
    pulse: '',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    context: 'Morning',
    notes: ''
  });

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

  // Get status based on BP values
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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
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
        <button onClick={() => setShowForm(true)} className="btn btn-primary btn-block">
          <ChartIcon />
          Log New Reading
        </button>
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
    </div>
  );
};

export default Monitor;