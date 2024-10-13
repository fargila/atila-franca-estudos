import './Thanks.css'
import React, {ReactElement} from 'react'
import 
{ 
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

interface ThanksProps {
    data:
    {
        name: string,
        review: string,
        comment: string
    }
}

interface emojis
{
    unsatisfied: ReactElement,
    neutral: ReactElement,
    satisfied: ReactElement,
    very_satisfied: ReactElement
}

const emojiData: emojis = 
{
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>
}

const Thanks: React.FC<ThanksProps> = ({ data }) => 
{
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
            {emojiData[data.review as keyof typeof emojiData]}
        </p>
        <p className="review-data">
            <span>Comment:</span>
            {data.comment}
        </p>
    </div>
  )
}

export default Thanks
