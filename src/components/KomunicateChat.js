import React from 'react'

class KomunicateChat extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        (function (d, m) {
            var kommunicateSettings = { "appId": "112084ab0a0dd40f5c85596c39b5ff37a", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default KomunicateChat