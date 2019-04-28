import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <input type="text" name="city" placeholder="Город" />
                <button>Получить погоду</button>
            </div>
        );
    }
}
export default Form;