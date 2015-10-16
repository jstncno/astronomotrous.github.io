let React = require('react');
let mui = require('material-ui');
let AppBar = mui.AppBar;
let LeftNav = mui.LeftNav;
let ThemeManager = new mui.Styles.ThemeManager();
let Colors = mui.Styles.Colors;

let HeaderTitle = require('./header-title.jsx');

let Header = React.createClass({

  getInitialState() {
    return {
      height: "350px"
    };
  },

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

    console.log(this.state.height);

    if(scrollTop > 100) {
      this.setState({
        height: "64px"
      });
    } else {
      this.setState({
        height: "350px"
      });
    }
  },

  toggleMenu() {
    this.refs.leftNav.toggle();
  },

  render() {

    let headerStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0
    }

    let appBarStyle = {
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
              title={<HeaderTitle title="Justin Cano" height={this.state.height} />}
              style={appBarStyle}
              onLeftIconButtonTouchTap={this.toggleMenu} />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
