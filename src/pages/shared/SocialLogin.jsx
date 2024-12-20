import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const { loginWithGoogle } = useAuth();
    const handler = () => {
        loginWithGoogle()
    }
    return (
        <div>
            <button onClick={handler} className="btn btn-success"> Login with Google</button>
        </div>
    );
};

export default SocialLogin;