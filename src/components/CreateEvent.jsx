import React, { useState } from 'react';
import './CreateEvent.css';

const occasions = [
    'Birthday',
    'Wedding',
    'Anniversary',
    'Conference',
    'Festival',
    'Other',
];

function EventForm() {
    const [eventName, setEventName] = useState('');
    const [occasion, setOccasion] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!eventName || !occasion || !dateTime) {
            setError('Please fill out all required fields (Event Name, Occasion, Date & Time).');
            return;
        }

        // Simulate API call
        setSuccess(`Event "${eventName}" created successfully for ${occasion}!`);

        


    return (
        <div className="event-form-container">
            <form onSubmit={handleSubmit} className="event-form">
                <h2>Create New Event</h2>

                <label>
                    Event Name<span className="required">*</span>:
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Enter event name"
                        required
                    />
                </label>

                <label>
                    Occasion<span className="required">*</span>:
                    <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                    >
                        <option value="">Select occasion</option>
                        {occasions.map((occ) => (
                            <option key={occ} value={occ}>
                                {occ}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Date<span className="required">*</span>:
                    <input
                        type="date"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Location:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Additional details..."
                    />
                </label>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}

                <button type="submit">Create Event</button>
            </form>
        </div>
    );
}

export default EventForm;
