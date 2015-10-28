const React = require('react');
const mui = require('material-ui');
const AppBar = mui.AppBar;
const LeftNav = mui.LeftNav;
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const Colors = mui.Styles.Colors;

const HeaderTitle = require('./header-title.jsx');

const Header = React.createClass({

  getInitialState() {
    return {
      height: 0.9*window.innerHeight + "px"
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll(event) {
    const scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    console.log(this.state.height);

    if(scrollTop > 100) {
      this.setState({
        height: "64px"
      });
    } else {
      this.setState({
        height: 0.9*window.innerHeight + "px"
      });
    }
  },

  toggleMenu() {
    this.refs.leftNav.toggle();
  },

  render() {

    const headerStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0
    }

    const appBarStyle = {
      height : this.state.height
    }

    var header = function() {
      return (
        <Avatar>A</Avatar>
      );
    }

    return (
      <div className="header" style={headerStyle}>
        <div className="row">
          <div className="col-md-12">
            <LeftNav ref="leftNav" docked={false} menuItems={this.props.menuItems} />
            <AppBar
              title={<HeaderTitle height={this.state.height} />}
              style={appBarStyle}
              onLeftIconButtonTouchTap={this.toggleMenu} />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
