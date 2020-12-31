import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
	const { register, handleSubmit, errors } = useForm();
	const auth = useSelector((state) => ({ ...state.auth }));
	const chat = useSelector((state) => ({ ...state.chat }));
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordAgain, setPasswordAgain] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	

	const onUsernameChange = useCallback((e) => setUsername(e.target.value), []);
	const onNameChange = useCallback((e) => setName(e.target.value), []);
	const onEmailChange = useCallback((e) => setEmail(e.target.value), []);
	const onPasswordChange = useCallback((e) => setPassword(e.target.value), []);
	const onPasswordChangeAgain = useCallback(
		(e) => setPasswordAgain(e.target.value),
		[]
  );
  
	const onSubmit = useCallback(
		(e) => {
			if (chat.socket) {
				chat.socket.send(
					JSON.stringify({
						type: "SIGNUP",
						data: {
							email,
              password,
              name,
              username
						},
					})
				);
			}
		},
		[chat.socket, email, name, password, username]
	);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div className="form-wrapper">
						<h3>Signup</h3>
						<form onSubmit={handleSubmit(onSubmit)}>
							<p>
								Already have an account? <Link to="/login">Login</Link>{" "}
							</p>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Name</label>
										<input
											name="name"
											type="text"
											className="form-control"
											placeholder="Name"
											value={name}
											onChange={onNameChange}
											ref={register({ required: true })}
										/>
										<div className="msg">
											{errors.name && "Name is required."}
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Username</label>
										<input
											name="username"
											type="text"
											className="form-control"
											placeholder="Username"
											value={username}
											onChange={onUsernameChange}
											ref={register({ required: true })}
										/>
										<div className="msg">
											{errors.username && "Username is required."}
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Email</label>
										<input
											name="email"
											type="email"
											className="form-control"
											placeholder="Email"
											value={email}
											onChange={onEmailChange}
											ref={register({ required: true })}
										/>
										<div className="msg">
											{errors.email && "Email is required."}
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Password</label>
										<input
											name="password"
											type="password"
											className="form-control"
											placeholder="Password"
											value={password}
											onChange={onPasswordChange}
											ref={register({ required: true })}
										/>
										<div className="msg">
											{errors.password && "Password is required."}
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Password (Again)</label>
										<input
											name="passwordAgain"
											type="password"
											className="form-control"
											placeholder="Password Again"
											value={passwordAgain}
											onChange={onPasswordChangeAgain}
											ref={register({
												required: true,
												validate: (value) => value === password,
											})}
										/>
										<div className="msg">
											{errors.passwordAgain?.type === "required" && (
												<p>Password is required.</p>
											)}
											{errors.passwordAgain?.type === "validate" && (
												<p>Passwords must match</p>
											)}
										</div>
									</div>
								</div>
							</div>
							<div className="text-center">
								<button className="btn btn-primary" type="submit">
									Sign Up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signup;
