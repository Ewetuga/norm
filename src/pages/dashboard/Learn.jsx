import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Learn.css';

// SVG Icons
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16"/>
    <path d="M4 12h16"/>
    <path d="M4 18h10"/>
    <circle cx="18" cy="18" r="2"/>
    <circle cx="18" cy="12" r="2"/>
    <circle cx="18" cy="6" r="2"/>
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

const PillIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <line x1="9" y1="8" x2="9" y2="16"/>
    <line x1="15" y1="8" x2="15" y2="16"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12 19 5 12 12 5"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

// Article data
const articles = [
  {
    id: 1,
    title: 'What is Hypertension?',
    description: 'Learn the basics of high blood pressure and why it matters for your health.',
    category: 'Basics',
    icon: HeartIcon,
    readTime: '3 min',
    content: `
      <h3>Understanding Hypertension</h3>
      <p>Hypertension, commonly known as high blood pressure, is a condition where the force of blood against your artery walls is consistently too high.</p>
      <p>Blood pressure is measured using two numbers: systolic (top number) and diastolic (bottom number). A normal reading is typically around 120/80 mmHg.</p>
      <h4>Why it matters</h4>
      <p>Untreated hypertension can lead to serious health problems including heart disease, stroke, and kidney damage. The good news is that it can be managed effectively with lifestyle changes and medication.</p>
    `
  },
  {
    id: 2,
    title: 'Understanding Your BP Numbers',
    description: 'What do those numbers mean? A simple guide to systolic and diastolic.',
    category: 'Understanding',
    icon: ChartIcon,
    readTime: '4 min',
    content: `
      <h3>Understanding Your Numbers</h3>
      <p>Your blood pressure reading has two numbers: systolic and diastolic.</p>
      <h4>Systolic (top number)</h4>
      <p>This measures the pressure in your arteries when your heart beats and pumps blood. A healthy systolic number is typically below 120.</p>
      <h4>Diastolic (bottom number)</h4>
      <p>This measures the pressure in your arteries when your heart rests between beats. A healthy diastolic number is typically below 80.</p>
      <p>Knowing what your numbers mean helps you understand your health and communicate better with your doctor.</p>
    `
  },
  {
    id: 3,
    title: 'How to Measure BP Correctly',
    description: 'Get accurate readings with these simple tips for proper measurement.',
    category: 'Monitoring',
    icon: ClockIcon,
    readTime: '5 min',
    content: `
      <h3>How to Measure Blood Pressure Correctly</h3>
      <p>Getting accurate blood pressure readings starts with proper technique.</p>
      <h4>Step 1: Prepare</h4>
      <p>Rest for at least 5 minutes before measuring. Avoid caffeine, exercise, and smoking 30 minutes prior.</p>
      <h4>Step 2: Position</h4>
      <p>Sit with your back supported, feet flat on the floor, and arm supported at heart level.</p>
      <h4>Step 3: Measure</h4>
      <p>Take two or three readings, one minute apart, and record the average.</p>
    `
  },
  {
    id: 4,
    title: 'Understanding Your BP Reading',
    description: 'Learn what different readings mean and when to take action.',
    category: 'Understanding',
    icon: ShieldIcon,
    readTime: '4 min',
    content: `
      <h3>Understanding Your BP Reading</h3>
      <h4>Normal (Less than 120/80)</h4>
      <p>Your blood pressure is within the healthy range. Continue your healthy habits.</p>
      <h4>Elevated (120-129/less than 80)</h4>
      <p>Your blood pressure is higher than normal. Lifestyle changes can help bring it down.</p>
      <h4>Stage 1 Hypertension (130-139/80-89)</h4>
      <p>Your blood pressure is consistently high. Consult your doctor about treatment options.</p>
      <h4>Stage 2 Hypertension (140 or higher/90 or higher)</h4>
      <p>Your blood pressure is severely high. Seek medical attention immediately.</p>
    `
  },
  {
    id: 5,
    title: 'Medication and Hypertension',
    description: 'Understanding the role of medication in managing high blood pressure.',
    category: 'Medication',
    icon: PillIcon,
    readTime: '6 min',
    content: `
      <h3>Medication and Hypertension</h3>
      <p>When lifestyle changes aren't enough, medication can help control your blood pressure.</p>
      <h4>Types of BP Medications</h4>
      <p>Common types include ACE inhibitors, ARBs, Calcium channel blockers, and Diuretics. Your doctor will prescribe the best option for you.</p>
      <h4>Taking Your Medication</h4>
      <p>Take your medication exactly as prescribed. Never stop taking it without consulting your doctor, even if you feel fine.</p>
    `
  },
  {
    id: 6,
    title: 'Lifestyle Changes for BP',
    description: 'Simple daily habits that can help lower your blood pressure naturally.',
    category: 'Lifestyle',
    icon: CheckIcon,
    readTime: '5 min',
    content: `
      <h3>Lifestyle Changes for BP</h3>
      <h4>Eat a Heart-Healthy Diet</h4>
      <p>Focus on fruits, vegetables, whole grains, and lean proteins. Reduce sodium and processed foods.</p>
      <h4>Exercise Regularly</h4>
      <p>Aim for at least 30 minutes of moderate exercise most days of the week.</p>
      <h4>Maintain a Healthy Weight</h4>
      <p>Losing even a small amount of weight can make a significant difference in your blood pressure.</p>
      <h4>Manage Stress</h4>
      <p>Practice relaxation techniques like deep breathing, meditation, or gentle yoga.</p>
    `
  }
];

