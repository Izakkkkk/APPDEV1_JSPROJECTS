import  propTypes from 'prop-types'
export default function Body (props){
    return(
        <div className="person">
            <img src="https://placeholder.pics/svg/150x150" alt="person-logo" className="person-picture"/>
            <p>This is <strong>{props.name}`</strong>
            favorite food:</p>
            <p>{(props.food).toUpperCase()}
            </p>
            <p>Is it healthy? {props.isHealthy? "Yes" : "No"}</p>
            <p><strong>{props.name}</strong> is {props.age} years old!</p>
        </div>
    )
}
Body.defaultProps={
    name:"Guest",
    food:"Unknown",
    isHealthy:false,
    age: 0
}

Body.propTypes = {
    name: propTypes.string,
    food: propTypes.string,
    isHealthy: propTypes.bool,
    age: propTypes.number
}