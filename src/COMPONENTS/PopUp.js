import React from 'react';
import '../HomePage.css';

class PopUp extends React.Component {
    state = {
        showPopUp: true,
        checkBox: true,
    }

    handleCheckboxChange = () => {
        this.setState({
            checkBox: !this.state.checkBox,
        })
    }




    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <div className="pop-up">
                        <form className="form-popup">
                            <div className="inner-pop">
                                <h3 className="pop-header">Welcome to Strain pickers</h3>
                                <h4 className="enter-home">You must be 21+ to enter this website</h4>
                                <input type="checkbox"
                                    name="checkbox"
                                    value="check"
                                    id="agree"
                                    onChange={this.handleCheckboxChange}
                                />
                                <span className="submit-popup">I am at least twenty-one (21) years of age or older.</span>
                                <br></br>

                                <button className="submit-button" onClick={this.props.closePopup} disabled={this.state.checkBox} >Submit</button>
                                <div className="terms-conditions">By selecting 21+ you are indicating that you have read and agree to the Terms and Conditions and Privacy Policy</div>
                            </div>
                        </form>
                    </div>

                </div>
            </div >
        );
    }
}

export default PopUp;