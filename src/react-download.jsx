import React, { Component } from 'react';
import PropTypes from 'proptypes';

export default class Download extends Component {
  static PropTypes = {
    file: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  };

  state = {};

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  downloadFile(fileName, fileContent) {
    function fake_click(obj) {
      let ev = document.createEvent('MouseEvents');
      ev.initMouseEvent(
        'click',
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      obj.dispatchEvent(ev);
    }
    function export_raw(name, data) {
      let urlObject = window.URL || window.webkitURL || window;
      let export_blob = new Blob([data]);
      let save_link = document.createElementNS(
        'http://www.w3.org/1999/xhtml',
        'a'
      );
      save_link.href = urlObject.createObjectURL(export_blob);
      save_link.download = name;
      fake_click(save_link);
    }
    export_raw(fileName, fileContent);
  }

  render() {
    const { children, file, content, style, className } = this.props;

    return (
      <div
        className={
          'react-download-container' + (className ? ' ' + className : '')
        }
        onClick={() => this.downloadFile(file, content)}
        style={style}
      >
        {children}
      </div>
    );
  }
}
