
const Login = () => {
    return (
 

		<>
			<div id="MainBoxLoginV">
			<div className="rightDetailsBoxV">
				<img src="https://thecybersafetylady.com.au/wp-content/uploads/2018/10/Screen-Shot-2018-10-05-at-2.09.37-pm-600x900.png" alt="[+]" className="leftImageV" />
	 		</div>
			 <div className="rightboxVdetails">
				 <div className="instaV">
					 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt=""  />
				 </div>
					<form>
						<div className="inputoneV" >
						<input type="text" placeholder="Phone Number, Username or Email" />
						</div>
						<div className="inputoneV" >
						<input type="password" placeholder="Password"  />
						</div>
						<div className="inputoneV" >
						<input type="submit" value="Log In" className="InpButtV"  />
						</div>
					</form>
				<div className="or">
					<div></div>
					<div>OR</div>
					<div></div>
				</div>
				<div className="otherMethods">
					<div className="lofFBV">
						<img src="https://i.pinimg.com/564x/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7--facebook-icon-negative-feedback.jpg" className="img-fluid rounded" alt="[+]" />
							<span>Login with Facebook</span>
					</div>
				</div>
				<div className="forget">Forgot Password ?</div>
				<div className="forget top">
					<p>Don't have an account? <b style={{color:"blue"}}>Sign up</b></p>
				</div>

			</div>
		</div>
		
		</>

    )
}

export {Login}