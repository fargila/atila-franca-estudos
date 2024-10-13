import './Thanks.css'
import 
{ 
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>
}

const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
        <h2>Almost there...</h2>
        <p>Hey {data.name}! You seen to be a loyal customer and we care for that, 
        so much so that, soon enough, you be getting a 10% cupom discount at your next pruchase!</p>
        <p>Thanks for sticking with us!</p>

        <p>To finish your review, click the button below.</p>
        <h3>Here is a summory of your review:</h3>
        <p className="review-data">
            <span>Product satisfaction:</span>
            {emojiData[data.review]}
        </p>
        <p className="review-data">
            <span>Comment:</span>
            {data.comment}
        </p>
    </div>
  )
}

export default Thanks
