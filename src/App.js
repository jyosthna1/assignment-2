import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'

class Form extends Component {
  state = {
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    passwordList: [],
    searchValue: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  showPasswordList = () => {
    const {passwordList} = this.state
    const {passwordListLength} = passwordList.length
    console.log(passwordListLength)

    return (
      <div className="no-password-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-password-image"
        />
      </div>
    )
  }

  passwordListContainer = () => {
    const {passwordList, searchValue} = this.state
    const passwordListLength = passwordList.length

    return (
      <div className="search-display-container">
        <div className="search-list-count-container">
          <div className="password-length-container">
            <p className="your-password">Your Passwords</p>
            <button className="password-length" type="button">
              {passwordListLength}
            </button>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              className="browser"
              alt="search"
            />
            <input
              type="text"
              className="search-input"
              placeholder="Enter Website"
              value={searchValue}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <hr className="h-line" />
        <div className="show-passwords-container">
          <input type="checkbox" id="onClick" />
          <label htmlFor="onClick" className="show-checkbox">
            Show Passwords
          </label>
        </div>
        {this.showPasswordList()}
      </div>
    )
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUserNameInput = event => {
    this.setState({userNameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswordList = event => {
    event.preventDefault()

    const {
      websiteInput,
      userNameInput,
      passwordInput,
      passwordList,
    } = this.state

    const newPasswordDetails = {
      id: v4(),
      website: websiteInput,
      userName: userNameInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordDetails],
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
    }))
    console.log(passwordList)
  }

  formContainer = () => {
    const {websiteInput, userNameInput, passwordInput} = this.state

    return (
      <form className="form" onSubmit={this.onAddPasswordList}>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            className="browser"
            alt="website"
          />
          <input
            type="text"
            className="browser-name"
            placeholder="Enter Website"
            value={websiteInput}
            onChange={this.onChangeWebsiteInput}
          />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            className="browser"
            alt="username"
          />
          <input
            type="text"
            className="browser-name"
            placeholder="Enter Username"
            value={userNameInput}
            onChange={this.onChangeUserNameInput}
          />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            className="browser"
            alt="password"
          />
          <input
            type="password"
            className="browser-name"
            placeholder="Enter Password"
            value={passwordInput}
            onChange={this.onChangePasswordInput}
          />
        </div>
        <button className="add-button" type="button">
          Add
        </button>
      </form>
    )
  }

  render() {
    return (
      <div>
        <div className="password-input">
          <div className="password-form">
            <h1 className="heading">Add New Password</h1>
            {this.formContainer()}
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="pass-manger-image"
            alt="password manager"
          />
        </div>
        <div className="password-list-container">
          {this.passwordListContainer()}
        </div>
      </div>
    )
  }
}

const App = () => (
  <div className="password-manager">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="app-logo"
    />
    <Form />
  </div>
)

export default App
