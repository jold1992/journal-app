import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
        <div 
            className="journal__entry-picture"
            style={{ 
                backgroundSize: 'cover',
                backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5eee94533a3cfc6d99c242d9/1592700425278-0RT4GRO7E1XHJDQN0L5M/2.jpg?format=500w)'
            }}
        ></div>

        <div className="journal__entry-body">
            <p className="journal__entry-title">
                Un nuevo día
            </p>
            <p className="journal__entry-content">
                Lorem ipsum dolor sit amet, consectetur adip
            </p>
        </div> 

        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>               
    </div>
  )
}
