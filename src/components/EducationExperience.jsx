import React, { useState } from 'react';
import './EducationExperience.css';

const EducationExperience = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const [year, month] = dateStr.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const combinedTimeline = [
    ...data.experience.map(exp => ({
      ...exp,
      itemType: 'experience',
      displayDate: exp.endDate ? `${formatDate(exp.startDate)} — ${formatDate(exp.endDate)}` : `${formatDate(exp.startDate)} — Present`
    })),
    {
      itemType: 'education',
      institution: data.profile.education.institution,
      degree: data.profile.education.degree,
      field: data.profile.education.field,
      year: data.profile.education.year,
      displayDate: data.profile.education.year,
      bullets: [
        `${data.profile.education.degree} in ${data.profile.education.field}`,
      ]
    }
  ].sort((a, b) => {
    const parseDate = (dateStr) => {
      if (typeof dateStr === 'number') return dateStr;
      // Handle format like "2024-07" or "Jul 2024"
      if (dateStr.includes('-')) {
        const [year, month] = dateStr.split('-');
        return parseInt(year) * 12 + parseInt(month);
      }
      const monthYear = dateStr.split(' ');
      const monthMap = { 'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12 };
      const month = monthMap[monthYear[0]] || 0;
      const year = parseInt(monthYear[1]) || 0;
      return year * 12 + month;
    };

    const dateA = a.itemType === 'education' ? a.year * 12 : parseDate(a.startDate);
    const dateB = b.itemType === 'education' ? b.year * 12 : parseDate(b.startDate);
    return dateB - dateA;
  });

  return (
    <section className="ee-section">
      <div className="ee-wrap">
        <div className="ee-header">
          <div className="ee-label">
            <span className="ee-accent-line"></span>
            Education & Experience
          </div>
          <h2 className="ee-heading">Professional Timeline</h2>
          <p className="ee-intro">A comprehensive overview of my career journey and educational background.</p>
        </div>

        <div className="ee-timeline">
          {combinedTimeline.map((item, index) => (
            <div 
              key={index}
              className={`ee-item ${item.itemType} ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="ee-dot"></div>
              <div className="ee-content">
                <div className="ee-meta">
                  {item.itemType === 'experience' ? (
                    <>
                      <h3 className="ee-title">{item.company}</h3>
                      <span className="ee-role">{item.role}</span>
                      {item.type === 'Contract' && <span className="ee-badge">{item.type}</span>}
                    </>
                  ) : (
                    <>
                      <h3 className="ee-title">{item.institution}</h3>
                      <span className="ee-role">{item.degree}</span>
                    </>
                  )}
                </div>
                
                <div className="ee-dates">
                  <span>{item.displayDate}</span>
                  {item.itemType === 'experience' && item.location && <span className="ee-location">{item.location}</span>}
                </div>

                {index === activeIndex && (
                  <div className="ee-details">
                    {item.itemType === 'experience' ? (
                      <>
                        <ul className="ee-bullets">
                          {item.bullets.slice(0, 3).map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                        {item.environment && (
                          <div className="ee-tags">
                            {item.environment.map((tech, i) => (
                              <span key={i} className="ee-tag">{tech}</span>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="ee-education-text">
                        {item.degree} in {item.field} — {item.year}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
