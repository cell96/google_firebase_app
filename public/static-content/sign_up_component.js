class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    );
  }
}

ReactDOM.render(
  <SignUpForm />,
  document.getElementById('sign_up_form')
);
