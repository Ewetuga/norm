import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Records.css';

// SVG Icons
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const AddIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const LabIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4"/>
    <path d="M12 18v4"/>
    <path d="M4 12h4"/>
    <path d="M16 12h4"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const DeleteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
);

const PDFIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <path d="M8 13h8"/>
    <path d="M8 17h5"/>
  </svg>
);

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="16" y2="17"/>
  </svg>
);

const SheetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="16" y2="17"/>
    <line x1="8" y1="15" x2="16" y2="15"/>
  </svg>
);

const RecordsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16"/>
    <path d="M4 12h10"/>
    <path d="M4 18h6"/>
    <circle cx="18" cy="18" r="2"/>
    <circle cx="18" cy="12" r="2"/>
  </svg>
);

const Records = () => {
  const [showAddRecord, setShowAddRecord] = useState(false);
  const [showLabTest, setShowLabTest] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [records, setRecords] = useState([
    {
      id: 1,
      title: 'Blood Test Results',
      category: 'Lab results',
      date: '2026-08-20',
      notes: 'Complete blood count - all normal',
      file: 'blood_test.pdf',
      type: 'lab'
    },
    {
      id: 2,
      title: 'ECG Report',
      category: 'ECG',
      date: '2026-08-15',
      notes: 'Normal sinus rhythm',
      file: 'ecg_report.pdf',
      type: 'ecg'
    },
    {
      id: 3,
      title: 'Chest X-Ray',
      category: 'Imaging',
      date: '2026-08-10',
      notes: 'No abnormalities detected',
      file: 'chest_xray.jpg',
      type: 'imaging'
    },
    {
      id: 4,
      title: 'Prescription - Amlodipine',
      category: 'Prescription',
      date: '2026-08-05',
      notes: '5mg once daily',
      file: 'prescription.pdf',
      type: 'prescription'
    }
  ]);

  const [labTestForm, setLabTestForm] = useState({
    title: '',
    category: 'Lab results',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    file: null
  });

  const [recordForm, setRecordForm] = useState({
    title: '',
    category: 'Other',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    file: null
  });

  const categories = ['Lab results', 'ECG', 'Imaging', 'Prescription', "Doctor's report", 'Other'];

  const handleLabTestChange = (e) => {
    if (e.target.type === 'file') {
      setLabTestForm({ ...labTestForm, file: e.target.files[0] });
    } else {
      setLabTestForm({ ...labTestForm, [e.target.name]: e.target.value });
    }
  };

  const handleRecordChange = (e) => {
    if (e.target.type === 'file') {
      setRecordForm({ ...recordForm, file: e.target.files[0] });
    } else {
      setRecordForm({ ...recordForm, [e.target.name]: e.target.value });
    }
  };

  const handleLabTestSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: records.length + 1,
      title: labTestForm.title,
      category: labTestForm.category,
      date: labTestForm.date,
      notes: labTestForm.notes,
      file: labTestForm.file ? labTestForm.file.name : 'No file',
      type: 'lab'
    };
    setRecords([newRecord, ...records]);
    setShowLabTest(false);
    setLabTestForm({
      title: '',
      category: 'Lab results',
      date: new Date().toISOString().split('T')[0],
      notes: '',
      file: null
    });
  };

  const handleRecordSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: records.length + 1,
      title: recordForm.title,
      category: recordForm.category,
      date: recordForm.date,
      notes: recordForm.notes,
      file: recordForm.file ? recordForm.file.name : 'No file',
      type: 'other'
    };
    setRecords([newRecord, ...records]);
    setShowAddRecord(false);
    setRecordForm({
      title: '',
      category: 'Other',
      date: new Date().toISOString().split('T')[0],
      notes: '',
      file: null
    });
  };

  const handleDeleteRecord = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      setRecords(records.filter(record => record.id !== id));
    }
  };

  const getFileIcon = (file) => {
    if (!file) return <FileIcon />;
    const ext = file.split('.').pop().toLowerCase();
    if (['pdf'].includes(ext)) return <PDFIcon />;
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return <ImageIcon />;
    if (['doc', 'docx'].includes(ext)) return <DocIcon />;
    if (['xls', 'xlsx'].includes(ext)) return <SheetIcon />;
    return <FileIcon />;
  };

  const filteredRecords = activeTab === 'all' 
    ? records 
    : records.filter(r => r.category.toLowerCase() === activeTab);

  return (
    <div className="records-page">
      <div className="records-header">
        <h1>Health Records</h1>
        <p className="text-muted">Manage your health documents and lab results</p>
      </div>

      {/* Quick Actions */}
      <div className="records-actions">
        <button className="btn btn-primary" onClick={() => setShowLabTest(true)}>
          <span className="btn-icon"><LabIcon /></span>
          Add Lab Test
        </button>
        <button className="btn btn-outline" onClick={() => setShowAddRecord(true)}>
          <span className="btn-icon"><FileIcon /></span>
          Upload Document
        </button>
      </div>

      {/* Category Tabs */}
      <div className="records-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            className={`tab-btn ${activeTab === cat.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveTab(cat.toLowerCase())}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Records List */}
      <div className="records-list">
        {filteredRecords.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <RecordsIcon />
            </div>
            <h3>No records found</h3>
            <p className="text-muted">Upload your health documents or add lab results</p>
          </div>
        ) : (
          filteredRecords.map(record => (
            <div key={record.id} className="record-item">
              <div className="record-item-left">
                <div className="record-item-icon">
                  {getFileIcon(record.file)}
                </div>
                <div className="record-item-info">
                  <h4>{record.title}</h4>
                  <span className="record-item-category">{record.category}</span>
                  <span className="record-item-date">{record.date}</span>
                </div>
              </div>
              <div className="record-item-right">
                {record.notes && (
                  <p className="record-item-notes">{record.notes}</p>
                )}
                <div className="record-item-actions">
                  <button className="btn-icon-only" title="Download">
                    <DownloadIcon />
                  </button>
                  <button 
                    className="btn-icon-only delete" 
                    title="Delete"
                    onClick={() => handleDeleteRecord(record.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Lab Test Modal */}
      {showLabTest && (
        <div className="modal-overlay" onClick={() => setShowLabTest(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add Lab Test</h2>
              <button className="modal-close" onClick={() => setShowLabTest(false)}>
                <CloseIcon />
              </button>
            </div>
            
            <form onSubmit={handleLabTestSubmit} className="record-form">
              <div className="form-group">
                <label htmlFor="lab-title">Test Name</label>
                <input
                  type="text"
                  id="lab-title"
                  name="title"
                  className="form-control"
                  placeholder="e.g., Complete Blood Count"
                  value={labTestForm.title}
                  onChange={handleLabTestChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lab-category">Category</label>
                <select
                  id="lab-category"
                  name="category"
                  className="form-control"
                  value={labTestForm.category}
                  onChange={handleLabTestChange}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="lab-date">Date</label>
                  <input
                    type="date"
                    id="lab-date"
                    name="date"
                    className="form-control"
                    value={labTestForm.date}
                    onChange={handleLabTestChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="lab-notes">Notes</label>
                <textarea
                  id="lab-notes"
                  name="notes"
                  className="form-control"
                  placeholder="Any notes about the test results..."
                  value={labTestForm.notes}
                  onChange={handleLabTestChange}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lab-file">Upload File (optional)</label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="lab-file"
                    name="file"
                    className="file-input"
                    onChange={handleLabTestChange}
                  />
                  <label htmlFor="lab-file" className="file-upload-label">
                    <span className="file-upload-icon"><UploadIcon /></span>
                    <span className="file-upload-text">
                      {labTestForm.file ? labTestForm.file.name : 'Click to upload or drag and drop'}
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowLabTest(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Lab Test
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Record Modal */}
      {showAddRecord && (
        <div className="modal-overlay" onClick={() => setShowAddRecord(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Upload Document</h2>
              <button className="modal-close" onClick={() => setShowAddRecord(false)}>
                <CloseIcon />
              </button>
            </div>
            
            <form onSubmit={handleRecordSubmit} className="record-form">
              <div className="form-group">
                <label htmlFor="record-title">Document Title</label>
                <input
                  type="text"
                  id="record-title"
                  name="title"
                  className="form-control"
                  placeholder="e.g., Lab Report - August 2026"
                  value={recordForm.title}
                  onChange={handleRecordChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="record-category">Category</label>
                <select
                  id="record-category"
                  name="category"
                  className="form-control"
                  value={recordForm.category}
                  onChange={handleRecordChange}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="record-date">Date</label>
                  <input
                    type="date"
                    id="record-date"
                    name="date"
                    className="form-control"
                    value={recordForm.date}
                    onChange={handleRecordChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="record-notes">Notes</label>
                <textarea
                  id="record-notes"
                  name="notes"
                  className="form-control"
                  placeholder="Any notes about this document..."
                  value={recordForm.notes}
                  onChange={handleRecordChange}
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="record-file">Upload File</label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="record-file"
                    name="file"
                    className="file-input"
                    onChange={handleRecordChange}
                    required
                  />
                  <label htmlFor="record-file" className="file-upload-label">
                    <span className="file-upload-icon"><UploadIcon /></span>
                    <span className="file-upload-text">
                      {recordForm.file ? recordForm.file.name : 'Click to upload or drag and drop'}
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowAddRecord(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Upload Document
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Records;