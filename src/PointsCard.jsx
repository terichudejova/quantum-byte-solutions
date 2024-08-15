import "./PointsCard.css"

export default function PointsCard({icon, heading, description}) {
    return (
        <div class="card">
            <span>{icon}</span>
            <h2>{heading}</h2>
            <div className="cardLine"></div>
            <p>{description}</p>
        </div>
    )
}
