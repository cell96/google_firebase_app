class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', error: ''};

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log("clicked signed in");
    const email = this.state.email;
    const pass = this.state.password;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => {
      console.log(e.message);
      this.setState({error: e.message});
     });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        //TODO: Fix error message - conditional rendering
        <div className="alert alert-warning" role="alert">
          {this.state.error}
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="form-control" placeholder="Enter Email" value={this.state.email} onChange={this.handleChangeEmail} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="form-control" placeholder="Enter Password" value={this.state.password} onChange={this.handleChangePassword} />
          </div>
        </form>
        <button id="signin" className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Sign in</button>
      </div>
    );
  }
}

ReactDOM.render(
  <SignInForm />,
  document.getElementById('sign_in_form')
);
