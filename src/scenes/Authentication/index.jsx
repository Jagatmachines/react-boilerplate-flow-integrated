import * as React from 'react';
import type { AuthenticationProps, Values } from './types';
import { Form, Field } from 'react-final-form';
import withAuthentication from './withAuthenticationHOC';

class Authenticaiton extends React.Component<AuthenticationProps> {
  onSubmit = (values: Values) => {
    this.props
      .loginAuthentication(values.username, values.password)
      .then(token => {
        this.props.addNotificationToken(token || '');
        this.props.history.push('/dashboard');
      });
  };

  validate = (values: Values) => {
    let errors: Values = {};

    if (!values.username) {
      errors.username = 'Enter valid username';
    }

    if (!values.password) {
      errors.password = 'Enter valid password';
    }

    return errors;
  };

  render() {
    const loginRole = 'login';
    const loginLeftRole = 'login-left';
    const loginRightRole = 'login-right';

    return (
      <main role={loginRole}>
        <section role={loginLeftRole}>
          <div className="login-box">
            <figure>
              <img src='' alt="SiteLogo" />
            </figure>
            <div className="login-form">
              <Form
                onSubmit={this.onSubmit}
                validate={this.validate}
                render={({ handleSubmit, pristine, invalid }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="username"
                      render={({ input, meta }) => (
                        <fieldset>
                          <legend>Login</legend>
                          <div className="input-wrap user">
                            <input {...input} placeholder="user" />
                          </div>
                          {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                        </fieldset>
                      )}
                    />
                    <Field
                      name="password"
                      render={({ input, meta }) => (
                        <fieldset>
                          <legend>Password</legend>
                          <div className="input-wrap password">
                            <input {...input} type="password" placeholder="******" />
                            <div className="view-password">
                              <i className="melo-icon melo-icon-password-view" />
                            </div>
                          </div>
                          {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                        </fieldset>
                      )}
                    />
                    <button type="submit" className="btn-login" disabled={pristine || invalid}>
                      Login
                    </button>
                  </form>
                )}
              />
            </div>
          </div>
        </section>
        <section role={loginRightRole} />
      </main>
    );
  }
}

export default withAuthentication(Authenticaiton);
