'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visability = function (_React$Component) {
  _inherits(Visability, _React$Component);

  function Visability(props) {
    _classCallCheck(this, Visability);

    var _this = _possibleConstructorReturn(this, (Visability.__proto__ || Object.getPrototypeOf(Visability)).call(this, props));

    _this.state = {
      visible: false
    };
    _this.handlerToggle = _this.handlerToggle.bind(_this);
    return _this;
  }

  _createClass(Visability, [{
    key: 'handlerToggle',
    value: function handlerToggle() {
      this.setState(function (prevState) {
        return { visible: !prevState.visible };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visability'
        ),
        React.createElement(
          'button',
          { onClick: this.handlerToggle },
          this.state.visible ? 'Hide info' : 'Show additional info'
        ),
        this.state.visible && React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            'Additional info'
          )
        )
      );
    }
  }]);

  return Visability;
}(React.Component);

ReactDOM.render(React.createElement(Visability, null), document.getElementById('app'));

// let visible = false;

// const onVisible = () => {
//   visible = !visible;
//   render();
// }

// const render = () => {

//   const template = (
//     <div>
//       <h1>Visibility</h1>
//       <button onClick={onVisible}>{visible ? 'Hide info' : 'Show more info'}</button>
//       {visible && <p>Here is more info!!</p> }
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById('app'));
// }

// render();
