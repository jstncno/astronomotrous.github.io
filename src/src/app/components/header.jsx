let React = require('react');
let mui = require('material-ui');
let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let Header = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    });
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll(event) {
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

      this.setState({
        transform: itemTranslate
      });
  },

  toggleMenu() {
    this.refs.leftNav.toggle();
  },

  render() {

    return (
      <div className="header">
        <LeftNav ref="leftNav" docked={false} menuItems={this.props.menuItems} />
        <AppBar
          title="Justin Cano"
          onLeftIconButtonTouchTap={this.toggleMenu} />
      </div>
    );
  }

});

module.exports = Header;
