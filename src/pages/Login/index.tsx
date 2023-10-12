import React from "react";
import Footer from "../../components/Footer/Footer";
import Typography from "../../components/Typography/Typography";
import { textVariant } from "../../defs/textVariant";



const Login = () => {
    return (
        <div className="flex h-full flex-col">
            {/* <Navbar /> */}
            <div>
                <div className="bg-bg-dark text-light">
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