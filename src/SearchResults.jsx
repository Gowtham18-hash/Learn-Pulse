import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import './index.css';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/ALL.json')
      .then(r => r.json())
      .then(data => {
        const combined = [
          ...(data.IT || []).map(c => ({ ...c, category: 'IT' })),
          ...(data['NON-IT'] || []).map(c => ({ ...c, category: 'NON-IT' })),
          ...(data.INTERVIEW || []).map(c => ({ ...c, category: 'INTERVIEW' })),
          ...(data.LANGUAGES || []).map(c => ({ ...c, category: 'LANGUAGES' })),
          ...(data.COLLAB || []).map(c => ({ ...c, category: 'COLLAB' })),
        ];
        setAllCourses(combined);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading courses:', err);
        setLoading(false);
      });
  }, []);

  const filteredCourses = allCourses.filter(course =>
    course.name.toLowerCase().includes(keyword.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container">
        <h2>🔍 Searching...</h2>
        <p>Loading courses...</p>
      </div>
    );
  }
  return (
    <div className="container" style={{ display: 'inline-block' }}>
      <h1>🔍 Search Results for "{keyword}"</h1>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>
        {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
      </p>

      <div id="group" >
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseDetails
              key={`${course.category}-${course.id}`}
              name={course.name}
              price={course.price}
              image={course.image1}
              id={course.id}
              category={course.category}
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '50px' }}>
            <h2>No courses found matching "{keyword}"</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
