  // make these general/factory functions that can take in any value

  function toggleDropdownMenu(e) {
    this.setState({
      [e.target.id]: !this.state[e.target.id]
    });
  }

  function handleDropDownChange(e) {
    let keyName = e.target.getAttribute('keyName');
    let dropDown = e.target.getAttribute('list');
    this.setState({
      [keyName]: e.target.innerHTML,
      [dropDown]: !this.state[dropDown]
    });
  }

  function handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  export { toggleDropdownMenu, handleDropDownChange, handleInputChange };