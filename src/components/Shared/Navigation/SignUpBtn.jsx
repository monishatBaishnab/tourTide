import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignUpBtn = () => {
    return (
        <Link to='/signup'><Button className="bg-primary !font-normal py-2 !capitalize text-base shadow-none hover:shadow-none">Sign up</Button></Link>
    );
};

export default SignUpBtn;