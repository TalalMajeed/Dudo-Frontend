import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import { Dialog, TextField, Button } from '@mui/material';

const Calendar = () => {
    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', startTime: '', endTime: '' });
    const [events, setEvents] = useState([
        { title: 'Event 1', date: '2023-12-01', start: '2023-12-01T10:00:00', end: '2023-12-01T11:00:00' },
        { title: 'Event 2', date: '2023-12-07', start: '2023-12-07T14:00:00', end: '2023-12-07T15:00:00' },
    ]);

    const handleDateClick = (info) => {
        setNewEvent({ title: '', date: info.dateStr, startTime: '', endTime: '' });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const { date, startTime, endTime } = newEvent;
        setEvents([
            ...events,
            {
                title: newEvent.title,
                start: `${date}T${startTime}`,
                end: `${date}T${endTime}`,
            },
        ]);
        setOpen(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={handleDateClick}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                height="auto"
                eventColor="#ff6347"
                dayMaxEvents={true}
            />

            <Dialog open={open} onClose={handleClose}>
                <div style={{ padding: '20px' }}>
                    <h3>Schedule Meeting</h3>
                    <TextField
                        label="Event Title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Date"
                        value={newEvent.date}
                        fullWidth
                        margin="normal"
                        disabled
                    />
                    <TextField
                        label="Start Time"
                        type="time"
                        value={newEvent.startTime}
                        onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="End Time"
                        type="time"
                        value={newEvent.endTime}
                        onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                        fullWidth
                        margin="normal"
                    />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button onClick={handleClose} style={{ marginRight: '10px' }}>Cancel</Button>
                        <Button onClick={handleSave} color="primary" variant="contained">Save</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Calendar;
