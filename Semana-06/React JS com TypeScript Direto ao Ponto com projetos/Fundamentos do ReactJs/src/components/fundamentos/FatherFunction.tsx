import SonFunction from "./SonFunction"

const FatherFunction = () => {
    const handleChildClick = () => {
        console.log('Clickastes no meu filhinho!')
    }

    return <><SonFunction onChildClick={handleChildClick}/></>
}

export default FatherFunction