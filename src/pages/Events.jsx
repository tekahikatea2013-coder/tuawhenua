import './Events.css'

const upcomingEvents = [
  { title: 'Hunting bird predators at Kaimai Range', date: 'Sat 15 Aug' },
  { title: 'Feeding birds', date: 'Sun 30 Aug' },
]

export default function Events() {
  return (
    <div className="events">
      <h1>Events</h1>
      {upcomingEvents.map((event) => (
        <div className="event-item" key={event.title}>
          <h3>{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  )
}