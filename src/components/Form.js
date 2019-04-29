import React from 'react';


class Form extends React.Component {

    render() {
        const {handleOnInputChange, value, handleOnButtonClicked} = this.props;

        return (
            <div>
                <input onChange={(event) => handleOnInputChange(event.target.value)} type="text" name="city" placeholder="Город" />
                <button onClick={() => handleOnButtonClicked()} >Получить погоду</button>
                <div>{value}</div>
            </div>
        );
    }
}
export default Form;