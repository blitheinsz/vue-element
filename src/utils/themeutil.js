var themeControl = {
    originalStylesheetCount: -1,
    originalStyle: '',
    getStyleTemplate (data) {
        const colorMap = {
            '#20a0ff': 'primary',
            '#0190fe': 'secondary',
            '#fbfdff': 'darkWhite',
            '#1f2d3d': 'baseBlack',
            '#324157': 'lightBlack',
            '#48576a': 'extraLightBlack',
            '#8391a5': 'baseSilver',
            '#97a8be': 'lightSilver',
            '#bfcbd9': 'extraLightSilver',
            '#d1dbe5': 'baseGray',
            '#e4e8f1': 'lightGray',
            '#eef1f6': 'extraLightGray',
            '#1d90e6': 'buttonActive',
            '#4db3ff': 'buttonHover',
            '#dfe6ec': 'tableBorder',
            '#d2ecff': 'datepickerInRange',
            '#afddff': 'datepickerInRangeHover',
            '#1c8de0': 'selectOptionSelected',
            '#edf7ff': 'lightBackground'
        };
        Object.keys(colorMap).forEach(key => {
            const value = colorMap[key];
            data = data.replace(new RegExp(key, 'ig'), value);
        });
        return data;
    },
    getFile (url, isBlob = false) {
        return new Promise((resolve, reject) => {
            const client = new XMLHttpRequest();
            client.responseType = isBlob ? 'blob' : '';
            client.onreadystatechange = () => {
                if (client.readyState !== 4) {
                    return;
                }
                if (client.status === 200) {
                    const urlArr = client.responseURL.split('/');
                    resolve({
                        data: client.response,
                        url: urlArr[urlArr.length - 1]
                    });
                } else {
                    reject(new Error(client.statusText));
                }
            };
            client.open('GET', url);
            client.send();
        });
    },

    getIndexStyle () {
        this.getFile('//unpkg.com/element-ui/lib/theme-default/index.css')
          .then(({ data }) => {
              this.originalStyle = this.getStyleTemplate(data);
              // console.log(this.originalStyle)
          });
    }
};
export default themeControl;
