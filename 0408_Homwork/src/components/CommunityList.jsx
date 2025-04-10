import React from 'react';

function CommunityList({ items, highlight, showType, showLanguage }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="border p-3 rounded-xl shadow-sm hover:shadow-md transition">
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-lg">
            {highlight ? (
              <span>
                {item.name.split(new RegExp(`(${highlight})`, 'gi')).map((part, i) =>
                  part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part
                )}
              </span>
            ) : (
              item.name
            )}
          </a>
          <div className="text-sm text-gray-600 mt-1">
            {showType && <span>유형: {item.type}</span>} {showLanguage && <span className="ml-2"> / 언어: {item.language}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommunityList;
