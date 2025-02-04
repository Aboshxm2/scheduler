export default function Scheduler({ schedule }) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    const timesSeries = [9*60, 10*60, 11*60, 9*60, 12*60, 13*60]
    const eventDates = [
        {
            title: "Math",
            day: "Sunday",
            from: 9*60,
            to: 10*60,
        }
    ]


    return (
        <div className="container">
            <div className="table">
                {days.map(d => (
                    <div>{d}</div>
                ))}
                {timesSeries.map(t => (
                    <div>{t}</div>
                ))}
                {[...Array((days.length-1)*(timesSeries.length-1))].map(() => (
                    <div></div>
                ))}
            </div>

            {eventDates.map(e => {
                return (
                    <div></div>
                )
            })}
        </div>
    )
}