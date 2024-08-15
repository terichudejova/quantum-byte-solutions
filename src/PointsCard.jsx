import "./PointsCard.css"

export default function PointsCard({heading, description}) {
    return (
        <div class="card">
            <h2>{heading}</h2>
            <div className="cardLine"></div>
            <p>{description}</p>
        </div>
    )
}
