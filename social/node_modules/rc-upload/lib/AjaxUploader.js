'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uid = require('./uid');

var _uid2 = _interopRequireDefault(_uid);

var AjaxUploader = _react2['default'].createClass({
  displayName: 'AjaxUploader',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    multiple: _react.PropTypes.bool,
    onStart: _react.PropTypes.func,
    data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
    headers: _react.PropTypes.object,
    beforeUpload: _react.PropTypes.func,
    withCredentials: _react.PropTypes.bool
  },

  getInitialState: function getInitialState() {
    return {
      disabled: false,
      uid: (0, _uid2['default'])()
    };
  },

  onChange: function onChange(e) {
    if (this.state.disabled) {
      return;
    }
    this.setState({
      disabled: true
    });
    var files = e.target.files;
    this.uploadFiles(files);
  },

  onClick: function onClick() {
    var el = this.refs.file;
    if (!el) {
      return;
    }
    el.click();
  },

  onKeyDown: function onKeyDown(e) {
    if (e.key === 'Enter') {
      this.onClick();
    }
  },

  onFileDrop: function onFileDrop(e) {
    if (e.type === 'dragover') {
      e.preventDefault();
      return;
    }

    if (this.state.disabled) {
      return;
    }

    var files = e.dataTransfer.files;
    this.uploadFiles(files);

    e.preventDefault();
  },

  uploadFiles: function uploadFiles(files) {
    var postFiles = Array.prototype.slice.call(files);
    if (!this.props.multiple) {
      postFiles = postFiles.slice(0, 1);
    }
    var len = postFiles.length;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        var file = postFiles[i];
        file.uid = (0, _uid2['default'])();
        this.upload(file);
      }
      if (this.props.multiple) {
        this.props.onStart(postFiles);
      } else {
        this.props.onStart(postFiles[0]);
      }
    }
  },

  upload: function upload(file) {
    var _this = this;

    var props = this.props;
    if (!props.beforeUpload) {
      return this.post(file);
    }

    var before = props.beforeUpload(file);
    if (before && before.then) {
      before.then(function (processedFile) {
        if (Object.prototype.toString.call(processedFile) === '[object File]') {
          _this.post(processedFile);
        } else {
          _this.post(file);
        }
      }, function () {
        _this._reset();
      });
    } else if (before !== false) {
      this.post(file);
    } else {
      // fix https://github.com/ant-design/ant-design/issues/1989
      this._reset();
    }
  },

  post: function post(file) {
    var _this2 = this;

    var props = this.props;
    var data = props.data;
    if (typeof data === 'function') {
      data = data(file);
    }

    (0, _request2['default'])({
      action: props.action,
      filename: props.name,
      file: file,
      data: data,
      headers: props.headers,
      withCredentials: props.withCredentials,
      onProgress: function onProgress(e) {
        props.onProgress(e, file);
      },
      onSuccess: function onSuccess(ret) {
        props.onSuccess(ret, file);
        _this2._reset();
      },
      onError: function onError(err, ret) {
        props.onError(err, ret, file);
        _this2._reset();
      }
    });
  },

  _reset: function _reset() {
    this.setState({
      disabled: false,
      uid: (0, _uid2['default'])()
    });
  },

  render: function render() {
    var props = this.props;
    return _react2['default'].createElement(
      'span',
      {
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        role: 'button',
        tabIndex: '0',
        className: this.state.disabled ? this.props.prefixCls + ' ' + props.prefixCls + '-disabled' : '' + this.props.prefixCls
      },
      _react2['default'].createElement('input', {
        type: 'file',
        ref: 'file',
        key: this.state.uid,
        disabled: this.state.disabled,
        style: { display: 'none' },
        accept: props.accept,
        multiple: this.props.multiple,
        onChange: this.onChange
      }),
      props.children
    );
  }
});

exports['default'] = AjaxUploader;
module.exports = exports['default'];