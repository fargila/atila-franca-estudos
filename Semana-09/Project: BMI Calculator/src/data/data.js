export const data = [
    {
        category: "Underweight",
        min: 0,
        max: 18.4,
        risk: "Possible nutritional deficiencies and osteoporosis.",
        classification: "Less than 18.5",
        isObese: '0',
        info: "Consider consulting a healthcare provider for advice."
    },
    {
        category: "Normal weight",
        min: 18.5,
        max: 24.9,
        risk: "Low risk of weight-related health issues.",
        classification: "18.5 to 24.9",
        isObese: '0',
        info: "Maintain a balanced diet and regular exercise."
    },
    {
        category: "Overweight",
        min: 25,
        max: 29.9,
        risk: "Increased risk of cardiovascular diseases and type 2 diabetes.",
        classification: "25 to 29.9",
        isObese: '0',
        info: "Consider lifestyle changes to achieve a healthier weight."
    },
    {
        category: "Obesity Class 1",
        min: 30,
        max: 34.9,
        risk: "Higher risk of heart disease, stroke, and diabetes.",
        classification: "30 to 34.9",
        isObese: 'I',
        info: "Seek advice on weight management from a healthcare professional."
    },
    {
        category: "Obesity Class 2",
        min: 35,
        max: 39.9,
        risk: "Significantly increased risk of obesity-related health conditions.",
        classification: "35 to 39.9",
        isObese: 'II',
        info: "Medical intervention may be recommended."
    },
    {
        category: "Obesity Class 3",
        min: 40,
        max: Infinity,
        risk: "Severe risk of multiple health issues, including heart disease and certain cancers.",
        classification: "40 and above",
        isObese: 'III',
        info: "Immediate medical consultation is advised."
    }
];