const categories = ['All', 'Basics', 'Understanding', 'Monitoring', 'Medication', 'Lifestyle'];

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Basics': return <HeartIcon />;
      case 'Understanding': return <ChartIcon />;
      case 'Monitoring': return <ClockIcon />;
      case 'Medication': return <PillIcon />;
      case 'Lifestyle': return <CheckIcon />;
      default: return <BookIcon />;
    }
  };

  return (
    <div className="learn-page">
      {selectedArticle ? (
        // Article Detail View
        <div className="article-detail">
          <button className="back-btn" onClick={() => setSelectedArticle(null)}>
            <ArrowLeftIcon />
            Back to articles
          </button>
          
          <div className="article-header">
            <span className="article-category">{selectedArticle.category}</span>
            <h1>{selectedArticle.title}</h1>
            <div className="article-meta">
              <span className="article-read-time">
                <ClockIcon />
                {selectedArticle.readTime} read
              </span>
            </div>
          </div>
          
          <div className="article-body">
            <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
          </div>
          
          <div className="article-footer">
            <button className="btn btn-primary" onClick={() => setSelectedArticle(null)}>
              <ArrowLeftIcon />
              Back to articles
            </button>
          </div>
        </div>
      ) : (
        // Article List View
        <>
          <div className="learn-header">
            <h1>Learn</h1>
            <p className="text-muted">Educational content to help you understand hypertension</p>
          </div>

          {/* Search */}
          <div className="search-container">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Categories */}
          <div className="categories-scroll">
            <div className="categories-container">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="articles-grid">
            {filteredArticles.length === 0 ? (
              <div className="no-articles">
                <BookIcon />
                <h3>No articles found</h3>
                <p className="text-muted">Try adjusting your search or filter</p>
              </div>
            ) : (
              filteredArticles.map((article) => {
                const IconComponent = article.icon;
                return (
                  <div 
                    key={article.id} 
                    className="article-card"
                    onClick={() => setSelectedArticle(article)}
                  >
                    <div className="article-card-icon">
                      <IconComponent />
                    </div>
                    <div className="article-card-content">
                      <span className="article-card-category">{article.category}</span>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <div className="article-card-footer">
                        <span className="article-card-read-time">
                          <ClockIcon />
                          {article.readTime}
                        </span>
                        <span className="article-card-arrow">
                          <ArrowRightIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Learn;