

import { Link } from "react-router-dom";



const Register = () => {

   

    

   
    
    return (
        <div className="flex ">
           <div className="flex-1"> 
            <form  >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                    </label>
                    <input
                        name="photo"
                        type="text"
                        placeholder="Photo Url"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input
                        name="password"
                        type= 'password'
                        placeholder="password"
                        className="input input-bordered"
                        required
                        autoComplete="current-password"
                        
                    />


                   

                  

                </div>
                <div className="form-control">
                       
                    <label className="label flex justify-start gap-3  cursor-pointer">
                        <input
                            name="terms"
                            type="checkbox" className="checkbox checkbox-primary checkbox-xs" />
                        <span className="label-text">Accept terms & condition</span>
                    </label>
                </div>
             

                <div className="form-control mt-4">
                    <button className="btn btn-primary  text-[16px]">Register</button>
                </div>

                <div>
                    <p className="text-[14px] mt-3">Already Customer ? <Link to="/SignIn"><button className="link link-info font-bold">SignIn</button>
                    </Link></p>
                </div>
                

            </form>
            
            </div>
           <div className="flex-1">
            
             
           </div>
        </div>
    );
};

export default Register;