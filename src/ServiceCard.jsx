import "./ServiceCard.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ServiceCard({icon, serviceTitle, serviceDescriptionFront, serviceDescriptionBack}) {
    return (

    <div class="serviceCard">
        <div className="circleIcon">
            {icon}
        </div>
        <div class="card-inner">
            <div class="card-front">
                    <div>
                        <p>{serviceTitle}</p>
                        <p>{serviceDescriptionFront}</p>
                    </div>
                    <KeyboardArrowDownIcon sx={{fontSize: "5rem"}} />
            </div>
            <div class="card-back">
                <p>{serviceDescriptionBack}</p>
            </div>
        </div>
    </div>

    )
}





/* From Uiverse.io by vamsidevendrakumar */ 