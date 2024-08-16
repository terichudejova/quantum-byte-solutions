
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import "./ReviewCard.css"

export default function ReviewCard({company, review, reviewer}) {
    return (
        <div className="reviewContainer">
            <FormatQuoteIcon className='quote' />
            <h3>{company}</h3>
            <div className="reviewLine"></div>
            <p>{review}</p>
            <div className='stars'>
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
                <StarIcon className='star' />
            </div>
            <p className='reviewer'>– {reviewer}</p>
        </div>
    )
}