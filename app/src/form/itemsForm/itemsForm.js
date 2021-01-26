import React, {Component} from 'react';
import './itemsForm.css';

export default class ItemsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reset: false
        }
    }

    onClickReset = () => {
        this.setState({
            reset: true
        }) 
    }

    render () {

        const {reset} = this.state;

        const visibleReset = reset ? console.log('The data are clear') : null ;

        return (
            <React.Fragment>
                <label htmlFor='name' >Имя:</label>
                <br/>
                <input type='text' required id='name'/>
                <br/>
                <label htmlFor='surname'>Фамилия:</label>
                <br />
                <input type='text' required id='surname'/>
                <br />
                <p>Выберите пол:</p>
                <div className="survay">
                    <label>
                        <input 
                            type="radio" 
                            id="male" 
                            name="gender" 
                            defaultChecked />
                            Male
                    </label>
                    <label>
                    <input 
                        type="radio" 
                        id="female" 
                        name="gender"  />
                        Female
                    </label>
                </div>
                <br/>
                    <input 
                        type="submit" 
                        value="Отправить"/>
                    <input 
                        type="reset" 
                        value="Очистить"
                        onClick={this.onClickReset}
                        onChange ={visibleReset}/>
                    <br/>
            </React.Fragment>
        )
    }
}

