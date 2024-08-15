import "./ServiceCard.css"

export default function ServiceCard({serviceTitle, serviceDescription}) {
    return (

    <div class="serviceCard">
        <div class="card-inner">
            <div class="card-front">
                <div className="serviceTitle-container">
                    <p>{serviceTitle}</p>
                </div>
            </div>
            <div class="card-back">
                <p>{serviceTitle}</p>
                <p>{serviceDescription}</p>
            </div>
        </div>
    </div>

    )
}





/* From Uiverse.io by vamsidevendrakumar */ 