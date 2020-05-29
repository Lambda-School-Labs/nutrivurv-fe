import React from "react";
import { ReactComponent as LandingImage }from "../../assets/Splash.svg"
import Marketing from '../Marketing/marketing';

const LandingPage = () => {
    return (
        <div>
            <Marketing/>
            <h1>Tracking your calories just got easier.</h1>
            <p>Connect with friends, earn badges and crush your goals.</p>
            <button>Sign In</button>
            <button>Sign Up</button>
            <LandingImage />

        </div>
    );

};

export default LandingPage;