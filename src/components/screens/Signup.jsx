
const Signup = () => {
    return (
        <div className="signUpBoxV">
             <div className="rightboxVdetails">
				 <div className="instaVS">
					 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt=""  />
				 </div>
                 <div>
                     <p className="signdetV">Sign up to see photos and videos from your friends.</p>
                 </div>
                 <div className="loginfbVV">
						<img src="https://i.pinimg.com/564x/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7--facebook-icon-negative-feedback.jpg" className="img-fluid rounded" alt="[+]" />
							<div>Login with Facebook</div>
				</div>
               {/* ` <div className="or">
					<div></div>
					<div>OR</div>
					<div></div>
				</div>` */}

					<form>
                    <div className="inputoneV" >
						<input type="text" placeholder="Mobile Number or Email" />
						</div>
                        <div className="inputoneV" >
						<input type="text" placeholder="Full Name" />
						</div>
                        <div className="inputoneV" >
						<input type="text" placeholder="Username" />
						</div>
						<div className="inputoneV" >
						<input type="password" placeholder="Password"  />
						</div>
						<div className="inputoneV" >
						<input type="submit" value="Log In" className="InpButtV"  />
						</div>
					</form>
                <div className="termscondV">
                    <p>By signing up, you agree to our <b>Terms , Data Policy and Cookies Policy .</b></p>
                </div>
				
				<div className="otherMethods">
					
				</div>
				{/* <div className="forget">Forgot Password ?</div> */}
				<div className="forget top">
					<p>Have an account? <b style={{color:"blue"}}>Log In</b></p>
				</div>

			</div>
        </div>
    )
}

export {Signup}