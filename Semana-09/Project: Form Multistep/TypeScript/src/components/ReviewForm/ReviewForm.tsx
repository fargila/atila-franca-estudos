import 
{ 
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

import './ReviewForm.css'
import React from 'react'

interface reviewFormProps
{
    data: 
    {
        review: string,
        comment: string
    }
    updateFieldHandler: (a: string, e:string) => void
}

const ReviewForm: React.FC<reviewFormProps> = ({ data, updateFieldHandler }) => 
{
  return (
    <div className="review-form">
        <div className="form-control score-container">
            <label className="radio-container">
                <input type="radio" value='unsatisfied' name="review" required checked={data.review === 'unsatisfied'}
                onChange={(e) => updateFieldHandler('review', e.target.value)}/>
                <BsFillEmojiFrownFill/>
                <p>Unsatisfied</p>
            </label>
            <label className="radio-container">
                <input type="radio" value='neutral' name="review" required checked={data.review === 'neutral'}
                onChange={(e) => updateFieldHandler('review', e.target.value)}/>
                <BsFillEmojiNeutralFill/>
                <p>Neutral</p>
            </label>
            <label className="radio-container">
                <input type="radio" value='satisfied' name="review" required checked={data.review === 'satisfied'}
                onChange={(e) => updateFieldHandler('review', e.target.value)}/>
                <BsFillEmojiSmileFill/>
                <p>Satisfied</p>
            </label>
            <label className="radio-container">
                <input type="radio" value='very_satisfied' name="review" required checked={data.review === 'very_satisfied'}
                onChange={(e) => updateFieldHandler('review', e.target.value)}/>
                <BsFillEmojiHeartEyesFill/>
                <p>Very satisfied</p>
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="comment">Comment: </label>
            <textarea name="comment" id="comment" value={data.comment || ''}
            placeholder='Tell us more about your experience:'
            onChange={(e) => updateFieldHandler('comment', e.target.value)}></textarea>
        </div>
    </div>
  )
}

export default ReviewForm
