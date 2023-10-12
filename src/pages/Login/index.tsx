import React from "react";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Typography from "../../components/Typography/Typography";
import { textVariant } from "../../defs/textVariant";



const Login = () => {
    return (
        <div className="flex h-full flex-col bg-red-50">
            {/* <Navbar /> */}
            <div>
                <div>
                    <Typography variant={textVariant.sectionTitle}>
                        Accedi al tuo profilo
                    </Typography>
                </div>
                <h1>This is the login screen</h1>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}

export default Login