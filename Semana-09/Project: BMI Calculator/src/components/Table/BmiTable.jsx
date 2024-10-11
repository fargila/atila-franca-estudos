import './BmiTable.css'
import Button from "../Button/Button"

const ImcTable = ({ data, bmi, info, infoClass, resetCalc }) => {
  return (
    <div id='result-container'>
        <p id='bmi-number'>Your Bmi: <span className={infoClass}>{bmi}</span></p>
        <p id='bmi-info'>Situacion: <span className={infoClass}>{info}</span></p>
        <h3 id='bmi-class'>Classifications: <span className={infoClass}>{infoClass}</span></h3>
        <div id="bmi-table">
            <div className="table-header">
                <h4>BMI</h4>
                <h4>Classification</h4>
                <h4>Obesity</h4>
            </div>
            {data.map((item, index) => 
            (
                <div className="table-data" key={index}>
                    <p>{item.classification}</p>
                    <p>{item.info}</p>
                    <p>{item.isObese}</p>
                </div>
            ))}
        </div>
        <Button id='back-btn' text='Go back' action={resetCalc}></Button>
    </div>
  )
}

export default ImcTable
